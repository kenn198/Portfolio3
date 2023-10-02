<template>
  <div class="carousel">
    <div class="carousel-container" :style="containerStyle">
      <transition-group name="slide-fade" tag="div">
        <div
          v-for="(item, index) in visibleItems"
          :key="index"
          class="carousel-slide"
        >
          <img :src="item.src" :alt="item.caption" @load="imageLoaded(index)" />
          <p>{{ item.caption }}</p>
        </div>
      </transition-group>
    </div>
    <div class="carousel-controls">
      <button @click="prevImage" class="prev-button">
        Previous
      </button>
      <button @click="nextImage" class="next-button">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const loadedFlags = ref(Array(props.images.length).fill(false));

    const visibleItems = computed(() => {
      return props.images.filter((_, index) => loadedFlags.value[index]);
    });

    const containerStyle = computed(() => {
      return {
        width: `${100 * visibleItems.value.length}%`,
        transform: `translateX(-${100 * currentIndex.value}%)`,
      };
    });

    const prevImage = () => {
      currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length;
    };

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };

    const imageLoaded = (index) => {
      loadedFlags.value[index] = true;
    };

      return {
      visibleItems,
      containerStyle,
      prevImage,
      nextImage,
      imageLoaded,
      currentIndex, // Add  currentIndex here
    };
  },
};
</script>


<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 1;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.prev-button,
.next-button {
  background-color: #3498db;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.prev-button:hover,
.next-button:hover {
  background-color: #2980b9;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
