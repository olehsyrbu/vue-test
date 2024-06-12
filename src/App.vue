<template>
  <div>
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
    <button @click="redirect">Redirect to home</button>
  </div>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/jobs">Jobs</router-link>
  <router-view />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
