<template>
  <!-- <div class="container-fluid banner">
    <NavBar></NavBar>
  </div> -->
  <Hero></Hero>
  <div class="container-sm services py-4 px-4 up-container">
    <h3>CODE PRACTICE</h3>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <div class="flex justify-content-left">
            <Menu :model="items" />
          </div>
        </div>
        <div class="col-lg-10">
          <template class="card mx-3">
            <div>
              <TabMenu :model="items" />
            </div>
          </template>
          <Toolbar>
            <template #start>
              <Button
                icon="pi pi-plus"
                class="mr-2"
                severity="secondary"
                text
              />
              <Button
                icon="pi pi-print"
                class="mr-2"
                severity="secondary"
                text
              />
              <Button icon="pi pi-upload" severity="secondary" text />
            </template>

            <template #center>
              <IconField>
                <InputIcon>
                  <i class="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Search" />
              </IconField>
            </template>

            <template #end>
              <SplitButton label="Save" :model="items"></SplitButton
            ></template>
          </Toolbar>
          <Panel>
            <template #header>
              <h4>To Do App</h4>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nisi unde deserunt dolore, est officia natus labore. Vel, facere
              tempore deserunt dicta veritatis quia libero nesciunt
              necessitatibus hic quas iste sint, assumenda ab, perferendis eius.
              Voluptatum exercitationem maxime, eaque voluptas labore magnam ex
              odit perferendis omnis incidunt saepe dolorem. Harum fugiat
              perferendis inventore eveniet voluptates.
            </p>
            <template #icons></template>
            <template #footer>
              <Button
                icon="pi pi-bookmark"
                severity="secondary"
                rounded
                text
              ></Button>
            </template>
          </Panel>

          <button type="button" class="btn btn-primary" @click="showToastBtn">
            Show live toast
          </button>

          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username" />
          </InputGroup>

          <InputGroup>
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" severity="warning" />
          </InputGroup>

          <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask
              id="phone"
              v-model="value2"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
            />
          </div>

          <FloatLabel>
            <InputMask
              id="ssn"
              v-model="value"
              mask="999-99-9999"
              placeholder="999-99-9999"
            />
            <label for="ssn">SSN</label>
          </FloatLabel>

          <div class="card flex justify-content-center">
            <Calendar v-model="date" inline showWeek />
          </div>

          <Panel header="Header" toggleable>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <Panel toggleable>
            <template #header>
              <div class="flex align-items-center gap-2">
                <Avatar
                  image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  size="large"
                  shape="circle"
                />
                <span class="font-bold">Amy Elsner</span>
              </div>
            </template>
            <template #footer>
              <div
                class="flex flex-wrap align-items-center justify-content-between gap-3"
              >
                <div class="flex align-items-center gap-2">
                  <Button icon="pi pi-user" rounded text></Button>
                  <Button
                    icon="pi pi-bookmark"
                    severity="secondary"
                    rounded
                    text
                  ></Button>
                </div>
                <span class="p-text-secondary">Updated 2 hours ago</span>
              </div>
            </template>
            <template #icons>
              <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                <span class="pi pi-cog"></span>
              </button>
              <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <Stepper>
            <StepperPanel header="Login-Details">
              <template #content="{ nextCallback }">
                <div class="flex flex-column h-12rem">
                  <div
                    class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                  >
                    Content I
                  </div>
                </div>
                <div class="flex pt-4 justify-content-end">
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    @click="nextCallback"
                  />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel header="Personal Info">
              <template #content="{ prevCallback, nextCallback }">
                <div class="flex flex-column h-12rem">
                  <div
                    class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                  >
                    Content II
                  </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    @click="prevCallback"
                  />
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    @click="nextCallback"
                  />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel header="Qualification">
              <template #content="{ prevCallback, nextCallback }">
                <div class="flex flex-column h-12rem">
                  <div
                    class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                  >
                    Content III
                  </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    @click="prevCallback"
                  />
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    @click="nextCallback"
                  />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel header="Contact">
              <template #content="{ prevCallback }">
                <div class="flex flex-column h-12rem">
                  <div
                    class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                  >
                    Content III
                  </div>
                </div>
                <div class="flex pt-4 justify-content-start">
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    @click="prevCallback"
                  />
                </div>
              </template>
            </StepperPanel>
          </Stepper>

          <div class="toast-container position-fixed top-0 end-0 p-3">
            <div
              class="toast"
              :class="showToast ? 'd-block' : ''"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="" class="rounded me-2" alt="" />
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  class="btn-close"
                  @click="showToast = false"
                ></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Practice Area",

  data() {
    return (
      {
        date: null,
        showToast: false,
        basics: [
          { label: "New", icon: "pi pi-plus" },
          { label: "Search", icon: "pi pi-search" },
        ],
        items: [
          { label: "Dashboard", icon: "pi pi-home" },
          { label: "Transactions", icon: "pi pi-chart-line" },
          { label: "Products", icon: "pi pi-list" },
          { label: "Messages", icon: "pi pi-inbox" },
        ],

        side: [
          {
            label: "New",
            icon: "pi pi-plus",
            shortcut: "⌘+N",
          },
          {
            label: "Search",
            icon: "pi pi-search",
            shortcut: "⌘+S",
          },
        ],
      },
      {
        label: "Profile",
        items: [
          {
            label: "Settings",
            icon: "pi pi-cog",
            shortcut: "⌘+O",
          },
          {
            label: "Messages",
            icon: "pi pi-inbox",
            badge: 2,
          },
          {
            label: "Logout",
            icon: "pi pi-sign-out",
            shortcut: "⌘+Q",
          },
        ],

        Nav: [
          {
            separator: true,
          },
          {
            label: "Documents",
            items: [
              {
                label: "New",
                icon: "pi pi-plus",
                shortcut: "⌘+N",
              },
              {
                label: "Search",
                icon: "pi pi-search",
                shortcut: "⌘+S",
              },
            ],
          },
          {
            label: "Profile",
            items: [
              {
                label: "Settings",
                icon: "pi pi-cog",
                shortcut: "⌘+O",
              },
              {
                label: "Messages",
                icon: "pi pi-inbox",
                badge: 2,
              },
              {
                label: "Logout",
                icon: "pi pi-sign-out",
                shortcut: "⌘+Q",
              },
            ],
          },
          {
            separator: true,
          },
        ],
        visible: false,
      }
    );
  },
  methods: {
    showToastBtn() {
      this.showToast = true;
    },
  },
};
</script>

<style scoped>
@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.box {
  background-image: radial-gradient(var(--primary-300), var(--primary-600));
  border-radius: 50% !important;
  color: var(--primary-color-text);
}

.up-container {
  z-index: 20;
}
</style>
