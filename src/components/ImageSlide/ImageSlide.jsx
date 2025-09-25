/**
 * @file ImageSlide.jsx
 * @description Enable image slide feature.
 * @author Fovir
 * @since 2025-09-08
 */

"use client";

import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/**
 * Component of image slide, which turns a group of images to slide form.
 *
 * @example
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
          slide.style.display = "flex";
          slide.style.alignItems = "center";
          slide.style.justifyContent = "center";
          slide.style.height = "480px";
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.display = "block";
          img.style.objectFit = "contain";
          img.loading = "lazy";
          slide.appendChild(img);
          wrapper.appendChild(slide);
        });

        const prev = document.createElement("div");
        prev.className = "swiper-button-prev";

        const next = document.createElement("div");
        next.className = "swiper-button-next";

        const pagination = document.createElement("div");
        pagination.style.position = "static";
        pagination.style.marginTop = "8px";
        pagination.className = "swiper-pagination";

        swiperEl.appendChild(wrapper);
        swiperEl.appendChild(prev);
        swiperEl.appendChild(next);
        swiperEl.appendChild(pagination);

        container.innerHTML = "";
        container.appendChild(swiperEl);

        new Swiper(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: { nextEl: next, prevEl: prev },
          pagination: { el: pagination, type: "fraction" },
          loop: true,
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
