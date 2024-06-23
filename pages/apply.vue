<template>
  <section class="text-white">
    <div v-if="join" class="banner">
      <NavBar></NavBar>
      <div class="row container-sm apply-wall" id="inviteText">
        <!-- NOTICE BOARD -->
        <div class="col-lg-6">
          <div class="tutorContact" v-if="contact">
            <div><h4>CONTACTS:</h4></div>
            <div class="">
              <h5><i class="fa fa-address-book-o"></i>0246-011-004</h5>
              <h5><i class="fa fa-address-card-o"></i> 0243-934-353</h5>
            </div>
          </div>
        </div>

        <!-- OTHER-TEXT -->
        <div class="col-lg-6 mt-lg-5 tutorText text-start">
          <h5 class="hero-header pt-5 mt-2 fw-bolder">Join Lifeline</h5>
          <p class="hero-text">
            Apply to Lifeline to start receiving tuition assignments to teach
            students at home after school and weekends.
          </p>
          <div class="text-start">
            <button
              class="btn btn-lg btn-success shadow-two ms-lg-5"
              type="button"
              @click="applyNow()"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="join" class="services-apply container-sm text-dark">
      <div class="row py-5 mt-5">
        <h2 class="mb-0">Why Become a Lifeline Tutor?</h2>
        <p class="mt-0">Become a Different Tutor</p>
        <div class="col">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <h6 class="">Accessible Locations</h6>
          <p class="px-lg-5 px-3 text-black-50">
            Get assigned to places closest to you.
          </p>
        </div>

        <div class="col">
          <i class="fa fa-balance-scale" aria-hidden="true"></i>
          <h6>Fair remuneration</h6>
          <p class="px-lg-5 px-3 text-black-50">
            The more engagements, the more pay. We reward you fairly.
          </p>
        </div>

        <div class="col">
          <i class="fa fa-clock-o" aria-hidden="true"> </i>
          <h6>Convenient Teaching Times</h6>
          <p class="px-lg-5 px-3 text-black-50">
            Negotiate times that suit your work schedules
          </p>
        </div>
      </div>

      <div class="row" v-if="seeMore">
        <div class="col">
          <i class="fa fa-binoculars" aria-hidden="true"></i>
          <h6>More Teaching Jobs</h6>
          <p class="px-lg-5 px-3 text-black-50">
            Receive new teaching assignments frequently.
          </p>
        </div>
        <div class="col">
          <i class="fa fa-bars" aria-hidden="true"></i>
          <h6>Access to Resources</h6>
          <p class="px-lg-5 px-3 text-black-50">
            Get access to free curated teaching resources.
          </p>
        </div>

        <div class="col">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h6>Become Effective</h6>
          <p class="px-lg-5 px-3 text-black-50">
            Learn effective methodologies, strategies and techniques.
          </p>
        </div>
      </div>

      <button class="btn btn-outline-primary px-4 mb-5" @click="seeMoreBtn">
        More
      </button>

      <hr />

      <div class="row bg-danger py-5 shadow-one my-3">
        <div class="col-lg-6 col-12">
          <img
            class="mt-lg-5 mt-3"
            src="/images/homepage.png"
            alt=""
            width="90%"
          />
        </div>
        <div class="col-lg-6 col-12">
          <div class="px-lg-3 text-start text-white fs-beauty">
            <h3 class="py-3">Apply to Join Our Team</h3>
            <div class="test-start">
              <p class="fs-5">
                Join our ever-growing team of passionate educators on a quest to
                change the home tuition landscape in Tamale and beyond.
              </p>
              <p class="fs-5">
                We are redefining how home tuition (extra-classes) should be
                done. We strongly believe in a complimentary approach model
                where home tuition:
              </p>
              <ul class="fs-beauty fs-5">
                <li>Gets parents the results they need,</li>
                <li>Help students overcome various learner challenges,</li>
                <li>Prepare students for test,</li>
              </ul>
              <div class="text-center">
                <button @click="applyNow()" class="btn btn-secondary btn-lg">
                  Become a Lifeline Tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <!-- <Gallery></Gallery> -->
      <TutorList></TutorList>
      <TheMessage></TheMessage>
    </div>
    <div v-if="join">
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>

    <div v-if="applying">
      <div class="client-banner">
        <div class="mx-5 pt-5">
          <div class="row">
            <div class="col-3 me-4">
              <RouterLink class="navbar-brand text-danger" to="/"
                ><img
                  id="#banner"
                  class="logo"
                  src="/images/logo.png"
                  alt="LIFELINE"
                />LIFELINE</RouterLink
              >
            </div>

            <div class="col mt-lg-4 mt-md-1 row d-none d-lg-flex">
              <div class="col-2 col-lg-2">
                <button :class="login && 'btn btn-danger'">1</button> <br />
                <small :class="login && 'activeTab'">Create Login</small>
              </div>
              <div class="col-2 col-lg-2">
                <button :class="personal && 'btn btn-danger'">2</button> <br />
                <small :class="personal && 'activeTab'">Personal</small>
              </div>
              <div class="col-2 col-lg-2">
                <button :class="education && 'btn btn-danger'">3</button> <br />
                <small :class="education && 'activeTab'">Qualification</small>
              </div>
              <div class="col-2 col-lg-2">
                <button :class="expertise && 'btn btn-danger'">4</button> <br />
                <small :class="expertise && 'activeTab'">Preferences</small>
              </div>
              <div class="col-2 col-lg-2">
                <button :class="location && 'btn btn-danger'">5</button> <br />
                <small :class="location && 'activeTab'">Location</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-----------APPLICATION FORM------------>

  <div class="container-minute services-apply mt-lg-5 mt-5" v-if="form">
    <section class="">
      <h4 class="formHead">TUTOR APPLICATION</h4>
      <div class="form-apply">
        <form @submit.prevent="submitTutorForm()">
          <!-- LOGIN DETAILS -->
          <fieldset v-if="login">
            <section class="pt-sm-5">
              <Message>
                <p class="m-0 text-start">
                  Review our
                  <RouterLink class="link" to="/faq"
                    >Frequently Asked Questions (FAQ)</RouterLink
                  >
                  and
                  <RouterLink class="link" to="/code"
                    >Tutor Code of Conduct</RouterLink
                  >
                  for additional info.
                </p>
              </Message>

              <legend class="legend me-auto">Create Login Details</legend>

              <div class="row my-lg-1 my-sm-3">
                <label for="email" class="label">Email</label>
                <div class="col-lg-12">
                  <input
                    required
                    class="apply-input shadow-one"
                    type="email"
                    v-model="tutorApplication.email"
                    @keyup="emailValidity()"
                  />

                  <p v-if="emailErrorMessageShow" class="text-danger lh-1">
                    <small>{{ emailErrorMessage }}</small>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 my-sm-3">
                  <label class="label" for="password">Password</label>
                  <input
                    required
                    class="apply-input shadow-one"
                    type="password"
                    v-model="tutorApplication.password"
                    name="password"
                    @keyup="passwordCheck()"
                  />
                  <p v-if="passwordErrorMessageShow" class="text-danger lh-1">
                    <small>{{ passwordErrorMessage }}</small>
                  </p>
                </div>

                <div class="col-lg-6 my-sm-3">
                  <label class="label" for="altpassword"
                    >Confirm Password</label
                  >
                  <input
                    required
                    class="apply-input shadow-one"
                    type="password"
                    name="password-confirm"
                    v-model="tutorApplication.passwordConfirm"
                    @keyup="passwordConfirm()"
                  />
                  <p v-if="passwordConfirmErrorShow" class="text-danger lh-1">
                    <small>{{ passwordConfirmError }}</small>
                  </p>
                </div>
              </div>

              <!-- <input class="apply-input" type="file" name="profilePic" /> -->
              <div class="d-flex justify-content-between py-3">
                <!-- <small>1/4</small> -->

                <button class="round" :class="login && 'round1'">1/4</button>

                <button
                  class="btn btn-success"
                  type="button"
                  @click="personalSectionBtn()"
                >
                  Next
                </button>
              </div>
            </section>
          </fieldset>

          <!-- PERSONAL INFORMATION -->
          <fieldset v-if="personal">
            <section class="personal">
              <legend class="legend me-auto">Personal Details</legend>

              <div class="row">
                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="firstName">First Name</label>
                  <inputText
                    class="apply-input"
                    name="firstName"
                    type="text"
                    v-model="tutorApplication.firstName"
                    required
                  />

                  <p class="text-danger lh-1" v-if="firstNameError">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="lastName">Last Name</label>
                  <inputText
                    class="apply-input"
                    type="text"
                    name="lastName"
                    v-model="tutorApplication.lastName"
                    required
                  />
                  <p class="text-danger lh-1" v-if="lastNameError">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="sex">Sex</label>
                  <select
                    name="sex"
                    id=""
                    class="apply-input"
                    v-model="tutorApplication.sex"
                  >
                    <option disabled>Select Gender</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                  </select>
                  <p class="text-danger" v-if="sexError">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="dateOfBirth">Date of Birth</label>
                  <input
                    class="apply-input"
                    type="date"
                    name="DoB"
                    v-model="tutorApplication.DoB"
                    required
                  />
                  <p class="text-danger" v-if="DoBError">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="contact">Contact</label>
                  <input
                    class="apply-input"
                    type="tel"
                    name="contact"
                    v-model="tutorApplication.contact"
                    required
                  />
                  <p class="text-danger" v-if="contactError">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 col-sm-12 my-2">
                  <label class="label" for="altContact"
                    >Emergency Contact</label
                  >
                  <input
                    class="apply-input"
                    type="tel"
                    name="emergency"
                    v-model="tutorApplication.emergency"
                    required
                  />
                  <p class="text-danger" v-if="emergencyError">
                    <small>This field is required</small>
                  </p>
                </div>
                <!-- <div class="col-lg-12 shadow-two mt-lg-3 py-2">
                  <div class="py-3">
                    <div class="card">
                      <Toast />
                      <FileUpload
                        name="demo[]"
                        url="/api/upload"
                        @upload="onAdvancedUpload($event)"
                        :multiple="false"
                        fileLimit="1"
                        accept="image/*"
                        :auto="false"
                        :maxFileSize="1000000"
                      >
                        <template #empty>
                          <p>Drag and drop files to here to upload.</p>
                        </template>
                      </FileUpload>
                    </div>
                  </div>
                </div> -->
              </div>

              <div class="d-flex justify-content-between my-lg-2 py-lg-3 py-4">
                <button class="round" :class="personal && 'round2'">2/4</button>
                <div>
                  <button
                    class="btn btn-danger me-3"
                    type="button"
                    @click="loginSection()"
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-success"
                    type="button"
                    @click="educationSectionBtn()"
                  >
                    Next
                  </button>
                </div>
              </div>
            </section>
          </fieldset>

          <!-- EDUCATION -->
          <fieldset v-if="education">
            <section class="education">
              <legend class="legend">Education & Qualification</legend>
              <h6><small>Select Your Student Status</small></h6>
              <div>
                <div
                  class="btn-group pb-2"
                  role="group"
                  aria-label="Vertical radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="studentStatus"
                    v-model="tutorApplication.studentStatus"
                    value="Undergraduate"
                    id="vbtn-radio1"
                    @click="amUnderGraduate()"
                    autocomplete="off"
                    checked
                  />
                  <label
                    id="undergradbtn"
                    class="btn btn-outline-success"
                    for="vbtn-radio1"
                    >Undergraduate</label
                  >
                  <input
                    type="radio"
                    class="btn-check"
                    name="studentStatus"
                    v-model="tutorApplication.studentStatus"
                    value="Graduate"
                    @click="amGraduate()"
                    id="vbtn-radio2"
                    autocomplete="off"
                  />
                  <label
                    id="gradbtn"
                    class="btn btn-outline-success px-lg-5 px-sm-4"
                    for="vbtn-radio2"
                    >Graduate</label
                  >
                </div>
              </div>
              <br />

              <!-- UNDERGRADUATE -->
              <div v-if="underGraduate">
                <div class="row my-lg-4">
                  <div class="col-lg-6 my-2">
                    <label class="label" for="school_attending"
                      >School Attending</label
                    >
                    <input
                      class="apply-input"
                      type="text"
                      name="school_attending"
                      v-model="tutorApplication.school_attending"
                    />
                    <p
                      class="text-danger lh-1"
                      v-if="error.schoolAttendingError"
                    >
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label" for="level">Level</label>
                    <input
                      class="apply-input"
                      type="text"
                      name="level"
                      placeholder="Level; Eg - Level 200"
                      v-model="tutorApplication.level"
                    />
                    <p class="text-danger lh-1" v-if="error.levelError">
                      <small>This field is required</small>
                    </p>
                  </div>
                </div>

                <div class="row my-lg-4">
                  <div class="col-lg-6 my-2">
                    <label class="label" for="highest_level_of_education"
                      >Certificate Pursuing</label
                    >
                    <select
                      class="apply-input"
                      name="certPurs"
                      v-model="tutorApplication.certPurs"
                    >
                      <option disabled>Select Certificate</option>
                      <option value="Masters">Master</option>
                      <option value="Degree">Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="HND">HND</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                    <p class="text-danger lh-1" v-if="error.certPursError">
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label" for="course_studying"
                      >Course Studying</label
                    >
                    <input
                      class="apply-input"
                      type="text"
                      name="coursing"
                      v-model="tutorApplication.coursing"
                    />
                    <p class="text-danger lh-1" v-if="error.coursingError">
                      <small>This field is required</small>
                    </p>
                  </div>
                </div>
              </div>

              <!-- POSTGRADUATES -->
              <div v-if="graduate">
                <div class="row my-lg-4">
                  <div class="col-lg-6 my-2">
                    <label class="label" for="schoolCompleted"
                      >School Completed</label
                    >
                    <input
                      class="apply-input"
                      type="text"
                      name="schoolCompleted"
                      v-model="tutorApplication.schoolCompleted"
                    />
                    <p
                      class="text-danger lh-1"
                      v-if="error.schoolCompletedError"
                    >
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label" for="YoC">Date of Completion</label>
                    <input
                      class="apply-input"
                      type="month"
                      name="YoC"
                      v-model="tutorApplication.YoC"
                    />
                    <p class="text-danger lh-1" v-if="error.YoCError">
                      <small>This field is required</small>
                    </p>
                  </div>
                </div>

                <div class="row my-lg-4">
                  <div class="col-lg-6 my-2">
                    <label class="label" for="course_studied"
                      >Course Studied</label
                    >
                    <input
                      class="apply-input"
                      type="text"
                      name="coursed"
                      v-model="tutorApplication.coursed"
                    />
                    <p class="text-danger lh-1" v-if="error.coursedError">
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label" for="highest_level_of_education"
                      >Certificate Attained</label
                    >
                    <select
                      class="apply-input"
                      name="certAttained"
                      v-model="tutorApplication.certAttained"
                    >
                      <option disabled>Select Certificate</option>
                      <option value="Masters">Masters</option>
                      <option value="Degree">Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="HND">HND</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                    <p class="text-danger lh-1" v-if="error.certAttainedError">
                      <small>This field is required</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between py-3">
                <button class="round" :class="education && 'round3'">
                  3/4
                </button>

                <div>
                  <button
                    class="me-lg-3 btn btn-danger me-3"
                    type="button"
                    @click="toPersonal()"
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-success me-lg-2"
                    type="button"
                    @click="expertiseSectionBtn()"
                  >
                    Next
                  </button>
                </div>
              </div>
            </section>
          </fieldset>

          <!-- EXPERTISE -->
          <fieldset v-if="expertise">
            <div class="accordion my-lg-2" id="accordionExample">
              <label class="label my-3 text-start" for="">
                Teaching Expertise <br />
                (Select Levels and Subjects)
              </label>
              <!-- FIRST LEVEL SUBJECTS -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <h5 class="faqHead">Pre-School</h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse row"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body d-flex justify-content-around">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="pre_school"
                        v-model="tutorApplication.pre_school"
                        value="Reading"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >Reading</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        name="pre_school"
                        v-model="tutorApplication.pre_school"
                        value="Writing"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >Writing</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        name="pre_school"
                        v-model="tutorApplication.pre_school"
                        value="Arithmetic"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >Arithmetic</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox5"
                        name="pre_school"
                        v-model="tutorApplication.pre_school"
                        value="Phonics"
                      />
                      <label class="form-check-label" for="inlineCheckbox5"
                        >Phonics</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- SECOND LEVEL SUBJECTS -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5 class="faqHead">Lower Primary</h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body d-flex justify-content-around">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="lower_primary"
                        v-model="tutorApplication.lower_primary"
                        value="Reading"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >Reading</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        name="lower_primary"
                        v-model="tutorApplication.lower_primary"
                        value="Writing"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >Writing</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        name="lower_primary"
                        v-model="tutorApplication.lower_primary"
                        value="Mathematics"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >Maths</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        name="lower_primary"
                        v-model="tutorApplication.lower_primary"
                        value="Science"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >Science</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- THIRD LEVEL SUBJECTS -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h5 class="faqHead">Upper Primary</h5>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body d-flex justify-content-around">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="upper_primary"
                        v-model="tutorApplication.upper_primary"
                        value="English"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >English</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        name="upper_primary"
                        v-model="tutorApplication.upper_primary"
                        value="Writing"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >Writing</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        name="upper_primary"
                        v-model="tutorApplication.upper_primary"
                        value="Mathematics"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >Mathematics</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        name="upper_primary"
                        v-model="tutorApplication.upper_primary"
                        value="Science"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >Science</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- FOURTH LEVEL SUBJECTS -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <h5 class="faqHead">Junior High School</h5>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body d-flex justify-content-around">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="JHS"
                        v-model="tutorApplication.JHS"
                        value="English"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >English</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        name="JHS"
                        v-model="tutorApplication.JHS"
                        value="Mathematics"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >Mathematics</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        name="JHS"
                        v-model="tutorApplication.JHS"
                        value="Science"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >Science</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox5"
                        name="JHS"
                        v-model="tutorApplication.JHS"
                        value="others"
                      />
                      <label class="form-check-label" for="inlineCheckbox5"
                        >Social</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- FIFTH LEVEL SUBJECTS -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <h5 class="faqHead">Senior High School</h5>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body d-flex justify-content-around">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="SHS"
                        v-model="tutorApplication.SHS"
                        value="English"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >English</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        name="SHS"
                        v-model="tutorApplication.SHS"
                        value="Social"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >Social</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        name="SHS"
                        v-model="tutorApplication.SHS"
                        value="Mathematics"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >Mathematics</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        name="SHS"
                        v-model="tutorApplication.SHS"
                        value="Science"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >Science</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <textarea
                class="form-control my-3 border shadow-two"
                name="otherSubjects"
                v-model="tutorApplication.otherSubjects"
                id=""
                placeholder="What other subjects can you teach?"
              ></textarea>
            </div>

            <div class="d-flex justify-content-between py-3">
              <button class="round" :class="expertise && 'round4'">4/4</button>

              <div class="py-2">
                <button
                  class="me-lg-3 btn btn-danger me-3"
                  type="button"
                  @click="toEducation()"
                >
                  Back
                </button>
                <button
                  class="btn btn-success me-lg-2"
                  type="button"
                  @click="locationSectionBtn()"
                >
                  Next
                </button>
              </div>
            </div>
          </fieldset>

          <!-- CONTACT AND LOCATION -->
          <fieldset
            id="contactLocation"
            class="form-section"
            data-section="5"
            v-if="location"
          >
            <section>
              <legend class="legend">Location and Other Details</legend>

              <div class="row my-3">
                <div class="col-lg-6 my-3">
                  <label class="label" for="Mobile Money"
                    >Mobile Money Number</label
                  >
                  <input
                    class="apply-input"
                    type="tel"
                    name="momo_number"
                    v-model="tutorApplication.momo_number"
                    placeholder="For payments of allowances"
                  />
                  <p class="text-danger lh-1" v-if="error.mobileMoney">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 my-3">
                  <label class="label" for="gps">GPS Address</label>
                  <input
                    class="apply-input"
                    type="text"
                    name="gps"
                    v-model="tutorApplication.gps"
                    placeholder="Ghana Post GPS of Residence."
                  />
                  <p class="text-danger lh-1" v-if="error.gps">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 my-3">
                  <label class="label" for=""
                    >Where did you hear about us?</label
                  >
                  <select
                    v-model="tutorApplication.aboutMedia"
                    class="apply-input"
                  >
                    <option disabled>Select Medium</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Friends">Friends</option>
                  </select>
                  <p class="text-danger lh-1" v-if="error.aboutMedia">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-6 my-3">
                  <label class="label" for="location">Area of Residence</label>
                  <input
                    class="apply-input"
                    type="text"
                    name="location"
                    v-model="tutorApplication.location"
                    placeholder="Eg: Moshi-Zongo"
                  />
                  <p class="text-danger lh-1" v-if="error.residence">
                    <small>This field is required</small>
                  </p>
                </div>
              </div>

              <div class="col-lg-12 text-start my-2">
                <label class="label" for="accessibleLocations"
                  >Accessible Locations</label
                >
                <textarea
                  name="accessibleLocations"
                  v-model="tutorApplication.accessibleLocations"
                  class="apply-input"
                  placeholder="Tell us other areas you can teach at: eg. Gumani"
                ></textarea>
                <p class="text-danger lh-1" v-if="error.accessibleLocations">
                  <small>This field is required</small>
                </p>
              </div>

              <div class="col-lg-12 text-start">
                <label for="">Motivation for applying</label>
                <textarea
                  class="apply-input mb-0 pb-0"
                  name="motivation"
                  v-model="tutorApplication.motivation"
                  placeholder="What is your motivation for applying"
                ></textarea>
                <div class="row pt-0 mt-0">
                  <p class="col">
                    Max word Limit: {{ tutorApplication.motivation.length }}/120
                  </p>
                  <p
                    class="col col-lg-3 text-danger lh-1"
                    v-if="error.motivation"
                  >
                    <small>This field is required</small>
                  </p>
                </div>
              </div>

              <div class="colmt-3">
                <input
                  required
                  class="form-check-input"
                  type="checkbox"
                  name="agreement"
                  v-model="tutorApplication.agreement"
                />
                <label class="mx-2" for="agreement">
                  <small
                    >I confirm the accuracy of the information provided</small
                  >
                </label>
              </div>
              <br />

              <div v-if="submitError">
                <small class="bg-danger text-white p-3">
                  {{ submitErrorMessage }}
                </small>
              </div>

              <div class="my-3 d-flex justify-content-end">
                <!-- <button class="round" :class="location && 'round4'">4/4</button> -->
                <div>
                  <button
                    class="btn btn-danger px-2 prev-section mx-4 px-3"
                    type="button"
                    @click="toExpertise()"
                  >
                    <i class="pi pi-arrow-circle-left"></i> Back
                  </button>

                  <button
                    class="btn btn-success px-3"
                    type="submit"
                    id="applySubmit"
                  >
                    Send
                    <div
                      class="spinner-border spinner-border-sm"
                      role="status"
                      v-if="wheel"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </fieldset>

          <!-- SUBMITTING FORM -->
          <fieldset id="submit" class="form-section" data-section="6">
            <section class="submit">
              <!-- <h3>Thank You For Applying</h3> -->
            </section>
          </fieldset>
        </form>
      </div>
    </section>
    <!-- <TheMessage></TheMessage> -->
  </div>

  <!-- Use v-show to hide or show after applying -->
  <div v-if="success">
    <div class="client-banner">
      <NavBar></NavBar>
    </div>
    <div class="container-sm py-2 services bg-white">
      <div class="fs-5 px-lg-5 px-2 text-start mb-lg-2 mb-3">
        <p class="mt-lg-5 mt-3">
          Dear {{ tutorApplication.lastName }} {{ tutorApplication.firstName }},
        </p>
        <p class="py-lg-3 lh-lg pb-lg-3 pb-2">
          Thank You for Applying to Join Our Team. We have received your
          application, and it's now under review.
        </p>

        <p>
          Please know that If your application is successful, we will reach out
          to you to discuss the next steps in the application process,
          otherwise, we wish you well in your future applications.
        </p>

        <p>
          If you have any questions or additional information to share, you can
          contact us on <a href="tel:0246011004">0246011004</a> or
          <a href="tel:0243934353">0243934353</a>.
        </p>
        <p class="">
          Regards, <br />
          Lifeline.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   deleteDoc,
