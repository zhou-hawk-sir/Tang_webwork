/**
 * 龙馥光影 - 关于本站组件
 * About Section Components
 */

window.Components = window.Components || {};

// ============================================
// About (网站介绍) - path: /about
// ============================================
window.Components.About = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="about">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">关于本站</span>
          </nav>
          <h1 class="banner-title">关于本站</h1>
          <p class="banner-subtitle">用热爱记录光芒</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container" style="max-width:700px;">
          <div class="card fade-in-up" style="padding:36px;border-radius:0;">
            <h2 style="font-family:var(--serif);font-size:1.6rem;text-align:center;margin-bottom:8px;">网站宗旨</h2>
            <div class="section-line" style="margin:0 auto 28px;"></div>
            <div class="purpose-list">
              <div class="purpose-item" v-for="(purpose, index) in siteInfo.purpose" :key="index">
                <span class="purpose-icon">✦</span>
                <span class="purpose-text">{{ purpose }}</span>
              </div>
            </div>
          </div>

          <div class="card fade-in-up" style="padding:28px;border-radius:0;margin-top:24px;border-left:3px solid var(--gray-400);">
            <h3 style="font-size:1rem;font-weight:700;margin-bottom:12px;color:var(--gray-600);">⚠️ 免责声明</h3>
            <p style="font-size:0.88rem;color:var(--gray-500);line-height:1.8;">本站为粉丝个人宣传作品，旨在记录和分享李龙馥（Felix）的精彩瞬间。本站所有内容均来源于公开渠道，版权归原作者所有。本站与JYP Entertainment、Stray Kids官方无任何关联。如有侵权，请联系作者删除。</p>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      siteInfo: window.SiteData.about.siteInfo || {}
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.FelixUtils.initScrollAnimations();
    });
  }
};

// ============================================
// Contact (联系我们) - path: /about/contact
// ============================================
window.Components.Contact = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="about">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/about">关于本站</router-link>
            <span>/</span>
            <span class="current">联系我们</span>
          </nav>
          <h1 class="banner-title">联系我们</h1>
          <p class="banner-subtitle">期待你的来信</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Contact Card -->
          <div style="max-width:400px;margin:0 auto;text-align:center;padding:32px;background:var(--gray-50);border:1px solid var(--gray-200)">
            <div style="font-size:1.5rem;margin-bottom:8px;color:var(--red)">·</div>
            <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:8px">联系网站作者</h3>
            <p style="color:var(--blue);font-size:1rem;font-weight:500">{{ contact.email }}</p>
            <p style="color:var(--gray-400);font-size:0.82rem;margin-top:8px">发送邮件至以上地址联系我们</p>
          </div>

          <!-- Notice -->
          <div style="margin-top:24px;padding:14px;background:var(--gray-50);border:1px solid var(--gray-200)">
            <p style="color:var(--gray-600);font-size:0.85rem;text-align:center">{{ contact.notice }}</p>
          </div>

        </div>
      </section>
    </div>
  `,

  data() {
    return {
      contact: window.SiteData.about.contact || {}
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.FelixUtils.initScrollAnimations();
    });
  }
};

// ============================================
// Links (友情链接) - path: /about/links
// ============================================
window.Components.Links = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="about">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/about">关于本站</router-link>
            <span>/</span>
            <span class="current">友情链接</span>
          </nav>
          <h1 class="banner-title">友情链接</h1>
          <p class="banner-subtitle">优质站点推荐</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="section-block">
            <h3 class="block-title">官方链接</h3>
            <div class="links-grid">
              <a v-for="(link, index) in officialLinks" :key="index"
                :href="link.url" target="_blank" rel="noopener noreferrer"
                class="link-card">
                <div class="link-icon">·</div>
                <h4 class="link-name">{{ link.name }}</h4>
                <p class="link-desc">{{ link.description }}</p>
                <span class="link-url">{{ link.url }}</span>
              </a>
            </div>
          </div>

          <div class="section-block">
            <h3 class="block-title">友情站点</h3>
            <div class="links-grid">
              <a v-for="(link, index) in fanLinks" :key="index"
                :href="link.url" target="_blank" rel="noopener noreferrer"
                class="link-card fan-link">
                <div class="link-icon">·</div>
                <h4 class="link-name">{{ link.name }}</h4>
                <p class="link-desc">{{ link.description }}</p>
              </a>
            </div>
          </div>

          <!-- Apply for link exchange -->
          <div class="apply-box">
            <h4>申请友情链接</h4>
            <p>如果您有优质的偶像粉丝网站，欢迎申请友情链接交换。</p>
            <p>请联系：<strong>{{ contactEmail }}</strong></p>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    const allLinks = window.SiteData.about.links || [];
    return {
      officialLinks: allLinks.filter(l => l.url !== '#'),
      fanLinks: allLinks.filter(l => l.url === '#'),
      contactEmail: window.SiteData.about.contact ? window.SiteData.about.contact.email : ''
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.FelixUtils.initScrollAnimations();
    });
  }
};
