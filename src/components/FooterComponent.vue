<template>
  <footer class="amazing-footer">
    <div class="footer-content">
      <!-- Moto section will be hidden on screens smaller than 600px -->
      <div class="footer-section" v-if="isMotoVisible">
        <h4>Moto</h4>
        <p>Strife for greatness as hope starts with you</p>
      </div>
      <!-- Quick Links will be hidden on screens smaller than 300px -->
      <div class="footer-section" v-if="isQuickLinksVisible">
        <h4>Quick Links</h4>
        <ul>
          <li><RouterLink class="nav-link" to="/">Home</RouterLink></li>
          <li><RouterLink class="nav-link" to="/about">About</RouterLink></li>
          <li><RouterLink class="nav-link" to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink class="nav-link" to="/contact">Contact Us</RouterLink></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact Info</h4>
        <p>Find me on social media.</p>
        <a href="https://facebook.com" target="_blank">
          <img :src="facebook" class="facebook">
        </a>
        <a href="https://discord.com" target="_blank">
          <img :src="discord" class="discord">
        </a>
        <a href="https://twitter.com" target="_blank">
          <img :src="twitter" class="twitter">
        </a>
        <a href="https://www.linkedin.com/in/kenneth-tay-a4a298201/" target="_blank">
          <img :src="linkin" class="linkin">
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy;2023-2023 Ken Tay All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import facebook from '../assets/icon/facebook.png';
import discord from '../assets/icon/discord.png';
import twitter from '../assets/icon/twitter.png';
import linkin from '../assets/icon/linkedin.png';

const route = useRoute();

// Reactive property to determine screen size
const windowWidth = ref(window.innerWidth);

// Update windowWidth on window resize
window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth;
});

// Define breakpoints for hiding elements
const motoBreakpoint = 600;
const quickLinksBreakpoint = 300;

// Computed properties to determine visibility of elements
const isMotoVisible = computed(() => windowWidth.value >= motoBreakpoint);
const isQuickLinksVisible = computed(() => windowWidth.value >= quickLinksBreakpoint);
</script>
  
  <style scoped>
  
  .amazing-footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 40px 0;
    font-family: 'Arial', sans-serif;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
  }
  
  .footer-section:last-child {
    margin-right: 0;
  }
  
  .footer-section h4 {
    border-bottom: 2px solid #e74c3c;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .footer-section p, .footer-section li {
    margin-bottom: 10px;
  }
  
  .footer-section a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: #e74c3c;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid #34495e;
    padding-top: 20px;
  }
  
  /* If you're using Font Awesome for icons */
  .fas {
    margin-right: 10px;
  }
  </style>
  