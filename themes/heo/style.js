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
        --yuezhao-card-strong: rgba(255, 255, 255, 0.96);
        --yuezhao-card-soft: rgba(248, 250, 249, 0.88);
        --yuezhao-moon: #eadfbd;
        --yuezhao-moon-core: #f4ead0;
        --yuezhao-pine: #31433f;
      }

      html.dark #theme-heo {
        --yuezhao-ink: rgba(248, 247, 242, 0.94);
        --yuezhao-muted: rgba(232, 229, 220, 0.68);
        --yuezhao-line: rgba(234, 223, 189, 0.12);
        --yuezhao-line-strong: rgba(234, 223, 189, 0.22);
        --yuezhao-card: rgba(31, 31, 33, 0.86);
        --yuezhao-card-strong: rgba(38, 38, 40, 0.92);
        --yuezhao-card-soft: rgba(24, 23, 29, 0.9);
        --yuezhao-moon: #eadfbd;
        --yuezhao-moon-core: #f4ead0;
        --yuezhao-pine: #eadfbd;
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
        -webkit-mask-image: none;
        mask-image: none;
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

      html.dark #theme-heo .yuezhao-hero-banner {
        background:
          linear-gradient(90deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0) 72%),
          url('/images/yuezhao/home-hero-bg-v1.png') center 42% / cover no-repeat;
        border-color: var(--yuezhao-line);
        box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
      }

      html.dark #theme-heo .yuezhao-hero-banner #banner-title .text-4xl {
        color: #171a18 !important;
      }

      html.dark #theme-heo .yuezhao-hero-banner #banner-title .text-xs {
        color: #707876 !important;
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

      html.dark #theme-heo .yuezhao-post-header-bg {
        background:
          radial-gradient(ellipse at 18% 2%, rgba(234, 223, 189, 0.08), transparent 16rem),
          linear-gradient(180deg, #171718 0%, #1c1c1e 56%, #18171d 100%);
      }

      html.dark #theme-heo .yuezhao-post-header-bg::before {
        background:
          radial-gradient(ellipse at 100% 98%, rgba(234, 223, 189, 0.1) 0%, rgba(154, 163, 159, 0.07) 22%, transparent 50%),
          radial-gradient(ellipse at 86% 96%, rgba(92, 104, 101, 0.2) 0%, rgba(154, 163, 159, 0.08) 21%, transparent 48%),
          radial-gradient(ellipse at 18% 100%, rgba(154, 163, 159, 0.09) 0%, transparent 38%);
        opacity: 0.86;
      }

      html.dark #theme-heo .yuezhao-post-header-bg::after {
        background:
          linear-gradient(180deg, rgba(24, 23, 29, 0) 0%, rgba(24, 23, 29, 0.5) 84%, #18171d 100%),
          linear-gradient(90deg, rgba(24, 23, 29, 0.72) 0%, rgba(24, 23, 29, 0.2) 44%, rgba(24, 23, 29, 0.04) 100%);
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
        position: relative;
        color: var(--yuezhao-ink);
        background:
          linear-gradient(90deg, var(--yuezhao-card-strong) 0%, var(--yuezhao-card) 44%, rgba(255, 255, 255, 0.2) 73%, rgba(255, 255, 255, 0.02) 100%),
          var(--yuezhao-entry-bg-image) var(--yuezhao-entry-bg-position, center center) / var(--yuezhao-entry-bg-size, cover) no-repeat,
          linear-gradient(135deg, var(--yuezhao-card-strong), var(--yuezhao-card-soft));
        border: 1px solid var(--yuezhao-line);
        box-shadow: 0 12px 30px rgba(18, 24, 22, 0.052);
      }

      #theme-heo .yuezhao-hero-menu-item::before {
        content: none;
      }

      #theme-heo .yuezhao-hero-menu-item::after {
        content: none;
      }

      #theme-heo .yuezhao-hero-menu-item:hover {
        border-color: var(--yuezhao-line-strong);
        background:
          radial-gradient(circle at 88% 30%, rgba(234, 223, 189, 0.16), transparent 5rem),
          linear-gradient(90deg, var(--yuezhao-card-strong) 0%, var(--yuezhao-card) 44%, rgba(255, 255, 255, 0.18) 73%, rgba(255, 255, 255, 0.02) 100%),
          var(--yuezhao-entry-bg-image) var(--yuezhao-entry-bg-position, center center) / var(--yuezhao-entry-bg-size, cover) no-repeat,
          linear-gradient(135deg, var(--yuezhao-card-strong), var(--yuezhao-card-soft));
      }

      html.dark #theme-heo .yuezhao-hero-menu-item {
        background:
          linear-gradient(90deg, rgba(31, 31, 33, 0.94) 0%, rgba(31, 31, 33, 0.8) 46%, rgba(31, 31, 33, 0.3) 75%, rgba(31, 31, 33, 0.08) 100%),
          var(--yuezhao-entry-bg-image) var(--yuezhao-entry-bg-position, center center) / var(--yuezhao-entry-bg-size, cover) no-repeat,
          linear-gradient(135deg, rgba(38, 38, 40, 0.92), rgba(24, 23, 29, 0.9));
        border-color: var(--yuezhao-line);
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
      }

      html.dark #theme-heo .yuezhao-hero-menu-item:hover {
        border-color: var(--yuezhao-line-strong);
        background:
          radial-gradient(circle at 88% 30%, rgba(234, 223, 189, 0.12), transparent 5rem),
          linear-gradient(90deg, rgba(38, 38, 40, 0.95) 0%, rgba(31, 31, 33, 0.82) 46%, rgba(31, 31, 33, 0.32) 75%, rgba(31, 31, 33, 0.1) 100%),
          var(--yuezhao-entry-bg-image) var(--yuezhao-entry-bg-position, center center) / var(--yuezhao-entry-bg-size, cover) no-repeat,
          linear-gradient(135deg, rgba(38, 38, 40, 0.96), rgba(24, 23, 29, 0.94));
      }

      #theme-heo .yuezhao-hero-menu-new {
        --yuezhao-entry-bg-image: url('/images/yuezhao/entry-backgrounds/v2-modern-soft/chujian.png');
        --yuezhao-entry-bg-position: center center;
      }

      #theme-heo .yuezhao-hero-menu-half {
        --yuezhao-entry-bg-image: url('/images/yuezhao/entry-backgrounds/v2-modern-soft/wenjing.png');
        --yuezhao-entry-bg-position: center center;
      }

      #theme-heo .yuezhao-hero-menu-full {
        --yuezhao-entry-bg-image: url('/images/yuezhao/entry-backgrounds/v2-modern-soft/laici.png');
        --yuezhao-entry-bg-position: center center;
        --yuezhao-entry-bg-size: cover;
      }

      #theme-heo .yuezhao-hero-menu-item span {
        background: var(--yuezhao-moon);
      }

      #theme-heo .yuezhao-hero-menu-item > div:not(.yuezhao-entry-symbol) {
        position: relative;
        z-index: 1;
      }

      #theme-heo .yuezhao-entry-symbol {
        display: none !important;
      }

      #theme-heo .yuezhao-entry-moon {
        border-radius: 999px;
        background:
          radial-gradient(circle at 72% 50%, #fff 0 45%, transparent 46%),
          radial-gradient(circle at 50% 50%, var(--yuezhao-moon) 0 64%, transparent 65%);
      }

      #theme-heo .yuezhao-entry-water {
        width: 3.4rem;
        height: 2.2rem;
        background:
          radial-gradient(ellipse at 50% 50%, rgba(234, 223, 189, 0.2) 0 22%, transparent 23%),
          repeating-radial-gradient(ellipse at 50% 55%, rgba(212, 175, 94, 0.36) 0 1px, transparent 2px 10px);
        border-radius: 999px;
        opacity: 0.72;
      }

      #theme-heo .yuezhao-entry-mountain {
        width: 3.8rem;
        height: 2.4rem;
        border-radius: 0;
        background:
          linear-gradient(135deg, transparent 0 42%, rgba(166, 174, 171, 0.24) 43% 49%, transparent 50%) 0.15rem 0.45rem / 2.1rem 1.6rem no-repeat,
          linear-gradient(25deg, transparent 0 48%, rgba(139, 151, 147, 0.28) 49% 54%, transparent 55%) 1.35rem 0.35rem / 2.4rem 1.7rem no-repeat,
          linear-gradient(180deg, transparent 0 72%, rgba(212, 175, 94, 0.28) 73% 75%, transparent 76%);
        opacity: 0.76;
      }

      #theme-heo .yuezhao-category-item {
        position: relative;
        background: transparent !important;
      }

      html.dark #theme-heo #category-bar {
        background: rgba(31, 31, 33, 0.92) !important;
        border-color: var(--yuezhao-line) !important;
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22) !important;
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

      html.dark #theme-heo .yuezhao-info-card {
        background:
          radial-gradient(circle at 88% 10%, rgba(212, 175, 94, 0.14), transparent 5.2rem),
          linear-gradient(180deg, rgba(31, 31, 33, 0.96), rgba(24, 23, 29, 0.94));
        border-color: rgba(234, 223, 189, 0.12);
        box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
      }

      #theme-heo .yuezhao-info-card #announcement-content .notion,
      #theme-heo .yuezhao-info-card #announcement-content {
        color: var(--yuezhao-muted) !important;
      }

      html.dark #theme-heo .yuezhao-info-card #announcement-content .notion,
      html.dark #theme-heo .yuezhao-info-card #announcement-content {
        color: rgba(232, 229, 220, 0.72) !important;
      }

      #theme-heo .yuezhao-post-copyright ul {
        position: relative;
        overflow: hidden;
        color: var(--yuezhao-muted);
        background:
          radial-gradient(circle at 96% 12%, rgba(234, 223, 189, 0.18), transparent 6rem),
          linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(249, 250, 249, 0.82));
        border-color: var(--yuezhao-line);
        box-shadow: 0 16px 38px rgba(18, 24, 22, 0.045);
      }

      #theme-heo .yuezhao-post-copyright ul::before {
        content: '';
        position: absolute;
        left: 0;
        top: 1.25rem;
        bottom: 1.25rem;
        width: 2px;
        background: linear-gradient(180deg, rgba(234, 223, 189, 0.18), rgba(212, 175, 94, 0.62), rgba(234, 223, 189, 0.16));
      }

      #theme-heo .yuezhao-post-copyright strong {
        color: var(--yuezhao-ink);
        font-weight: 700;
      }

      #theme-heo .yuezhao-post-copyright a {
        color: var(--yuezhao-pine);
        text-decoration-color: rgba(49, 67, 63, 0.22);
        text-underline-offset: 0.18em;
      }

      #theme-heo .yuezhao-post-copyright a:hover {
        color: #8f7838;
        text-decoration-color: rgba(212, 175, 94, 0.42);
      }

      html.dark #theme-heo .yuezhao-post-copyright ul {
        color: rgba(232, 229, 220, 0.72);
        background:
          radial-gradient(circle at 96% 12%, rgba(212, 175, 94, 0.12), transparent 6rem),
          linear-gradient(180deg, rgba(31, 31, 33, 0.96), rgba(24, 23, 29, 0.94));
        border-color: rgba(234, 223, 189, 0.12);
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.2);
      }

      html.dark #theme-heo .yuezhao-post-copyright ul::before {
        background: linear-gradient(180deg, rgba(234, 223, 189, 0.12), rgba(212, 175, 94, 0.5), rgba(234, 223, 189, 0.1));
      }

      html.dark #theme-heo .yuezhao-post-copyright strong {
        color: rgba(248, 247, 242, 0.94);
      }

      html.dark #theme-heo .yuezhao-post-copyright a {
        color: rgba(234, 223, 189, 0.82);
        text-decoration-color: rgba(234, 223, 189, 0.24);
      }

      html.dark #theme-heo .yuezhao-post-copyright a:hover {
        color: #f3e7bf;
        text-decoration-color: rgba(234, 223, 189, 0.5);
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

      @media (min-width: 768px) and (max-width: 1279px) {
        #theme-heo #hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 0.875rem;
          overflow: visible;
          max-width: 100%;
        }

        #theme-heo .yuezhao-hero-spacer {
          display: none;
        }

        #theme-heo #bannerGroup {
          width: 100%;
          max-width: none;
          min-width: 0;
          margin-right: 0;
        }

        #theme-heo #banners {
          display: flex !important;
          height: 278px;
          min-height: 278px;
          margin-bottom: 0.75rem;
        }

        #theme-heo #banner-title {
          left: 2.25rem;
        }

        #theme-heo #banner-title .text-4xl {
          font-size: 2.25rem;
          line-height: 1.12;
        }

        #theme-heo .yuezhao-hero-menu {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 0;
        }

        #theme-heo .yuezhao-hero-menu-item,
        #theme-heo .yuezhao-hero-menu-full {
          display: flex !important;
          width: 100%;
          min-width: 0;
          height: 82px;
        }

        #theme-heo #hero-right-wrapper {
          display: block;
          width: 100%;
          min-width: 0;
          height: 374px;
          position: relative;
        }

        #theme-heo #top-group {
          display: none !important;
        }

        #theme-heo #today-card {
          display: flex !important;
          position: relative;
          top: auto;
          width: 100%;
          height: 100%;
        }

        #theme-heo #card-body {
          height: 100%;
        }
      }

      @media (max-width: 767px) {
        html,
        body,
        #__next,
        #theme-heo {
          max-width: 100%;
          overflow-x: hidden;
        }

        #theme-heo #hero-wrapper,
        #theme-heo #post-outer-wrapper {
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
          overflow-x: clip;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        #theme-heo #hero {
          display: block;
          width: calc(100vw - 2rem);
          max-width: calc(100vw - 2rem);
          box-sizing: border-box;
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
        }

        #theme-heo #bannerGroup,
        #theme-heo #banners,
        #theme-heo .yuezhao-hero-menu,
        #theme-heo .yuezhao-hero-menu-item,
        #theme-heo .yuezhao-hero-menu-full,
        #theme-heo #category-bar {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        #theme-heo #post-outer-wrapper > #category-bar,
        #theme-heo #post-outer-wrapper > #container,
        #theme-heo #post-outer-wrapper > #posts-wrapper {
          width: calc(100vw - 2rem);
          max-width: calc(100vw - 2rem);
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }

        #theme-heo .yuezhao-hero-spacer,
        #theme-heo #hero-right-wrapper {
          display: none !important;
        }

        #theme-heo #bannerGroup {
          max-width: none;
          min-width: 0;
          margin-right: 0;
        }

        #theme-heo #banners {
          display: flex !important;
          height: 210px;
          min-height: 210px;
          margin-bottom: 0.75rem;
        }

        #theme-heo #banner-title {
          left: 1.625rem;
          top: 48%;
        }

        #theme-heo #banner-title .text-4xl {
          font-size: 1.7rem;
          line-height: 1.15;
        }

        #theme-heo #banner-title .text-xs {
          margin-top: 0.75rem;
          font-size: 0.68rem;
        }

        #theme-heo .yuezhao-hero-menu {
          height: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.625rem;
          margin-bottom: 1rem;
        }

        #theme-heo .yuezhao-hero-menu-item,
        #theme-heo .yuezhao-hero-menu-full {
          display: flex !important;
          min-width: 0;
          height: 88px;
        }

        #theme-heo #category-bar {
          min-height: 3.5rem;
          margin-bottom: 0.875rem;
          padding-left: 0.875rem;
          padding-right: 0.875rem;
          border: 1px solid var(--yuezhao-line);
          border-radius: 0.9375rem;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 12px 30px rgba(18, 24, 22, 0.045);
        }

        #theme-heo #category-bar-items {
          flex: 1 1 auto;
          min-width: 0;
          max-width: none;
        }

        #theme-heo #category-bar-next {
          flex: 0 0 auto;
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
