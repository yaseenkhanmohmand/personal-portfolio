"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";

/**
 * A screenshot thumbnail that follows the cursor while a project row is
 * hovered. Desktop / hover-capable pointers only (hidden below lg). Movement
 * is driven directly on the DOM node via rAF lerp — no re-render per frame.
 */
export default function FloatingPreview({ product }: { product: Product | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  // Keep the last non-null product mounted so it can fade out gracefully.
  const [shown, setShown] = useState<Product | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (product) {
      setShown(product);
      setImgError(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;

    let primed = false;
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!primed) {
        pos.current = { ...target.current };
        primed = true;
      }
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x + 28}px, ${
          pos.current.y - 100
        }px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [product]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-40 hidden w-80 overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/10 transition-opacity duration-300 lg:block ${
        product ? "opacity-100" : "opacity-0"
      }`}
    >
      {shown &&
        (imgError ? (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-sand to-line px-4">
            <span className="font-display text-xl text-muted">{shown.name}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/screenshots/${shown.slug}.png`}
            alt=""
            className="aspect-[16/10] w-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ))}
    </div>
  );
}
