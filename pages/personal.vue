<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 shadow-two bg-success d-none d-lg-block">
        <!-- SIDE BAR -->
        <div class="side-bar">
          <div class="d-flex justify-content-start">
            <div class="mt-lg-2">
              <div class="">
                <!-- <img
                  class="profile-pic d-none d-lg-block"
                  src="/images/Pic.png"
                  alt=""
                /> -->

                <div class="mt-lg-3">
                  <Avatar
                    label="LT"
                    class="mr-2"
                    size="xlarge"
                    shape="circle"
                  />
                  <h1 class="text-uppercase text-white mb-0 fs-6">
                    {{ fullName }}
                  </h1>
                  <small class="mt-0 text-white d-6 fs-beauty">{{
                    profile.email
                  }}</small>
                </div>
                <ul class="navbar-nav text-start ms-4 mt-4">
                  <li class="nav-item">
                    <a class="link-user" href="#dashboard"
                      ><i class="bi-columns-gap me-2 text-white"></i
                      >DASHBOARD</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="link-user" href="#resourceCentre"
                      ><i class="bi-collection me-2"></i>PROFILE</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="link-user" href="#resourceCentre"
                      ><i class="bi-collection me-2"></i>RESOURCES</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="link-user" href="#training"
                      ><i class="fa fa-laptop me-2"></i>TRAINING</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="link-user" href="#offers"
                      ><i class="bi-files me-2"></i>OFFERS</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="link-user" href="#tutorForms"
                      ><i class="bi-clipboard-data me-2"></i>SUBMIT FORMS</a
                    >
                  </li>
                </ul>
              </div>
              <div class="">
                <button
                  class="btn btn-danger shadow-two my-3"
                  @click="signingOut"
                >
                  <i class="bi-box-arrow-left text-white me-2"></i>Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE NAVBAR -->
      <div class="d-lg-none sticky-top">
        <nav class="navbar bg-success">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Lifeline</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#tutorNavbar"
            >
              <span class="bi-filter-square fs-2 text-white"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="tutorNavbar">
            <ul class="navbar-nav text-start ms-4 mt-4 bg-dark">
              <li class="nav-item">
                <a class="link-user" href="#dashboard"
                  ><i class="bi-columns-gap me-2 text-white"></i>DASHBOARD</a
                >
              </li>

              <li class="nav-item">
                <a class="link-user" href="#profile"
                  ><i class="bi-collection me-2"></i>PROFILE</a
                >
              </li>

              <li class="nav-item">
                <a class="link-user" href="#resource"
                  ><i class="bi-collection me-2"></i>RESOURCES</a
                >
              </li>

              <li class="nav-item">
                <a class="link-user" href="#training"
                  ><i class="fa fa-laptop me-2"></i>TRAINING</a
                >
              </li>

              <li class="nav-item">
                <a class="link-user" href="#offers"
                  ><i class="bi-files me-2"></i>OFFERS</a
                >
              </li>

              <li class="nav-item">
                <a class="link-user" href="#forms"
                  ><i class="bi-clipboard-data me-2"></i>SUBMIT FORMS</a
                >
              </li>
            </ul>
            <div class="text-start ms-4 my-3">
              <button @click="signingOut" class="btn btn-danger">
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>

      <!-- MAIN BODY AREA -->
      <div class="col-lg-10 col-12">
        <div class="tutor-profile-banner">
          <nav class="d-none d-lg-block">
            <div class="container-fluid">
              <div class="nav">
                <a class="navbar-brand text-danger fs-3 me-auto" href="#"
                  >LIFELINE</a
                >
                <div class="text-white me-4">
                  <i class="fa fa-bell-o me-3"></i>
                  <i class="bi-chat-square-text"></i>
                </div>

                <p class="text-white">{{ currentTime }}</p>

                <h6 class="text-white mt-1 mx-2">
                  {{ profile.lastName }} {{ profile.firstName }}
                </h6>
                <i class="bi-sliders mx-1 text-white"></i>
              </div>
            </div>
          </nav>

          <div class="row mt-lg-5">
            <div class="col-lg-4 col-sm-12">
              <div class="tutor-profile-hero px-1">
                <h2 class="fs-3 fw-bolder mb-0">
                  Hello {{ profile.firstName }},
                </h2>
                <p class="fs-beauty fs-5 mt-0 pb-0">It's {{ date() }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="dashboard">
          <!-- DASHBOARD -->
          <section class="row shadow-two rounded profile">
            <div class="col-lg-12 col-sm-12 py-3 row">
              <h5 class="text-start fw-bolder py-1">MY DASHBOARD</h5>

              <div class="col-lg-4 col-12">
                <div class="revenue shadow-two bg-white text-success">
                  <h6>ALLOWANCE</h6>
                  <h4 class="fw-bolder">
                    <i class="bi-receipt-cutoff me-2"></i>Ghc {{ totalPay }}.00
                  </h4>
                </div>
              </div>

              <div class="col-lg-4 col-12">
                <div class="profit shadow-two bg-white text-primary">
                  <h6 class="">BONUS</h6>
                  <h4 class="fw-bolder">
                    <i class="bi-graph-up me-2"></i>Ghc {{ bonus }}.00
                  </h4>
                </div>
              </div>

              <div class="col-lg-4 col-12">
                <div class="client shadow-two bg-white text-danger">
                  <h6>DEDUCTIONS</h6>
                  <h4 class="fw-bolder">
                    <i class="bi-graph-down me-2"></i>Ghc {{ penalty }}.00
                  </h4>
                </div>
              </div>
            </div>

            <!-- BOARD -->
            <section class="row">
              <div class="col-lg-8">
                <!-- NOTICE BOARD -->
                <div class="shadow-two bg-white row notice">
                  <h4 class="fw-bolder">Notice Board</h4>
                  <div id="noticeBoard">
                    <div v-if="getCurrentNote">
                      <h5 class="fw-bolder">{{ getCurrentNote.title }}</h5>
                      <p class="mx-3 user-select-none">
                        {{ getCurrentNote.message }}
                      </p>
                      <div class="text-end">
                        <small>{{ getCurrentNote.Date_Issued }}</small>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="btn btn-danger mx-3"
                        @click="showPrevious"
                      >
                        <i class="fa fa-arrow-circle-o-left"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="showNext"
                      >
                        <i class="fa fa-arrow-circle-o-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PROFILE -->
              <div class="col-lg-4" id="profile">
                <div class="quote shadow-two text-start my-lg-1 my-3">
                  <h4 class="fw-bolder mt-2">My Profile</h4>
                  <div class="col mt-4">
                    <h6 class="fs-beauty text-muted text-uppercase">
                      <i class="fa fa-user me-2"></i> Tutor:
                      {{ profile.lastName }} {{ profile.firstName }}
                    </h6>
                  </div>

                  <div class="col">
                    <h6 class="fs-beauty text-muted text-uppercase">
                      <i class="fa fa-play me-2"></i> Category:
                      {{ profile.category }}
                    </h6>
                  </div>

                  <div class="col">
                    <h6 class="fs-beauty text-muted text-uppercase">
                      <i class="fa fa-codepen me-2"></i> Status:
                      {{ profile.status }}
                    </h6>
                  </div>
                </div>
              </div>
            </section>

            <!-- TUTOR CONTRACTS -->
            <section class="my-lg-4 my-3" id="contracts">
              <h4 class="text-start pt-4 mx-3 fw-bolder">Tutor contracts</h4>
              <DataTable
                :value="profile.contracts"
                sortMode="multiple"
                showGridlines
                removableSort
                paginator
                :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]"
                tableStyle="min-width: 50rem"
                class="shadow-one"
              >
                <Column
                  field="parent"
                  header="Parent"
                  sortable
                  style="width: 20%"
                ></Column>
                <Column
                  field="student"
                  header="Student"
                  sortable
                  style="width: 25%"
                ></Column>
                <Column
                  field="class"
                  header="Class"
                  sortable
                  style="width: 5%"
                ></Column>
                <Column
                  field="status"
                  header="Status"
                  sortable
                  style="width: 5%"
                ></Column>
                <Column
                  field="weeklySession"
                  header="Session"
                  sortable
                  style="width: 5%"
                ></Column>
                <Column
                  field="contact"
                  header="Contact"
                  style="width: 10%"
                ></Column>
                <Column
                  field="pay"
                  header="Pay"
                  sortable
                  style="width: 5%"
                ></Column>
                <Column
                  field="deduction"
                  header="Penalty"
                  sortable
                  style="width: 5%"
                ></Column>
                <Column
                  field="consideration"
                  header="Bonus"
                  sortable
                  style="width: 5%"
                ></Column>
              </DataTable>
            </section>

            <!-- RESOURCE CENTRE -->
            <section class="col-lg-12 mt-5 mt-lg-2" id="resource">
              <!-- <h4>Resource Centre</h4> -->
              <div class="section bg-white shadow-one">
                <!-- LIFELINE -->
                <a class="navbar-brand" href="#">Resource Centre</a>

                <div class="row object-fit-cover">
                  <div class="col-12">
                    <div class="lifeline text-start">
                      <div class="row my-3 py-2">
                        <div class="col-lg-6">
                          <h4 class="mx-3 fw-bolder">Tutor Repository</h4>
                          <!-- <small>Download Lifeline's Resources</small> -->
                        </div>
                        <div class="col-lg-6 col-sm-12">
                          <form class="d-flex" role="search">
                            <input
                              class="form-control me-2 shadow-one"
                              type="search"
                              placeholder="Search"
                            />
                          </form>
                        </div>
                      </div>

                      <TabView>
                        <TabPanel header="Lifeline">
                          <table
                            class="table table-sm border-primary table-hover resource"
                          >
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Download</th>
                              </tr>
                            </thead>

                            <tbody
                              class="table-group-divider"
                              id="lesResCentre"
                            >
                              <tr>
                                <td>1</td>
                                <td>Log Sheet</td>
                                <td class="">
                                  This is used to record tutor attendance.
                                </td>
                                <td>
                                  <a
                                    class="btn btn-danger"
                                    href="https://firebasestorage.googleapis.com/v0/b/lifeline-edu-site.appspot.com/o/Tutor%20Resources%2FLog%20sheet.pdf?alt=media&token=a1a2927c-c086-4f20-8930-808a782794bb"
                                    id="download"
                                    ><i class="fa fa-download"></i
                                  ></a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Code of Conduct</td>
                                <td>This documents spells out our rules.</td>
                                <td>
                                  <a
                                    class="btn btn-danger"
                                    href="https://firebasestorage.googleapis.com/v0/b/lifeline-edu-site.appspot.com/o/Tutor%20Resources%2FLifeline's%20Tutor%20Code%20of%20Conduct.pdf?alt=media&token=17cbb614-401f-495f-9311-8b4aa8076a6e"
                                    id="download"
                                    ><i class="fa fa-download"></i
                                  ></a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Tutor's Handbook</td>
                                <td>
                                  This document will help you become a better
                                  tutor.
                                </td>
                                <td>
                                  <a
                                    class="btn btn-danger"
                                    href="#"
                                    id="download"
                                    ><i class="fa fa-download"></i
                                  ></a>
                                </td>
                              </tr>

                              <tr>
                                <td>3</td>
                                <td>Phonics</td>
                                <td>
                                  Learn the sounds of letters, blending and
                                  more.
                                </td>
                                <td>
                                  <a
                                    class="btn btn-danger"
                                    href="https://www.readingbear.org/"
                                    target="framename"
                                    ><i class="fa fa-download"></i
                                  ></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </TabPanel>
                        <TabPanel header="Linked">
                          <!-- READING CLINIC -->
                          <section class="shadow-two">
                            <iframe
                              src="https://www.uniteforliteracy.com/"
                              class="shadow-two resource-frame"
                              frameborder="0"
                            ></iframe>
                          </section>
                        </TabPanel>
                        <TabPanel header="G.E.S"></TabPanel>
                      </TabView>
                    </div>

                    <!-- GES DATA TABLE -->
                    <template>
                      <div class="text-start mt-5">
                        <div class="row my-3">
                          <div class="col-lg-6">
                            <h5>Standards Based Curriculum</h5>
                          </div>
                          <div class="col-lg-6">
                            <form class="d-flex" role="search">
                              <input
                                class="form-control me-2 shadow-one"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                id="gesResSearch"
                              />
                            </form>
                          </div>
                        </div>

                        <!-- <p>Ghana Education Service (GES) Standards Based Curriculum.</p> -->
                        <table
                          class="table table-sm table-bordered border-primary table-hover resource"
                        >
                          <thead class="">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">CLASS</th>
                              <th scope="col">SUBJECT</th>
                              <th scope="col">DOWNLOAD</th>
                            </tr>
                          </thead>
                          <tbody class="table-group-divider" id="gesResCentre">
                            <tr>
                              <td>1</td>
                              <td>BASIC ONE</td>
                              <td>ENGLISH LANGUAGE</td>
                              <td>
                                <a class="btn btn-danger" href="#" id="download"
                                  ><i class="fa fa-download"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>BASIC ONE</td>
                              <td>MATHEMATICS</td>
                              <td>
                                <a class="btn btn-danger" href="#" id="download"
                                  ><i class="fa fa-download"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>BASIC ONE</td>
                              <td>SCIENCE</td>
                              <td>
                                <a class="btn btn-danger" href="#" id="download"
                                  ><i class="fa fa-download"></i
                                ></a>
                              </td>
                            </tr>

                            <tr>
                              <td>4</td>
                              <td>BASIC TWO</td>
                              <td>ENGLISH LANGUAGE</td>
                              <td>
                                <button class="btn btn-danger">
                                  <i class="fa fa-download"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>BASIC TWO</td>
                              <td>MATHEMATICS</td>
                              <td>
                                <button class="btn btn-danger">
                                  <i class="fa fa-download"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>BASIC TWO</td>
                              <td>SCIENCE</td>
                              <td>
                                <button class="btn btn-danger">
                                  <i class="fa fa-download"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>

                    <!-- <div class="reading text-start px-5 mt-5">
                <h5>Reading Centre</h5>
                <p>Reading resource to help you teach reading effectively.</p>
                <table
                  id="rResCentre"
                  class="table table-sm table-bordered border-primary table-hover resource"
                >
                  <thead class="">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Material</th>
                      <th scope="col">Description</th>
                      <th scope="col">Download</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr>
                      <td>1</td>
                      <td>Teaching Guide</td>
                      <td>Teaching students using varied approaches.</td>
                      <td>
                        <a class="btn btn-danger" href="#" id="download"
                          ><i class="fa-solid fa-download"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
                  </div>
                </div>
              </div>
            </section>

            <!-- OFFERS -->

            <section class="col-lg-12 shadow-two" id="offers">
              <div class="section">
                <a class="navbar-brand pt-3" href="#">Lifeline Offers</a>
                <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                  <div
                    class="col-lg-4 col-sm-6 gy-3 gx-4 overflow-hidden"
                    v-for="offer in offers"
                  >
                    <div class="card h-80 mb-3 rounded">
                      <div class="card-header py-1">
                        <h4 class="fw-bolder text-secondary pt-1">
                          {{ offer.type }}
                        </h4>
                      </div>
                      <div class="card-body">
                        <p class="fs-6">MODE: {{ offer.mode }}</p>
                        <p>LEVEL: {{ offer.level }}</p>
                        <p>DURATION: {{ offer.duration }}</p>
                        <p>LOCATION: {{ offer.location }}</p>
                        <h5 class="fw-bolder">{{ offer.allowance }}</h5>
                        <div class="py-2 d-flex justify-content-between">
                          <small
                            class="text-end shadow-three px-2 fw-bolder"
                            :class="
                              offer.available ? 'text-danger' : 'text-success'
                            "
                          >
                            {{ offer.availability ? "Available" : "Awarded" }}
                          </small>
                          <small
                            class="shadow-three fw-bolder text-primary px-2"
                          >
                            {{ offer.mode }}
                          </small>
                        </div>
                        <!-- <small
                          class="pi pi-info-circle text-primary fw-bolder fs-5 m-4"
                          @click="offerInfo(offer)"
                        >Info</small> -->

                        <small
                          class="pi pi-info-circle fw-bolder bg-success p-2 rounded fs-5 m-4 text-white"
                          @click="offerInfo(offer)"
                          ><span class="mx-1">Details</span></small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Dialog
                v-model:visible="offerInfoDialog"
                modal
                maximizable
                draggable="true"
                :pt="{
                  root: 'border-none',
                  mask: {
                    style: 'backdrop-filter: blur(2px)',
                  },
                }"
                header="Offer Application"
                :style="{ width: '35vw' }"
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
              >
                <span class="text-surface-500 dark:text-surface-400 block mb-8"
                  >Offer Objectives</span
                >
                <pre>
                  {{ selectedOffer }}
                </pre>
                <div class="text-start">
                  <p>Level: {{ selectedOffer.level }}</p>
                  <p>Class: {{ selectedOffer.class }}</p>
                  <p>Location: {{ selectedOffer.location }}</p>
                  <p>Subjects: {{ selectedOffer.subjects }}</p>
                  <!-- <p>Subjects: {{ selectedOffer.subjects }}</p> -->
                  <p>Subjects: {{ selectedOffer.objectives }}</p>
                </div>

                <!-- <div class="container-fluid">
                  <Editor v-model="value" editorStyle="height: 300px" />
                </div> -->

                <div class="flex justify-end g-2 my-3">
                  <Button
                    type="button"
                    label="Reset"
                    class="mx-3"
                    severity="secondary"
                  ></Button>
                  <Button
                    type="button"
                    label="Apply"
                    @click="offerInfoDialog = false"
                  ></Button>
                </div>
              </Dialog>
            </section>

            <!-- FORMS -->
            <section class="col-lg-12 shadow-two my-3" id="forms">
              <!-- SWITCH BTN -->
              <div class="btn-group my-4" role="group">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="logSheetBtn"
                >
                  LOG SHEET
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="progressReportBtn"
                >
                  PROGRESS REPORT
                </button>
                <!-- <button type="button" class="btn btn-outline-primary" id="assessmentBtn" >ASSESSMENT REPORT</button> -->
              </div>

              <!-- PROGRESS REPORT -->
              <div id="progress" class="px-5" v-if="progressReport">
                <div class="row shadow-two">
                  <div class="col-lg-6 d-none d-lg-block"></div>
                  <div class="col-lg-6 shadow-two bg-white">
                    <h4 class="my-lg-4 my-2">PROGRESS REPORT</h4>
                    <div class="my-lg-3">
                      <!-- <label for="">CONTRACT TYPE:</label> <br /> -->
                      <select name="type" id="" class="profile-input">
                        <option value="">CONTRACT TYPE</option>
                        <option value="DUO">DUO</option>
                        <option value="TRI">TRI</option>
                        <option value="QUAD">QUAD</option>
                        <option value="PENT">PENT</option>
                      </select>
                    </div>

                    <div class="">
                      <!-- <label class="" for="">Mode of Tuition:</label> <br /> -->
                      <select name="mode" id="" class="profile-input">
                        <option value="">MODE OF TUITION</option>
                        <option value="online">Online</option>
                        <option value="in-person">In-Person</option>
                      </select>
                    </div>

                    <div class="my-3">
                      <!-- <label for="">Level:</label> <br /> -->
                      <select name="level" id="" class="profile-input">
                        <option value="">LEVEL OF STUDENT</option>
                        <option value="KG">KINDERGARTEN</option>
                        <option value="PRIMARY">PRIMARY</option>
                        <option value="JHS">JHS</option>
                        <option value="SHS">SHS</option>
                      </select>
                    </div>

                    <div class="div">
                      <!-- <label for="">Class:</label> <br /> -->
                      <input
                        class="profile-input"
                        type="tel"
                        name="class"
                        placeholder="CLASS"
                      />
                    </div>

                    <div class="my-3">
                      <!-- <label for="">Subjects:</label> <br /> -->
                      <textarea
                        name="subjects"
                        id=""
                        class="profile-input-textarea"
                        placeholder="TUITION SUBJECT(S)"
                      ></textarea>
                    </div>

                    <div class="div">
                      <!-- <label for="">Lesson Duration</label> <br /> -->
                      <select name="duration" id="" class="profile-input">
                        <option value="">LESSON DURATION</option>
                        <option value="1 hour">1 hour</option>
                        <option value="1.5 hours">1.5 hrs</option>
                        <option value="2 hours">2 hrs</option>
                        <option value="2.5 hours">2.5 hrs</option>
                        <option value="3 hours">3 hrs</option>
                      </select>
                    </div>

                    <div class="my-3">
                      <!-- <label for="">Location:</label> <br /> -->
                      <input
                        class="profile-input"
                        type="text"
                        name="location"
                        placeholder="LOCATION"
                      />
                    </div>

                    <button
                      class="btn btn-success my-lg-4 my-3 shadow-two"
                      type="submit"
                      name="postContract"
                    >
                      UPLOAD REPORT
                    </button>
                  </div>
                </div>
              </div>

              <!-- LOG SHEET -->
              <KeepAlive>
                <div class="px-lg-5 py-4 mx-2 mx-lg-3" v-if="logSheet">
                  <div class="row shadow-two">
                    <div class="col-lg-6 d-none d-lg-block"></div>
                    <div class="col-lg-6 shadow-two bg-white py-2 container">
                      <h4 class="my-lg-3 fw-bolder text-secondary">
                        LOG SHEET
                      </h4>
                      <form class="row my-3" @submit.prevent="submitLogSheet">
                        <div class="col-lg-6 my-lg-2">
                          <label class="label" for="">Student</label>
                          <inputText
                            class="apply-input"
                            type="text"
                            v-model="logSheet.student"
                            required
                          />
                        </div>

                        <div class="col-lg-6 my-lg-2">
                          <label class="label" for="">Month</label>
                          <inputText
                            class="apply-input"
                            type="month"
                            v-model="logSheet.month"
                            required
                          />
                        </div>

                        <div class="col-lg-6 my-lg-2">
                          <label class="label" for="">Expected Sessions</label>
                          <inputText
                            class="apply-input"
                            type="number"
                            v-model="logSheet.expected"
                            required
                          />
                        </div>

                        <div class="col-lg-6 my-lg-2">
                          <label class="label" for="">Total Sessions</label>
                          <inputText
                            class="apply-input"
                            type="number"
                            v-model="logSheet.total"
                            required
                          />
                        </div>

                        <FileUpload
                          ref="fileUpload"
                          customUpload
                          :multiple="false"
                          mode="advanced"
                          :auto="false"
                          :showCancelButton="true"
                          :showUploadButton="false"
                          choose-label="Attach Log Sheet"
                          :previewWidth="150"
                          :maxFileSize="1000000"
                          invalidFileSizeMessage="File too big (Should be less than 1mb)"
                          accept="image/*"
                        >
                          <template #empty>
                            <span>Drag and drop your Log Sheet to upload.</span>
                          </template>
                        </FileUpload>

                        <div class="my-3">
                          <button class="btn btn-danger px-3 mx-3" type="reset">
                            RESET
                          </button>
                          <button class="btn btn-success my-lg-4" type="submit">
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </KeepAlive>
            </section>

            <!-- TRAINING -->
            <section
              class="d-none d-lg-block px-5 py-3 shadow-two"
              id="training"
            >
              <div class="px-5 py-5">
                <a class="navbar-brand" href="#">Training</a>

                <div class="">
                  <!-- <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vS6LQfaUqPWGECS-5B8CotEciAAFI3PuLIacC9AXLYehYpd0cHSuTuoyZxxX6bZ41Hot8qi0UjHiJYK/embed?start=false&loop=false&delayms=3000"
                  frameborder="0"
                  width="920"
                  height="569"
                  allowfullscreen="true"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe> -->
                </div>
                <Stepper>
                  <StepperPanel header="Course Outline">
                    <template #content="{ nextCallback }">
                      <div class="flex flex-column h-12rem">
                        <div
                          class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                        >
                          <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vS6LQfaUqPWGECS-5B8CotEciAAFI3PuLIacC9AXLYehYpd0cHSuTuoyZxxX6bZ41Hot8qi0UjHiJYK/embed?start=false&loop=false&delayms=3000"
                            frameborder="0"
                            width="850"
                            height="569"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                          ></iframe>
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
                  <StepperPanel header="Introduction">
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
                  <StepperPanel header="Mission & Vision">
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
                  <StepperPanel header="Tools of the Trade">
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
              </div>
            </section>

            <!-- MESSAGE -->
            <section class="px-5 py-3 shadow-two my-4">
              <TheMessage></TheMessage>
            </section>

            <!-- <button @click="fetchProspects">Get Prospects</button> -->
            <div v-for="prospect in prospectData">
              <p>
                {{ prospect.parent }} {{ prospect.student }}
                {{ prospect.contact }}
              </p>
            </div>
          </section>

          <Dictionary></Dictionary>
        </div>
      </div>
    </div>
  </div>

  <nav class="d-none sticky-bottom bg-success">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <ul class="nav justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="#dashboard">
                <i class="bi-columns-gap"></i
                ><span class="d-block">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#offers">
                <i class="bi-journal-richtext"></i
                ><span class="d-block">Offers</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resourceCentre">
                <i class="bi-command"></i><span class="d-block">Resources</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tutorForms">
                <i class="bi-filter-square"></i
                ><span class="d-block">Forms</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
