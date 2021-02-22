<template>
  <div>
    <input type="text" v-model="username" />
    <input type="password" v-model="username" />
    <button @click="onLogin">登陆</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: 'admin',
      password: 'password',
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch('system/account/login', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
