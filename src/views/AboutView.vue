<template>
  <section class="about-me-page">
    <div class="profile-image">
      <img src="../assets/images/Self.jpg" alt="Your Name" class="hover-effect">
    </div>
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hello! I'm Ken, a passionate web developer with over a years worth of experience in creating dynamic and responsive websites. I specialize in Unreal engine, Unity, C++, C#, blueprint, vue.js, react and redux .
      </p>
      <p>
        I graduated from Deakin University with a degree in Information Technology. Since then, I've worked with various clients and companies, delivering high-quality web solutions.
      </p>
      <p>
        In my free time, I love creating games and exploring ways to create games and voluteer at churches for charity works.
      </p>
      <a href="https://www.linkedin.com/in/kenneth-tay-a4a298201/" class="download-btn">Visit my LinkedIn</a>
      <p>
        Thank you for visiting my portfolio. If you'd like to collaborate or just chat, feel free to <a href="taykenneth198@gmail.com">reach out</a>!
      </p>
    </div>
  </section>
</template>

<script setup>
// You can add any reactive properties or methods if needed.
</script>

<style scoped>
.about-me-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-image {
  flex: 1;
  padding-right: 50px;
  margin-left :10%;
}

.profile-image img.hover-effect {
  max-width: 100%;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.profile-image img.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.about-content {
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.about-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-content a {
  color: #e74c3c;
  text-decoration: none;
  transition: color 0.3s;
}

.about-content a:hover {
  color: #c0392b;
}

.download-btn {
  display: inline-block;
  background-color: #e0d429;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #1794e7;
}
</style>