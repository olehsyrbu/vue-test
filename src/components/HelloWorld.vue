<template>
  <div @click.self="handleClick" class="hello">
    <div class="slots">
      <slot>Default data</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    handleClick() {
      this.$emit("close");
    },
  },
  props: {
    msg: String,
    close: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  margin: 10px;
  padding: 10px;
  background-color: #42b983;
  cursor: pointer;
}
.slots {
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: default;
}
</style>
