import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Newspaper,
  RefreshCw,
} from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface NewsItem {
  title: string;
  link: string;
  date: string;       // já formatada para exibição
  rawDate: Date;      // para ordenação / filtragem
  excerpt: string;
  image: string;
  source: "folhadovale" | "alertabahia";
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function stripHtml(html: string, max = 160): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function formatDate(raw: string): string {
  try {
    return new Date(raw).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return raw;
  }
}

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

async function fetchFolhaDoVale(): Promise<NewsItem[]> {
  const after = daysAgo(7).toISOString();
  // Chamada direta para funcionar em produção no Cloudflare
  const url = `https://folhadovale.net/wp-json/wp/v2/posts?per_page=50&_embed=1&after=${encodeURIComponent(after)}&orderby=date&order=desc`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`FDV HTTP ${res.status}`);

  const posts = (await res.json()) as {
    title: { rendered: string };
    link: string;
    date: string;
    excerpt: { rendered: string };
    _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
  }[];

  return posts.map((p) => {
    const imgArr = p._embedded?.["wp:featuredmedia"];
    const img = (imgArr && imgArr[0]?.source_url) ? imgArr[0].source_url : "";
    return {
      title: stripHtml(p.title.rendered, 200),
      link: p.link,
      date: formatDate(p.date),
      rawDate: new Date(p.date),
      excerpt: stripHtml(p.excerpt.rendered),
      image: img,
      source: "folhadovale" as const,
    };
  });
}

async function fetchAlertaBahia(): Promise<NewsItem[]> {
  const after = daysAgo(7).toISOString();
  // Chamada direta para funcionar em produção no Cloudflare
  const url = `https://alertabahia.com.br/wp-json/wp/v2/posts?per_page=30&_embed=1&after=${encodeURIComponent(after)}&orderby=date&order=desc`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`AB HTTP ${res.status}`);

  const posts = (await res.json()) as {
    title: { rendered: string };
    link: string;
    date: string;
    excerpt: { rendered: string };
    _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
  }[];

  return posts.map((p) => {
    const imgArr = p._embedded?.["wp:featuredmedia"];
    const img = (imgArr && imgArr[0]?.source_url) ? imgArr[0].source_url : "";
    return {
      title: stripHtml(p.title.rendered, 200),
      link: p.link,
      date: formatDate(p.date),
      rawDate: new Date(p.date),
      excerpt: stripHtml(p.excerpt.rendered),
      image: img,
      source: "alertabahia" as const,
    };
  });
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80";

const SOURCE_META = {
  folhadovale: { label: "Folha do Vale", url: "https://folhadovale.net", emoji: "" },
  alertabahia: { label: "Alerta Bahia", url: "https://alertabahia.com.br", emoji: "" },
} as const;

// Largura do card + gap em px (deve bater com o CSS abaixo)
const CARD_W = 320;
const CARD_GAP = 20;

// ─── Componente ───────────────────────────────────────────────────────────────

