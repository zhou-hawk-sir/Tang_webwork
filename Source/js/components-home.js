/**
 * 李龙馥 - 首页组件 v3.0 — 大屏滚动照片
 */
window.Components = window.Components || {};

window.Components.Home = {
  template: `
    <div class="page-home">
      <!-- Hero: Full-screen Photo Carousel -->
      <section class="hero-carousel">
        <div class="carousel-track" :style="{transform:'translateX(-'+currentSlide*100+'%)'}">
          <div class="carousel-slide" v-for="(slide,i) in slides" :key="i">
            <img :src="slide.img" :alt="slide.title" class="carousel-img">
            <div class="carousel-overlay"></div>
            <div class="carousel-content">
              <span class="carousel-tag" v-if="slide.tag">{{slide.tag}}</span>
              <h2 class="carousel-title">{{slide.title}}</h2>
              <p class="carousel-desc">{{slide.desc}}</p>
            </div>
          </div>
        </div>
        <!-- Dots -->
        <div class="carousel-dots">
          <button v-for="(s,i) in slides" :key="i"
            class="carousel-dot" :class="{'active':i===currentSlide}"
            @click="goToSlide(i)"></button>
        </div>
        <!-- Arrows -->
        <button class="carousel-arrow carousel-arrow-left" @click="prevSlide">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="carousel-arrow carousel-arrow-right" @click="nextSlide">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4L14 10L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <!-- Progress bar -->
        <div class="carousel-progress">
          <div class="carousel-progress-fill" :style="{width:progress+'%'}"></div>
        </div>
      </section>

      <!-- Stats -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card" v-for="(s,i) in stats" :key="i">
              <div class="stat-number">{{s.number}}</div>
              <div class="stat-label">{{s.label}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Profile -->
      <section class="content-section" id="main-content">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">IDOL PROFILE</p>
            <h2 class="section-title">偶像档案</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
            <p class="section-desc">了解舞台之外的李龙馥</p>
          </div>
          <div class="profile-card-home">
            <div class="profile-avatar-home">
              <div style="width:170px;height:170px;border-radius:50%;background:linear-gradient(135deg,var(--red-glow),var(--blue-glow));display:flex;align-items:center;justify-content:center;">
                <span style="font-family:var(--serif);font-size:3rem;color:var(--red);">馥</span>
              </div>
            </div>
            <div class="profile-info-home" style="flex:1;">
              <h3 class="profile-name">李龙馥 <small>Lee Felix</small></h3>
              <div class="profile-meta">
                <span class="meta-item">2000.09.15</span>
                <span class="meta-item">澳大利亚悉尼</span>
                <span class="meta-item">Stray Kids</span>
                <span class="meta-item">主舞 / Rapper / 门面</span>
              </div>
              <p class="profile-bio">{{profileBio}}</p>
              <router-link to="/profile" class="btn btn-primary">查看详情</router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Photos -->
      <section class="content-section section-light">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">MOMENTS</p>
            <h2 class="section-title">精彩瞬间</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
          </div>
          <div class="photo-grid photo-grid-4">
            <div class="photo-item" :class="p.span" v-for="(p,i) in heroPhotos" :key="i">
              <img :src="p.img" :alt="p.title" loading="lazy">
              <div class="photo-overlay">
                <div class="photo-title">{{p.title}}</div>
                <div class="photo-desc">{{p.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Music -->
      <section class="content-section section-dark">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub" style="color:rgba(255,255,255,0.35)">MUSIC HIGHLIGHTS</p>
            <h2 class="section-title t-white">音乐作品</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
            <p class="section-desc" style="color:rgba(255,255,255,0.4)">用音乐诠释独特的灵魂</p>
          </div>
          <!-- Audio Player -->
          <div style="max-width:520px;margin:0 auto 36px">
            <div class="audio-player" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08);border-radius:0;">
              <img src="Images/杂志2.jpg" alt="" style="width:44px;height:44px;border-radius:0;">
              <button class="play-btn" @click="togglePlay">{{isPlaying?'||':'▶'}}</button>
              <div class="audio-info">
                <span class="audio-title t-white">ReawakeR</span>
                <span class="audio-artist" style="color:rgba(255,255,255,0.35)">LiSA / 泽野弘之 / Felix</span>
              </div>
              <div class="audio-progress" ref="progressBar" @mousedown="startDrag" @click="seekAudio">
                <div class="audio-progress-fill" :style="{width:audioProgress+'%'}"></div>
              </div>
              <span style="color:rgba(255,255,255,0.4);font-size:0.7rem;min-width:70px;text-align:right;">{{currentTime}} / {{duration}}</span>
              <div class="audio-visualizer">
                <span class="audio-bar" v-for="i in 8" :key="i"
                  :style="{animationDelay:(i*0.1)+'s',height:isPlaying?undefined:'3px'}"></span>
              </div>
              <audio ref="audioPlayer" src="Audios/ReawakeR-Felix&LiSA.mp3" preload="metadata" @loadedmetadata="onAudioLoaded" @timeupdate="onTimeUpdate" @ended="onAudioEnded"></audio>
            </div>
          </div>
          <!-- Albums -->
          <div class="g3">
            <div class="music-card-home" v-for="(a,i) in topAlbums" :key="i">
              <div class="album-cover-placeholder">
                <img v-if="a.cover" :src="a.cover" :alt="a.title" style="width:100%;height:100%;object-fit:cover;">
                <template v-else>
                  <span class="t-white" style="font-size:1.2rem;opacity:0.5;font-weight:700;font-family:var(--serif);">{{a.title}}</span>
                  <span class="t-white" style="font-size:0.75rem;opacity:0.3;">{{a.date.substring(0,4)}}</span>
                </template>
              </div>
              <div class="album-info">
                <div class="album-title">{{a.title}}</div>
                <div class="album-desc">{{a.description}}</div>
                <div style="margin-top:8px"><span class="card-tag">{{a.type}}</span></div>
              </div>
            </div>
          </div>
          <div class="t-center mt-md">
            <router-link to="/music" class="btn btn-primary">查看全部作品</router-link>
          </div>
        </div>
      </section>

      <!-- Stage -->
      <section class="content-section">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">STAGE PRESENCE</p>
            <h2 class="section-title">舞台魅力</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
          </div>
          <div class="photo-grid photo-grid-3">
            <div class="photo-item" v-for="(s,i) in stagePhotos" :key="i">
              <img :src="s.img" :alt="s.title" loading="lazy">
              <div class="photo-overlay">
                <div class="photo-title">{{s.title}}</div>
                <div class="photo-desc">{{s.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Traits -->
      <section class="content-section section-light">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">DUAL CHARM</p>
            <h2 class="section-title">双面魅力</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
            <p class="section-desc">阳光与深邃的完美融合</p>
          </div>
          <div class="g4">
            <div v-for="(t,i) in topTraits" :key="i" class="trait-card-home">
              <div class="trait-name">{{t.title}}</div>
              <div class="trait-desc">{{t.description}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Fashion -->
      <section class="content-section">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">FASHION ICON</p>
            <h2 class="section-title">时尚风采</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
          </div>
          <div class="photo-grid photo-grid-3">
            <div class="photo-item" v-for="(f,i) in fashionPhotos" :key="i">
              <img :src="f.img" :alt="f.title" loading="lazy">
              <div class="photo-overlay">
                <div class="photo-title">{{f.title}}</div>
                <div class="photo-desc">{{f.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- News -->
      <section class="content-section section-light">
        <div class="container">
          <div class="section-header text-center">
            <p class="t-sub">LATEST NEWS</p>
            <h2 class="section-title">最新动态</h2>
            <div class="section-line" style="margin:12px auto 0"></div>
          </div>
          <div class="news-preview">
            <div v-for="(n,i) in topNews" :key="i" class="news-card-home">
              <div class="news-date-badge">{{formatDate(n.date)}}</div>
              <div>
                <a v-if="n.url" :href="n.url" target="_blank" class="news-title" style="color:var(--red);text-decoration:underline;cursor:pointer;">{{n.title}}</a>
                <div v-else class="news-title">{{n.title}}</div>
                <div class="news-summary">{{n.summary}}</div>
                <div class="news-source">{{n.source}}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quote -->
      <section class="quote-section">
        <div class="container">
          <div class="quote-content">
            <div class="quote-mark">"</div>
            <blockquote class="home-quote" style="font-style:italic;">Even when the world turns cold, I stand my ground.</blockquote>
            <cite class="quote-author" style="font-style:italic;">—— Felix《Unfair》</cite>
          </div>
        </div>
      </section>
    </div>
  `,

  data() {
    return {
      stats: window.SiteData.site.stats || [],
      topAlbums: (window.SiteData.music.albums || []).slice(0, 3),
      topTraits: (window.SiteData.profile.personality.traits || []).slice(0, 4),
      topNews: (window.SiteData.fanzone.news || []).slice(0, 3),
      profileBio: window.SiteData.profile.bio || '',
      isPlaying: false,
      audioProgress: 0,
      audioInterval: null,
      currentTime: '0:00',
      duration: '0:00',

      // Carousel
      currentSlide: 0,
      slideTimer: null,
      progress: 0,
      progressTimer: null,
      slides: [
        { img: 'Images/fliex.jpg', title: '李龙馥', desc: 'Lee Felix · Stray Kids' },
        { img: 'Images/舞台1.jpg', title: '舞台光芒', desc: '演唱会现场震撼演出' },
        { img: 'Images/杂志1.jpg', title: '时尚风采', desc: 'Louis Vuitton 全球品牌大使' },
        { img: 'Images/F1.jpg', title: 'F1上海站', desc: '时尚与运动的碰撞' },
        { img: 'Images/舞台2.jpg', title: '舞台实力', desc: '力量与优雅的完美融合' },
        { img: 'Images/儿童.jpg', title: 'UNICEF亲善大使', desc: '传递温暖与希望' },
      ],

      heroPhotos: [
        { title: 'Felix', img: 'Images/fliex2.jpg', desc: '个人写真', span: 'featured' },
        { title: '杂志写真', img: 'Images/杂志2.jpg', desc: '时尚杂志', span: 'wide' },
        { title: '杂志写真', img: 'Images/杂志3.jpg', desc: '时尚杂志', span: '' },
        { title: '杂志写真', img: 'Images/杂志4.jpg', desc: '时尚杂志', span: '' },
        { title: '杂志写真', img: 'Images/杂志6.jpg', desc: '时尚杂志', span: '' },
        { title: '杂志写真', img: 'Images/杂志7.jpg', desc: '时尚杂志', span: 'wide' },
        { title: '杂志写真', img: 'Images/杂志8.jpg', desc: '时尚杂志', span: '' },
        { title: '杂志写真', img: 'Images/杂志9.jpg', desc: '时尚杂志', span: '' },
      ],
      stagePhotos: [
        { title: '舞台风采', img: 'Images/舞台3.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台4.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台5.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台6.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台7.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台8.jpg', desc: '舞台表演' },
      ],
      fashionPhotos: [
        { title: 'LV品牌', img: 'Images/LV1.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: 'LV品牌', img: 'Images/LV2.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: '杂志写真', img: 'Images/杂志10.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志11.jpg', desc: '时尚杂志' },
        { title: 'F1活动', img: 'Images/F1.jpg', desc: 'F1上海站活动' },
        { title: '儿童公益', img: 'Images/儿童2.jpg', desc: 'UNICEF公益支援' },
      ]
    };
  },

  methods: {
    formatDate(d) {
      if (!d) return '';
      var p = d.split('-');
      return p.length >= 2 ? p[1] + '.' + p[2] : d;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetProgress();
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.resetProgress();
    },
    goToSlide(i) {
      this.currentSlide = i;
      this.resetProgress();
    },
    resetProgress() {
      this.progress = 0;
      clearInterval(this.progressTimer);
      this.startProgress();
    },
    startProgress() {
      var self = this;
      this.progressTimer = setInterval(function() {
        self.progress += 0.5;
        if (self.progress >= 100) {
          self.nextSlide();
        }
      }, 20);
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      var audio = this.$refs.audioPlayer;
      if (audio) {
        if (this.isPlaying) audio.play().catch(function(){});
        else audio.pause();
      }
    },
    onAudioLoaded() {
      var audio = this.$refs.audioPlayer;
      if (audio) {
        this.duration = this.formatTime(audio.duration);
      }
    },
    onTimeUpdate() {
      var audio = this.$refs.audioPlayer;
      if (audio && audio.duration) {
        this.audioProgress = (audio.currentTime / audio.duration) * 100;
        this.currentTime = this.formatTime(audio.currentTime);
      }
    },
    onAudioEnded() {
      this.isPlaying = false;
      this.audioProgress = 0;
      this.currentTime = '0:00';
    },
    formatTime(sec) {
      if (!sec || isNaN(sec)) return '0:00';
      var m = Math.floor(sec / 60);
      var s = Math.floor(sec % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    },
    seekAudio(e) {
      var bar = this.$refs.progressBar;
      if (!bar) return;
      var rect = bar.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      var audio = this.$refs.audioPlayer;
      if (audio && audio.duration) {
        audio.currentTime = pct * audio.duration;
      }
      this.audioProgress = pct * 100;
    },
    startDrag(e) {
      e.preventDefault();
      var self = this;
      var bar = this.$refs.progressBar;
      if (!bar) return;
      function onMove(ev) {
        var rect = bar.getBoundingClientRect();
        var pct = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
        var audio = self.$refs.audioPlayer;
        if (audio && audio.duration) {
          audio.currentTime = pct * audio.duration;
        }
        self.audioProgress = pct * 100;
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    }
  },

  mounted() {
    var self = this;
    this.startProgress();
    this.$nextTick(function() { window.FelixUtils.initScrollAnimations(); });
  },

  beforeUnmount() {
    clearInterval(this.slideTimer);
    clearInterval(this.progressTimer);
    clearInterval(this.audioInterval);
  }
};
