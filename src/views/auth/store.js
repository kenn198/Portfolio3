import { ref } from 'vue';

const isLogin = ref(false);

const setIsLogin = (value) => {
  isLogin.value = value;
};

export { isLogin, setIsLogin };