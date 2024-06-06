<template>
  <Toolbar class="sticky-top">
    <template #start>
      <RouterLink class="navbar-brand text-danger" to="/"
        ><img class="logoImage" src="/images/logo.png" />LIFELINE</RouterLink
      >
    </template>

    <template #center>
      <div class="">
        <Menubar :model="items" />
      </div>
    </template>

    <template #end>
      <SplitButton label="Login" :model="Login"></SplitButton
    ></template>
  </Toolbar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
        },
        {
          label: "Features",
          icon: "pi pi-star",
        },
        {
          label: "Projects",
          icon: "pi pi-search",
          items: [
            {
              label: "Core",
              icon: "pi pi-bolt",
              shortcut: "⌘+S",
            },
            {
              label: "Blocks",
              icon: "pi pi-server",
              shortcut: "⌘+B",
            },
            {
              label: "UI Kit",
              icon: "pi pi-pencil",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
              items: [
                {
                  label: "Apollo",
                  icon: "pi pi-palette",
                  badge: 2,
                },
                {
                  label: "Ultima",
                  icon: "pi pi-palette",
                  badge: 3,
                },
              ],
            },
          ],
        },
        {
          label: "Contact",
          icon: "pi pi-envelope",
          badge: 3,
        },
      ],
      Login: [
        {
          label: "Tutor",
          icon: "pi pi-home",
        },
        {
          label: "Admin",
          icon: "pi pi-star",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logoImage {
  width: 4rem;
}

:deep(.p-menubar) {
  background-color: transparent;
  border: none;
}

.p-menuitem-link {
  text-decoration: none;
}

.p-toolbar {
  background-color: #ece2e1; /* Replace with your desired color */
  backdrop-filter: blur(3px);
   /* background-color: transparent; */
}

/* :deep(.toolbar) {
  background-color: transparent;
  box-shadow: none;
  width: 100%;
} */
</style>
