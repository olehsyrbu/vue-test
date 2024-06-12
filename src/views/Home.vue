<template>
  <div class="home">
    <h1>Home</h1>
    <div>name:{{ name }} - age: {{ age }}</div>
    <button @click="change">Change</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeComponent",
  setup() {
    const name = ref("Mario");
    const age = ref(35);

    const change = () => {
      name.value = "Luigi";
      age.value = 40;
    };

    return {
      name,
      age,
      change,
    };
  },
  created() {
    console.log("created :>>");
  },
  mounted() {
    console.log("mounted :>>");
  },
  data() {
    return {};
  },
};
</script>

<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
