/**
 * @file ImageSlide.jsx
 * @description Enable image slide feature.
 * @author Fovir
 * @date 2025-09-05
 */

"use client";

import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/**
 * @description How to use:
 * In markdown file, write:
 *    <div class="image-slide">
 *      <img src="URL" />
 *      <img src="URL" />
 *      <img src="URL" />
 *    </div>
 * then add the component to where markdown is rendered.
 */
export default function ImageSlide() {
  useEffect(() => {
    const root = document;

    const enhance = () => {
      const containers = root.querySelectorAll(
        ".image-slide:not([data-enhanced])",
      );
      containers.forEach((container) => {
        const imgs = Array.from(container.querySelectorAll("img"));
        if (!imgs.length) return;

        container.setAttribute("data-enhanced", "true");

        const swiperEl = document.createElement("div");
        swiperEl.className = "swiper";
        const wrapper = document.createElement("div");
        wrapper.className = "swiper-wrapper";

        imgs.forEach((img) => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";
          img.style.width = "100%";
          img.style.display = "block";
          slide.appendChild(img);
          wrapper.appendChild(slide);
        });

        const prev = document.createElement("div");
        prev.className = "swiper-button-prev";
        const next = document.createElement("div");
        next.className = "swiper-button-next";

        swiperEl.appendChild(wrapper);
        swiperEl.appendChild(prev);
        swiperEl.appendChild(next);

        container.innerHTML = "";
        container.appendChild(swiperEl);

        new Swiper(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: { nextEl: next, prevEl: prev },
          loop: false,
        });
      });
    };

    enhance();

    const raf = requestAnimationFrame(enhance);

    const mo = new MutationObserver(enhance);
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return null;
}