export default function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Partial<Record<"folhadovale" | "alertabahia", boolean>>>({});
  const [filter, setFilter] = useState<"all" | "folhadovale" | "alertabahia">("all");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  // ── Carrega notícias ───────────────────────────────────────────────────────

  async function load() {
    setLoading(true);
    setErrors({});

    const errs: Partial<Record<"folhadovale" | "alertabahia", boolean>> = {};
    const results: NewsItem[] = [];
    const cutoff = daysAgo(7);

    await Promise.allSettled([
      fetchFolhaDoVale()
        .then((r) => {
          const filtered = r.filter((n) => n.rawDate >= cutoff);
          results.push(...filtered);
        })
        .catch(() => { errs.folhadovale = true; }),

      fetchAlertaBahia()
        .then((r) => results.push(...r))
        .catch(() => { errs.alertabahia = true; }),
    ]);

    // Ordena por data decrescente e remove duplicatas por link
    const seen = new Set<string>();
    const unique = results
      .sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime())
      .filter((n) => {
        if (seen.has(n.link)) return false;
        seen.add(n.link);
        return true;
      });

    setErrors(errs);
    setItems(unique);
    setLoading(false);
  }

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Atualiza estado das setas ──────────────────────────────────────────────

  function updateArrows() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [items, filter]);

  // ── Scroll por seta ────────────────────────────────────────────────────────

  function scroll(dir: "prev" | "next") {
    const el = trackRef.current;
    if (!el) return;
    const step = (CARD_W + CARD_GAP) * 3; // avança ~3 cards por clique
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  }

  // ── Itens filtrados ────────────────────────────────────────────────────────

  const visible = filter === "all" ? items : items.filter((i) => i.source === filter);

  // Reseta scroll ao mudar filtro
  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
    setTimeout(updateArrows, 50);
  }, [filter]);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section
      id="noticias"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#0D1A10 0%,#091409 100%)" }}
    >
      {/* Glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle,rgba(214,175,69,.12) 0%,transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle,rgba(34,64,42,.6) 0%,transparent 70%)" }}
      />

      <div className="container relative mx-auto px-6">

        {/* ── Cabeçalho ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(214,175,69,.1)",
                color: "#D6AF45",
                border: "1px solid rgba(214,175,69,.2)",
              }}
            >
              <Newspaper size={13} />
              Últimas notícias da região
            </span>

            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", lineHeight: 1.15 }}
            >
              Fique por dentro do que{" "}
              <br className="hidden md:block" />
              <span className="text-gold-gradient">acontece na Bahia</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#8A9E90", maxWidth: 420 }}>
              Notícias em tempo real direto das principais fontes locais.
            </p>
          </div>

          <button
            onClick={load}
            disabled={loading}
            className="group self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
            style={{ border: "1px solid rgba(214,175,69,.3)", color: "#F0D37B", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(214,175,69,.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <RefreshCw
              size={14}
              className={loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}
            />
            Atualizar
          </button>
        </div>

        {/* ── Filtros ────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {(["all", "folhadovale", "alertabahia"] as const).map((f) => {
            const label = f === "all" ? "Todos" : SOURCE_META[f].label;
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200"
                style={
                  active
                    ? { background: "#D6AF45", color: "#000", border: "1px solid #D6AF45" }
                    : {
                        background: "rgba(214,175,69,.06)",
                        color: "#8A9E90",
                        border: "1px solid rgba(214,175,69,.15)",
                      }
                }
              >
                {f !== "all" && `${SOURCE_META[f].emoji} `}
                {label}
              </button>
            );
          })}

          {!loading && visible.length > 0 && (
            <span className="ml-auto text-xs font-semibold" style={{ color: "#4A5E50" }}>
              {visible.length} notícia{visible.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* ── Alertas de fonte com erro ──────────────────────────────────── */}
        {Object.keys(errors).length > 0 && !loading && (
          <div className="mb-6 flex flex-wrap gap-3">
            {(Object.keys(errors) as ("folhadovale" | "alertabahia")[]).map((src) => (
              <div
                key={src}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: "rgba(200,80,80,.1)",
                  color: "#f87171",
                  border: "1px solid rgba(200,80,80,.2)",
                }}
              >
                ⚠️ {SOURCE_META[src].label} indisponível no momento
              </div>
            ))}
          </div>
        )}

        {/* ── Skeleton ──────────────────────────────────────────────────── */}
        {loading && (
          <div className="flex gap-5 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl flex-shrink-0"
                style={{
                  width: CARD_W,
                  height: 370,
                  background: "#132317",
                  border: "1px solid rgba(214,175,69,.08)",
                }}
              />
            ))}
          </div>
        )}

        {/* ── Carrossel ─────────────────────────────────────────────────── */}
        {!loading && visible.length > 0 && (
          <div className="relative">
            {/* Seta esquerda */}
            <button
              onClick={() => scroll("prev")}
              disabled={!canPrev}
              aria-label="Notícias anteriores"
              className="absolute left-0 top-1/2 z-10 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                transform: "translate(-50%, -50%)",
                width: 44,
                height: 44,
                background: canPrev ? "#D6AF45" : "rgba(214,175,69,.12)",
                border: "1px solid rgba(214,175,69,.3)",
                color: canPrev ? "#000" : "rgba(214,175,69,.3)",
                cursor: canPrev ? "pointer" : "default",
                boxShadow: canPrev ? "0 4px 20px rgba(214,175,69,.3)" : "none",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Track com overflow oculto */}
            <div
              ref={trackRef}
              className="flex gap-5 overflow-x-auto pb-2"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onScroll={updateArrows}
            >
              {visible.map((item, i) => {
                const meta = SOURCE_META[item.source];
                return (
                  <a
                    key={`${item.source}-${item.link}-${i}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#D6AF45] focus:ring-offset-2 focus:ring-offset-[#0D1A10]"
                    style={{
                      width: CARD_W,
                      scrollSnapAlign: "start",
                      background: "#132317",
                      border: "1px solid rgba(214,175,69,.12)",
                      boxShadow: "0 8px 32px rgba(0,0,0,.28)",
                    }}
                    aria-label={`Ler: ${item.title}`}
                  >
                    {/* Imagem */}
                    <div className="relative overflow-hidden flex-shrink-0" style={{ height: 180 }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image || PLACEHOLDER})` }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom,transparent 40%,rgba(19,35,23,.98))" }}
                      />
                      {/* Badge fonte */}
                      <span
                        className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          background: "rgba(0,0,0,.7)",
                          color: "#F0D37B",
                          border: "1px solid rgba(214,175,69,.25)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {meta.emoji} {meta.label}
                      </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Calendar size={11} style={{ color: "#D6AF45" }} />
                        <span className="text-[11px] font-semibold" style={{ color: "#4A5E50" }}>
                          {item.date}
                        </span>
                      </div>

                      <h3
                        className="font-heading font-bold text-[16px] leading-snug mb-2 line-clamp-3 transition-colors duration-300 group-hover:text-[#F0D37B]"
                        style={{ color: "#fff" }}
                      >
                        {item.title}
                      </h3>

                      {item.excerpt && (
                        <p
                          className="text-[12px] leading-relaxed line-clamp-2 flex-1 mb-4"
                          style={{ color: "#4A5E50" }}
                        >
                          {item.excerpt}
                        </p>
                      )}

                      <div
                        className="mt-auto pt-3 flex items-center justify-between border-t"
                        style={{ borderColor: "rgba(255,255,255,.05)" }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-[#F0D37B]"
                          style={{ color: "#D6AF45" }}
                        >
                          Ler mais
                        </span>
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#D6AF45]"
                          style={{ background: "rgba(214,175,69,.1)" }}
                        >
                          <ExternalLink
                            size={12}
                            className="text-[#D6AF45] group-hover:text-black transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Seta direita */}
            <button
              onClick={() => scroll("next")}
              disabled={!canNext}
              aria-label="Próximas notícias"
              className="absolute right-0 top-1/2 z-10 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                transform: "translate(50%, -50%)",
                width: 44,
                height: 44,
                background: canNext ? "#D6AF45" : "rgba(214,175,69,.12)",
                border: "1px solid rgba(214,175,69,.3)",
                color: canNext ? "#000" : "rgba(214,175,69,.3)",
                cursor: canNext ? "pointer" : "default",
                boxShadow: canNext ? "0 4px 20px rgba(214,175,69,.3)" : "none",
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollbar oculta no webkit */}
            <style>{`.news-track::-webkit-scrollbar{display:none}`}</style>
          </div>
        )}

        {/* ── Vazio ─────────────────────────────────────────────────────── */}
        {!loading && visible.length === 0 && (
          <div
            className="text-center py-16 rounded-2xl"
            style={{ background: "#132317", border: "1px solid rgba(214,175,69,.1)" }}
          >
            <p className="text-sm mb-4" style={{ color: "#4A5E50" }}>
              Nenhuma notícia encontrada nos últimos 7 dias.
            </p>
            <button
              onClick={load}
              className="px-6 py-2.5 rounded-xl text-sm font-bold"
              style={{ background: "#D6AF45", color: "#000" }}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* ── Links para os portais ────────────────────────────────────── */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {(Object.entries(SOURCE_META) as [
            keyof typeof SOURCE_META,
            (typeof SOURCE_META)[keyof typeof SOURCE_META],
          ][]).map(([key, meta]) => (
            <a
              key={key}
              href={meta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
              style={{
                border: "1px solid rgba(214,175,69,.2)",
                color: "#8A9E90",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(214,175,69,.5)";
                e.currentTarget.style.color = "#F0D37B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(214,175,69,.2)";
                e.currentTarget.style.color = "#8A9E90";
              }}
            >
              {meta.emoji} Ver {meta.label}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
