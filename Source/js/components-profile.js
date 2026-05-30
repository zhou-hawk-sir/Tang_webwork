/**
 * 龙馥光影 - 偶像档案组件
 * Profile Section Components
 */

window.Components = window.Components || {};

// ============================================
// Profile (个人简介) - path: /profile
// ============================================
window.Components.Profile = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">个人简介</span>
          </nav>
          <h1 class="banner-title">个人简介</h1>
          <p class="banner-subtitle">认识舞台上最闪耀的光芒</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Profile Card -->
          <div class="card fade-in-up" style="padding:32px;text-align:center;border-radius:var(--radius-lg);">
            <div class="profile-avatar" style="margin-bottom:20px;">
              <div style="width:180px;height:180px;border-radius:50%;background:linear-gradient(135deg,var(--red-glow),var(--blue-glow));display:flex;align-items:center;justify-content:center;margin:0 auto;border:4px solid var(--white);box-shadow:0 8px 30px rgba(220,38,38,0.15);">
                <span style="font-family:var(--serif);font-size:3.5rem;color:var(--red);">馥</span>
              </div>
            </div>
            <div class="profile-info">
              <h2 style="font-family:var(--serif);font-size:2rem;margin-bottom:6px;">{{ basic.englishName }}</h2>
              <p style="font-size:1.05rem;color:var(--gray-400);margin-bottom:6px;">{{ basic.name }} · {{ basic.koreanName }}</p>
              <p style="font-size:0.95rem;color:var(--red);font-weight:600;margin-bottom:20px;">{{ basic.position }} · {{ basic.group }}</p>
            </div>
            <div class="profile-stats" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:24px 0;">
              <div class="stat-item" style="text-align:center;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);">
                <div style="font-family:var(--serif);font-size:1.4rem;color:var(--red);font-weight:700;">{{ basic.height }}</div>
                <div style="font-size:0.82rem;color:var(--gray-400);margin-top:2px;">身高</div>
              </div>
              <div class="stat-item" style="text-align:center;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);">
                <div style="font-family:var(--serif);font-size:1.4rem;color:var(--red);font-weight:700;">{{ basic.bloodType }}</div>
                <div style="font-size:0.82rem;color:var(--gray-400);margin-top:2px;">血型</div>
              </div>
              <div class="stat-item" style="text-align:center;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);">
                <div style="font-family:var(--serif);font-size:1.4rem;color:var(--red);font-weight:700;">{{ basic.mbti }}</div>
                <div style="font-size:0.82rem;color:var(--gray-400);margin-top:2px;">MBTI</div>
              </div>
              <div class="stat-item" style="text-align:center;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);">
                <div style="font-family:var(--serif);font-size:1.4rem;color:var(--red);font-weight:700;">{{ basic.星座 }}</div>
                <div style="font-size:0.82rem;color:var(--gray-400);margin-top:2px;">星座</div>
              </div>
            </div>
          </div>

          <!-- Basic Info Table -->
          <div class="card fade-in-up" style="margin-top:2rem;">
            <div class="card-body">
              <h3 class="section-title">基本信息</h3>
              <table class="data-table" style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:0.75rem 1rem;font-weight:600;width:140px;color:var(--text-muted);">英文名</td><td style="padding:0.75rem 1rem;">{{ basic.englishName }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">韩文名</td><td style="padding:0.75rem 1rem;">{{ basic.koreanName }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">出生日期</td><td style="padding:0.75rem 1rem;">{{ basic.birthDate }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">出生地</td><td style="padding:0.75rem 1rem;">{{ basic.birthPlace }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">国籍</td><td style="padding:0.75rem 1rem;">{{ basic.nationality }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">身高</td><td style="padding:0.75rem 1rem;">{{ basic.height }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">血型</td><td style="padding:0.75rem 1rem;">{{ basic.bloodType }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">定位</td><td style="padding:0.75rem 1rem;">{{ basic.position }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">所属组合</td><td style="padding:0.75rem 1rem;">{{ basic.group }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">经纪公司</td><td style="padding:0.75rem 1rem;">{{ basic.agency }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">出道日期</td><td style="padding:0.75rem 1rem;">{{ basic.debutDate }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">家庭成员</td><td style="padding:0.75rem 1rem;">{{ basic.family }}</td></tr>
                <tr><td style="padding:0.75rem 1rem;font-weight:600;color:var(--text-muted);">MBTI</td><td style="padding:0.75rem 1rem;">{{ basic.mbti }}</td></tr>
              </table>
            </div>
          </div>

          <!-- Bio -->
          <div class="card fade-in-up" style="margin-top:2rem;">
            <div class="card-body">
              <h3 class="section-title">个人简介</h3>
              <p style="line-height:1.8;font-size:1.05rem;color:var(--text);">{{ bio }}</p>
            </div>
          </div>

          <!-- Nicknames -->
          <div class="card fade-in-up" style="margin-top:2rem;">
            <div class="card-body">
              <h3 class="section-title">昵称由来</h3>
              <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1rem;">
                <span v-for="(nick, i) in basic.nickname" :key="i"
                  style="display:inline-block;padding:0.5rem 1.25rem;background:linear-gradient(135deg,rgba(255,107,53,0.1),rgba(212,168,83,0.1));border:1px solid rgba(255,107,53,0.3);border-radius:2rem;font-size:0.95rem;color:var(--primary);font-weight:500;">
                  {{ nick }}
                </span>
              </div>
            </div>
          </div>

          <!-- Photo Gallery -->
          <div class="fade-in-up" style="margin-top:3rem;">
            <h3 class="section-title">个人写真集</h3>
            <div class="photo-grid photo-grid-4" style="margin-top:1.5rem;">
              <div class="photo-item" :class="p.span || ''" v-for="(p, i) in profilePhotos" :key="i">
                <img :src="p.img" :alt="p.title" loading="lazy">
                <div class="photo-overlay">
                  <div class="photo-title">{{ p.title }}</div>
                  <div class="photo-desc">{{ p.desc }}</div>
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
      basic: window.SiteData.profile.basic || {},
      bio: window.SiteData.profile.bio || '',
      profilePhotos: window.SiteData.profile.photos.profile || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Timeline (成长经历) - path: /profile/timeline
// ============================================
window.Components.Timeline = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">成长经历</span>
          </nav>
          <h1 class="banner-title">成长经历</h1>
          <p class="banner-subtitle">从悉尼到首尔，一段追梦之旅</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="timeline">
            <template v-for="(group, gi) in yearGroups" :key="gi">
              <div class="timeline-item fade-in-up" v-for="(item, ii) in group.items" :key="gi + '-' + ii">
                <div class="timeline-date">
                  <span style="font-weight:700;font-size:1rem;color:var(--primary);">{{ item.year }}</span>
                  <span style="display:block;font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem;">{{ item.date }}</span>
                </div>
                <div class="timeline-content">
                  <a v-if="item.url" :href="item.url" target="_blank" style="display:block;margin-bottom:0.5rem;font-size:1.1rem;color:var(--red);text-decoration:underline;">{{ item.title }}</a>
                  <h4 v-else style="margin-bottom:0.5rem;font-size:1.1rem;">{{ item.title }}</h4>
                  <p style="color:var(--text);line-height:1.7;">{{ item.content }}</p>
                  <span class="timeline-tag" style="display:inline-block;margin-top:0.75rem;padding:0.25rem 0.75rem;border-radius:1rem;font-size:0.8rem;font-weight:500;color:var(--primary);background:rgba(255,107,53,0.1);">
                    {{ item.tag }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
    </div>
  `,

  computed: {
    yearGroups() {
      var items = window.SiteData.profile.timeline || [];
      var groups = [];
      var currentYear = '';
      items.forEach(function(item) {
        if (item.year !== currentYear) {
          currentYear = item.year;
          groups.push({ year: currentYear, items: [] });
        }
        groups[groups.length - 1].items.push(item);
      });
      return groups;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Personality (性格魅力) - path: /profile/personality
// ============================================
window.Components.Personality = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">性格魅力</span>
          </nav>
          <h1 class="banner-title">性格魅力</h1>
          <p class="banner-subtitle">{{ personality.title }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Description -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:2rem;">
              <p style="font-size:1.1rem;line-height:1.8;color:var(--text);">{{ personality.description }}</p>
            </div>
          </div>

          <!-- Traits Grid -->
          <h3 class="section-title fade-in-up" style="margin-bottom:1.5rem;">六大魅力特质</h3>
          <div class="grid-3 fade-in-up">
            <div class="card hover-lift" v-for="(trait, i) in traits" :key="i" style="text-align:center;">
              <div class="card-body">
                <div style="font-size:3rem;margin-bottom:1rem;">{{ trait.icon }}</div>
                <h4 class="card-title" style="font-size:1.15rem;margin-bottom:0.75rem;">{{ trait.title }}</h4>
                <p class="card-text" style="color:var(--text-muted);line-height:1.7;font-size:0.95rem;">{{ trait.description }}</p>
              </div>
            </div>
          </div>

          <!-- Quotes Section -->
          <div class="fade-in-up" style="margin-top:3rem;">
            <h3 class="section-title" style="margin-bottom:1.5rem;">Felix 经典语录</h3>
            <div v-for="(quote, i) in quotes" :key="i" style="margin-bottom:1.5rem;padding:1.5rem;background:linear-gradient(135deg,rgba(255,107,53,0.05),rgba(212,168,83,0.05));border-left:4px solid var(--primary);border-radius:0 0.5rem 0.5rem 0;">
              <blockquote style="font-size:1.05rem;font-style:italic;line-height:1.8;color:var(--text);margin:0 0 0.5rem 0;">
                "{{ quote.text }}"
              </blockquote>
              <cite style="font-size:0.9rem;color:var(--primary);font-style:normal;">—— {{ quote.source }}</cite>
            </div>
          </div>

        </div>
      </section>
    </div>
  `,

  data() {
    return {
      personality: window.SiteData.profile.personality || {},
      traits: (window.SiteData.profile.personality || {}).traits || [],
      quotes: (window.SiteData.profile.personality || {}).quotes || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Awards (获奖荣誉) - path: /profile/awards
// ============================================
window.Components.Awards = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">获奖荣誉</span>
          </nav>
          <h1 class="banner-title">获奖荣誉</h1>
          <p class="banner-subtitle">用实力赢得的荣耀与认可</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Summary -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:1.5rem;">
              <span style="font-size:2rem;font-weight:700;color:var(--primary);">{{ filteredItems.length }}</span>
              <span style="font-size:1rem;color:var(--text-muted);margin-left:0.5rem;">项荣誉记录</span>
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
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">类别</th>
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">结果</th>
                    <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:var(--text-muted);">作品</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in filteredItems" :key="i" style="border-bottom:1px solid var(--border);">
                    <td style="padding:0.75rem 1rem;font-weight:600;">{{ item.year }}</td>
                    <td style="padding:0.75rem 1rem;">{{ item.title }}</td>
                    <td style="padding:0.75rem 1rem;color:var(--text-muted);">{{ item.category }}</td>
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
                    <td style="padding:0.75rem 1rem;">{{ item.work }}</td>
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
      awards: window.SiteData.profile.awards || [],
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

// ============================================
// Dance (舞蹈风格) - path: /profile/dance
// ============================================
window.Components.Dance = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">舞蹈风格</span>
          </nav>
          <h1 class="banner-title">舞蹈风格</h1>
          <p class="banner-subtitle">{{ dance.title }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Description -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:2rem;">
              <p style="font-size:1.1rem;line-height:1.8;color:var(--text);">{{ dance.description }}</p>
            </div>
          </div>

          <!-- Audio Visualizer Decoration -->
          <div class="fade-in-up" style="text-align:center;margin-bottom:2rem;">
            <div style="display:inline-flex;align-items:flex-end;gap:4px;height:48px;">
              <span v-for="n in 12" :key="n" style="display:inline-block;width:5px;border-radius:2.5px;background:var(--grad-warm);animation:visualizerBar 0.8s ease-in-out infinite alternate;"
                :style="{ height: (10 + (n % 5) * 8) + 'px', animationDelay: (n * 0.08) + 's' }">
              </span>
            </div>
          </div>

          <!-- Dance Styles Grid -->
          <h3 class="section-title fade-in-up" style="margin-bottom:1.5rem;">舞蹈风格</h3>
          <div class="grid-2 fade-in-up">
            <div class="card hover-lift" v-for="(style, i) in styles" :key="i">
              <div class="card-body" style="padding:2rem;">
                <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
                  <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#FF6B35,#D4A853);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;font-weight:700;">{{ i + 1 }}</div>
                  <h4 class="card-title" style="margin:0;font-size:1.15rem;">{{ style.name }}</h4>
                </div>
                <p class="card-text" style="color:var(--text-muted);line-height:1.7;">{{ style.description }}</p>
              </div>
            </div>
          </div>

          <!-- Highlight Stages -->
          <div class="fade-in-up" style="margin-top:3rem;">
            <h3 class="section-title" style="margin-bottom:1.5rem;">经典舞台</h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
              <span v-for="(stage, i) in highlightStages" :key="i"
                style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.5rem;background:linear-gradient(135deg,rgba(255,107,53,0.1),rgba(212,168,83,0.1));border:1px solid rgba(255,107,53,0.2);border-radius:0.5rem;font-size:0.95rem;font-weight:500;color:var(--primary);">
                <span style="font-size:1.1rem;">·</span>
                {{ stage }}
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  `,

  data() {
    return {
      dance: window.SiteData.profile.dance || {},
      styles: (window.SiteData.profile.dance || {}).styles || [],
      highlightStages: (window.SiteData.profile.dance || {}).highlightStages || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Language (语言天赋) - path: /profile/language
// ============================================
window.Components.Language = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">语言天赋</span>
          </nav>
          <h1 class="banner-title">语言天赋</h1>
          <p class="banner-subtitle">{{ language.title }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Description -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:2rem;">
              <p style="font-size:1.1rem;line-height:1.8;color:var(--text);">{{ language.description }}</p>
            </div>
          </div>

          <!-- Language Cards -->
          <div class="grid-2 fade-in-up">
            <div class="card hover-lift" v-for="(lang, i) in languages" :key="i">
              <div class="card-body" style="padding:2rem;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                  <h4 class="card-title" style="margin:0;font-size:1.2rem;">{{ lang.name }}</h4>
                  <span class="card-tag" style="padding:0.25rem 0.75rem;border-radius:1rem;font-size:0.85rem;font-weight:600;color:var(--primary);background:rgba(255,107,53,0.1);">{{ lang.level }}</span>
                </div>
                <p class="card-text" style="color:var(--text-muted);line-height:1.7;margin-bottom:1.25rem;">{{ lang.description }}</p>
                <div style="background:var(--gray-100);border-radius:var(--radius-full);height:8px;overflow:hidden;">
                  <div style="height:100%;border-radius:var(--radius-full);background:var(--grad-warm);transition:width 0.8s ease;"
                    :style="{ width: getProficiency(lang.level) + '%' }">
                  </div>
                </div>
                <div style="text-align:right;margin-top:6px;font-size:0.85rem;color:var(--gray-400);font-weight:600;">{{ getProficiency(lang.level) }}%</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  `,

  data() {
    return {
      language: window.SiteData.profile.language || {},
      languages: (window.SiteData.profile.language || {}).languages || []
    };
  },

  methods: {
    getProficiency(level) {
      var map = { '母语': 100, '流利': 85, '基础': 40, '学习中': 25 };
      return map[level] || 50;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Fashion (时尚穿搭) - path: /profile/fashion
// ============================================
window.Components.Fashion = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="profile">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/profile">偶像档案</router-link>
            <span>/</span>
            <span class="current">时尚穿搭</span>
          </nav>
          <h1 class="banner-title">时尚穿搭</h1>
          <p class="banner-subtitle">{{ fashion.title }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Description -->
          <div class="card fade-in-up" style="margin-bottom:2rem;">
            <div class="card-body" style="text-align:center;padding:2rem;">
              <p style="font-size:1.1rem;line-height:1.8;color:var(--text);">{{ fashion.description }}</p>
            </div>
          </div>

          <!-- Style Cards -->
          <h3 class="section-title fade-in-up" style="margin-bottom:1.5rem;">穿搭风格</h3>
          <div class="grid-2 fade-in-up">
            <div class="card hover-lift" v-for="(style, i) in styles" :key="i">
              <div class="card-body" style="padding:2rem;">
                <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
                  <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,rgba(255,107,53,0.15),rgba(212,168,83,0.15));display:flex;align-items:center;justify-content:center;font-size:1.5rem;">·</div>
                  <h4 class="card-title" style="margin:0;font-size:1.1rem;">{{ style.name }}</h4>
                </div>
                <p class="card-text" style="color:var(--text-muted);line-height:1.7;">{{ style.description }}</p>
              </div>
            </div>
          </div>

          <!-- Brand Logos Section -->
          <div class="card fade-in-up" style="margin-top:3rem;">
            <div class="card-body" style="text-align:center;padding:2rem;">
              <h3 class="section-title" style="margin-bottom:1.5rem;">合作品牌</h3>
              <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:2rem;">
                <div v-for="(brand, i) in brands" :key="i"
                  style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;padding:1.5rem 2.5rem;background:var(--bg);border:1px solid var(--border);border-radius:0.75rem;min-width:160px;">
                  <span style="font-size:2rem;">·</span>
                  <span style="font-weight:700;font-size:1rem;color:var(--text);">{{ brand }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Style Evolution -->
          <div class="card fade-in-up" style="margin-top:2rem;">
            <div class="card-body" style="padding:2rem;">
              <h3 class="section-title" style="margin-bottom:1rem;">风格演变</h3>
              <p style="line-height:1.8;color:var(--text-muted);font-size:1.05rem;">
                从出道时期的青涩少年到如今的时尚偶像，Felix的穿搭风格经历了显著的蜕变。早期以简约休闲的街头风格为主，随着在时尚圈影响力的提升，逐渐展现出更加多元化的穿搭品味。无论是高端时装周的精致造型，还是日常生活中的随性搭配，Felix都能将个人魅力与时尚完美融合，成为众多粉丝和时尚爱好者的穿搭灵感来源。
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  `,

  data() {
    return {
      fashion: window.SiteData.profile.fashion || {},
      styles: (window.SiteData.profile.fashion || {}).styles || [],
      brands: (window.SiteData.profile.fashion || {}).brands || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};
