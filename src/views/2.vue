<template>
  <div class="center-top-container">
    <iframe
      width="60%"
      height="50%"
      src="https://www.youtube.com/embed/1wBqy3Y2CWo"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p class="video-description">
      This project features me covering a wide range of Vue.js topics and showcases the usage of the Google Maps API and MongoDB.
    </p>
    <!-- <div>
      <h1>My Vue Carousel</h1>
      <Carousel :images="carouselItems" />
    </div> -->
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import image1 from '../assets/2_1_500x500.png';
import image2 from '../assets/2_2_500x500.png';
import image3 from '../assets/2_3.png';
import image4 from '../assets/2_4.png';
import image5 from '../assets/2_5.png';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      carouselItems: [
        { image: image1, caption: 'Slide 1' },
        { image: image2, caption: 'Slide 2' },
        { image: image3, caption: 'Slide 3' },
        { image: image4, caption: 'Slide 4' },
        { image: image5, caption: 'Slide 5' },       
      ],
    };
  },
};

</script>
<style scoped>
.center-top-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.video-description {
  margin-top: 20px; /* Add some top margin for spacing */
  text-align: center; /* Center the text horizontally */
  font-size: 1.2em; /* Adjust the font size */
  color: #333; /* Change text color to a dark gray */
  max-width: 80%; /* Limit the width to 80% of the container */
  background-color: rgb(21, 217, 243);
}
</style>
