<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobsDetail', params: { id: job.id } }">
      <h2>{{ job.title }} - {{ job.description }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JobsComponent",
  data() {
    return {
      jobs: ,
    };
  },
};
</script>

<style></style>
