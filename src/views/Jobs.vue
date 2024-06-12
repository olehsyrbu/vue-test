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
      jobs: [
        {
          id: "1",
          title: "Job 1",
          description: "This is job 1",
        },
        {
          id: "2",
          title: "Job 2",
          description: "This is job 2",
        },
      ],
    };
  },
};
</script>

<style></style>
