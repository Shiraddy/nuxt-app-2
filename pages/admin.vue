<template>
  <!-- BODY -->
  <div class="container-fluid">
    <div class="row view-height">
      <!-- SIDE BAR -->
      <div :class="wideScreen ? 'd-none' : 'col-2'" class="shadow-two">
        <div class="mt-lg-2 side-bar">
          <!-- <img class="admin-pic" src="/images/Pic.png" alt="" /> -->

          <!-- <ul class="nav navbar-nav admin-ul">
            <a class="admin-list" href="#adminDash" @click="dashboardView"
              ><i class="bi-columns-gap me-2 text-white"></i> DASHBOARD
            </a>

            <a @click="parentTableView" class="admin-list" href="#adminClient"
              ><i class="bi-people-fill me-2"></i> PARENTS
            </a>

            <a @click="tutorTableView" class="admin-list" href="#adminTutor"
              ><i class="bi-person-square me-2"></i> TUTORS
            </a>

            <a class="admin-list" href="#adminClient" @click="uploadsSectionBtn"
              ><i class="bi-chat-right-text me-2"></i>UPLOADS
            </a>

            <a href="#adminClient" class="admin-list" @click="financeTableView"
              ><i class="bi-clipboard-data me-2 text-white"></i>
              FINANCE
              <span class="admin-icon"></span
            ></a>
            <button @click="signOut" class="btn btn-danger">LOG OUT</button>
          </ul> -->
          <template class="card flex justify-content-center">
            <div class="text-left">
              <Menu :model="links" class="w-full d-none d-lg-block text-start">
                <template #start>
                  <span class="inline-flex align-items-center gap-1 py-2">
                    <a class="navbar-brand text-danger" href="#">
                      <img class="admin-logo" src="/images/logo.png" alt="" />
                      LIFELINE</a
                    >
                  </span>
                </template>

                <template #submenuitem="{ item }">
                  <span class="text-primary font-bold">{{ item.label }}</span>
                </template>

                <template #item="{ item, props }">
                  <a
                    v-ripple
                    class="flex align-items-center"
                    v-bind="props.action"
                  >
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge
                      v-if="item.badge"
                      class="ml-auto"
                      :value="item.badge"
                    />
                    <span
                      v-if="item.shortcut"
                      class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
                      >{{ item.shortcut }}</span
                    >
                  </a>
                </template>

                <template #end>
                  <div class="text-secondary">
                    <small>Lifeline Edu. Solutions</small>
                  </div>
                </template>
              </Menu>
            </div>
          </template>
        </div>
      </div>

      <!-- MAIN AREA -->
      <div class="container-fluid" :class="wideScreen ? 'col-12' : 'col-10'">
        <Toolbar class="mb-2">
          <template #start>
            <Button
              icon="pi pi-desktop"
              severity="info"
              rounded
              aria-label="User"
              @click="wideScreenBtn"
              v-show="!wideScreen"
            />

            <Button
              icon="bi-box-arrow-right"
              severity="info"
              rounded
              aria-label="User"
              @click="wideScreenBtn"
              v-show="wideScreen"
            />
          </template>

          <template #end>
            <div class="me-2">
              <h6 class="text-primary">
                {{ dateDisplay() }}
                <i class="fa-solid fa-calendar-check ps-1"></i>
              </h6>
            </div>
            <div class="flex">
              <i class="pi pi-bell pi-icon"></i>
              <i class="pi pi-envelope pi-icon"></i>
              <i class="pi pi-cog pi-icon"></i>
            </div>
            <Avatar
              image="/images/Pic.png"
              class="mr-2"
              size="large"
              shape="circle"
            />
          </template>

          <template #center>
            <!-- <div>
              <TabMenu :model="DashTabMenu" />
            </div> -->
            <div class="mt-2">
              <Menubar :model="AdminNavBar" />
            </div>
          </template>
        </Toolbar>
        <Toolbar class="mb-4">
          <template #start> </template>
          <template #end> </template>
        </Toolbar>
        <section id="adminDash" class="admin-body mb-3">
          <!-- <template class="card mx-4">
            <div>
              <TabMenu :model="DashTabMenu" />
            </div>
          </template> -->

          <section v-if="dashboard" class="container-fluid">
            <!-- STATISTICS -->
            <div class="row my-lg-4 my-2">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="revenue shadow-two bg-white hover d-flex text-start"
                >
                  <i class="pi pi-id-card px-2"></i>
                  <div class="bold">
                    <h6>Applicants</h6>
                    <h3>{{ applicantsList().length }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="tutor shadow-two bg-white hover text-start d-flex">
                  <i class="pi pi-verified px-2"></i>
                  <div class="bold">
                    <h6>Tutors</h6>
                    <h3>{{ tutorsList().length }}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="client shadow-two bg-white hover d-flex text-start">
                  <i class="pi pi-users px-2"></i>
                  <div class="bold">
                    <h6>Contracts</h6>
                    <h3>{{ clientsList().length }}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="profit shadow-two bg-white hover text-start d-flex">
                  <i class="pi pi-shop px-2"></i>
                  <div class="bold">
                    <h6>Request</h6>
                    <h3>{{ requestsList().length }}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid my-3">
              <div class="row">
                <div class="col-lg-8">
                  <div class="motivation shadow-two">
                    <h5 class="pb-3">Messages</h5>
                    <div
                      class="head d-flex justify-content-between mx-5 text-secondary"
                    >
                      <h5>
                        Heading:
                        {{
                          currentMessage() && currentMessage().data
                            ? currentMessage().data.subject
                            : ""
                        }}
                      </h5>
                      <div class="text-danger">
                        <a @click="visible = true">
                          <i class="bi-filter-square"></i>
                        </a>
                      </div>
                    </div>
                    <p class="px-5 text-start currentMessage">
                      {{
                        currentMessage() && currentMessage().data
                          ? currentMessage().data.message.substring(0, 200)
                          : ""
                      }}
                    </p>
                    <div class="d-flex justify-content-between mx-5">
                      <small>{{
                        currentMessage() && currentMessage().data
                          ? currentMessage().data.name
                          : ""
                      }}</small>
                      <small
                        >Contact:
                        {{
                          currentMessage() && currentMessage().data
                            ? currentMessage().data.contact
                            : ""
                        }}</small
                      >
                      <small>Total Messages: {{ messages.length }}</small>
                    </div>
                    <div class="py-2">
                      <button
                        @click="prevMessage"
                        class="btn btn-outline-success me-3"
                      >
                        <i class="fa fa-arrow-circle-o-left"></i>
                      </button>
                      <button
                        @click="nextMessage"
                        class="btn btn-outline-success"
                      >
                        <i class="fa fa-arrow-circle-o-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="to-do shadow-one bg-white card bl-2">
                    <h5>To Do List</h5>
                    <p><small>Goals of the Day</small></p>
                    <div
                      v-for="(todo, index) in todoList"
                      class="text-start mx-2"
                      :key="index"
                    >
                      <input type="checkbox" v-model="todo.done" />
                      <label
                        class="text-start ms-2"
                        :class="todo.done ? 'red' : 'green'"
                        >{{ todo.text }}</label
                      >
                    </div>
                    <div class="my-3 text-center">
                      <IconField>
                        <InputText
                          class="mx-3"
                          v-model="todoItem"
                          @keyup.enter="addTodo"
                        />
                      </IconField>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- GRAPHS -->
            <section>
              <div class="container-fluid">
                <div class="row mx-1 py-4">
                  <div class="col-lg-6">
                    <div class="card flex justify-content-center">
                      <Chart
                        type="line"
                        :data="chartData"
                        :options="chartOptions"
                        class="w-full md:w-10rem h-75"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card">
                      <Chart
                        type="bar"
                        :data="chartData"
                        :options="chartOptions"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="card flex justify-content-center">
                      <Calendar v-model="date" inline showWeek />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="card flex justify-content-center"
                      style="height: 315px"
                    >
                      <Chart
                        type="pie"
                        :data="chartData"
                        :options="chartOptions"
                        class="w-full md:w-10rem h-75"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <!-- MESSAGE DIALOG -->
          <template>
            <div class="card flex justify-content-center">
              <Dialog
                v-model:visible="visible"
                modal
                :pt="{
                  root: 'border-none',
                  mask: {
                    style: 'backdrop-filter: blur(2px)',
                  },
                }"
                header="Edit Profile"
                :style="{ width: '30rem' }"
                maximizable
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
              >
                <template #header>
                  <span class="text-danger block mb-5">MESSAGE</span>
                </template>

                <TabView>
                  <TabPanel header="Detail">
                    <div class="text-start">
                      <h5 class="text-secondary">Content:</h5>
                    </div>
                    <p class="text-start lh-lg text-secondary">
                      {{ currentMessage().data.message }}
                    </p>
                  </TabPanel>
                  <TabPanel header="Email">
                    <div class="text-start my-2">
                      <label for="email">Email</label>
                      <InputText
                        type="text"
                        v-model="value"
                        class="apply-input"
                      />
                    </div>
                    <div class="text-start my-2">
                      <label for="contact">Contact</label>
                      <InputText
                        type="text"
                        v-model.number="value"
                        class="apply-input"
                      />
                    </div>
                    <div class="card text-start my-3">
                      <label class="py-2 px-2" for="email">Content</label>
                      <Editor v-model="value" editorStyle="height: 150px" />
                    </div>
                  </TabPanel>
                </TabView>

                <template #footer>
                  <Button
                    label="Cancel"
                    text
                    severity="primary"
                    icon="pi pi-times"
                    @click="visible = false"
                    autofocus
                  />
                  <Button
                    label="Delete"
                    outlined
                    severity="danger"
                    icon="pi pi-spinner"
                    @click="deleteMessage()"
                    autofocus
                  />
                </template>
              </Dialog>
            </div>
          </template>

          <ScrollTop />

          <!-- PARENTS TABLE PRIMEVUE -->
          <div class="card mx-4" v-if="parentTable">
            <TabView>
              <!-- <TabPanel>
                <template #header>
                  <i class="pi pi-home me-2"></i>
                  All
                </template>
                <DataTable
                  v-model:filters="filters"
                  v-model:selection="selectedParent"
                  selectionMode="single"
                  :value="parents"
                  stateStorage="session"
                  ref="dt"
                  sortMode="multiple"
                  showGridlines
                  removableSort
                  paginator
                  :rows="5"
                  dataKey="id"
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  :globalFilterFields="[
                    'data.parent',
                    'data.student',
                    'data.category',
                    'data.status',
                  ]"
                  filterDisplay="menu"
                  :loading="loading"
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <template #paginatorend>
                    <Button
                      type="button"
                      @click="exportCSV($event)"
                      icon="pi pi-download"
                      text
                    />
                  </template>

                  <template #header>
                    <div class="row">
                      <div class="col text-start">
                        <h2 class="">Parents</h2>
                      </div>
                      <div class="col">
                        <IconField iconPosition="right">
                          <InputIcon>
                            <i class="pi pi-search" />
                          </InputIcon>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                          />
                        </IconField>
                      </div>
                    </div>
                  </template>
                  <template #empty> No Parent found. </template>
                  <template #loading>
                    Loading clients data. Please wait.
                  </template>
                  <Column field="data.parent" header="Client" sortable>
                    <template #body="{ data }">
                      {{ data.data.parent }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column field="data.student" header="Ward" sortable>
                    <template #body="{ data }">
                      {{ data.data.student }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.fees"
                    header="Fees"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      {{ data.data.fees }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="number"
                        class="p-column-filter"
                        placeholder="Search by amount"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.weeklySession"
                    header="Session"
                    sortable
                    bodyClass="text-center"
                  ></Column>

                  <Column field="data.contact" header="Contact"></Column>

                  <Column
                    field="data.status"
                    header="Status"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      <Tag
                        :value="data.data.status"
                        :severity="getSeverity(data.status)"
                      />
                    </template>
                    <template #filter="{ filterModel }">
                      <Dropdown
                        v-model="filterModel.value"
                        :options="statuses"
                        placeholder="Select One"
                        class="p-column-filter"
                        showClear
                      >
                        <template #option="slotProps">
                          <Tag
                            :value="slotProps.option"
                            :severity="getSeverity(slotProps.option)"
                          />
                        </template>
                      </Dropdown> </template
                  ></Column>

                  <Column
                    header="Action"
                    headerStyle="width: 5rem; text-align: center"
                    bodyStyle="text-align: center; overflow: visible"
                  >
                    <template #body="{ data }">
                      <Button
                        type="button"
                        icon="pi pi-expand"
                        @click="editParent(data)"
                        style="font-size: 0.7rem"
                        rounded
                      />
                    </template>
                  </Column>
                </DataTable>
              </TabPanel> -->
              <TabPanel>
                <template #header>
                  Contracts
                  <Badge
                    :value="clientsList().length"
                    severity="success"
                  ></Badge>
                </template>
                <DataTable
                  v-model:filters="filters"
                  v-model:selection="selectedParent"
                  selectionMode="single"
                  :value="clientsList()"
                  stateStorage="session"
                  ref="dt"
                  sortMode="multiple"
                  showGridlines
                  removableSort
                  paginator
                  :rows="5"
                  dataKey="id"
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  :globalFilterFields="[
                    'data.parent',
                    'data.student',
                    'data.category',
                    'data.status',
                  ]"
                  filterDisplay="menu"
                  :loading="loading"
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <template #paginatorend>
                    <Button
                      type="button"
                      @click="exportCSV($event)"
                      icon="pi pi-download"
                      text
                    />
                  </template>

                  <template #header>
                    <div class="row">
                      <div class="col text-start">
                        <h2 class="">Parents</h2>
                      </div>
                      <div class="col">
                        <IconField iconPosition="right">
                          <InputIcon>
                            <i class="pi pi-search" />
                          </InputIcon>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                          />
                        </IconField>
                      </div>
                    </div>
                  </template>
                  <template #empty> No Parent found. </template>
                  <template #loading>
                    Loading clients data. Please wait.
                  </template>
                  <Column field="data.parent" header="Client" sortable>
                    <template #body="{ data }">
                      {{ data.data.parent }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column field="data.student" header="Ward" sortable>
                    <template #body="{ data }">
                      {{ data.data.student }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.fees"
                    header="Fees"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      {{ data.data.fees }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="number"
                        class="p-column-filter"
                        placeholder="Search by amount"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.weeklySession"
                    header="Session"
                    sortable
                    bodyClass="text-center"
                  ></Column>

                  <Column field="data.contact" header="Contact"></Column>

                  <Column
                    field="data.status"
                    header="Status"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      <Tag
                        :value="data.data.status"
                        :severity="getSeverity(data.status)"
                      />
                    </template>
                    <template #filter="{ filterModel }">
                      <Dropdown
                        v-model="filterModel.value"
                        :options="statuses"
                        placeholder="Select One"
                        class="p-column-filter"
                        showClear
                      >
                        <template #option="slotProps">
                          <Tag
                            :value="slotProps.option"
                            :severity="getSeverity(slotProps.option)"
                          />
                        </template>
                      </Dropdown> </template
                  ></Column>

                  <Column
                    header="Action"
                    headerStyle="width: 5rem; text-align: center"
                    bodyStyle="text-align: center; overflow: visible"
                  >
                    <template #body="{ data }">
                      <Button
                        type="button"
                        icon="pi pi-expand"
                        @click="editParent(data)"
                        style="font-size: 0.7rem"
                        rounded
                      />
                    </template>
                  </Column> </DataTable
              ></TabPanel>
              <TabPanel>
                <template #header>
                  Request
                  <Badge
                    :value="requestsList().length"
                    severity="success"
                  ></Badge>
                </template>
                <DataTable
                  v-model:filters="filters"
                  v-model:selection="selectedParent"
                  selectionMode="single"
                  :value="requestsList()"
                  stateStorage="session"
                  ref="dt"
                  sortMode="multiple"
                  showGridlines
                  removableSort
                  paginator
                  :rows="5"
                  dataKey="id"
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  :globalFilterFields="[
                    'data.parent',
                    'data.student',
                    'data.category',
                    'data.status',
                  ]"
                  filterDisplay="menu"
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <template #paginatorend>
                    <Button
                      type="button"
                      @click="exportCSV($event)"
                      icon="pi pi-download"
                      text
                    />
                  </template>

                  <template #header>
                    <div class="row">
                      <div class="col text-start">
                        <h2 class="">Parents</h2>
                      </div>
                      <div class="col">
                        <IconField iconPosition="right">
                          <InputIcon>
                            <i class="pi pi-search" />
                          </InputIcon>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                          />
                        </IconField>
                      </div>
                    </div>
                  </template>
                  <template #empty> No Parent found. </template>
                  <template #loading>
                    Loading clients data. Please wait.
                  </template>
                  <Column field="data.parent" header="Client" sortable>
                    <template #body="{ data }">
                      {{ data.data.parent }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column field="data.student" header="Ward" sortable>
                    <template #body="{ data }">
                      {{ data.data.student }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.fees"
                    header="Fees"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      {{ data.data.fees }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="number"
                        class="p-column-filter"
                        placeholder="Search by amount"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.weeklySession"
                    header="Session"
                    sortable
                    bodyClass="text-center"
                  ></Column>

                  <Column field="data.contact" header="Contact"></Column>

                  <Column
                    field="data.status"
                    header="Status"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      <Tag
                        :value="data.data.status"
                        :severity="getSeverity(data.status)"
                      />
                    </template>
                    <template #filter="{ filterModel }">
                      <Dropdown
                        v-model="filterModel.value"
                        :options="statuses"
                        placeholder="Select One"
                        class="p-column-filter"
                        showClear
                      >
                        <template #option="slotProps">
                          <Tag
                            :value="slotProps.option"
                            :severity="getSeverity(slotProps.option)"
                          />
                        </template>
                      </Dropdown> </template
                  ></Column>

                  <Column
                    header="Action"
                    headerStyle="width: 5rem; text-align: center"
                    bodyStyle="text-align: center; overflow: visible"
                  >
                    <template #body="{ data }">
                      <Button
                        type="button"
                        icon="pi pi-expand"
                        @click="editParent(data)"
                        style="font-size: 0.7rem"
                        rounded
                      />
                    </template>
                  </Column> </DataTable
              ></TabPanel>
              <TabPanel>
                <template #header>
                  Completed
                  <Badge
                    :value="completedList().length"
                    severity="success"
                  ></Badge>
                </template>
                <DataTable
                  v-model:filters="filters"
                  v-model:selection="selectedParent"
                  selectionMode="single"
                  :value="completedList()"
                  stateStorage="session"
                  ref="dt"
                  sortMode="multiple"
                  showGridlines
                  removableSort
                  paginator
                  :rows="5"
                  dataKey="id"
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  :globalFilterFields="[
                    'data.parent',
                    'data.student',
                    'data.category',
                    'data.status',
                  ]"
                  filterDisplay="menu"
                  :loading="loading"
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <template #paginatorend>
                    <Button
                      type="button"
                      @click="exportCSV($event)"
                      icon="pi pi-download"
                      text
                    />
                  </template>

                  <template #header>
                    <div class="row">
                      <div class="col text-start">
                        <h2 class="">Parents</h2>
                      </div>
                      <div class="col">
                        <IconField iconPosition="right">
                          <InputIcon>
                            <i class="pi pi-search" />
                          </InputIcon>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                          />
                        </IconField>
                      </div>
                    </div>
                  </template>
                  <template #empty> No Parent found. </template>
                  <template #loading>
                    Loading clients data. Please wait.
                  </template>
                  <Column field="data.parent" header="Client" sortable>
                    <template #body="{ data }">
                      {{ data.data.parent }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column field="data.student" header="Ward" sortable>
                    <template #body="{ data }">
                      {{ data.data.student }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.fees"
                    header="Fees"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      {{ data.data.fees }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="number"
                        class="p-column-filter"
                        placeholder="Search by amount"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.weeklySession"
                    header="Session"
                    sortable
                    bodyClass="text-center"
                  ></Column>

                  <Column field="data.contact" header="Contact"></Column>

                  <Column
                    field="data.status"
                    header="Status"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      <Tag
                        :value="data.data.status"
                        :severity="getSeverity(data.status)"
                      />
                    </template>
                    <template #filter="{ filterModel }">
                      <Dropdown
                        v-model="filterModel.value"
                        :options="statuses"
                        placeholder="Select One"
                        class="p-column-filter"
                        showClear
                      >
                        <template #option="slotProps">
                          <Tag
                            :value="slotProps.option"
                            :severity="getSeverity(slotProps.option)"
                          />
                        </template>
                      </Dropdown> </template
                  ></Column>

                  <Column
                    header="Action"
                    headerStyle="width: 5rem; text-align: center"
                    bodyStyle="text-align: center; overflow: visible"
                  >
                    <template #body="{ data }">
                      <Button
                        type="button"
                        icon="pi pi-expand"
                        @click="editParent(data)"
                        style="font-size: 0.7rem"
                        rounded
                      />
                    </template>
                  </Column> </DataTable
              ></TabPanel>
              <TabPanel>
                <template #header>
                  Terminated
                  <Badge
                    :value="terminatesList().length"
                    severity="danger"
                  ></Badge>
                </template>
                <DataTable
                  v-model:filters="filters"
                  v-model:selection="selectedParent"
                  selectionMode="single"
                  :value="terminatesList()"
                  stateStorage="session"
                  ref="dt"
                  sortMode="multiple"
                  showGridlines
                  removableSort
                  paginator
                  :rows="5"
                  dataKey="id"
                  :rowsPerPageOptions="[5, 10, 20, 50]"
                  :globalFilterFields="[
                    'data.parent',
                    'data.student',
                    'data.category',
                    'data.status',
                  ]"
                  filterDisplay="menu"
                  :loading="loading"
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <template #paginatorend>
                    <Button
                      type="button"
                      @click="exportCSV($event)"
                      icon="pi pi-download"
                      text
                    />
                  </template>

                  <template #header>
                    <div class="row">
                      <div class="col text-start">
                        <h2 class="">Parents</h2>
                      </div>
                      <div class="col">
                        <IconField iconPosition="right">
                          <InputIcon>
                            <i class="pi pi-search" />
                          </InputIcon>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                          />
                        </IconField>
                      </div>
                    </div>
                  </template>
                  <template #empty> No Parent found. </template>
                  <template #loading>
                    Loading clients data. Please wait.
                  </template>
                  <Column field="data.parent" header="Client" sortable>
                    <template #body="{ data }">
                      {{ data.data.parent }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column field="data.student" header="Ward" sortable>
                    <template #body="{ data }">
                      {{ data.data.student }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="p-column-filter"
                        placeholder="Search by name"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.fees"
                    header="Fees"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      {{ data.data.fees }}
                    </template>
                    <template #filter="{ filterModel }">
                      <InputText
                        v-model="filterModel.value"
                        type="number"
                        class="p-column-filter"
                        placeholder="Search by amount"
                      />
                    </template>
                  </Column>
                  <Column
                    field="data.weeklySession"
                    header="Session"
                    sortable
                    bodyClass="text-center"
                  ></Column>

                  <Column field="data.contact" header="Contact"></Column>

                  <Column
                    field="data.status"
                    header="Status"
                    sortable
                    bodyClass="text-center"
                  >
                    <template #body="{ data }">
                      <Tag
                        :value="data.data.status"
                        :severity="getSeverity(data.status)"
                      />
                    </template>
                    <template #filter="{ filterModel }">
                      <Dropdown
                        v-model="filterModel.value"
                        :options="statuses"
                        placeholder="Select One"
                        class="p-column-filter"
                        showClear
                      >
                        <template #option="slotProps">
                          <Tag
                            :value="slotProps.option"
                            :severity="getSeverity(slotProps.option)"
                          />
                        </template>
                      </Dropdown> </template
                  ></Column>

                  <Column
                    header="Action"
                    headerStyle="width: 5rem; text-align: center"
                    bodyStyle="text-align: center; overflow: visible"
                  >
                    <template #body="{ data }">
                      <Button
                        type="button"
                        icon="pi pi-expand"
                        @click="editParent(data)"
                        style="font-size: 0.7rem"
                        rounded
                      />
                    </template>
                  </Column> </DataTable
              ></TabPanel>
            </TabView>
          </div>

          <!-- PROSPECTS LIST -->
          <div class="card mx-4">
            <DataTable> </DataTable>
          </div>

          <!-- PARENT DIALOG -->
          <Dialog
            v-model:visible="parentDialog"
            maximizable
            :style="{ width: '470px' }"
            header="Parent Details"
            :modal="true"
            :pt="{
              root: 'border-none',
              mask: {
                style: 'backdrop-filter: blur(2px)',
              },
            }"
            class="p-fluid"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
          >
            <TabView>
              <TabPanel>
                <template #header>
                  <Button label="Detail" class="link" />
                </template>
                <div class="container-fluid">
                  <div class="row text-start">
                    <div class="bg-success my-2 text-white py-2 fw-bolder">
                      Personal Information
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Parent:</strong>
                        {{ selectedParent ? selectedParent.data.parent : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Contact:</strong>
                        {{
                          selectedParent ? selectedParent.data.altContact : ""
                        }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Student:</strong>
                        {{ selectedParent ? selectedParent.data.student : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>DoB:</strong>
                        {{ selectedParent ? selectedParent.data.DoB : "" }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Sex:</strong>
                        {{ selectedParent ? selectedParent.data.sex : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Started:</strong>
                        {{
                          selectedParent
                            ? selectedParent.data.starting_date
                            : ""
                        }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Status:</strong>
                        {{ selectedParent ? selectedParent.data.status : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Address: </strong>
                        {{ selectedParent ? selectedParent.data.address : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Level:</strong>
                        {{
                          selectedParent ? selectedParent.data.schoolName : ""
                        }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Level:</strong>
                        {{ selectedParent ? selectedParent.data.level : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Class:</strong>
                        {{ selectedParent ? selectedParent.data.class : "" }}
                      </p>
                    </div>

                    <div class="bg-success text-white py-2 fw-bolder my-2">
                      Tutorial Preferences
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Fees:</strong>
                        {{ selectedParent ? selectedParent.data.fees : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Mode:</strong>
                        {{
                          selectedParent
                            ? selectedParent.data.modeOfTeaching
                            : ""
                        }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>weekly Session:</strong>
                        {{
                          selectedParent
                            ? selectedParent.data.weeklySession
                            : ""
                        }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Category:</strong>
                        {{ selectedParent ? selectedParent.data.category : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Challenges:</strong>
                        {{
                          selectedParent ? selectedParent.data.challenge : ""
                        }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Tuition Subjects:</strong>
                        {{
                          selectedParent
                            ? selectedParent.data.preferredSubjects
                            : ""
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <template #header>
                  <Button label="Update" class="link" />
                </template>
                <!-- Contract Update -->
                <div class="container-fluid text-start">
                  <form @submit.prevent="updateParentData">
                    <div class="row text-start">
                      <div class="bg-success text-white py-2 fw-bolder my-3">
                        Update Contract
                      </div>
                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Status</label>
                            </div>

                            <div>
                              {{
                                selectedParent
                                  ? selectedParent.data.status
                                  : "Status"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <label for="status">Status</label>
                            <select
                              class="apply-input"
                              v-model.trim="contractUpdate.status"
                            >
                              <option value="active">Active</option>
                              <option value="suspended">Suspended</option>
                              <option value="completed">Completed</option>
                              <option value="terminated">Terminated</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>

                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Sessions</label>
                            </div>

                            <div>
                              {{
                                selectedParent
                                  ? selectedParent.data.weeklySession
                                  : "Sessions"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <label for="sessions">Sessions</label>
                            <select
                              class="apply-input"
                              v-model.number="contractUpdate.weeklySession"
                            >
                              <option value="2">Once</option>
                              <option value="3">Twice</option>
                              <option value="4">Thrice</option>
                              <option value="5">Four Times</option>
                              <option value="6">Five Times</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>
                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Fee</label>
                            </div>

                            <div>
                              {{
                                selectedParent
                                  ? selectedParent.data.fees
                                  : "Fees"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <label for="fees">Fees</label>
                            <input
                              type="number"
                              class="apply-input"
                              v-model.number="contractUpdate.weeklySession"
                            />
                          </template>
                        </Inplace>
                      </div>
                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Discount</label>
                            </div>

                            <div>
                              {{
                                selectedParent
                                  ? selectedParent.data.discount
                                  : "Discount"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <div class="fw-bolder text-start">
                              <label for="fees">Discount</label>
                            </div>
                            <input
                              type="number"
                              class="apply-input"
                              v-model.number="contractUpdate.discount"
                            />
                          </template>
                        </Inplace>
                      </div>
                    </div>
                    <div>{{ parentUpdateFeedback }}</div>
                    <div class="text-end">
                      <button class="btn btn-success my-3" type="submit">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
                <template #header>
                  <Button label="Tutor" class="link" />
                </template>
                <div class="container-fluid">
                  <!-- Tutor Assign -->
                  <div class="container-fluid text-start">
                    <div class="row">
                      <div class="bg-success my-3 py-2 text-white">
                        Update Information
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <Inplace>
                              <template #display>
                                <div class="text-start fw-bolder">
                                  <label for="">Tutor</label>
                                </div>
                                {{
                                  selectedParent
                                    ? selectedParent.data.tutor
                                    : "Name"
                                }}
                              </template>
                              <template #content="{ closeCallback }">
                                <InputText v-model="text" autofocus />
                                <Button
                                  icon="pi pi-times"
                                  text
                                  severity="danger"
                                  @click="closeCallback"
                                />
                              </template>
                            </Inplace>
                          </div>
                          <div class="col-lg-6">
                            <Inplace>
                              <template #display>
                                <div class="text-start fw-bolder">
                                  <label for="">Contact</label>
                                </div>

                                {{
                                  selectedParent
                                    ? selectedParent.data.contact
                                    : "Contact"
                                }}
                              </template>
                              <template #content="{ closeCallback }">
                                <InputText v-model="text" autofocus />
                                <Button
                                  icon="pi pi-times"
                                  text
                                  severity="danger"
                                  @click="closeCallback"
                                />
                              </template>
                            </Inplace>
                          </div>
                          <div class="col-lg-6">
                            <Inplace>
                              <template #display>
                                <div class="text-start fw-bolder">
                                  <label for="">Pay</label>
                                </div>
                                {{
                                  selectedParent
                                    ? selectedParent.data.remuneration
                                    : "Pay"
                                }}
                              </template>
                              <template #content="{ closeCallback }">
                                <InputText v-model="text" autofocus />
                                <Button
                                  icon="pi pi-times"
                                  text
                                  severity="danger"
                                  @click="closeCallback"
                                />
                              </template>
                            </Inplace>
                          </div>
                          <div class="col-lg-6">
                            <Inplace>
                              <template #display>
                                <div class="text-start fw-bolder">
                                  <label for="">Momo Number</label>
                                </div>

                                <div>
                                  {{
                                    selectedParent
                                      ? selectedParent.data.momo_number
                                      : "Momo No"
                                  }}
                                </div>
                              </template>
                              <template #content="{ closeCallback }">
                                <InputText v-model="text" autofocus />
                                <Button
                                  icon="pi pi-times"
                                  text
                                  severity="danger"
                                  @click="closeCallback"
                                />
                              </template>
                            </Inplace>
                          </div>

                          <div class="text-end my-3">
                            <button class="btn btn-success">Update</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabView>

            <template #footer>
              <Button
                label="Cancel"
                icon="pi pi-ban"
                text
                @click="hideParentDialog"
              />
              <Button
                label="Delete"
                icon="pi pi-times"
                text
                @click="deleteParent"
              />
            </template>
          </Dialog>

          <!-- Toast to show update -->
          <div class="toast-container position-static">
            <div
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="" class="rounded me-2" alt="" />
                <strong class="me-auto">Message</strong>
                <small class="text-body-secondary">Status</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">See? Just like this.</div>
            </div>

            <div
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="" class="rounded me-2" alt="" />
                <strong class="me-auto">Updated</strong>
                <small class="text-body-secondary">Status</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">
                Heads up, toasts will stack automatically
              </div>
            </div>
          </div>

          <!-- FINANCE TABLE -->
          <section v-if="financeSection">
            <!-- FINANCE TABLE -->

            <div class="container-fluid">
              <div class="row my-lg-4 my-5 pt-3">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="revenue shadow-two bg-white hover">
                    <h4>Tutor Pay</h4>
                    <h5>{{ applicantsList().length }}</h5>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="tutor shadow-two bg-white hover">
                    <h4>Revenue</h4>
                    <h5>{{ lifelineRevenue }}</h5>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="client shadow-two bg-white hover">
                    <h4>Deductions</h4>
                    <h5>{{ clientsList().length }}</h5>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="profit shadow-two bg-white hover">
                    <h4>Considerations</h4>
                    <h5>{{ requestsList().length }}</h5>
                  </div>
                </div>
              </div>

              <DataTable
                :value="tutors"
                tableStyle="min-width: 50rem"
                selectionMode="single"
                paginator
                :rows="5"
                dataKey="email"
                :rowsPerPageOptions="[5, 10, 20, 50]"
                paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
              >
                <Column field="lastName" header="Last Name"></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="student" header="Student"></Column>
                <Column field="student" header="Consideration">
                  <Inplace>
                    <template #display>
                      <div class="text-start fw-bolder">
                        <h6>Testing Code</h6>
                        <div>{{ selectedParent ? "0000" : "000.00" }}</div>
                      </div>
                    </template>
                    <template #content>
                      <InputText
                        type="text"
                        class="apply-input"
                        v-model.trim="contractUpdate.status"
                      />
                    </template>
                  </Inplace>
                </Column>
                <Column field="student" header="Deduction"></Column>
                <Column field="student" header="Payable"></Column>
                <Column field="student" header="Month"></Column>
                <Column field="contact" header="Contact"></Column>
                <Column field="student" header="Status"></Column>
              </DataTable>
            </div>
          </section>

          <!-- TUTORS PANEL -->
          <div class="card my-3 mx-4" v-if="tutorTable">
            <DataTable
              v-model:filters="tutorFilter"
              v-model:selection="selectedTutor"
              stateStorage="session"
              selectionMode="single"
              :value="tutors"
              ref="tt"
              sortMode="multiple"
              showGridlines
              removableSort
              paginator
              :rows="5"
              dataKey="email"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              :globalFilterFields="['firstName', 'lastName', 'contact']"
              filterDisplay="menu"
              :loading="loading"
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
              </template>
              <template #paginatorend>
                <Button
                  type="button"
                  @click="exportCS($event)"
                  icon="pi pi-download"
                  text
                />
              </template>

              <template #header>
                <div class="row">
                  <TabView>
                    <TabPanel header="Tutors"></TabPanel>
                    <TabPanel header="Applicants"></TabPanel>
                    <TabPanel header="Disqualified"></TabPanel>
                    <TabPanel header="Pending"></TabPanel>
                  </TabView>
                  <div class="col text-start d-flex">
                    <h2 class="">Tutors</h2>
                    <div class="mt-1 mx-2"></div>
                  </div>
                  <div class="col">
                    <IconField>
                      <InputText
                        v-model="tutorFilter['global'].value"
                        placeholder="Keyword Search"
                      />
                    </IconField>
                  </div>
                </div>
              </template>
              <template #empty> No Tutor found. </template>
              <template #loading> Loading tutors data. Please wait. </template>

              <Column field="lastName" header="Last Name" sortable>
                <template #body="{ data }">
                  {{ data.lastName }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column field="firstName" header="First Name" sortable>
                <template #body="{ data }">
                  {{ data.firstName }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>

              <Column
                field="studentStatus"
                header="Education"
                sortable
              ></Column>

              <Column
                field="category"
                header="Category"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  <Tag
                    :value="data.category"
                    :severity="getSeverity(data.status)"
                  />
                </template>
                <template #filter="{ filterModel }">
                  <Dropdown
                    v-model="filterModel.value"
                    :options="category"
                    placeholder="Select One"
                    class="p-column-filter"
                    showClear
                  >
                    <template #option="slotProps">
                      <Tag
                        :value="slotProps.option"
                        :severity="getSeverity(slotProps.option)"
                      />
                    </template>
                  </Dropdown>
                </template>
              </Column>

              <Column
                field="contact"
                header="Contact"
                bodyClass="text-center"
              ></Column>

              <Column
                field="status"
                header="Status"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  <Tag
                    :value="data.status"
                    :severity="getSeverity(data.status)"
                  />
                </template>
                <template #filter="{ filterModel }">
                  <Dropdown
                    v-model="filterModel.value"
                    :options="status"
                    placeholder="Select One"
                    class="p-column-filter"
                  >
                    <template #option="slotProps">
                      <Tag
                        :value="slotProps.option"
                        :severity="getSeverity(slotProps.option)"
                      />
                    </template>
                  </Dropdown> </template
              ></Column>

              <Column
                header="Action"
                headerStyle="width: 5rem; text-align: center"
                bodyStyle="text-align: center; overflow: visible"
              >
                <template #body="{ data }">
                  <Button
                    type="button"
                    icon="pi pi-align-center"
                    @click="editTutor(data)"
                    style="font-size: 0.7rem"
                    rounded
                  />
                </template>
              </Column>
            </DataTable>

            <!-- TUTOR DIALOG -->
            <Dialog
              v-model:visible="tutorDialog"
              maximizable
              :style="{ width: '450px' }"
              header="Tutor Details"
              :modal="true"
              :pt="{
                root: 'border-none',
                mask: {
                  style: 'backdrop-filter: blur(2px)',
                },
              }"
              class="p-fluid"
              :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
            >
              <TabView>
                <TabPanel header="Detail">
                  <div class="container-fluid">
                    <div class="row text-start mx-1">
                      <div class="bg-success my-2 text-white py-2 fw-bolder">
                        Personal Details
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Name:
                            {{ selectedTutor ? selectedTutor.lastName : "" }}
                            {{
                              selectedTutor ? selectedTutor.firstName : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small>{{
                            selectedTutor ? selectedTutor.email : ""
                          }}</small>
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >DoB:
                            {{ selectedTutor ? selectedTutor.DoB : "" }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Mobile:
                            {{
                              selectedTutor ? selectedTutor.contact : ""
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Category:
                            {{
                              selectedTutor ? selectedTutor.category : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Status:
                            {{
                              selectedTutor ? selectedTutor.status : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Area:
                            {{
                              selectedTutor ? selectedTutor.location : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >GPS:
                            {{ selectedTutor ? selectedTutor.gps : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="bg-success text-white py-2 fw-bolder my-2">
                        Qualification
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Type:
                            {{
                              selectedTutor ? selectedTutor.studentStatus : ""
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Course:
                            {{ selectedTutor ? selectedTutor.coursing : "" }}
                            {{
                              selectedTutor ? selectedTutor.coursed : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Qualification:
                            {{
                              selectedTutor ? selectedTutor.qualification : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Level:
                            {{
                              selectedTutor ? selectedTutor.level : "N/A"
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Momo:
                            {{
                              selectedTutor ? selectedTutor.momo_number : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >School:
                            {{
                              selectedTutor
                                ? selectedTutor.school_attending
                                : ""
                            }}
                            {{
                              selectedTutor ? selectedTutor.schoolCompleted : ""
                            }}
                          </small>
                        </p>
                      </div>

                      <div class="bg-success text-white py-2 fw-bolder my-2">
                        Level of Expertise
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Lower Pri:
                            {{
                              selectedTutor ? selectedTutor.lower_primary : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Upper Pri:
                            {{
                              selectedTutor ? selectedTutor.upper_primary : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >JHS:
                            {{ selectedTutor ? selectedTutor.JHS : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >SHS:
                            {{ selectedTutor ? selectedTutor.SHS : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="bg-success text-white py-2 fw-bolder">
                        Other Details
                      </div>
                      <div class="col-lg-12">
                        <p>
                          <small>
                            Accessible Areas:
                            {{
                              selectedTutor
                                ? selectedTutor.accessibleLocations
                                : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-12">
                        <p>
                          <small
                            >Motivation:
                            {{
                              selectedTutor ? selectedTutor.motivation : ""
                            }}</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel header="Status">
                  <form class="text-start" @submit.prevent="verdict">
                    <div class="bg-success text-white py-2 fw-bolder px-2 mb-3">
                      Tutor Status
                    </div>
                    <div class="row text-start">
                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Status</label>
                            </div>

                            <div>
                              {{
                                selectedTutor ? selectedTutor.status : "Status"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <label for="status">Status</label>
                            <select
                              class="apply-input"
                              v-model.trim="contractUpdate.status"
                            >
                              <option value="active">Active</option>
                              <option value="suspended">Suspended</option>
                              <option value="completed">Completed</option>
                              <option value="terminated">Terminated</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>

                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Rating</label>
                            </div>

                            <div>
                              {{
                                selectedTutor ? selectedTutor.rating : "Status"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <div class="text-start fw-bolder">
                              <label for="">Rating</label>
                            </div>
                            <select
                              class="apply-input"
                              name="ratings"
                              v-model="tutorUpdate.rating"
                            >
                              <option value="A+">A+</option>
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C+">C+</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>

                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Category</label>
                            </div>

                            <div>
                              {{
                                selectedTutor
                                  ? selectedTutor.category
                                  : "Category"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <div class="text-start fw-bolder">
                              <label for="">Category</label>
                            </div>
                            <select
                              name="category"
                              class="apply-input"
                              v-model="tutorUpdate.category"
                            >
                              <option value="tutor">Tutor</option>
                              <option value="applicant">Applicant</option>
                              <option value="pending">pending</option>
                              <option value="disqualified">disqualified</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>

                      <div class="col-lg-6">
                        <Inplace>
                          <template #display>
                            <div class="text-start fw-bolder">
                              <label for="">Student Status</label>
                            </div>

                            <div>
                              {{
                                selectedTutor
                                  ? selectedTutor.studentStatus
                                  : "Type"
                              }}
                            </div>
                          </template>
                          <template #content>
                            <div class="text-start fw-bolder">
                              <label for="">Type</label>
                            </div>
                            <select
                              class="apply-input"
                              v-model="tutorUpdate.qualification"
                            >
                              <option value="Graduate">Graduate</option>
                              <option value="Undergraduate">
                                UnderGraduate
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </template>
                        </Inplace>
                      </div>

                      <div class="col-lg-12">
                        <div class="card my-3">
                          <Editor
                            v-model="tutorUpdate.comment"
                            editorStyle="height: 120px"
                          />
                        </div>
                      </div>

                      <!-- BUTTON -->
                      <div
                        class="py-3 d-lg-flex justify-content-end pe-lg-3 modal-footer"
                      >
                        <button class="btn btn-success me-lg-3">
                          Update<i class="pi pi-check-circle"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </TabPanel>

                <TabPanel header="Contract">
                  <form class="text start" @submit.prevent="awardContract">
                    <div class="bg-success text-white py-2 fw-bolder px-2 mb-3">
                      Contract Award
                    </div>
                    <div class="row text-start">
                      <div class="col-lg-6">
                        <small>
                          <label for="parent">Parent</label>
                          <inputText
                            type="text"
                            v-model="tutorContract.parent"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Contact">Contact</label>
                          <inputText
                            type="text"
                            v-model="tutorContract.contact"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Student">Student</label>
                          <InputText
                            type="text"
                            v-model="tutorContract.student"
                          />
                          <!-- <input
                            class="apply-input"
                            type="text"
                            v-model="tutorContract.student"
                          /> -->
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Class">Class</label>
                          <InputText
                            type="text"
                            v-model="tutorContract.class"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Remuneration">Remuneration</label>
                          <InputText
                            type="number"
                            v-model.number="tutorContract.pay"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Date">Date</label>
                          <InputText type="date" v-model="tutorContract.date" />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Sessions Per Week"
                            >Sessions Per Week</label
                          >
                          <InputText
                            type="number"
                            v-model.number="tutorContract.weeklySession"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Meeting Days">Meeting Days</label>
                          <div class="card flex justify-center">
                            <MultiSelect
                              v-model="tutorContract.tuitionDays"
                              :options="selectTuitionDays"
                              optionLabel="name"
                              display="chip"
                              filter
                              placeholder="Select Meeting Days"
                              :maxSelectedLabels="7"
                              class="w-full md:w-80"
                            />
                          </div>
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Starting">Starting Date</label>
                          <inputText
                            type="month"
                            v-model="tutorContract.starting"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Period Length">Period Length</label>
                          <inputText
                            type="number"
                            v-model.number="tutorContract.periodLength"
                          />
                        </small>
                      </div>
                      <div class="col-lg-6">
                        <small>
                          <label for="Status">Contract Status</label>
                          <!-- <Select
                            v-model="tutorContract.status"
                            :options="tutorContractState"
                            optionLabel="name"
                            placeholder="Contract State"
                            class="w-full md:w-56"
                          /> -->
                          <select
                            class="apply-input"
                            v-model="tutorContract.status"
                          >
                            <option value="to begin">To Begin</option>
                            <option value="active">Active</option>
                            <option value="paused">Paused</option>
                            <option value="Terminated">Terminated</option>
                          </select>
                        </small>
                      </div>
                      <div class="col-lg-12">
                        <small>
                          <div class="card my-3">
                            <label for="Objective(s):" class="py-2 ps-1"
                              >Tuition Objective(s):</label
                            >
                            <Editor
                              editorStyle="height: 120px"
                              v-model="tutorContract.objectives"
                            />
                          </div>
                        </small>
                      </div>
                      <div class="text-end">
                        <button class="btn btn-danger me-2" type="reset">
                          Reset
                        </button>
                        <button class="btn btn-success" type="submit">
                          <i class="pi pi-check-circle"></i> Update
                        </button>
                      </div>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel></TabPanel>
              </TabView>

              <!-- Footer Side -->
              <template #footer>
                <Button
                  label="Cancel"
                  icon="pi pi-times"
                  text
                  @click="hideTutorDialog"
                />
                <!-- <Button
                  label="Save"
                  icon="pi pi-check"
                  text
                  @click="saveTutorDialog"
                /> -->
              </template>
            </Dialog>
          </div>

          <!-- UPLOADS SECTION -->
          <div class="card my-5" v-if="uploadsSection">
            <TabView>
              <TabPanel header="Offer"
                ><section class="shadow-two my-3 row">
                  <div class="col-lg-6 d-none d-lg-block pb-5 bg-success"></div>
                  <div class="col-lg-6 shadow-two bg-white row text-start">
                    <form @submit.prevent="uploadOffer" class="row">
                      <h4 class="my-lg-4 my-2">OFFER UPLOADS</h4>
                      <div class="col-lg-6">
                        <label for="">Contract Type:</label> <br />
                        <select
                          name="type"
                          v-model.number="offer.type"
                          class="form-control shadow-two"
                        >
                          <option disabled>Select offer</option>
                          <option value="2">DUO</option>
                          <option value="3">TRI</option>
                          <option value="4">QUAD</option>
                          <option value="5">PENT</option>
                        </select>
                      </div>

                      <div class="col-lg-6">
                        <label class="" for="">Mode:</label> <br />
                        <select
                          name="mode"
                          v-model="offer.mode"
                          class="form-control shadow-two"
                        >
                          <option value="">MODE OF TUITION</option>
                          <option value="online">Online</option>
                          <option value="in-person">In-Person</option>
                        </select>
                      </div>

                      <div class="col-lg-6">
                        <label for="">Level:</label> <br />
                        <select
                          v-model="offer.level"
                          class="form-control shadow-two"
                        >
                          <option disabled>Level of student</option>
                          <option value="KG">Kindergarten</option>
                          <option value="PRIMARY">Primary</option>
                          <option value="JHS">JHS</option>
                          <option value="SHS">SHS</option>
                        </select>
                      </div>

                      <div class="col-lg-6">
                        <label for="">Class:</label> <br />
                        <input
                          class="form-control shadow-two"
                          type="text"
                          v-model="offer.class"
                          placeholder="CLASS"
                        />
                      </div>

                      <div class="col-lg-12">
                        <label for="">Subjects:</label> <br />
                        <textarea
                          name="subjects"
                          v-model="offer.subjects"
                          class="form-control shadow-two"
                          placeholder="TUITION SUBJECT(S)"
                        ></textarea>
                      </div>

                      <div class="col-lg-6">
                        <label for="">Lesson Duration</label> <br />
                        <select
                          name="duration"
                          v-model.number="offer.duration"
                          class="form-control shadow-two"
                        >
                          <option disabled>Select Duration</option>
                          <option value="1">1 hour</option>
                          <option value="1.5">1.5 hrs</option>
                          <option value="2">2 hrs</option>
                          <option value="2.5">2.5 hrs</option>
                          <option value="3">3 hrs</option>
                        </select>
                      </div>

                      <div class="col-lg-6">
                        <label for="">Location:</label> <br />
                        <input
                          class="form-control shadow-two"
                          type="text"
                          name="location"
                          v-model="offer.location"
                          placeholder="Location"
                        />
                      </div>

                      <div class="col-lg-12">
                        <label for="">Allowance</label> <br />
                        <input
                          class="form-control shadow-two"
                          type="text"
                          name="allowance"
                          v-model.number="offer.allowance"
                          placeholder="ALLOWANCE"
                        />
                      </div>

                      <button
                        class="btn btn-success my-lg-4 my-3 shadow-two"
                        type="submit"
                      >
                        POST CONTRACT
                      </button>
                    </form>
                  </div>
                </section>
              </TabPanel>
              <TabPanel header="Notice">
                <section class="shadow-two my-3 row">
                  <div class="col-lg-6 d-none d-lg-block pb-5 bg-success"></div>
                  <div class="col-lg-6 shadow-two bg-white">
                    <h4 class="my-lg-3">NOTICE BOARD</h4>
                    <form @submit.prevent="uploadNotice" class="">
                      <div class="my-4">
                        <label
                          class="d-flex justify-content-start"
                          for="News Title"
                          >TITLE</label
                        >

                        <input
                          class="shadow-one form-control"
                          type="text"
                          name="title"
                          v-model="notice.title"
                          placeholder="Notice Title"
                        />
                      </div>

                      <div class="my-4">
                        <label class="label" for="News Title">DATE</label>
                        <input
                          class="shadow-one form-control"
                          type="date"
                          v-model="notice.Date_Issued"
                          name="Date_Issued"
                          placeholder="Select Date"
                        />
                      </div>

                      <div class="my-4">
                        <label for="message" class="label">MESSAGE</label>
                        <textarea
                          class="form-control shadow-one"
                          name="message"
                          v-model="notice.message"
                          placeholder="Enter notice"
                        ></textarea>
                      </div>
                      <!-- <input type="text" name="news" placeholder="News" /> -->
                      <div class="my-4">
                        <button
                          class="btn btn-success shadow-one my-3"
                          type="submit"
                        >
                          SEND NOTICE
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </TabPanel>
              <TabPanel header="Email">
                <section class="shadow-two my-lg-4 row">
                  <div
                    class="col-lg-6 d-none d-lg-block pb-5 shadow-two bg-success"
                  ></div>
                  <div class="col-lg-6 shadow-two bg-white">
                    <h4 class="my-lg-4">EMAIL</h4>
                    <!-- <h3 class="py-1">NOTICE</h3> -->
                    <form @submit.prevent="sendEmail" class="">
                      <div class="my-4">
                        <label for="sendTo" class="label">EMAIL</label>
                        <input
                          type="text"
                          class="form-control shadow-one"
                          v-model="email.to"
                        />
                      </div>

                      <div class="my-4">
                        <label
                          class="d-flex justify-content-start"
                          for="News Title"
                          >SUBJECT</label
                        >

                        <input
                          class="form-control shadow-one"
                          type="text"
                          name="subject"
                          v-model="email.subject"
                          placeholder="Enter email subject"
                        />
                      </div>

                      <div class="my-4">
                        <label class="label" for="News Title">DATE</label>
                        <input
                          class="form-control shadow-one"
                          type="date"
                          name="date"
                          v-model="email.date"
                          placeholder="Enter date"
                        />
                      </div>

                      <div class="my-4">
                        <label for="message" class="label">MESSAGE</label>
                        <Editor
                          v-model="email.message"
                          editorStyle="height: 120px"
                          class="form-control shadow-one"
                          name="message"
                          placeholder="Enter Email Message"
                        />
                      </div>

                      <div class="text-success my-2" id="responseMessage"></div>

                      <!-- <input type="text" name="news" placeholder="News" /> -->
                      <div class="my-3">
                        <button
                          class="btn btn-success shadow-one"
                          type="submit"
                          id="adminEmail"
                        >
                          SEND EMAIL
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </TabPanel>
            </TabView>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  middleware: "admin-auth",
  layout: "default",
});
// import { Axios } from "axios";
import Form from "@/components/Form.vue";
import Dialog from "primevue/dialog";
import ScrollTop from "primevue/scrolltop";
import ConfirmDialog from "primevue/confirmdialog";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Menu from "primevue/menu";
import { PrimeIcons } from "primevue/api";
import Chart from "primevue/chart";
import Editor from "primevue/editor";
// import { useToast } from "primevue/usetoast";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  query,
  setDoc,
  where,
  serverTimestamp,
  updateDoc,
  deleteField,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
  authDomain: "lifeline-edu-site.firebaseapp.com",
  projectId: "lifeline-edu-site",
  storageBucket: "lifeline-edu-site.appspot.com",
  messagingSenderId: "1059969595497",
  appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
// const toast = useToast();

export default {
  name: "Admin Page",
  components: {
    Form,
  },

  data() {
    return {
      wideScreen: false,
      dashboard: true,
      chartData: null,
      chartOptions: null,
      parentTable: false,
      uploadsSection: true,
      tutorTable: false,
      applicantsTable: false,
      tutorsTable: true,
      financeSection: false,
      date: null,
      visible: false,
      parentSearch: "",
      selectedParent: null,
      selectedTutor: null,
      parentDialog: false,
      tutorDialog: false,
      contractMoney: 0,
      parents: [],
      tutors: [],
      notices: [],
      messages: [],
      currentIndex: 0,
      prospects: [],
      todoList: [],
      todoItem: "",
      done: false,
      selectTuitionDays: [
        { name: "Monday", key: "Mon" },
        { name: "Tuesday", key: "Tue" },
        { name: "Wednesday", key: "Wed" },
        { name: "Thursday", key: "Thurs" },
        { name: "Friday", key: "Fri" },
        { name: "Saturday", key: "Sat" },
        { name: "Sunday", key: "Sun" },
      ],
      tutorContractState: [
        { name: "active", key: "ac" },
        { name: "completed", key: "com" },
        { name: "terminated", key: "term" },
        { name: "paused", key: "pause" },
      ],
      toastMessages: {
        message: "",
        tutorPay: "",
        parentPay: "",
      },
      DashTabMenu: [
        { label: "Dashboard", icon: "pi pi-home" },
        { label: "Graphs", icon: "pi pi-chart-line" },
        { label: "Transactions", icon: "pi pi-list" },
      ],
      AdminNavBar: [
        {
          label: "Home",
          icon: "pi pi-home",
          command: () => {
            this.$router.push("/admin");
          },
        },
        {
          label: "Features",
          icon: "pi pi-star",
          command: () => {},
        },

        {
          label: "Projects",
          icon: "pi pi-search",
          items: [
            {
              label: "Vue Js",
              icon: "pi pi-palette",
              url: "https://vuejs.org/",
            },

            { separator: true },

            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],

      links: [
        {
          separator: true,
        },
        {
          items: [
            {
              label: "Admin Summary",
              icon: "pi pi-dashboard",
              //  route: '/theming/unstyled'
              //  url: 'https://vuejs.org/'
              command: () => {
                this.dashboardView();
              },
            },
          ],
        },
        {
          label: "Tuition",
          items: [
            {
              label: "Tutors",
              icon: "pi pi-user me-2",
              command: () => {
                this.tutorTableView();
              },
            },
            {
              label: "Parents",
              icon: "pi pi-address-book me-2",
              command: () => {
                this.parentTableView();
              },
            },
            {
              label: "Finance",
              icon: "pi pi-dollar me-2",
              command: () => {
                this.financeTableView();
              },
            },
            {
              label: "Uploads",
              icon: "pi pi-dollar me-2",
              command: () => {
                this.uploadsSectionView();
              },
            },
          ],
        },
        {
          separator: true,
        },
        {
          label: "Counselling",
          items: [
            {
              label: "Clients",
              icon: "pi pi-address-book me-2",
            },

            {
              label: "Finance",
              icon: "pi pi-dollar me-2",
              badge: 2,
            },
          ],
        },
        {
          separator: true,
        },
        {
          label: "Consultancy",
          items: [
            {
              label: "Clients",
              icon: "pi pi-ethereum me-2",
            },
            {
              label: "Finance",
              icon: "pi pi-dollar me-2",
            },
          ],
        },

        {
          separator: true,
        },

        {
          label: "Logout",
          icon: "pi pi-sign-out me-2",
          command: () => {
            this.signOut();
          },
        },
      ],

      sideNav: [
        // {
        //   label: "Home",
        //   icon: "pi pi-home",
        //   command: () => {
        //     this.$router.push("/admin");
        //   },
        // },
        // {
        //   label: "Features",
        //   icon: "pi pi-star",
        //   command: () => {},
        // },
        {
          label: "Documents",
          items: [
            {
              label: "New",
              icon: "pi pi-plus",
            },
            {
              label: "Search",
              icon: "pi pi-search",
            },
          ],
        },
      ],

      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Export",
          icon: "pi pi-upload",
        },
      ],
      messageHeader: [
        { label: "Dashboard", icon: "pi pi-home" },
        { label: "Transactions", icon: "pi pi-chart-line" },
      ],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        "data.parent": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        "data.category": {
          value: null,
          matchMode: FilterMatchMode.STARTS_WITH,
        },
        "data.student": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "data.status": { value: null, matchMode: FilterMatchMode.EQUALS },
        "data.tutor": { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      tutorFilter: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        contact: { value: null, matchMode: FilterMatchMode.CONTAINS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        category: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      statuses: ["active", "paused", "completed", "terminated", "request"],
      status: ["active", "paused"],
      category: ["tutor", "applicant", "suspended", "terminated"],
      tutorContract: {
        parent: "",
        contact: "",
        student: "",
        class: "",
        challenges: "",
        objectives: "",
        starting: "",
        ended: "",
        status: "",
        pay: 0,
        meetingDays: "",
        tutorRef: "",
        tutorContact: "",
        weeklySession: "",
        periodLength: "",
        charges: 0,
        deduction: 0,
        consideration: 0,
        tuitionDays: [],
        payments: [],
        activeMonths: [],
        comments: [],
      },

      tutorUpdate: {
        qualification: "",
        rating: "",
        category: "",
        date: serverTimestamp(),
        comment: "",
      },

      offer: {
        weeklySession: 0,
        mode: "",
        level: "",
        class: "",
        availability: "available",
        subjects: "",
        duration: 0,
        location: "",
        allowance: 0,
        type: "",
      },

      notice: {
        title: "",
        Date_Issued: "",
        message: "",
      },

      email: {
        to: "",
        subject: "",
        date: "",
        message: "",
      },

      contractUpdate: {
        status: "",
        weeklySession: null,
        fees: null,
        discount: 0,
      },
    };
  },

  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("/lifeline");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async uploadNotice() {
      try {
        const notice = this.notice;
        const NoticeRef = await addDoc(collection(db, "Notices"), notice);
        console.log("Document written with ID: ", NoticeRef.id);
        this.notice.title = "";
        this.notice.message = "";
        this.notice.Date_Issued = "";
      } catch (error) {
        console.log("Error Updating Notice", error);
      }
    },

    async uploadOffer() {
      try {
        const offer = this.offer;
        const offersRef = await addDoc(collection(db, "Offers"), offer);
        console.log("Document written with ID: ", offersRef.id);
        this.offer.allowance = "";
        this.offer.location = "";
        this.offer.type = "";
        this.offer.class = "";
        this.offer.level = "";
        this.offer.mode = "";
        this.offer.duration = "";
        this.offer.subjects = "";
        this.offer.weeklySession = "";
      } catch (error) {
        console.log("Error Updating Notice", error);
      }
    },

    sendEmail() {
      try {
        const email = this.email;
        const to = this.email.to;
        const message = this.email.message;
        const subject = this.email.subject;
        const date = this.email.date;

        this.$mail.send({
          from: "Lifeline Educational Solutions",
          to: to,
          cc: "lifelineedusolutions@gmail.com",
          bcc: "shirazadnan53@gmail.com",
          subject: subject,
          text: message,
        });
        console.log("Email Sent");
        this.email.to = "";
        this.email.message = "";
        this.email.subject = "";
        this.email.date = "";
      } catch (error) {
        console.log("Sending Email Error:", error);
      }
    },

    verdict() {
      try {
        const tutor = this.selectedTutor.email;
        const form = this.tutorUpdate;
        const tutorRef = doc(db, "Tutor Applications", tutor);
        setDoc(tutorRef, form, { merge: true });
        console.log("Tutor Data Updated", tutor);
        alert("Tutor Data Updated");
      } catch (error) {
        console.log("Update Error", error);
      }
      // console.log("Interview Verdict", tutor);
      // console.log("Interview Data", form);
    },

    async awardContract() {
      try {
        const tutor = this.selectedTutor.email;
        const contract = this.tutorContract;
        const contractRef = doc(db, "Tutor Applications", tutor);

        const docSnap = await getDoc(contractRef);
        let existingContracts = [];
        if (docSnap.exists()) {
          existingContracts = docSnap.data().contracts || [];
        }

        existingContracts.push(contract);

        await setDoc(
          contractRef,
          {
            contracts: existingContracts,
          },
          { merge: true }
        );
        console.log("contract awarded", existingContracts);
      } catch (error) {
        console.log("Error Awarding Contract", error);
      }
    },

    wideScreenBtn() {
      this.wideScreen = !this.wideScreen;
    },

    exportCSV() {
      this.$refs.dt.exportCSV();
    },

    exportCS() {
      this.$refs.tt.exportCSV();
    },

    editParent(parent) {
      this.selectedParent = parent;
      this.parentDialog = true;
    },

    editTutor(tutor) {
      this.selectedTutor = tutor;
      this.tutorDialog = true;
    },

    hideParentDialog() {
      this.parentDialog = false;
    },

    hideTutorDialog() {
      this.tutorDialog = false;
    },

    saveParentDialog() {},
    saveTutorDialog() {},

    getSeverity(status) {
      switch (status) {
        case "terminated":
          return "danger";

        case "active":
          return "success";

        case "request":
          return "info";

        case "paused":
          return "warning";

        case "renewal":
          return null;
      }
    },

    addTodo() {
      this.todoList.push({ text: this.todoItem, done: false });
      this.todoItem = "";
    },

    removeTodo(index) {
      this.todoList.splice(index, 1);
    },

    dashboardView() {
      this.dashboard = true;
    },

    parentTableView() {
      this.dashboard = false;
      this.parentTable = !this.parentTable;
    },

    tutorTableView() {
      this.tutorTable = !this.tutorTable;
      this.dashboard = false;
    },

    uploadsSectionView() {
      this.uploadsSection = !this.uploadsSection;
      this.dashboard = false;
    },

    financeTableView() {
      this.financeSection = !this.financeSection;
      this.dashboard = false;
    },

    async message() {
      try {
        const message = collection(db, "Messages");
        const messagesSnapshot = await getDocs(message);
        // const messageList = messagesSnapshot.docs.map((doc) => doc.data());
        let myMessages = [];

        if (!messagesSnapshot.empty) {
          messagesSnapshot.forEach((doc) => {
            // console.log(doc.data());
            myMessages.push({
              id: doc.id,
              data: doc.data(),
            });
            // myMessages.push(doc.data());
            myMessages = this.messages;
            // console.log(myMessages);
          });
        } else {
          console.log("You Have No Messages");
        }
      } catch (error) {
        console.error("Error fetching prospects:", error);
      }
    },

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

    nextMessage() {
      if (this.currentIndex < this.messages.length - 1) {
        this.currentIndex++;
      }
    },
    prevMessage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    currentMessage() {
      return this.messages[this.currentIndex];
    },

    detailedInfo(parent) {
      this.selectedParent = parent;
    },

    updatePayment(client) {
      client = this.detailedInfo();
      // console.log(client);
    },

    detailedTutorInfo(key) {
      this.selectedTutor = key;
    },

    async deleteMessage() {
      const messageId = this.currentMessage().id;
      try {
        await deleteDoc(doc(db, "Messages", messageId));
        // console.log("Message deleted");
        // Find the index of the current message
        const index = this.messages.findIndex(
          (message) => message.id === messageId
        );

        // Remove the message from the array
        if (index > -1) {
          this.messages.splice(index, 1);
        }

        // this.$toast.add({
        //   severity: "success",
        //   summary: "Success Message",
        //   detail: "Message Deleted",
        //   life: 3000,
        // });
      } catch (error) {
        // this.$toast.add({
        //   severity: "error",
        //   summary: "Error Message",
        //   detail: "Message Content",
        //   life: 3000,
        // });
        console.error("Error deleting message:", error);
      }
    },

    async deleteParent() {
      const parent = this.selectedParent.id;
      try {
        await deleteDoc(doc(db, "Request For Tutor", parent));
        // parent.splice();
        this.parentDialog = false;
        // alert("Parent Deleted");
        console.log("Parent deleted", parent);
      } catch (error) {
        console.log("Error Deleting Parent", error);
      }
    },

    async updateParentData() {
      const parent = this.selectedParent.id;
      // console.log(parent);
      try {
        const parentRef = doc(db, "Request For Tutor", parent);
        const data = this.contractUpdate;
        // console.log(data);
        await updateDoc(parentRef, data);
        console.log("Data successfully update");
      } catch (error) {
        console.error("Error updating", error);
      }
    },

    async updateTutorData() {
      const tutor = this.selectedTutor.email;
      // console.log(tutor);
      try {
        const tutorRef = doc(db, "Tutor Applications", tutor);
        const data = this.tutorUpdate;
        // console.log(data);
        await updateDoc(tutorRef, data);
        console.log("Tutor Data successfully updated");
      } catch (error) {
        console.error("Error updating", error);
      }
    },

    clientsList() {
      const clients = this.parents.filter(
        (parent) => parent.data.category === "client"
      );
      return clients;
    },

    tutorsList() {
      const tutors = this.tutors.filter((tutor) => tutor.category === "tutor");
      // const sortedTutors = tutors.sort((a, b) =>
      //   a.lastName.localeCompare(b.lastName)
      // );
      return tutors;
    },

    applicantsList() {
      const applicants = this.tutors.filter(
        (applicant) => applicant.category === "applicant"
      );
      const sortedApplicants = applicants.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      // console.log("Applicants List:", applicants);
      return sortedApplicants;
    },

    requestsList() {
      const filteredList = this.parents.filter(
        (parent) => parent.data.status === "request"
      );
      return filteredList;
    },

    completedList() {
      const filteredList = this.parents.filter(
        (parent) => parent.data.status === "completed"
      );
      return filteredList;
    },

    terminatesList() {
      const filteredList = this.parents.filter(
        (parent) => parent.data.status === "terminated"
      );
      return filteredList;
    },

    confirm1() {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        rejectClass: "p-button-secondary p-button-outlined",
        rejectLabel: "Cancel",
        acceptLabel: "Save",
        accept: () => {
          // this.$toast.add({
          //   severity: "info",
          //   summary: "Confirmed",
          //   detail: "You have accepted",
          //   life: 3000,
          // });
        },
        reject: () => {
          // this.$toast.add({
          //   severity: "error",
          //   summary: "Rejected",
          //   detail: "You have rejected",
          //   life: 3000,
          // });
        },
      });
    },

    setChartData() {
      return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Sales",
            data: [540, 325, 702, 620],
            backgroundColor: [
              "rgba(249, 115, 22, 0.2)",
              "rgba(6, 182, 212, 0.2)",
              "rgb(107, 114, 128, 0.2)",
              "rgba(139, 92, 246, 0.2)",
            ],
            borderColor: [
              "rgb(249, 115, 22)",
              "rgb(6, 182, 212)",
              "rgb(107, 114, 128)",
              "rgb(139, 92, 246)",
            ],
            borderWidth: 1,
          },
        ],
      };
    },

    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-secondary-color"
      );
      const surfaceBorder = documentStyle.getPropertyValue("--border-color");

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },

    confirm2() {
      this.$confirm.require({
        message: "Do you want to delete this record?",
        header: "Danger Zone",
        icon: "pi pi-info-circle",
        rejectLabel: "Cancel",
        acceptLabel: "Delete",
        rejectClass: "p-button-secondary p-button-outlined",
        acceptClass: "p-button-danger",
        accept: () => {
          // this.$toast.add({
          //   severity: "info",
          //   summary: "Confirmed",
          //   detail: "Record deleted",
          //   life: 3000,
          // });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
  },

  created() {
    this.message();
    this.tutorApplications;
    this.parentsData;
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },

  // beforeCreate() {},
  // beforeMount() {},
  async mounted() {
    const user = auth.currentUser;
    const admin = adminState();
    // firebaseUser.value = user;
    onAuthStateChanged(auth, (user) => {
      if (window !== undefined) {
        if (user) {
          // const uid = user.uid;
          localStorage.setItem("lifelineAdmin", JSON.stringify(user));
          // console.log("User Signed In Personal ", user);
        } else {
          localStorage.removeItem("lifelineAdmin");
          // console.log("User Signed Out Personal", user);
        }
      }

      admin.value = user;
    });
  },

  computed: {
    async parentsData() {
      try {
        const requestForTutorCol = collection(db, "Request For Tutor");
        const requestsSnapshot = await getDocs(requestForTutorCol);
        let request = [];

        if (!requestsSnapshot.empty) {
          requestsSnapshot.forEach((doc) => {
            // console.log(doc.data());
            request.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          this.parents = request; // Assign the fetched data to this.parents
        } else {
          console.log("Parent Documents Not Found");
        }
      } catch (error) {
        console.error("Error fetching prospects:", error);
      }
    },

    refreshParent() {
      this.parentsData();
    },

    async tutorApplications() {
      const usersRef = collection(db, "Tutor Applications");
      const querySnapshot = await getDocs(usersRef);
      let applications = [];

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          applications.push(doc.data());
          this.tutors = applications;
        });
      } else {
        console.log("Tutor Data Unavailable");
      }
    },

    async tutorApplicationsUpdate() {
      const contract = this.tutorContract;
      const email = "";
      const tutorRef = doc(db, "Tutor Applications", email);
      await updateDoc(tutorRef, contract);
    },

    refreshMessages() {
      this.message();
      this.currentMessage();
    },

    lifelineRevenue() {
      return this.parents.reduce((total, curr) => {
        if (curr.category === "client") {
          return total + parseFloat(curr.fees);
        }
        return total;
      }, 0);
    },
  },

  watch: {},
};
</script>

<style scoped>
.red {
  text-decoration: line-through;
  color: red;
}

.todoinput {
  width: 13rem;
  border: 2px solid blue;
  border-radius: 5px;
}

.todoinput:focus {
  background: #1d1c1c;
  border: 3px solid white;
  color: white;
}

a {
  text-decoration: none;
  color: #414361;
}

a:hover {
  border-right: 2px solid #0284c7;
}

.todoApp {
  padding: 1rem 1.2rem;
  height: 17rem;
}

.pi-icon {
  font-size: 1.2rem;
  margin: 10px;
  color: rgb(20, 20, 95);
}

.p-toolbar {
  /* backdrop-filter: blur(3px); */
  background-color: transparent;
}

.message {
  background-color: white;
  height: 17rem;
}

.active {
  color: white;
  background-color: red;
}

.nav-link {
  color: black;
}

.p-menubar {
  background-color: transparent !important;
  text-decoration: none;
}

.p-toolbar .p-menuitem-text .p-menuitem-content .p-menuitem-link {
  text-decoration: none;
}

.nav-link:hover {
  border-bottom: 4px solid green;
  padding-bottom: 3px;
}

.nav-link:active {
  background-color: white;
  color: black;
}

.border {
  border: 2px solid dark;
}

table {
  width: 100%;
}

th {
  height: 70px;
}

tr:hover {
  background-color: green;
}

.pi-shop,
.pi-users,
.pi-verified,
.pi-id-card {
  font-size: 3rem;
  /* display: inline-flex; */
}

.bold {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
