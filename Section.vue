<template>
  <section>
      <div class="container">
        <div class="main-banner">
          <div class="items">
            <a v-for="(item, index) in sliders" :key="'bg'+item.big"
              class="item"
               :class="selectedSlider===index ? 'active' : ''"
              href="https://www.evkur.com.tr/oppo-reno4-cep-telefonu-modelleri?banner=slider19102020"
            >
              <div
                class="desktop image"
                :style="`background-image:url('${ item.big }')`"
              ></div>
              <div
                class="mobile image"
                :style="`background-image:url('${ item.big }')`"
              ></div>
            </a>
          </div>
          <div class="small-items owl-carousel owl-loaded">
            <div class="owl-stage-outer">
              <div
                class="owl-stage"
                style="transition: all 0.25s ease 0s;" :style="`width: ${totalWidth}px; transform: translate3d(${sliderLocation}px, 0px, 0px);`"
              >
                <div v-for="(item, index) in sliders" :key="'bg' + index" class="owl-item" style="width: 207.6px">
                  <a @click="selectedSlider = index" href="javascript:void(0)" class="small-item" :class="selectedSlider === index ? 'highlight' : ''">
                    <div class="small-item-image vcenter">
                      <img
                        :src="item.small"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="owl-nav">
              <button @click="sliderLocationPrev()" type="button" role="presentation" class="owl-prev" :class="disabledPrev ? 'disabled' : ''">
                <span aria-label="Previous">‹</span></button
              >
              <button
                @click="sliderLocationNext()"
                type="button"
                role="presentation"
                class="owl-next" :class="disabledNext ? 'disabled' : ''"
              >
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div class="owl-dots disabled"></div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
    data: () => {
    return {
      selectedSlider: 0,
      sliders: [
        {
          big: "https://cdn.evkur.com.tr/c/Cms/yapi-gerecleri-1210x372px_hy86tm.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumb_yn67bb.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/dunya-kupasi-1210-372px_ek5j4a.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumb_z9a3qp.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/jumbo-1210-372px_e6bwb9.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumb_r9lkg1.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/karaca-1210x372_m5g7pw.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/aracsatis-thumb_tn2e4w.png"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/evkur-sunny-tizen-tv-1210x372_wr5c8m.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/tuhmb_gg1n4k.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/evkur-sunny-tizen-tv-600x540_p7j2ka.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumb_t8skn4.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/royal-victoria-yemek-takimi-1210x372_n2e1wt.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumbnail_n7c9xx.jpg"
        },
        {
          big: "https://cdn.evkur.com.tr/c/Cms/royal-victoria-yemek-takimi-600x540_x4g5yo.jpg",
          small: "https://cdn.evkur.com.tr/c/Cms/thumb_kz5t8r.jpg"
        },
      ],
      totalWidth: 0,
      disabledNext: false,
      disabledPrev: true,
      sliderLocation: 0
    };
  },
  created() {
    this.totalWidth = (this.sliders.length * 207.6);
    setInterval(() => {
      if (this.selectedSlider === (this.sliders.length -1)) {
        this.selectedSlider = 0;
        this.sliderLocation = 0;
        this.disabledNext = false;
        this.disabledPrev = true;
      }else{
        this.selectedSlider++;
        this.sliderLocationNext();
      }
    }, 4000);
  },
  computed: {
  },
  methods: {
    sliderLocationNext(){
      if (this.disabledNext) return false;
      this.sliderLocation = this.sliderLocation - 207.6;
      this.disabledPrev = this.sliderLocation >= 0;
      this.disabledNext = (this.sliderLocation - (4*207.6)) <= -this.totalWidth;
    },
    sliderLocationPrev(){
      if (this.disabledPrev) return false;
      this.sliderLocation = this.sliderLocation + 207.6;
      this.disabledPrev = this.sliderLocation >= 0;
      this.disabledNext = this.sliderLocation <= -this.totalWidth;
    }
  }

}
</script>

<style>
.owl-prev span {
    background-image: url("https://www.evkur.com.tr/Content/Icons/main-banner-left-arrow-icon.png");
  }
  .owl-next span {
    background-image: url("https://www.evkur.com.tr/Content/Icons/main-banner-right-arrow-icon.png");
  }
</style>