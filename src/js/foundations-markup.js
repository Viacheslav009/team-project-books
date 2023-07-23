export const FoundationItem = ({ title, url, img, img2 }, position) =>
  `<div class="foundation--list__item swiper--slide">
<p class="foundation--position">${position}</p>
<a class="foundation--link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
<img
  srcset="${img} 1x, ${img2} 2x"
  src="${img}"
  alt="${title}"
  width="149"
  loading="lazy"
/>
</a>
</div>`;
