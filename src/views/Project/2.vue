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
  </div>
</template>

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
