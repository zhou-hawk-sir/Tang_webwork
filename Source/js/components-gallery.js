/**
 * 龙馥光影 - 图影世界组件
 * Gallery Section Components
 */

window.Components = window.Components || {};

// ============================================
// OfficialPhotos (官方写真) - path: /gallery
// ============================================
window.Components.OfficialPhotos = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">官方写真</span>
          </nav>
          <h1 class="banner-title">官方写真</h1>
          <p class="banner-subtitle">官方发布的精美写真集</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Filter Buttons -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'concept' }" @click="setFilter('concept')">概念写真</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'performance' }" @click="setFilter('performance')">舞台写真</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'daily' }" @click="setFilter('daily')">日常写真</button>
          </div>

          <!-- Photo Grid -->
          <div class="photo-grid photo-grid-4 fade-in-up">
            <div class="photo-item" :class="p.span || ''" v-for="(p, i) in photos" :key="i">
              <img :src="p.img" :alt="p.title" loading="lazy">
              <div class="photo-overlay">
                <div class="photo-title">{{ p.title }}</div>
                <div class="photo-desc">{{ p.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      allPhotos: window.SiteData.profile.photos.profile || [],
      activeFilter: 'all'
    };
  },

  computed: {
    photos() {
      if (this.activeFilter === 'all') return this.allPhotos;
      var filter = this.activeFilter;
      return this.allPhotos.filter(function(p) {
        if (filter === 'concept') return p.theme && p.theme.indexOf('concept') !== -1;
        if (filter === 'performance') return p.theme && (p.theme.indexOf('performance') !== -1 || p.theme.indexOf('stage') !== -1);
        if (filter === 'daily') return p.theme && (p.theme.indexOf('daily') !== -1 || p.theme.indexOf('cool') !== -1);
        return true;
      });
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
// StagePhotos (舞台图集) - path: /gallery/stage
// ============================================
window.Components.StagePhotos = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/gallery">图影世界</router-link>
            <span>/</span>
            <span class="current">舞台图集</span>
          </nav>
          <h1 class="banner-title">舞台图集</h1>
          <p class="banner-subtitle">舞台上的精彩瞬间</p>
        </div>
      </section>

      <section class="content-section" style="background:var(--bg-secondary);">
        <div class="container">
          <div class="photo-grid photo-grid-4 fade-in-up">
            <div class="photo-item" :class="p.span || ''" v-for="(p, i) in stagePhotos" :key="i" style="border-radius:var(--radius-md);overflow:hidden;">
              <img :src="p.img" :alt="p.title" loading="lazy" style="width:100%;height:220px;object-fit:cover;">
              <div class="photo-overlay" style="background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);">
                <div class="photo-title" style="color:#fff;">{{ p.title }}</div>
                <div class="photo-desc" style="color:rgba(255,255,255,0.7);">{{ p.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      stagePhotos: window.SiteData.profile.photos.stage || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// DailyPhotos (日常随拍) - path: /gallery/daily
// ============================================
window.Components.DailyPhotos = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/gallery">图影世界</router-link>
            <span>/</span>
            <span class="current">日常随拍</span>
          </nav>
          <h1 class="banner-title">日常随拍</h1>
          <p class="banner-subtitle">生活中的温暖瞬间</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Instagram-style grid -->
          <div class="photo-grid photo-grid-4 fade-in-up" style="gap:0.75rem;">
            <div class="photo-item" v-for="(p, i) in dailyPhotos" :key="i" style="border-radius:var(--radius-md);overflow:hidden;">
              <img :src="p.img" :alt="p.title" loading="lazy" style="width:100%;height:200px;object-fit:cover;aspect-ratio:1;">
              <div class="photo-overlay" style="opacity:1;background:linear-gradient(to top,rgba(0,0,0,0.6),transparent);display:flex;align-items:flex-end;padding:0.75rem;">
                <div style="color:#fff;">
                  <div class="photo-title" style="font-size:0.9rem;font-weight:600;">{{ p.title }}</div>
                  <div class="photo-desc" style="font-size:0.8rem;color:rgba(255,255,255,0.7);">{{ p.desc }}</div>
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
      dailyPhotos: window.SiteData.profile.photos.daily || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// MVGallery (MV专区) - path: /gallery/mv
// ============================================
window.Components.MVGallery = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/gallery">图影世界</router-link>
            <span>/</span>
            <span class="current">MV专区</span>
          </nav>
          <h1 class="banner-title">MV专区</h1>
          <p class="banner-subtitle">音乐录影带精选</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Featured MV -->
          <div class="card fade-in-up" style="margin-bottom:2rem;overflow:hidden;">
            <div style="height:360px;position:relative;">
              <img src="Images/舞台5.jpg" alt="God's Menu MV" style="width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);">
                <a href="https://music.163.com/#/mv?id=10943184" target="_blank" style="width:80px;height:80px;border-radius:0;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);transition:all 0.3s;text-decoration:none;">
                  <span style="color:#fff;font-size:2rem;margin-left:4px;">▶</span>
                </a>
                <a href="https://music.163.com/#/mv?id=10943184" target="_blank" style="color:#fff;font-size:1.5rem;margin-top:1.5rem;text-shadow:0 2px 8px rgba(0,0,0,0.5);text-decoration:none;">God's Menu — MV</a>
                <p style="color:rgba(255,255,255,0.7);margin-top:0.5rem;">播放量超过5亿的现象级MV</p>
              </div>
            </div>
          </div>

          <!-- MV Grid -->
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(mv, i) in mvs" :key="i">
              <div style="height:220px;position:relative;border-radius:var(--radius-md) var(--radius-md) 0 0;overflow:hidden;">
                <img :src="mv.img" :alt="mv.title" style="width:100%;height:100%;object-fit:cover;">
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;cursor:pointer;">
                  <div style="width:56px;height:56px;border-radius:0;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                    <span style="color:#fff;font-size:1.5rem;margin-left:3px;">▶</span>
                  </div>
                </div>
                <div v-if="mv.duration" style="position:absolute;bottom:0.75rem;right:0.75rem;background:rgba(0,0,0,0.7);color:#fff;padding:0.2rem 0.6rem;border-radius:0;font-size:0.8rem;">
                  {{ mv.duration }}
                </div>
              </div>
              <div class="card-body">
                <a v-if="mv.url" :href="mv.url" target="_blank" style="display:block;font-size:1.05rem;font-weight:600;margin-bottom:0.5rem;color:var(--red);text-decoration:underline;">{{ mv.title }}</a>
                <h4 v-else class="card-title" style="font-size:1.05rem;margin-bottom:0.5rem;">{{ mv.title }}</h4>
                <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;">{{ mv.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      mvs: [
        { title: 'God\'s Menu MV', description: '以厨房为概念的强力舞蹈MV，全球播放量超过5亿。', duration: '3:32', img: 'Images/舞台5.jpg', url: 'https://music.163.com/#/mv?id=10943184' },
        { title: 'Thunderous MV', description: '展现传统与现代融合的视觉盛宴。', img: 'Images/舞台6.jpg' },
        { title: 'MANIAC MV', description: '暗黑科技风格的概念MV。', img: 'Images/舞台7.jpg' },
        { title: 'S-Class MV', description: '奇幻色彩的概念音乐录影带。', img: 'Images/舞台8.jpg' },
        { title: 'LALALALA MV', description: '最新专辑主打曲MV，展现全新风格。', img: 'Images/杂志8.jpg' },
        { title: 'CASE 143 MV', description: '浪漫概念与力量感的完美结合。', img: 'Images/杂志9.jpg' }
      ]
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// DanceVideos (舞蹈视频) - path: /gallery/dance
// ============================================
window.Components.DanceVideos = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/gallery">图影世界</router-link>
            <span>/</span>
            <span class="current">舞蹈视频</span>
          </nav>
          <h1 class="banner-title">舞蹈视频</h1>
          <p class="banner-subtitle">感受舞蹈的力量与美感</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(video, i) in danceVideos" :key="i">
              <div style="height:180px;position:relative;border-radius:var(--radius-md) var(--radius-md) 0 0;overflow:hidden;">
                <img :src="video.img" :alt="video.title" style="width:100%;height:100%;object-fit:cover;">
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;cursor:pointer;">
                  <div style="width:48px;height:48px;border-radius:0;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                    <span style="color:#fff;font-size:1.2rem;margin-left:2px;">▶</span>
                  </div>
                </div>
                <div style="position:absolute;bottom:0.75rem;right:0.75rem;background:rgba(0,0,0,0.8);color:#fff;padding:0.2rem 0.5rem;border-radius:0;font-size:0.8rem;font-weight:600;">
                  {{ video.duration }}
                </div>
                <div style="position:absolute;top:0.75rem;left:0.75rem;background:rgba(255,107,53,0.9);color:#fff;padding:0.2rem 0.5rem;border-radius:0;font-size:0.75rem;font-weight:600;">
                  {{ video.type }}
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1rem;margin-bottom:0.5rem;">{{ video.title }}</h4>
                <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;">{{ video.description }}</p>
                <div style="display:flex;gap:1rem;margin-top:0.75rem;">
                  <span style="font-size:0.8rem;color:var(--text-muted);">{{ video.views }}</span>
                  <span style="font-size:0.8rem;color:var(--text-muted);">{{ video.date }}</span>
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
      danceVideos: [
        { title: 'God\'s Menu 编舞直拍', description: 'Felix的个人舞蹈直拍，展现强大的舞蹈实力。', duration: '3:32', type: '直拍', views: '2000万+', date: '2020', img: 'Images/舞台5.jpg' },
        { title: 'Thunderous 练习室版', description: '在练习室中的精彩演绎，展现舞蹈细节。', duration: '3:34', type: '练习室', views: '800万+', date: '2021', img: 'Images/舞台6.jpg' },
        { title: 'MANIAC Dance Practice', description: '展现复杂编舞的练习室版本。', duration: '3:42', type: '练习室', views: '1200万+', date: '2022', img: 'Images/舞台7.jpg' },
        { title: 'S-Class 编舞分析', description: '舞蹈动作详细分解与展示。', duration: '3:30', type: '分析', views: '500万+', date: '2023', img: 'Images/舞台8.jpg' },
        { title: 'LALALALA 表演舞台', description: '最新回归舞台的精彩舞蹈表演。', duration: '3:28', type: '舞台', views: '1000万+', date: '2024', img: 'Images/杂志10.jpg' },
        { title: '个人舞蹈练习集锦', description: '个人舞蹈练习的精彩合集。', duration: '5:15', type: '合集', views: '600万+', date: '2023', img: 'Images/杂志11.jpg' }
      ]
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Wallpapers (动态壁纸) - path: /gallery/wallpapers
// ============================================
window.Components.Wallpapers = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="gallery">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/gallery">图影世界</router-link>
            <span>/</span>
            <span class="current">动态壁纸</span>
          </nav>
          <h1 class="banner-title">动态壁纸</h1>
          <p class="banner-subtitle">精美壁纸免费下载</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Category Filter -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'concept' }" @click="setFilter('concept')">概念</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'stage' }" @click="setFilter('stage')">舞台</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'photo' }" @click="setFilter('photo')">写真</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'daily' }" @click="setFilter('daily')">日常</button>
          </div>

          <!-- Wallpaper Grid -->
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(wp, i) in filteredItems" :key="i" style="overflow:hidden;">
              <div style="position:relative;overflow:hidden;">
                <img :src="wp.img" :alt="wp.title" loading="lazy" style="width:100%;height:280px;object-fit:cover;transition:transform 0.3s;" @mouseenter="$event.target.style.transform='scale(1.05)'" @mouseleave="$event.target.style.transform='scale(1)'">
                <div style="position:absolute;top:0.75rem;left:0.75rem;">
                  <span style="background:var(--red);color:#fff;padding:0.2rem 0.6rem;border-radius:0;font-size:0.75rem;font-weight:600;">{{ getCategoryLabel(wp.category) }}</span>
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1rem;margin-bottom:0.5rem;">{{ wp.title }}</h4>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <a :href="wp.img" :download="wp.title + '.jpg'" class="btn btn-primary btn-sm" style="font-size:0.8rem;padding:0.35rem 1rem;text-decoration:none;">下载壁纸</a>
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
      wallpapers: window.SiteData.profile.photos.wallpapers || [],
      activeFilter: 'all'
    };
  },

  computed: {
    filteredItems() {
      if (this.activeFilter === 'all') return this.wallpapers;
      return this.wallpapers.filter(w => w.category === this.activeFilter);
    }
  },

  methods: {
    setFilter(t) {
      this.activeFilter = t;
    },
    getCategoryLabel(cat) {
      var map = { concept: '概念', stage: '舞台', photo: '写真', daily: '日常' };
      return map[cat] || cat;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};
