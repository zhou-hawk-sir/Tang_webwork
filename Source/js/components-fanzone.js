/**
 * 龙馥光影 - 粉丝乐园组件
 * Fan Zone Section Components
 */

window.Components = window.Components || {};

// ============================================
// News (最新资讯) - path: /fanzone
// ============================================
window.Components.News = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="fanzone">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <span class="current">最新资讯</span>
          </nav>
          <h1 class="banner-title">最新资讯</h1>
          <p class="banner-subtitle">关注 Felix 的每一个精彩瞬间</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="grid-2">
            <div class="card hover-lift fade-in-up" v-for="(item, i) in news" :key="i">
              <div class="card-body" style="padding:1.75rem;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.75rem;">
                  <span style="font-size:0.85rem;color:var(--text-muted);">{{ item.date }}</span>
                  <span :style="{
                    display: 'inline-block',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: getSourceColor(item.source),
                    background: getSourceBg(item.source)
                  }">{{ item.source }}</span>
                </div>
                <a v-if="item.url" :href="item.url" target="_blank" style="display:block;font-size:1.1rem;margin-bottom:0.75rem;line-height:1.4;color:var(--red);text-decoration:underline;">{{ item.title }}</a>
                <h4 v-else style="font-size:1.1rem;margin-bottom:0.75rem;line-height:1.4;">{{ item.title }}</h4>
                <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.7;">{{ item.summary }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      news: window.SiteData.fanzone.news || []
    };
  },

  methods: {
    getSourceColor(source) {
      var map = { '官方': '#22c55e', '媒体报道': '#3b82f6', '粉丝投票': '#f59e0b', '社交媒体': '#a855f7' };
      return map[source] || '#6b7280';
    },
    getSourceBg(source) {
      var map = { '官方': 'rgba(34,197,94,0.1)', '媒体报道': 'rgba(59,130,246,0.1)', '粉丝投票': 'rgba(245,158,11,0.1)', '社交媒体': 'rgba(168,85,247,0.1)' };
      return map[source] || 'rgba(107,114,128,0.1)';
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Announcements (官方公告) - path: /fanzone/announcements
// ============================================
window.Components.Announcements = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="fanzone">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/fanzone">粉丝乐园</router-link>
            <span>/</span>
            <span class="current">官方公告</span>
          </nav>
          <h1 class="banner-title">官方公告</h1>
          <p class="banner-subtitle">网站最新公告与通知</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="card fade-in-up" v-for="(item, i) in announcements" :key="i" style="margin-bottom:1.5rem;">
            <div class="card-body" style="padding:2rem;">
              <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
                <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#FF6B35,#D4A853);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <span style="font-size:1.3rem;">·</span>
                </div>
                <div>
                  <h4 style="font-size:1.15rem;margin-bottom:0.15rem;">{{ item.title }}</h4>
                  <span style="font-size:0.85rem;color:var(--text-muted);">{{ item.date }}</span>
                </div>
              </div>
              <p style="font-size:1rem;color:var(--text);line-height:1.8;padding-left:4rem;">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      announcements: window.SiteData.fanzone.announcements || []
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Quiz (趣味测验) - path: /fanzone/quiz
// ============================================
window.Components.Quiz = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="fanzone">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/fanzone">粉丝乐园</router-link>
            <span>/</span>
            <span class="current">趣味测验</span>
          </nav>
          <h1 class="banner-title">趣味测验</h1>
          <p class="banner-subtitle">{{ quizData.title }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Quiz In Progress -->
          <div class="card fade-in-up" v-if="!quizFinished" style="max-width:700px;margin:0 auto;border-radius:0;">
            <div class="card-body" style="padding:32px;">
              <!-- Progress Bar -->
              <div style="margin-bottom:28px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                  <span style="font-size:0.9rem;font-weight:600;">第 {{ currentQuestion + 1 }} / {{ questions.length }} 题</span>
                  <span style="font-size:0.9rem;color:var(--red);font-weight:700;">得分：{{ score }}</span>
                </div>
                <div style="background:var(--gray-100);border-radius:0;height:8px;overflow:hidden;">
                  <div style="height:100%;border-radius:0;background:var(--grad-primary);transition:width 0.5s ease;"
                    :style="{ width: progressPercent + '%' }"></div>
                </div>
              </div>

              <!-- Question -->
              <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:24px;line-height:1.6;">{{ questions[currentQuestion].q }}</h3>

              <!-- Options -->
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div v-for="(option, oi) in questions[currentQuestion].options" :key="oi"
                  @click="selectAnswer(oi)"
                  :style="{
                    padding: '14px 18px',
                    borderRadius: '0',
                    cursor: answered ? 'default' : 'pointer',
                    border: '2px solid ' + getOptionBorder(oi),
                    background: getOptionBg(oi),
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }">
                  <span :style="{
                    width: '34px', height: '34px', borderRadius: '0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.88rem', fontWeight: '700', flexShrink: '0',
                    background: getOptionBadgeBg(oi),
                    color: getOptionBadgeColor(oi),
                    transition: 'all 0.3s ease'
                  }">{{ ['A', 'B', 'C', 'D'][oi] }}</span>
                  <span style="font-size:0.98rem;">{{ option }}</span>
                  <span v-if="answered && oi === questions[currentQuestion].answer" style="margin-left:auto;font-size:1.2rem;color:#22c55e;">✓</span>
                  <span v-if="answered && oi === selectedAnswer && oi !== questions[currentQuestion].answer" style="margin-left:auto;font-size:1.2rem;color:#ef4444;">✗</span>
                </div>
              </div>

              <!-- Next Button -->
              <div v-if="answered" style="text-align:center;margin-top:28px;">
                <button class="btn btn-primary btn-lg" @click="nextQuestion">
                  {{ currentQuestion < questions.length - 1 ? '下一题 →' : '查看结果' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Quiz Result -->
          <div class="card fade-in-up" v-else style="max-width:700px;margin:0 auto;border-radius:0;">
            <div class="card-body" style="padding:48px 32px;text-align:center;">
              <div style="font-size:4rem;margin-bottom:12px;">{{ resultEmoji }}</div>
              <h2 style="font-family:var(--serif);font-size:2rem;margin-bottom:8px;">测验完成！</h2>
              <div style="font-family:var(--serif);font-size:3rem;font-weight:900;background:var(--grad-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:16px 0;">{{ score }} / {{ questions.length }}</div>
              <p style="font-size:1.05rem;color:var(--gray-600);line-height:1.8;margin-bottom:8px;">{{ resultMessage }}</p>
              <p style="font-size:0.92rem;color:var(--gray-400);margin-bottom:28px;">正确率：{{ Math.round(score / questions.length * 100) }}%</p>
              <button class="btn btn-primary btn-lg" @click="resetQuiz">重新测验</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      quizData: window.SiteData.fanzone.quiz || {},
      questions: (window.SiteData.fanzone.quiz || {}).questions || [],
      currentQuestion: 0,
      score: 0,
      answered: false,
      selectedAnswer: -1,
      quizFinished: false
    };
  },

  computed: {
    progressPercent() {
      return Math.round((this.currentQuestion / this.questions.length) * 100);
    },
    resultEmoji() {
      var pct = this.score / this.questions.length;
      if (pct >= 0.9) return '';
      if (pct >= 0.7) return '';
      if (pct >= 0.5) return '';
      return '';
    },
    resultMessage() {
      var pct = this.score / this.questions.length;
      if (pct >= 0.9) return '太厉害了！你是真正的Felix铁杆粉丝！对他的了解非常深入！';
      if (pct >= 0.7) return '很不错！你对Felix相当了解，继续保持关注吧！';
      if (pct >= 0.5) return '还可以！对Felix有一定了解，再多关注一下就能成为资深粉丝啦！';
      return '看来还需要多多了解Felix呢！快去看看偶像档案补补课吧！';
    }
  },

  methods: {
    selectAnswer(index) {
      if (this.answered) return;
      this.answered = true;
      this.selectedAnswer = index;
      if (index === this.questions[this.currentQuestion].answer) {
        this.score++;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.answered = false;
        this.selectedAnswer = -1;
      } else {
        this.quizFinished = true;
      }
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.answered = false;
      this.selectedAnswer = -1;
      this.quizFinished = false;
    },
    getOptionBorder(index) {
      if (!this.answered) return 'var(--gray-200)';
      if (index === this.questions[this.currentQuestion].answer) return '#22c55e';
      if (index === this.selectedAnswer) return '#ef4444';
      return 'var(--gray-200)';
    },
    getOptionBg(index) {
      if (!this.answered) return 'var(--white)';
      if (index === this.questions[this.currentQuestion].answer) return 'rgba(34,197,94,0.06)';
      if (index === this.selectedAnswer) return 'rgba(239,68,68,0.06)';
      return 'var(--white)';
    },
    getOptionBadgeBg(index) {
      if (!this.answered) return 'var(--gray-100)';
      if (index === this.questions[this.currentQuestion].answer) return 'rgba(34,197,94,0.12)';
      if (index === this.selectedAnswer) return 'rgba(239,68,68,0.12)';
      return 'var(--gray-100)';
    },
    getOptionBadgeColor(index) {
      if (!this.answered) return 'var(--gray-500)';
      if (index === this.questions[this.currentQuestion].answer) return '#22c55e';
      if (index === this.selectedAnswer) return '#ef4444';
      return 'var(--gray-500)';
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};

// ============================================
// Downloads (壁纸下载) - path: /fanzone/downloads
// ============================================
window.Components.Downloads = {
  template: `
    <div class="page-content">
      <section class="page-banner" data-section="fanzone">
        <div class="container">
          <nav class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span>/</span>
            <router-link to="/fanzone">粉丝乐园</router-link>
            <span>/</span>
            <span class="current">壁纸下载</span>
          </nav>
          <h1 class="banner-title">壁纸下载</h1>
          <p class="banner-subtitle">精美壁纸资源下载</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <!-- Category Filter -->
          <div class="gallery-filter fade-in-up" style="margin-bottom:2rem;">
            <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">全部</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'desktop' }" @click="setFilter('desktop')">桌面壁纸</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'mobile' }" @click="setFilter('mobile')">手机壁纸</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'tablet' }" @click="setFilter('tablet')">平板壁纸</button>
            <button class="filter-btn" :class="{ active: activeFilter === 'avatar' }" @click="setFilter('avatar')">头像</button>
          </div>

          <!-- Downloads Grid -->
          <div class="grid-3">
            <div class="card hover-lift fade-in-up" v-for="(item, i) in filteredItems" :key="i" style="overflow:hidden;">
              <div style="height:200px;position:relative;overflow:hidden;">
                <img :src="item.img" :alt="item.title" style="width:100%;height:100%;object-fit:cover;transition:transform 0.3s;" @mouseenter="$event.target.style.transform='scale(1.05)'" @mouseleave="$event.target.style.transform='scale(1)'">
                <div style="position:absolute;top:0.75rem;left:0.75rem;">
                  <span style="background:var(--red);color:#fff;padding:0.2rem 0.6rem;border-radius:0;font-size:0.75rem;font-weight:600;">{{ getCategoryLabel(item.category) }}</span>
                </div>
                <div style="position:absolute;bottom:0.75rem;right:0.75rem;background:rgba(0,0,0,0.7);color:#fff;padding:0.2rem 0.5rem;border-radius:0;font-size:0.75rem;">
                  {{ item.resolution }}
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title" style="font-size:1rem;margin-bottom:0.5rem;">{{ item.title }}</h4>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                  <span style="font-size:0.8rem;color:var(--gray-400);">{{ item.resolution }}</span>
                  <span style="font-size:0.8rem;color:var(--gray-400);">{{ item.size }}</span>
                </div>
                <a :href="item.img" :download="item.title + '.jpg'" class="btn btn-primary btn-sm" style="width:100%;text-align:center;text-decoration:none;display:block;">
                  下载壁纸 ({{ item.size }})
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      downloads: window.SiteData.fanzone.downloads || [],
      activeFilter: 'all'
    };
  },

  computed: {
    filteredItems() {
      if (this.activeFilter === 'all') return this.downloads;
      return this.downloads.filter(d => d.category === this.activeFilter);
    }
  },

  methods: {
    setFilter(t) {
      this.activeFilter = t;
    },
    getCategoryLabel(cat) {
      var map = { desktop: '桌面', mobile: '手机', tablet: '平板', avatar: '头像' };
      return map[cat] || cat;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in,.fade-in-up').forEach(el => el.classList.add('visible'));
    });
  }
};