//   addDoc,
//   setDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "vue-router";

// const firebaseConfig = {
//   apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
//   authDomain: "lifeline-edu-site.firebaseapp.com",
//   projectId: "lifeline-edu-site",
//   storageBucket: "gs://lifeline-edu-site.appspot.com/",
//   messagingSenderId: "1059969595497",
//   appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
// };

// const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
// const auth = getAuth(firebase);

export default {
  name: "Tutor Application",
  data() {
    return {
      login: true,
      personal: false,
      education: false,
      expertise: false,
      location: false,
      join: true,
      wheel: false,
      applying: false,
      form: false,
      success: false,
      contact: false,
      underGraduate: true,
      graduate: false,
      activeTab: true,
      disableBtn: true,
      seeMore: false,
      submitError: false,
      submitErrorMessage: "",
      emailErrorMessage: "",
      emailErrorMessageShow: true,
      passwordErrorMessage: "",
      passwordErrorMessageShow: true,
      passwordConfirmError: "",
      passwordConfirmErrorShow: false,
      firstNameError: false,
      lastNameError: false,
      sexError: false,
      DoBError: false,
      contactError: false,
      emergencyError: false,
      items: [
        {
          label: "Personal Info",
        },
        {
          label: "Reservation",
        },
        {
          label: "Review",
        },
      ],
      error: {
        certAttainedError: false,
        coursedError: false,
        YoCError: false,
        schoolCompletedError: false,
        coursingError: false,
        levelError: false,
        certPursError: false,
        schoolAttendingError: false,
        mobileMoney: false,
        residence: false,
        aboutMedia: false,
        accessibleLocations: false,
        motivation: false,
      },
      tutorApplication: {
        email: "",
        password: "",
        passwordConfirm: "",
        firstName: "",
        lastName: "",
        sex: "",
        DoB: "",
        emergency: "",
        school_attending: "",
        qualification: "",
        level: "",
        certPurs: "",
        coursing: "",
        schoolCompleted: "",
        YoC: "",
        gps: "",
        emailVerification: false,
        momo_number: "",
        aboutMedia: "",
        accessibleLocations: "",
        applicationDate: new Date(),
        category: "",
        comment: [],
        coursed: "",
        contact: "",
        contracts: [],
        location: "",
        pre_school: [],
        lower_primary: [],
        upper_primary: [],
        JHS: [],
        SHS: [],
        logSheets: [],
        otherSubjects: "",
        profilePictureUrl: "",
        rating: "",
        status: "",
        studentStatus: "",
        certAttained: "",
        rowId: "",
        motivation: "".substring(0, 120),
        agreement: "No",
      },
    };
  },

  methods: {
    sendEmail() {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this.$refs.form, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },

    async submitTutorForm() {
      let error = this.error;
      let form = this.tutorApplication;

      if (form.momo_number === "") {
        error.mobileMoney = true;
      } else {
        error.mobileMoney = false;
      }

      if (form.aboutMedia === "") {
        error.aboutMedia = true;
      } else {
        error.aboutMedia = false;
      }

      if (form.accessibleLocations === "") {
        error.accessibleLocations = true;
      } else {
        error.accessibleLocations = false;
      }

      if (form.motivation === "") {
        error.motivation = true;
      } else {
        error.motivation = false;
      }

      if (form.location === "") {
        error.residence = true;
      } else {
        error.residence = false;
      }

      if (
        !error.mobileMoney &&
        !error.residence &&
        !error.aboutMedia &&
        !error.accessibleLocations &&
        !error.motivation
      ) {
        this.wheel = true;
        try {
          const email = this.tutorApplication.email;
          const application = this.tutorApplication;
          const tutorRef = doc(db, "Tutor Applications", email);

          // Set a timeout of 10 seconds for the application submission
          const submissionPromise = setDoc(tutorRef, application, {
            merge: true,
          });
          const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Timeout error")), 10000); // 10 seconds
          });

          await Promise.race([submissionPromise, timeoutPromise]);

          this.applying = false;
          this.form = false;
          this.success = true;
          // console.log("Tutor Application", application);
        } catch (error) {
          console.error("Application Unsuccessful", error);

          let errorMessage;
          switch (error.code) {
            case "permission-denied":
              errorMessage =
                "You do not have permission to submit the application. Please contact support.";
              break;
            case "unavailable":
              errorMessage = "Service is unavailable. Please try again later.";
              break;
            case "invalid-argument":
              errorMessage =
                "Invalid input data. Please check your information and try again.";
              break;
            default:
              errorMessage =
                "Registration unsuccessful. Please try again later.";
          }

          this.submitErrorMessage = errorMessage;
          this.submitError = true;
          this.wheel = false;
        }
      }
    },

    emailValidity() {
      const email = this.tutorApplication.email;

      if (email.includes("@") && email.length >= 8) {
        this.emailErrorMessageShow = false;
        return true;
      } else {
        this.emailErrorMessageShow = true;
        this.emailErrorMessage = "Please enter a valid email";
        return false;
      }
    },

    passwordCheck() {
      let password = this.tutorApplication.password.trim();
      if (password.length >= 6) {
        this.passwordErrorMessageShow = false;
        return true;
      } else {
        this.passwordErrorMessageShow = true;
        this.passwordErrorMessage = "Password must be more than 6 characters";
        return false;
      }
    },

    passwordConfirm() {
      const password = this.tutorApplication.password.trim();
      const altpassword = this.tutorApplication.passwordConfirm.trim();

      if (password === altpassword) {
        this.passwordConfirmErrorShow = false;
        return true;
      } else {
        this.passwordConfirmErrorShow = true;
        this.passwordConfirmError = "The two passwords do not match";
        return false;
      }
    },

    seeMoreBtn() {
      this.seeMore = !this.seeMore;
    },

    applyNow() {
      this.join = false;
      this.applying = true;
      this.form = true;
    },

    amGraduate() {
      this.underGraduate = false;
      this.graduate = true;
    },

    amUnderGraduate() {
      this.graduate = false;
      this.underGraduate = true;
    },

    personalSectionBtn() {
      let emailValid = this.emailValidity();
      let passwordValid = this.passwordCheck() && this.passwordConfirm();
      if (emailValid && passwordValid) {
        this.login = false;
        this.personal = true;
      }
    },

    educationSectionBtn() {
      let form = this.tutorApplication;

      if (form.firstName === "") {
        this.firstNameError = true;
      } else {
        this.firstNameError = false;
      }

      if (form.lastName === "") {
        this.lastNameError = true;
      } else {
        this.lastNameError = false;
      }

      if (form.sex === "") {
        this.sexError = true;
      } else {
        this.sexError = false;
      }

      if (form.DoB === "") {
        this.DoBError = true;
      } else {
        this.DoBError = false;
      }

      if (form.contact === "") {
        this.contactError = true;
      } else {
        this.contactError = false;
      }

      if (form.emergency === "") {
        this.emergencyError = true;
      } else {
        this.emergencyError = false;
      }

      if (
        !this.firstNameError &&
        !this.lastNameError &&
        !this.DoBError &&
        !this.sexError &&
        !this.contactError &&
        !this.emergencyError
      ) {
        this.personal = false;
        this.education = true;
      }
    },

    expertiseSectionBtn() {
      let error = this.error;
      let form = this.tutorApplication;

      if (this.graduate) {
        if (form.certAttained === "") {
          error.certAttainedError = true;
        } else {
          error.certAttainedError = false;
        }

        if (form.coursed === "") {
          error.coursedError = true;
        } else {
          error.coursedError = false;
        }

        if (form.YoC === "") {
          error.YoCError = true;
        } else {
          error.YoCError = false;
        }

        if (form.schoolCompleted === "") {
          error.schoolCompletedError = true;
        } else {
          error.schoolCompletedError = false;
        }
      }

      if (this.underGraduate) {
        if (form.school_attending === "") {
          error.schoolAttendingError = true;
        } else {
          error.schoolAttendingError = false;
        }

        if (form.level === "") {
          error.levelError = true;
        } else {
          error.levelError = false;
        }

        if (form.certPurs === "") {
          error.certPursError = true;
        } else {
          error.certPursError = false;
        }

        if (form.coursing === "") {
          error.coursingError = true;
        } else {
          error.coursingError = false;
        }
      }

      if (
        (this.graduate &&
          (error.certAttainedError ||
            error.coursedError ||
            error.YoCError ||
            error.schoolCompletedError)) ||
        (this.underGraduate &&
          (error.schoolAttendingError ||
            error.levelError ||
            error.certPursError ||
            error.coursingError))
      ) {
        return;
      }
      this.education = false;
      this.expertise = true;
    },

    locationSectionBtn() {
      if (this.expertise) {
        this.expertise = false;
        this.location = true;
      }
    },

    loginSection() {
      if (this.personal) {
        this.personal = false;
        this.login = true;
      }
    },

    toEducation() {
      if (this.expertise) {
        this.expertise = false;
        this.education = true;
      }
    },

    toPersonal() {
      this.education = false;
      this.personal = true;
    },

    toExpertise() {
      (this.location = false), (this.expertise = true);
    },

    onAdvancedUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
.activeTab {
  border-bottom: 5px red solid;
}

.round1 {
  border-right: 5px red solid;
}

.round2 {
  border-right: 5px red solid;
  border-bottom: 5px red solid;
}

.round3 {
  border-right: 5px red solid;
  border-bottom: 5px red solid;
  border-left: 5px red solid;
}

.round4 {
  border-right: 5px red solid;
  border-bottom: 5px red solid;
  border-left: 5px red solid;
  border-top: 5px red solid;
}

.fa {
  font-weight: 5rem;
  font-size: 5rem;
  color: rgb(22, 172, 97);
}

.link {
  text-decoration: none;
  color: blue;
}

.link:hover {
  color: rgb(83, 83, 173);
}

.link:clicked {
  color: brown;
}

.formHead {
  font-size: 1.8rem;
  padding: 10px 0;
  font-weight: bolder;
}
</style>

<i class="fa fa-search"></i>
<i class="fa fa-life-saver"></i>
<i class="fa fa-sitemap"></i>
<i class="fa fa-server"></i>
