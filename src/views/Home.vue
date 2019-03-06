<template>
  <div class="home">
    <h1>List Colors</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Type</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="colors of color" :key="colors['.key']">
          <td>{{ colors.black }}</td>
          <td>{{}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../config/db";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      colors: []
    };
  },
  firebase: {
    colors: db.ref("colors")
  }
};
</script>
