/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background:
          radial-gradient(circle at 12% 8%, rgba(234, 223, 189, 0.16), transparent 11rem),
          linear-gradient(180deg, #ffffff 0%, #f8f9f8 54%, #f4f6f5 100%);
      }

      #theme-heo {
        --yuezhao-ink: #171a18;
        --yuezhao-muted: #707876;
        --yuezhao-line: rgba(23, 29, 27, 0.09);
        --yuezhao-line-strong: rgba(23, 29, 27, 0.16);
        --yuezhao-card: rgba(255, 255, 255, 0.88);
        --yuezhao-moon: #eadfbd;
        --yuezhao-moon-core: #f4ead0;
        --yuezhao-pine: #31433f;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      #theme-heo #nav.bg-white,
      #theme-heo #category-bar,
      #theme-heo .card,
      #theme-heo .yuezhao-recommend-card {
        border-color: var(--yuezhao-line);
        box-shadow: 0 16px 42px rgba(18, 24, 22, 0.055);
      }

      #theme-heo .yuezhao-hero-banner {
        background:
          linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 38%, rgba(255, 255, 255, 0) 72%),
          url('/images/yuezhao/home-hero-bg-v1.png') center 42% / cover no-repeat;
        border-color: var(--yuezhao-line);
        box-shadow: 0 18px 48px rgba(18, 24, 22, 0.06);
      }

      #theme-heo .yuezhao-hero-banner::before {
        content: none;
      }

      #theme-heo .yuezhao-post-header-bg {
        background:
          radial-gradient(circle at 68% 10%, rgba(234, 223, 189, 0.2) 0 4.2rem, rgba(234, 223, 189, 0.08) 4.3rem 7.8rem, transparent 7.9rem),
          linear-gradient(180deg, #ffffff 0%, #fbfcfb 58%, #f7f9fe 100%);
      }

      #theme-heo .yuezhao-post-header-bg::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(ellipse at 100% 98%, rgba(92, 104, 101, 0.2) 0%, rgba(154, 163, 159, 0.1) 22%, transparent 48%),
          radial-gradient(ellipse at 86% 96%, rgba(92, 104, 101, 0.14) 0%, rgba(154, 163, 159, 0.08) 21%, transparent 47%),
          radial-gradient(ellipse at 18% 100%, rgba(154, 163, 159, 0.1) 0%, transparent 36%);
        opacity: 0.72;
      }

      #theme-heo .yuezhao-post-header-bg::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(247, 249, 254, 0.56) 86%, #f7f9fe 100%),
          linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.22) 42%, rgba(255, 255, 255, 0.04) 100%);
      }

      #theme-heo .yuezhao-post-header #post-cover-wrapper {
        mix-blend-mode: multiply;
      }

      #theme-heo .yuezhao-post-header .waves-area {
        opacity: 0.45;
      }

      #theme-heo .yuezhao-banner-cover {
        background:
          radial-gradient(circle at 78% 24%, rgba(234, 223, 189, 0.22), transparent 10rem),
          linear-gradient(135deg, rgba(23, 26, 24, 0.92), rgba(49, 67, 63, 0.86));
        color: #fff;
      }

      #theme-heo .yuezhao-banner-cover svg {
        color: rgba(234, 223, 189, 0.72);
        stroke: currentColor;
      }

      #theme-heo .yuezhao-hero-menu-item {
        color: var(--yuezhao-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 249, 0.88));
        border: 1px solid var(--yuezhao-line);
        box-shadow: 0 12px 30px rgba(18, 24, 22, 0.052);
      }

      #theme-heo .yuezhao-hero-menu-item:hover {
        border-color: var(--yuezhao-line-strong);
        background:
          radial-gradient(circle at 88% 30%, rgba(234, 223, 189, 0.16), transparent 5rem),
          linear-gradient(135deg, #ffffff, rgba(248, 250, 249, 0.94));
      }

      #theme-heo .yuezhao-hero-menu-item span {
        background: var(--yuezhao-moon);
      }

      #theme-heo .yuezhao-moon-phase {
        width: 2.35rem;
        height: 2.35rem;
        border-radius: 999px;
        filter: drop-shadow(0 0 14px rgba(234, 223, 189, 0.36));
      }

      #theme-heo .yuezhao-moon-new {
        background:
          radial-gradient(circle at 72% 50%, #fff 0 45%, transparent 46%),
          radial-gradient(circle at 50% 50%, var(--yuezhao-moon) 0 64%, transparent 65%);
      }

      #theme-heo .yuezhao-moon-half {
        border: 1px solid rgba(212, 175, 94, 0.32);
        background:
          linear-gradient(90deg, var(--yuezhao-moon) 0 50%, rgba(255, 255, 255, 0.1) 51%),
          radial-gradient(circle at 55% 52%, var(--yuezhao-moon-core), rgba(234, 223, 189, 0.18));
      }

      #theme-heo .yuezhao-moon-full {
        background:
          radial-gradient(circle at 33% 28%, rgba(255, 255, 255, 0.86) 0 10%, transparent 11%),
          radial-gradient(circle at 55% 52%, var(--yuezhao-moon-core) 0, var(--yuezhao-moon) 72%, rgba(234, 223, 189, 0.12) 100%);
      }

      #theme-heo .yuezhao-category-item {
        position: relative;
        background: transparent !important;
      }

      #theme-heo .yuezhao-category-item::after {
        content: '';
        position: absolute;
        left: 0.5rem;
        right: 0.5rem;
        bottom: -0.38rem;
        height: 1px;
        background: var(--yuezhao-ink);
        opacity: 0;
        transform: scaleX(0.55);
        transition: 180ms ease;
      }

      #theme-heo .yuezhao-category-item:hover::after,
      #theme-heo .yuezhao-category-item.is-selected::after {
        opacity: 0.5;
        transform: scaleX(1);
      }

      #theme-heo .yuezhao-recommend-card {
        border: 1px solid var(--yuezhao-line);
      }

      #theme-heo .yuezhao-info-card {
        background:
          radial-gradient(circle at 88% 10%, rgba(234, 223, 189, 0.28), transparent 4.8rem),
          linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 249, 0.9));
        border-color: var(--yuezhao-line);
        box-shadow: 0 18px 48px rgba(18, 24, 22, 0.06);
      }

      #theme-heo .yuezhao-info-card #announcement-content .notion,
      #theme-heo .yuezhao-info-card #announcement-content {
        color: var(--yuezhao-muted) !important;
      }

      #theme-heo .hover\\:border-indigo-600:hover,
      #theme-heo .hover\\:border-blue-600:hover,
      #theme-heo .border-indigo-500 {
        border-color: var(--yuezhao-pine) !important;
      }

      #theme-heo .hover\\:text-indigo-600:hover,
      #theme-heo .hover\\:text-indigo-400:hover,
      #theme-heo .hover\\:text-indigo-700:hover,
      #theme-heo .hover\\:text-blue-600:hover,
      #theme-heo .hover\\:text-blue-500:hover,
      #theme-heo .group:hover .group-hover\\:text-indigo-600,
      #theme-heo .group:hover .group-hover\\:text-indigo-700,
      #theme-heo .group:hover .group-hover\\:text-indigo-400 {
        color: var(--yuezhao-pine) !important;
      }

      #theme-heo .text-indigo-600,
      #theme-heo .text-indigo-500,
      #theme-heo .text-blue-600,
      #theme-heo .text-blue-500 {
        color: var(--yuezhao-pine) !important;
      }

      #theme-heo .hover\\:bg-indigo-600:hover,
      #theme-heo .group:hover .group-hover\\:bg-indigo-600,
      #theme-heo .hover\\:bg-blue-600:hover,
      #theme-heo .hover\\:bg-blue-500:hover,
      #theme-heo .bg-indigo-600,
      #theme-heo .bg-indigo-500,
      #theme-heo .bg-blue-600,
      #theme-heo .bg-blue-500 {
        background-color: var(--yuezhao-pine) !important;
      }

      #theme-heo .focus\\:ring-blue-500:focus,
      #theme-heo .focus\\:ring-indigo-500:focus {
        --tw-ring-color: rgba(49, 67, 63, 0.34) !important;
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      @media (max-width: 1279px) {
        #theme-heo #hero {
          display: block;
          overflow-x: hidden;
          max-width: 100%;
        }

        #theme-heo #bannerGroup {
          width: 100%;
          max-width: none;
          margin-right: 0;
        }

        #theme-heo .yuezhao-hero-menu {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        #theme-heo .yuezhao-hero-menu-item {
          width: 100%;
          min-width: 0;
        }

        #theme-heo #hero-right-wrapper {
          width: 100%;
          min-width: 0;
        }

        #theme-heo #top-group {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          padding-bottom: 0.25rem;
        }

        #theme-heo .yuezhao-recommend-card {
          width: 100%;
          min-width: 0;
        }

        #theme-heo #top-group > a {
          display: block;
          min-width: 0;
        }
      }

      @media (max-width: 639px) {
        #theme-heo .yuezhao-hero-menu,
        #theme-heo #top-group {
          grid-template-columns: 1fr;
        }

        #theme-heo #hero-wrapper,
        #theme-heo #post-outer-wrapper {
          overflow-x: hidden;
        }
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
