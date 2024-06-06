<template>
  <div class="card-offer">
    <header>
      <slot name="title">Input Title</slot>
    </header>
    <main>
      <slot name="desc">Description text </slot>
    </main>
    <footer>
      <slot name="action">Click Button</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  width: 80%;
  margin: auto auto;
  box-shadow: 1px 3px 1px;
  margin-top: 5%;
  margin-bottom: 10%;
}

.card-offer {
  width: 90%;
  margin: auto auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-top: 5%;
  margin-bottom: 5%;
  transition: 0.3s;
  padding: 2%;
}
</style>
