<template>
  <div>
    <h5>{{ dateDisplay }}</h5>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      time: "",
      date: "",
    };
  },

  methods: {
    dateDisplay() {
      var options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "short",
      };
      var today = new Date();
      var date = today.toLocaleDateString("en-US", options);
      return date;
    },
  },
};
</script>

<style scoped></style>
