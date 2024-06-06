<template>
  <h3 class="mt-lg-4">Our Gallery</h3>
  <div class="Gallery-container">
    <div class="Gallery-card">
      <div class="card-content">
        <img src="/images/Skill.png" alt="" class="" width="100%" />
        <h2 class="title">Gallery</h2>
        <div class="backdrop"></div>
      </div>
    </div>
    <div class="Gallery-card">
      <div class="card-content">
        <img src="/images/Skill.png" alt="" class="" width="100%" />
        <h2 class="title">Gallery</h2>
        <div class="backdrop"></div>
      </div>
    </div>
    <div class="Gallery-card">
      <div class="card-content">
        <img src="/images/Skill.png" alt="" class="" width="100%" />
        <h2 class="title">Gallery</h2>
        <div class="backdrop"></div>
      </div>
    </div>
    <div class="Gallery-card">
      <div class="card-content">
        <img src="/images/Skill.png" alt="" class="" width="100%" />
        <h2 class="title">Gallery</h2>
        <div class="backdrop"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style scoped>
.Gallery-container {
  display: flex;
  width: 100%;
  /* width: 820px; */
  /* height: 340px; */
  gap: 10px;
  margin-inline: 50px;
}

.Gallery-card {
  min-width: 70px;
  height: 100%;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  position: relative;
  transition: flex-grow 0.5s ease;
}

.card-content {
  width: 50%;
}

.card-content:hover {
  flex-grow: 7;
}

.card-content > .title {
  opacity: 1;
  translate: 0 0;
}
</style>
