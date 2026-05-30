/**
 * 李龙馥 - Lee Felix 个人偶像宣传网站
 * Main Application - Vue 3 + Vue Router
 */

(function() {
  'use strict';

  // ============================================
  // Route Definitions
  // ============================================
  const routes = [
    // Home
    { path: '/', component: window.Components.Home, meta: { title: '首页' } },

    // 偶像档案 (Idol Profile)
    { path: '/profile', component: window.Components.Profile, meta: { title: '个人简介' } },
    { path: '/profile/timeline', component: window.Components.Timeline, meta: { title: '成长经历' } },
    { path: '/profile/personality', component: window.Components.Personality, meta: { title: '性格魅力' } },
    { path: '/profile/awards', component: window.Components.Awards, meta: { title: '获奖荣誉' } },
    { path: '/profile/dance', component: window.Components.Dance, meta: { title: '舞蹈风格' } },
    { path: '/profile/language', component: window.Components.Language, meta: { title: '语言天赋' } },
    { path: '/profile/fashion', component: window.Components.Fashion, meta: { title: '时尚穿搭' } },

    // 音乐作品 (Music Works)
    { path: '/music', component: window.Components.MusicAlbums, meta: { title: '专辑总览' } },
    { path: '/music/skz', component: window.Components.SKZAlbums, meta: { title: 'SKZ专辑' } },
    { path: '/music/solo', component: window.Components.Solo, meta: { title: '个人单曲' } },
    { path: '/music/fancams', component: window.Components.Fancams, meta: { title: '舞台直拍' } },
    { path: '/music/awards', component: window.Components.MusicAwards, meta: { title: '音乐奖项' } },

    // 影视综艺 (TV & Variety)
    { path: '/variety', component: window.Components.VarietyShows, meta: { title: '综艺节目' } },
    { path: '/variety/radio', component: window.Components.Radio, meta: { title: '电台节目' } },
    { path: '/variety/filmtv', component: window.Components.FilmTV, meta: { title: '影视作品' } },
    { path: '/variety/documentary', component: window.Components.Documentary, meta: { title: '纪录片' } },
    { path: '/variety/commercials', component: window.Components.Commercials, meta: { title: '代言广告' } },
    { path: '/variety/behind', component: window.Components.BehindScenes, meta: { title: '幕后花絮' } },

    // 图影世界 (Photos & Videos)
    { path: '/gallery', component: window.Components.OfficialPhotos, meta: { title: '官方写真' } },
    { path: '/gallery/stage', component: window.Components.StagePhotos, meta: { title: '舞台图集' } },
    { path: '/gallery/daily', component: window.Components.DailyPhotos, meta: { title: '日常随拍' } },
    { path: '/gallery/mv', component: window.Components.MVGallery, meta: { title: 'MV专区' } },
    { path: '/gallery/dance', component: window.Components.DanceVideos, meta: { title: '舞蹈视频' } },
    { path: '/gallery/wallpapers', component: window.Components.Wallpapers, meta: { title: '动态壁纸' } },

    // 粉丝乐园 (Fan Zone)
    { path: '/fanzone', component: window.Components.News, meta: { title: '最新资讯' } },
    { path: '/fanzone/announcements', component: window.Components.Announcements, meta: { title: '官方公告' } },
    { path: '/fanzone/quiz', component: window.Components.Quiz, meta: { title: '趣味测验' } },
    { path: '/fanzone/downloads', component: window.Components.Downloads, meta: { title: '壁纸下载' } },

    // 关于本站 (About)
    { path: '/about', component: window.Components.About, meta: { title: '网站介绍' } },
    { path: '/about/contact', component: window.Components.Contact, meta: { title: '联系我们' } },
    { path: '/about/links', component: window.Components.Links, meta: { title: '友情链接' } },

    // 404
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ];

  // ============================================
  // Create Router
  // ============================================
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0, behavior: 'smooth' };
    }
  });

  // Update document title on navigation
  router.afterEach((to) => {
    const title = to.meta && to.meta.title ? to.meta.title + ' - ' : '';
    document.title = title + '李龙馥 | Felix · Stray Kids';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================
  // Create Vue App
  // ============================================
  const app = Vue.createApp({
    data() {
      return {
        isScrolled: false,
        mobileMenuOpen: false,
        navItems: [],
        showAudioPlayer: false,
        isPlaying: false,
        audioProgress: 0,
        currentAudio: {
          title: 'God\'s Menu',
          artist: 'Stray Kids'
        },
        audioInterval: null
      };
    },

    created() {
      // Load navigation data
      if (window.SiteData && window.SiteData.site) {
        this.navItems = window.SiteData.site.navItems.map(item => ({
          ...item,
          _open: false
        }));
      }
    },

    mounted() {
      // Scroll listener for header
      window.addEventListener('scroll', this.handleScroll);

      // Close mobile menu on resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 992) this.mobileMenuOpen = false;
      });

      // Click outside to close dropdowns
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item')) {
          this.navItems.forEach(item => item._open = false);
        }
      });
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.audioInterval) clearInterval(this.audioInterval);
    },

    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 50;
      },

      isActiveRoute(path) {
        const currentPath = this.$route.path;
        if (path === '/') return currentPath === '/';
        return currentPath === path || currentPath.startsWith(path + '/');
      },

      closeMobile() {
        this.mobileMenuOpen = false;
      },

      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      toggleAudio() {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          this.audioInterval = setInterval(() => {
            this.audioProgress += 0.5;
            if (this.audioProgress >= 100) {
              this.audioProgress = 0;
              this.isPlaying = false;
              clearInterval(this.audioInterval);
            }
          }, 100);
        } else {
          clearInterval(this.audioInterval);
        }
      },

      seekAudio(e) {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        this.audioProgress = ((e.clientX - rect.left) / rect.width) * 100;
      },

      playSong(title, artist) {
        this.currentAudio = { title, artist };
        this.audioProgress = 0;
        this.showAudioPlayer = true;
        this.isPlaying = true;
        if (this.audioInterval) clearInterval(this.audioInterval);
        this.audioInterval = setInterval(() => {
          this.audioProgress += 0.5;
          if (this.audioProgress >= 100) {
            this.audioProgress = 0;
            this.isPlaying = false;
            clearInterval(this.audioInterval);
          }
        }, 100);
      }
    }
  });

  // Use Router
  app.use(router);

  // Global properties
  app.config.globalProperties.$playSong = (title, artist) => {
    // Access the app instance through the router
    const appEl = document.getElementById('app');
    if (appEl && appEl.__vue_app__) {
      // Trigger play through event
      window.dispatchEvent(new CustomEvent('play-song', { detail: { title, artist } }));
    }
  };

  // Listen for play-song events
  window.addEventListener('play-song', (e) => {
    // Will be handled by the app instance
  });

  // Mount
  app.mount('#app');

  // ============================================
  // Global Utilities
  // ============================================
  window.FelixUtils = {
    // Smooth scroll to element
    scrollTo(selector) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    // Format view count
    formatViews(count) {
      if (count >= 10000) return (count / 10000).toFixed(0) + '万';
      return count.toString();
    },

    // Intersection Observer for scroll animations
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
      });
    }
  };

  // Initialize scroll animations after each navigation
  router.afterEach(() => {
    setTimeout(() => {
      window.FelixUtils.initScrollAnimations();
    }, 100);
  });

})();
