/**
 * 龙馥光影 - 音乐作品组件
 * Music Section Components
 */

window.Components = window.Components || {};

// ============================================
// MusicAlbums (专辑总览) - path: /music
// ============================================
window.Components.MusicAlbums = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="music">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">专辑总览</span>
          </nav>
          <h1 class="banner-title">专辑总览</h1>
          <p class="banner-subtitle">用音乐诠释独特的灵魂</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Filter Buttons -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === type }" v-for="type in albumTypes" :key="type" @click="setFilter(type)">{{ type }}</button>
          </div>

          <!-- Albums Grid -->
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(album, i) in filteredItems" :key="i" @click="toggleExpand(i)" style="cursor:pointer;">
              <div style="height:180px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1A5FB4,#0D47A1);border-radius:0.5rem 0.5rem 0 0;position:relative;overflow:hidden;">
                <img v-if="album.cover" :src="album.cover" :alt="album.title" style="width:100%;height:100%;object-fit:cover;">
                <template v-else>
                  <span style="font-size:3.5rem;opacity:0.3;position:absolute;">·</span>
                  <div style="position:relative;z-index:1;text-align:center;color:#fff;">
                    <div style="font-size:2rem;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,0.3);">{{ album.title }}</div>
                    <div style="font-size:0.9rem;opacity:0.9;margin-top:0.25rem;">{{ album.date }}</div>
                  </div>
                </template>
              </div>
              <div class="card-body">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                  <h4 class="card-title" style="margin:0;font-size:1.05rem;">{{ album.title }}</h4>
                  <span class="card-tag" style="padding:0.2rem 0.6rem;border-radius:1rem;font-size:0.75rem;color:var(--primary);background:rgba(255,107,53,0.1);font-weight:600;">{{ album.type }}</span>
                </div>
                <p style="font-size:0.9rem;color:var(--primary);margin-bottom:0.5rem;">{{ album.artist }}</p>
                <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.75rem;">{{ album.description }}</p>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:0.8rem;color:var(--text-muted);">{{ album.tracks.length }} 首曲目</span>
                  <span style="font-size:0.8rem;color:var(--primary);font-weight:500;">{{ expandedItem === i ? '收起 ▲' : '展开 ▼' }}</span>
                </div>
                <!-- Expanded Tracklist -->
                <div v-if="expandedItem === i" style="margin-top:1rem;border-top:1px solid var(--border);padding-top:0.75rem;">
                  <div v-for="(track, ti) in album.tracks" :key="ti" style="display:flex;align-items:center;gap:0.5rem;padding:0.4rem 0;font-size:0.9rem;">
                    <span style="color:var(--text-muted);font-size:0.8rem;min-width:24px;">{{ ti + 1 }}.</span>
                    <span style="color:var(--text);">{{ track }}</span>
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
      albums: window.SiteData.music.albums || [],
      activeFilter: 'all',
      expandedItem: null
    };
  },

  computed: {
    albumTypes() {
      var types = {};
      this.albums.forEach(function(a) { types[a.type] = true; });
      return Object.keys(types);
    },
    filteredItems() {
      if (this.activeFilter === 'all') return this.albums;
      return this.albums.filter(a => a.type === this.activeFilter);
    }
  },

  methods: {
    setFilter(t) {
      this.activeFilter = t;
      this.expandedItem = null;
    },
    toggleExpand(i) {
      this.expandedItem = this.expandedItem === i ? null : i;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// SKZAlbums (SKZ专辑) - path: /music/skz
// ============================================
window.Components.SKZAlbums = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="music">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/music">音乐作品</router-link>
            <span>/</span>
            <span class="current">SKZ专辑</span>
          </nav>
          <h1 class="banner-title">SKZ专辑</h1>
          <p class="banner-subtitle">Stray Kids 完整专辑时间线</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="timeline">
            <div class="timeline-item fade-in-up" v-for="(album, i) in sortedAlbums" :key="i">
              <div class="timeline-date">
                <span style="font-weight:700;font-size:1.1rem;color:var(--primary);">{{ album.date }}</span>
              </div>
              <div class="timeline-content">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                  <h4 style="font-size:1.2rem;margin:0;">{{ album.title }}</h4>
                  <span class="card-tag" style="padding:0.2rem 0.6rem;border-radius:1rem;font-size:0.8rem;font-weight:600;color:var(--primary);background:rgba(255,107,53,0.1);">{{ album.type }}</span>
                </div>
                <p style="color:var(--text-muted);line-height:1.7;margin-bottom:1rem;">{{ album.description }}</p>
                <div style="background:var(--bg);border-radius:0.5rem;padding:1rem;margin-bottom:0.5rem;">
                  <div style="font-weight:600;margin-bottom:0.5rem;font-size:0.95rem;">完整曲目列表：</div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.25rem;">
                    <div v-for="(track, ti) in album.tracks" :key="ti" style="display:flex;align-items:center;gap:0.5rem;padding:0.35rem 0.5rem;font-size:0.9rem;border-radius:0.25rem;">
                      <span style="color:var(--primary);font-weight:600;font-size:0.8rem;min-width:20px;">{{ ti + 1 }}.</span>
                      <span>{{ track }}</span>
                    </div>
                  </div>
                </div>
                <span style="font-size:0.85rem;color:var(--text-muted);">共 {{ album.tracks.length }} 首曲目</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  computed: {
    sortedAlbums() {
      var albums = (window.SiteData.music.albums || []).slice();
      albums.sort(function(a, b) {
        return b.date.localeCompare(a.date);
      });
      return albums;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Solo (个人单曲) - path: /music/solo
// ============================================
window.Components.Solo = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="music">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/music">音乐作品</router-link>
            <span>/</span>
            <span class="current">个人单曲</span>
          </nav>
          <h1 class="banner-title">个人单曲</h1>
          <p class="banner-subtitle">独属于 Felix 的音乐世界</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Featured Highlight -->
          <div class="card fade-in-up" style="margin-bottom:2rem;overflow:hidden;border-radius:var(--radius-lg);">
            <div style="display:grid;grid-template-columns:1fr 1.2fr;min-height:320px;">
              <div style="background:var(--grad-warm);display:flex;align-items:center;justify-content:center;position:relative;">
                <img src="Images/杂志2.jpg" alt="音频封面" style="width:200px;height:200px;opacity:0.8;">
                <div style="position:relative;z-index:1;text-align:center;color:#fff;">
                  <div style="font-family:var(--serif);font-size:2.5rem;font-weight:700;text-shadow:0 4px 16px rgba(0,0,0,0.3);">{{ featured.title }}</div>
                  <div style="font-size:0.95rem;opacity:0.85;margin-top:8px;">{{ featured.artist }} · {{ featured.date }}</div>
                </div>
              </div>
              <div class="card-body" style="display:flex;flex-direction:column;justify-content:center;padding:2.5rem;">
                <span class="card-tag" style="align-self:flex-start;padding:4px 12px;border-radius:var(--radius-full);font-size:0.82rem;font-weight:600;color:var(--red);background:var(--red-glow);margin-bottom:12px;">{{ featured.type }}</span>
                <h3 style="font-family:var(--serif);font-size:1.5rem;margin-bottom:10px;">{{ featured.title }}</h3>
                <p style="color:var(--gray-500);line-height:1.7;margin-bottom:20px;">{{ featured.description }}</p>
                <!-- Decorative Audio Player UI -->
                <div style="background:var(--gray-50);border-radius:var(--radius-md);padding:14px 18px;border:1px solid var(--gray-100);">
                  <div style="display:flex;align-items:center;gap:12px;">
                    <div @click.stop="toggleFeaturedPlay" style="width:44px;height:44px;border-radius:50%;background:var(--grad-warm);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;box-shadow:var(--shadow-glow-red);transition:transform 0.2s;">
                      <span style="color:#fff;font-size:1.1rem;">{{ featuredPlaying ? '⏸' : '▶' }}</span>
                    </div>
                    <audio ref="soloAudio" src="Audios/ReawakeR-Felix&LiSA.mp3" preload="none"></audio>
                    <div style="flex:1;">
                      <div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--gray-400);margin-bottom:4px;">
                        <span style="font-weight:500;">{{ featured.title }}</span>
                        <span>3:24</span>
                      </div>
                      <div style="background:var(--gray-200);border-radius:var(--radius-full);height:5px;overflow:hidden;">
                        <div style="height:100%;background:var(--grad-warm);border-radius:var(--radius-full);transition:width 0.3s;" :style="{ width: featuredProgress + '%' }"></div>
                      </div>
                    </div>
                    <!-- Visualizer Bars -->
                    <div style="display:flex;align-items:flex-end;gap:2px;height:28px;">
                      <span v-for="n in 8" :key="n" style="display:inline-block;width:3px;border-radius:1.5px;background:var(--grad-warm);"
                        :style="{ height: featuredPlaying ? (6 + Math.random() * 18) + 'px' : '3px', transition: 'height 0.3s ease' }">
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- All Solo Works -->
          <h3 class="section-title fade-in-up" style="margin-bottom:1.5rem;">全部个人单曲</h3>
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(work, i) in soloWorks" :key="i">
              <div class="card-body" style="padding:1.5rem;">
                <div style="display:flex;gap:1rem;align-items:flex-start;">
                  <div style="width:64px;height:64px;border-radius:0.5rem;background:linear-gradient(135deg,rgba(255,107,53,0.15),rgba(212,168,83,0.15));display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.5rem;">·</div>
                  <div style="flex:1;">
                    <h4 style="font-size:1.05rem;margin-bottom:0.25rem;">{{ work.title }}</h4>
                    <div style="display:flex;gap:0.75rem;margin-bottom:0.5rem;">
                      <span style="font-size:0.85rem;color:var(--primary);">{{ work.artist }}</span>
                      <span style="font-size:0.85rem;color:var(--text-muted);">{{ work.date }}</span>
                    </div>
                    <span class="card-tag" style="display:inline-block;padding:0.15rem 0.5rem;border-radius:1rem;font-size:0.75rem;color:var(--primary);background:rgba(255,107,53,0.1);margin-bottom:0.5rem;">{{ work.type }}</span>
                    <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.6;">{{ work.description }}</p>
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
    var solo = window.SiteData.music.solo || [];
    return {
      soloWorks: solo,
      featured: solo[0] || { title: '', artist: '', date: '', type: '', description: '' },
      featuredPlaying: false,
      featuredProgress: 0,
      featuredInterval: null
    };
  },

  methods: {
    toggleFeaturedPlay() {
      this.featuredPlaying = !this.featuredPlaying;
      var self = this;
      var audio = this.$refs.soloAudio;
      if (audio) {
        if (this.featuredPlaying) audio.play().catch(function(){});
        else audio.pause();
      }
      if (this.featuredPlaying) {
        this.featuredInterval = setInterval(function() {
          self.featuredProgress += 0.5;
          if (self.featuredProgress >= 100) {
            self.featuredProgress = 0;
            self.featuredPlaying = false;
            clearInterval(self.featuredInterval);
          }
        }, 100);
      } else {
        clearInterval(this.featuredInterval);
      }
    }
  },

  beforeUnmount() {
    if (this.featuredInterval) clearInterval(this.featuredInterval);
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// ============================================
// Fancams (舞台直拍) - path: /music/fancams
// ============================================
window.Components.Fancams = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="music">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/music">音乐作品</router-link>
            <span>/</span>
            <span class="current">舞台直拍</span>
          </nav>
          <h1 class="banner-title">舞台直拍</h1>
          <p class="banner-subtitle">见证最闪耀的舞台瞬间</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Sort Controls -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: sortBy === 'default' }" @click="sortBy = 'default'">默认顺序</button>
            <button class="filter-btn" :class="{ active: sortBy === 'views' }" @click="sortBy = 'views'">按播放量</button>
            <button class="filter-btn" :class="{ active: sortBy === 'date' }" @click="sortBy = 'date'">按时间</button>
          </div>

          <!-- Featured Top Fancam -->
          <div class="card fade-in-up" style="margin-bottom:2rem;overflow:hidden;">
            <div style="display:grid;grid-template-columns:1fr 1fr;min-height:280px;">
              <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;position:relative;">
                <span style="font-size:5rem;position:relative;z-index:1;">·</span>
                <div style="position:absolute;bottom:1rem;left:1rem;right:1rem;display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#fff;font-weight:700;font-size:1.2rem;">热门直拍</span>
                  <span style="background:rgba(255,107,53,0.9);color:#fff;padding:0.35rem 1rem;border-radius:1rem;font-size:0.9rem;font-weight:600;">{{ sortedFancams[0].views }}</span>
                </div>
              </div>
              <div class="card-body" style="display:flex;flex-direction:column;justify-content:center;padding:2.5rem;">
                <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">{{ sortedFancams[0].title }}</h3>
                <p style="font-size:0.95rem;color:var(--text-muted);line-height:1.7;margin-bottom:1rem;">{{ sortedFancams[0].description }}</p>
                <div style="display:flex;gap:1rem;">
                  <span style="font-size:0.9rem;color:var(--text-muted);">{{ sortedFancams[0].date }}</span>
                  <span style="font-size:0.9rem;color:var(--primary);font-weight:600;">{{ sortedFancams[0].views }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Fancam Grid -->
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(cam, i) in sortedFancams.slice(1)" :key="i">
              <div style="height:160px;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;position:relative;border-radius:0.5rem 0.5rem 0 0;">
                <span style="font-size:3rem;">·</span>
                <div style="position:absolute;top:0.75rem;right:0.75rem;background:rgba(0,0,0,0.7);color:#fff;padding:0.2rem 0.6rem;border-radius:1rem;font-size:0.8rem;font-weight:600;">{{ cam.views }}</div>
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;cursor:pointer;border-radius:0.5rem 0.5rem 0 0;" class="play-overlay">
                  <span style="color:#fff;font-size:2rem;">▶</span>
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1rem;margin-bottom:0.5rem;">{{ cam.title }}</h4>
                <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.5rem;">{{ cam.description }}</p>
                <span style="font-size:0.8rem;color:var(--text-muted);">{{ cam.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      fancams: window.SiteData.music.fancams || [],
      sortBy: 'default'
    };
  },

  computed: {
    sortedFancams() {
      var cams = this.fancams.slice();
      if (this.sortBy === 'views') {
        cams.sort(function(a, b) {
          var va = parseInt(a.views.replace(/[^0-9]/g, ''));
          var vb = parseInt(b.views.replace(/[^0-9]/g, ''));
          return vb - va;
        });
      } else if (this.sortBy === 'date') {
        cams.sort(function(a, b) { return b.date.localeCompare(a.date); });
      }
      return cams;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// MusicAwards (音乐奖项) - path: /music/awards
// ============================================
window.Components.MusicAwards = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="music">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/music">音乐作品</router-link>
            <span>/</span>
            <span class="current">音乐奖项</span>
          </nav>
          <h1 class="banner-title">音乐奖项</h1>
          <p class="banner-subtitle">音乐实力获得的行业认可</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Summary -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:1.5rem;">
              <span style="font-size:2rem;font-weight:700;color:var(--primary);">{{ filteredItems.length }}</span>
              <span style="font-size:1rem;color:var(--text-muted);margin-left:0.5rem;">项音乐荣誉</span>
            </div>
          </div>

          <!-- Filter Buttons -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === year }" v-for="year in years" :key="year" @click="setFilter(year)">{{ year }}年</button>
          </div>

          <!-- Awards Table -->
          <div class="card fade-in-up">
            <div class="card-body" style="overflow-x:auto;">
              <table class="data-table" style="width:100%;border-collapse:collapse;">
                <thead>
                  <tr style="border-bottom:2px solid var(--border);">
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">年度</th>
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">奖项</th>
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">作品</th>
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">结果</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in filteredItems" :key="i" style="border-bottom:1px solid var(--border);">
                    <td style="padding:0.75rem 1rem;font-weight:600;">{{ item.year }}</td>
                    <td style="padding:0.75rem 1rem;">{{ item.award }}</td>
                    <td style="padding:0.75rem 1rem;color:var(--text-muted);">{{ item.work }}</td>
                    <td style="padding:0.75rem 1rem;">
                      <span :style="{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: item.result === '获奖' ? '#22c55e' : '#3b82f6',
                        background: item.result === '获奖' ? 'rgba(34,197,94,0.1)' : 'rgba(59,130,246,0.1)'
                      }">{{ item.result }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      awards: window.SiteData.music.musicAwards || [],
      activeFilter: 'all'
    };
  },

  computed: {
    years() {
      var yearSet = {};
      this.awards.forEach(function(a) { yearSet[a.year] = true; });
      return Object.keys(yearSet).sort().reverse();
    },
    filteredItems() {
      if (this.activeFilter === 'all') return this.awards;
      return this.awards.filter(a => a.year === this.activeFilter);
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
