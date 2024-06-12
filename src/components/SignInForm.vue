<template>
  <div>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" name="name" /><br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" name="email" /><br /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" /><br /><br />

      <select name="" id="" v-model="role">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>

      <input type="checkbox" v-model="terms" />
      <label for="">terms</label>

      <div>
        <input type="checkbox" v-model="roles" value="admin" />
        <label for="">admin</label>
        <input type="checkbox" v-model="roles" value="user" />
        <label for="">user</label>
        <input type="checkbox" v-model="roles" value="test" />
        <label for="">test</label>
      </div>

      <input type="submit" value="Submit" />
    </form>
    <div>
      <h2>Data</h2>
      <div>{{ email }}</div>
      <div>{{ name }}</div>
      <div>{{ role }}</div>
      <div>{{ terms }}</div>
      <div>{{ roles }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: null,
      terms: false,
      roles: [],
    };
  },
  methods: {},
};
</script>

<style>
form {
  margin: 0 auto;
  width: 50%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
</style>