definePageMeta({
  middleware: "auth",
});

import FileUpload from "primevue/fileupload";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
const storage = getStorage();
// const firebaseUser = useFirebaseUser();
// const router = useRouter();

export default {
  name: "Tutor Profile Page",
  data() {
    return {
      loggedIn: false,
      logSheet: true,
      selectedOffer: null,
      offerInfoDialog: false,
      currentTime: "",
      progressReport: false,
      prospectData: [],
      notices: [],
      currentNote: {},
      lastIndex: 0,
      layout: "grid",
      offers: [],
      contracts: [],
      profile: {},
      logSheet: {
        student: "",
        month: "",
        expected: "",
        total: "",
        imageUrl: null,
        contact: "",
        momo_number: "",
      },
    };
  },

  methods: {
    async signingOut() {
      try {
        const router = useRouter();
        const auth = getAuth();
        await auth.signOut();
        router.push("/login");
        // firebaseUser = null;
      } catch (error) {
        console.error(error);
      }
    },

    async submitLogSheet(event) {
      const fileUpload = this.$refs.fileUpload;
      const files = fileUpload.files;

      if (files.length === 0) {
        alert("Please attach a log sheet file before submitting.");
        return;
      }

      const file = files[0];
      const user = auth.currentUser;
      const form = this.logSheet;
      const tutor = user.email;
      const student = this.logSheet.student;
      const month = this.logSheet.month;
      const fileName = student + "-" + month;
      const storageRef = ref(
        storage,
        "Log Sheets/" + user.email + "/" + month + "/" + fileName
      );

      try {
        // Upload the file and get the URL
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        console.log(url);
        this.logSheet.imageUrl = url;
        console.log("File uploaded successfully!");

        // Get the existing log sheets for the user
        const logSheetRef = doc(db, "Tutor Applications", tutor);
        const docSnap = await getDoc(logSheetRef);
        let existingSheets = [];
        if (docSnap.exists()) {
          existingSheets = docSnap.data().logSheet || [];
        }

        // Add the new log sheet to the existing ones
        existingSheets.push(form);
        await setDoc(
          logSheetRef,
          {
            logSheet: existingSheets,
          },
          { merge: true }
        );
        console.log("Sheet Info Uploaded", existingSheets);
        alert("Log Sheet Uploaded");

        // Reset the form
        this.logSheet.student = "";
        this.logSheet.contact = "";
        this.logSheet.expected = "";
        this.logSheet.total = "";
        this.logSheet.imageUrl = "";
        this.logSheet.momo_number = "";
        this.logSheet.month = "";
        fileUpload.clear(); // Clear the file input
      } catch (error) {
        console.log("Error submitting LogSheet", error);
      }
    },

    onUpload(e) {
      const file = e.target.files[0]; //Vue upload
      this.logSheet.imageUrl = URL.createObjectURL(file);

      // const user = auth.currentUser;
      // const contact = this.profile.contact;
      // const student = this.logSheet.student;
      // const month = this.logSheet.month;
      // const fileName = student + "-" + month + "-";
      // console.log(file);

      // const storageRef = ref(
      //   storage,
      //   "Log Sheets/" + user.email + "/" + month + "/" + fileName
      // );

      // uploadBytes(storageRef, file)
      //   .then((snapshot) => {
      //     g// const user = auth.currentUser;
      // const contact = this.profile.contact;
      // const student = this.logSheet.student;
      // const month = this.logSheet.month;
      // const fileName = student + "-" + month + "-";
      // console.log(file);

      // const storageRef = ref(
      //   storage,
      //   "Log Sheets/" + user.email + "/" + month + "/" + fileName
      // );

      // uploadBytes(storageRef, file)
      //   .then((snapshot) => {
      //     getDownloadURL(snapshot.ref)
      //       .then((url) => {
      //         console.log(url);
      //         // this.formData.imageUrl = url;
      //       })
      //       .catch((error) => {
      //         console.error("Error getting download URL:", error);
      //       });
      //     console.log("Uploaded a blob or file!");
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading file:", error);
      //   });
    },

    // async onPrimevueUpload(event) {
    //   const file = event.files[0];
    //   const user = auth.currentUser;
    //   const contact = this.profile.contact;
    //   const student = this.logSheet.student;
    //   const month = this.logSheet.month;
    //   const fileName = student + "-" + month;
    //   const storageRef = ref(
    //     storage,
    //     "Log Sheets/" + user.email + "/" + month + "/" + fileName
    //   );

    //   try {
    //     const snapshot = await uploadBytes(storageRef, file);
    //     const url = await getDownloadURL(snapshot.ref);
    //     console.log(url);
    //     this.logSheet.imageUrl = url;
    //     console.log("File uploaded successfully!");
    //   } catch (error) {
    //     console.error("Error uploading file:", error);
    //   }
    // },

    async getUserInfo() {
      const auth = getAuth();
      const user = auth.currentUser;
      const email = user.email;
      // const uid = user.uid;

      const usersRef = collection(db, "Tutor Applications");
      const q = query(usersRef, where("email", "==", email));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data())
          this.profile = doc.data();
        });
      } else {
        console.log("No such document exists");
      }
    },

    async fetchNotice() {
      try {
        const offers = collection(db, "Offers");
        const offersSnapShot = await getDocs(offers);
        const notices = collection(db, "Notices");
        const noticesSnapShot = await getDocs(notices);

        let contracts = [];
        // console.log("Contracts", contracts);

        offersSnapShot.forEach((doc) => {
          contracts.push(doc.data());
          this.offers = contracts;
        });

        let tutorNotice = [];
        // console.log("Notices", tutorNotice);

        noticesSnapShot.forEach((doc) => {
          tutorNotice.push(doc.data());
          this.notices = tutorNotice;
        });
      } catch (e) {
        console.error("Error retrieving docs: ", e);
      }
    },

    getSeverity(product) {
      switch (product.inventoryStatus) {
        case "INSTOCK":
          return "success";

        case "LOWSTOCK":
          return "warning";

        case "OUTOFSTOCK":
          return "danger";

        default:
          return null;
      }
    },

    showPrevious() {
      this.lastIndex =
        (this.lastIndex - 1 + this.notices.length) % this.notices.length;
    },
    showNext() {
      this.lastIndex = (this.lastIndex + 1) % this.notices.length;
    },

    logSheetBtn() {
      this.logSheet = true;
      this.progressReport = false;
    },

    progressReportBtn() {
      this.progressReport = true;
      this.logSheet = false;
    },

    offerInfo(key) {
      this.selectedOffer = key;
      this.offerInfoDialog = true;
      console.log(this.selectedOffer);
    },

    date() {
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

    updateTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      this.currentTime = `${this.formatTime(hours)}:${this.formatTime(
        minutes
      )}:${this.formatTime(seconds)}`;
    },
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    },
  },

  computed: {
    getCurrentNote() {
      return this.notices[this.lastIndex];
    },

    // currentNote() {
    //   return this.notices[this.notices.length - 1];
    // },

    fullName() {
      return this.profile.lastName + " " + this.profile.firstName;
    },

    totalPay() {
      if (this.profile && this.profile.contracts) {
        return this.profile.contracts.reduce(
          (total, current) => total + current.pay,
          0
        );
      } else {
        return 0; // or any other default value you want to return when contracts is not defined
      }
    },
    penalty() {
      if (this.profile && this.profile.contracts) {
        return this.profile.contracts.reduce(
          (total, current) => total + current.deduction,
          0
        );
      } else {
        return 0; // or any other default value you want to return when contracts is not defined
      }
    },

    bonus() {
      if (this.profile && this.profile.contracts) {
        return this.profile.contracts.reduce(
          (total, current) => total + current.consideration,
          0
        );
      } else {
        return 0; // or any other default value you want to return when contracts is not defined
      }
    },
  },

  async created() {
    await this.fetchNotice();
    await this.getUserInfo();
  },

  async mounted() {
    const user = auth.currentUser;
    const firebaseUser = useFirebaseUser();
    // firebaseUser.value = user;
    onAuthStateChanged(auth, (user) => {
      if (window !== undefined) {
        if (user) {
          // const uid = user.uid;
          localStorage.setItem("firebaseUser", JSON.stringify(user));
          // console.log("User Signed In Personal ", user);
        } else {
          localStorage.removeItem("firebaseUser");
          // console.log("User Signed Out Personal", user);
        }
      }

      firebaseUser.value = user;
    });

    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>

<style scoped></style>
