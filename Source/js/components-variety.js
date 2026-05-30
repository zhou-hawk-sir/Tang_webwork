/**
 * 李龙馥 - 影视综艺组件
 * Variety / TV Section Components
 */

window.Components = window.Components || {};

// ============================================
// VarietyShows (综艺节目) - path: /variety
// ============================================
window.Components.VarietyShows = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">综艺节目</span>
          </nav>
          <h1 class="banner-title">综艺节目</h1>
          <p class="banner-subtitle">综艺中的搞笑与才艺</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Filter Buttons -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === type }" v-for="type in showTypes" :key="type" @click="setFilter(type)">{{ type }}</button>
          </div>

          <!-- Shows Grid -->
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(show, i) in filteredItems" :key="i">
              <div style="height:140px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#FF6B35,#D4A853);border-radius:0.5rem 0.5rem 0 0;position:relative;">
                <span style="font-size:3rem;opacity:0.4;">·</span>
                <span class="card-tag" style="position:absolute;top:0.75rem;right:0.75rem;padding:0.2rem 0.6rem;border-radius:1rem;font-size:0.75rem;font-weight:600;color:#fff;background:rgba(0,0,0,0.4);">{{ show.type }}</span>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1.05rem;margin-bottom:0.5rem;">{{ show.title }}</h4>
                <div style="display:flex;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap;">
                  <span style="font-size:0.8rem;color:var(--text-muted);">{{ show.date }}</span>
                  <span style="font-size:0.8rem;color:var(--primary);">{{ show.network }}</span>
                  <span style="font-size:0.8rem;color:var(--text-muted);">{{ show.episodes }}</span>
                </div>
                <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.6;">{{ show.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      shows: window.SiteData.variety.shows || [],
      activeFilter: 'all'
    };
  },

  computed: {
    showTypes() {
      var types = {};
      this.shows.forEach(function(s) { types[s.type] = true; });
      return Object.keys(types);
    },
    filteredItems() {
      if (this.activeFilter === 'all') return this.shows;
      return this.shows.filter(s => s.type === this.activeFilter);
    }
  },

  methods: {
    setFilter(t) {
      this.activeFilter = t;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Radio (电台节目) - path: /variety/radio
// ============================================
window.Components.Radio = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/variety">影视综艺</router-link>
            <span>/</span>
            <span class="current">电台节目</span>
          </nav>
          <h1 class="banner-title">电台节目</h1>
          <p class="banner-subtitle">声音里的温暖陪伴</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(radio, i) in radios" :key="i">
              <div class="card-body" style="padding:2rem;">
                <div style="display:flex;gap:1.25rem;align-items:flex-start;">
                  <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#FF6B35,#D4A853);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <span style="font-size:1.8rem;">·</span>
                  </div>
                  <div style="flex:1;">
                    <h4 style="font-size:1.15rem;margin-bottom:0.35rem;">{{ radio.title }}</h4>
                    <div style="display:flex;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap;">
                      <span class="card-tag" style="padding:0.15rem 0.5rem;border-radius:1rem;font-size:0.8rem;color:var(--primary);background:rgba(255,107,53,0.1);">{{ radio.host }}</span>
                      <span style="font-size:0.85rem;color:var(--text-muted);">{{ radio.date }}</span>
                    </div>
                    <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.7;">{{ radio.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      radios: window.SiteData.variety.radio || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// FilmTV (影视作品) - path: /variety/filmtv
// ============================================
window.Components.FilmTV = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/variety">影视综艺</router-link>
            <span>/</span>
            <span class="current">影视作品</span>
          </nav>
          <h1 class="banner-title">影视作品</h1>
          <p class="banner-subtitle">银幕上的精彩表现</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(item, i) in filmTV" :key="i">
              <div style="height:200px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e);position:relative;border-radius:0.5rem 0.5rem 0 0;">
                <span style="font-size:4rem;opacity:0.4;">·</span>
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;" class="hover-overlay">
                  <span style="color:#fff;font-size:2rem;">▶</span>
                </div>
              </div>
              <div class="card-body">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
                  <h4 class="card-title" style="font-size:1.1rem;margin:0;">{{ item.title }}</h4>
                  <span class="card-tag" style="padding:0.15rem 0.5rem;border-radius:1rem;font-size:0.75rem;color:var(--primary);background:rgba(255,107,53,0.1);">{{ item.type }}</span>
                </div>
                <span style="font-size:0.85rem;color:var(--text-muted);display:block;margin-bottom:0.75rem;">{{ item.date }}</span>
                <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.7;">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      filmTV: window.SiteData.variety.filmTV || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Documentary (纪录片) - path: /variety/documentary
// ============================================
window.Components.Documentary = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/variety">影视综艺</router-link>
            <span>/</span>
            <span class="current">纪录片</span>
          </nav>
          <h1 class="banner-title">纪录片</h1>
          <p class="banner-subtitle">真实的幕后故事</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(doc, i) in documentaries" :key="i">
              <div style="height:180px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0c29,#302b63);position:relative;border-radius:0.5rem 0.5rem 0 0;">
                <span style="font-size:3.5rem;opacity:0.4;">·</span>
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;">
                  <span style="color:#fff;font-size:2rem;">▶</span>
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1.05rem;margin-bottom:0.5rem;">{{ doc.title }}</h4>
                <span style="font-size:0.85rem;color:var(--text-muted);display:block;margin-bottom:0.75rem;">{{ doc.date }}</span>
                <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.7;">{{ doc.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      documentaries: window.SiteData.variety.documentaries || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Commercials (代言广告) - path: /variety/commercials
// ============================================
window.Components.Commercials = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/variety">影视综艺</router-link>
            <span>/</span>
            <span class="current">代言广告</span>
          </nav>
          <h1 class="banner-title">代言广告</h1>
          <p class="banner-subtitle">品牌大使的时尚魅力</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(ad, i) in commercials" :key="i" style="overflow:hidden;">
              <div style="height:120px;background:linear-gradient(135deg,#2d2d2d,#1a1a1a);display:flex;align-items:center;justify-content:center;position:relative;">
                <span style="font-size:2.5rem;font-weight:700;letter-spacing:0.15em;color:rgba(255,255,255,0.6);">{{ ad.brand }}</span>
              </div>
              <div class="card-body" style="padding:1.75rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                  <h4 class="card-title" style="font-size:1.2rem;margin:0;font-weight:700;">{{ ad.brand }}</h4>
                  <span class="card-tag" style="padding:0.25rem 0.75rem;border-radius:1rem;font-size:0.8rem;font-weight:600;color:var(--primary);background:rgba(255,107,53,0.1);">{{ ad.role }}</span>
                </div>
                <div style="display:flex;gap:0.75rem;margin-bottom:1rem;">
                  <span style="font-size:0.85rem;color:var(--text-muted);">{{ ad.year }}</span>
                </div>
                <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.7;">{{ ad.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      commercials: window.SiteData.variety.commercials || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// BehindScenes (幕后花絮) - path: /variety/behind
// ============================================
window.Components.BehindScenes = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="variety">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/variety">影视综艺</router-link>
            <span>/</span>
            <span class="current">幕后花絮</span>
          </nav>
          <h1 class="banner-title">幕后花絮</h1>
          <p class="banner-subtitle">舞台背后的精彩瞬间</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(item, i) in behind" :key="i">
              <!-- Blog post style -->
              <div style="padding:2rem;">
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#FF6B35,#D4A853);display:flex;align-items:center;justify-content:center;">
                    <span style="color:#fff;font-size:0.9rem;">F</span>
                  </div>
                  <div>
                    <div style="font-weight:600;font-size:0.9rem;">Felix幕后</div>
                    <div style="font-size:0.8rem;color:var(--text-muted);">李龙馥</div>
                  </div>
                </div>
                <h4 style="font-size:1.2rem;margin-bottom:0.75rem;">{{ item.title }}</h4>
                <div style="height:160px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--bg),var(--bg-secondary));border-radius:0.5rem;margin-bottom:1rem;">
                  <span style="font-size:3rem;opacity:0.4;">·</span>
                </div>
                <p style="font-size:0.95rem;color:var(--text-muted);line-height:1.8;">{{ item.description }}</p>
                <div style="display:flex;gap:1.5rem;margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border);">
                  <span style="font-size:0.85rem;color:var(--text-muted);cursor:pointer;">点赞</span>
                  <span style="font-size:0.85rem;color:var(--text-muted);cursor:pointer;">评论</span>
                  <span style="font-size:0.85rem;color:var(--text-muted);cursor:pointer;">分享</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      behind: window.SiteData.variety.behind || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};
