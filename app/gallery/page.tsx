"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface Chicken {
  id: number;
  title: string;
  age: string;
  weight: string;
  src: string;
}

const chickens: Chicken[] = [
  {
    id: 1,
    title: "DOC",
    age: "1 day",
    weight: "0.2–0.3 kg",
    src: "/chickens/doc.jpg",
  },
  {
    id: 2,
    title: "Chick",
    age: "4 weeks",
    weight: "0.4–0.5 kg",
    src: "/chickens/chick.jpg",
  },
  {
    id: 3,
    title: "Chick",
    age: "5 weeks",
    weight: "0.5–0.6 kg",
    src: "/chickens/chick-2.jpg",
  },
  {
    id: 4,
    title: "Grower",
    age: "10 weeks",
    weight: "0.9–1.0 kg",
    src: "/chickens/chick-3.jpg",
  },
  {
    id: 5,
    title: "Breder-Male",
    age: "24 weeks",
    weight: "2.0–2.5 kg",
    src: "/chickens/jantan.jpg",
  },
  {
    id: 6,
    title: "Breeder-Female",
    age: "24 weeks",
    weight: "2.0–2.5 kg",
    src: "/chickens/betina.jpg",
  },
];

export default function GalleryPage() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openPreview = (index: number) => {
    const el = cardRefs.current[index];
    if (el) setOriginRect(el.getBoundingClientRect());
    setIsClosing(false);
    setPreviewIndex(index);
  };

  const closePreview = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setPreviewIndex(null);
      setOriginRect(null);
    }, 300);
  }, []);

  const goPrev = useCallback(
    () =>
      setPreviewIndex((i) =>
        i !== null ? (i - 1 + chickens.length) % chickens.length : null,
      ),
    [],
  );

  const goNext = useCallback(
    () =>
      setPreviewIndex((i) => (i !== null ? (i + 1) % chickens.length : null)),
    [],
  );

  useEffect(() => {
    if (previewIndex === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [previewIndex, goPrev, goNext, closePreview]);

  useEffect(() => {
    document.body.style.overflow = previewIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewIndex]);

  const onTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const d = e.changedTouches[0].clientX - touchStartX;
    if (d < -50) goNext();
    else if (d > 50) goPrev();
    setTouchStartX(null);
  };

  const originStyle = (): React.CSSProperties => {
    if (!originRect) return {};
    return {
      transformOrigin: `${originRect.left + originRect.width / 2}px ${originRect.top + originRect.height / 2}px`,
    };
  };

  const current = previewIndex !== null ? chickens[previewIndex] : null;
  const visible = previewIndex !== null || isClosing;

  return (
    <>
      <style>{`
        @keyframes lbFadeIn    { from{opacity:0}              to{opacity:1}              }
        @keyframes lbFadeOut   { from{opacity:1}              to{opacity:0}              }
        @keyframes lbZoomIn    { from{opacity:0;transform:scale(0.06)} to{opacity:1;transform:scale(1)} }
        @keyframes lbZoomOut   { from{opacity:1;transform:scale(1)}   to{opacity:0;transform:scale(0.06)} }
        @keyframes lbSlideDown { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lbSlideUp   { from{opacity:0;transform:translateY(14px)}  to{opacity:1;transform:translateY(0)} }

        .lb-bg            { animation: lbFadeIn  .25s ease forwards }
        .lb-bg.closing    { animation: lbFadeOut .25s ease forwards }
        .lb-img           { animation: lbZoomIn  .32s cubic-bezier(.22,1,.36,1) forwards }
        .lb-img.closing   { animation: lbZoomOut .26s cubic-bezier(.55,0,1,.45) forwards }
        .lb-top           { animation: lbSlideDown .22s ease .04s both }
        .lb-top.closing   { animation: lbFadeOut .18s ease forwards }
        .lb-bot           { animation: lbSlideUp .22s ease .06s both }
        .lb-bot.closing   { animation: lbFadeOut .18s ease forwards }

        .card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .2s }
        .card:active { transform: scale(.94) }
        .no-sb::-webkit-scrollbar { display:none }
        .no-sb { -ms-overflow-style:none; scrollbar-width:none }
      `}</style>

      {/* ── Gallery ── */}
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">
              Abadi Farm
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Our Chickens
            </h1>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              All birds are fully vaccinated and raised in professional
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {chickens.map((chicken, index) => (
              <div
                key={chicken.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => openPreview(index)}
                className="card cursor-pointer bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:shadow-sm"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={chicken.src}
                    alt={chicken.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/farm-logo.png";
                    }}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {chicken.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-0.5">
                    Age: {chicken.age}
                  </p>
                  <p className="text-xs text-gray-400">
                    Weight: {chicken.weight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Lightbox ── */}
      {visible && current && (
        <div
          className={`lb-bg${isClosing ? " closing" : ""} fixed inset-0 z-50 flex flex-col`}
          style={{ background: "rgba(0,0,0,0.93)" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close button row */}
          <div
            className={`lb-top${isClosing ? " closing" : ""} flex items-center justify-between px-4 py-3 flex-shrink-0`}
          >
            <span className="text-gray-500 text-xs">
              {previewIndex !== null ? previewIndex + 1 : ""} /{" "}
              {chickens.length}
            </span>
            <button
              type="button"
              onClick={closePreview}
              aria-label="Close"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white text-sm transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Image + title centered above it */}
          <div className="flex-1 flex items-center justify-center relative min-h-0 px-12">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white text-2xl leading-none transition-colors"
            >
              ‹
            </button>

            <div
              className={`lb-img${isClosing ? " closing" : ""} flex flex-col items-center gap-2`}
              style={originStyle()}
            >
              {/* Title centered just above the image */}
              <div className="text-center">
                <p className="text-white font-semibold text-base leading-tight">
                  {current.title}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {current.age} · {current.weight}
                </p>
              </div>

              <img
                key={current.src + String(previewIndex)}
                src={current.src}
                alt={current.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                style={{ maxHeight: "calc(100dvh - 220px)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/farm-logo.png";
                }}
              />
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="absolute right-2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white text-2xl leading-none transition-colors"
            >
              ›
            </button>
          </div>

          {/* Bottom */}
          <div
            className={`lb-bot${isClosing ? " closing" : ""} flex-shrink-0 pb-6 pt-3 px-4`}
          >
            {/* Dots */}
            <div className="flex justify-center gap-1.5 mb-3">
              {chickens.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPreviewIndex(i)}
                  aria-label={`Go to ${chickens[i].title}`}
                  style={{
                    width: i === previewIndex ? 20 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background:
                      i === previewIndex ? "#f97316" : "rgba(255,255,255,0.3)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition:
                      "width .25s cubic-bezier(.22,1,.36,1), background .2s",
                  }}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center overflow-x-auto no-sb">
              {chickens.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setPreviewIndex(i)}
                  aria-label={`View ${c.title}`}
                  style={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: `2px solid ${i === previewIndex ? "#f97316" : "transparent"}`,
                    padding: 0,
                    cursor: "pointer",
                    opacity: i === previewIndex ? 1 : 0.4,
                    transform: i === previewIndex ? "scale(1.12)" : "scale(1)",
                    transition:
                      "transform .25s cubic-bezier(.22,1,.36,1), opacity .2s, border-color .2s",
                  }}
                >
                  <img
                    src={c.src}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/farm-logo.png";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
