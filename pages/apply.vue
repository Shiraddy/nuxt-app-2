<template>
  <section class="applyBanner">
    <NavBar></NavBar>
    <section class="applyWall" v-if="form">
      <div class="row gx-5">
        <div
          class="col-lg-4 d-none d-lg-flex text-start align-items-center justify-content-center bg-white"
        >
          <div class="service-hero-text">
            <h6 class="fs-beauty fs-4">Apply Here</h6>
            <h1 class="hero-apply">
              Become a
              <span class="text-success fw-bolder">TUTOR</span>
            </h1>

            <p class="fs-5 fs-beauty">
              <small
                >Receive contracts to teach students at home after school and
                weekends.
              </small>
            </p>
            <div class="">
              <button class="btn btn-success shadow-three">
                <NuxtLink to="/faq" class="nav-link">READ MORE..</NuxtLink>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-8 small text-white filter-hero">
          <form @submit.prevent="submitTutorForm()" class="applyForm">
            <h4 class="fw-bolder my-2 text-secondary">APPLICATION</h4>

            <!-- CREATE LOGIN DETAILS -->
            <fieldset v-if="login">
              <legend class="legend me-auto">Create Login Details</legend>
              <section class="">
                <div class="row gy-2 my-3">
                  <label for="email" class="label">Email</label>
                  <div class="col-lg-12">
                    <inputText
                      required
                      class="apply-input shadow-three"
                      type="email"
                      v-model="tutorApplication.email"
                      @keyup="emailValidity()"
                    />

                    <p v-if="emailErrorMessageShow" class="text-danger lh-1">
                      <small>{{ emailErrorMessage }}</small>
                    </p>
                  </div>

                  <div class="col-lg-12 col-sm-12">
                    <label class="label" for="password">Password</label>
                    <inputText
                      required
                      class="apply-input shadow-three"
                      type="password"
                      v-model="tutorApplication.password"
                      name="password"
                      @keyup="passwordCheck()"
                    />
                    <p v-if="passwordErrorMessageShow" class="text-danger lh-1">
                      <small>{{ passwordErrorMessage }}</small>
                    </p>
                  </div>

                  <div class="col-lg-12 col-sm-12">
                    <label class="label" for="altpassword"
                      >Confirm Password</label
                    >
                    <inputText
                      required
                      class="apply-input shadow-three"
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
                  <button class="round" :class="login && 'round1'">1/4</button>

                  <button
                    class="btn btn-success"
                    type="button"
                    @click="personalSectionBtn()"
                  >
                    Next <small class="pi pi-caret-right"></small>
                  </button>
                </div>
              </section>
            </fieldset>

            <!-- PERSONAL INFORMATION -->
            <fieldset v-if="personal">
              <section class="personal">
                <legend class="legend me-auto">Personal Details</legend>

                <div class="row gy-2">
                  <div class="col-lg-12 col-sm-12">
                    <label class="label" for="firstName">First Name</label>
                    <inputText
                      class="apply-input"
                      name="firstName"
                      type="text"
                      v-model="tutorApplication.firstName"
                      required
                    />

                    <p class="text-danger" v-if="firstNameError">
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-12 col-sm-12">
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

                  <div class="col-lg-6 col-sm-12">
                    <label class="label" for="sex">Sex</label>
                    <select
                      name="sex"
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

                  <div class="col-lg-6 col-sm-12">
                    <label class="label" for="dateOfBirth">Date of Birth</label>
                    <inputText
                      type="date"
                      class="apply-input"
                      v-model="tutorApplication.DoB"
                    />

                    <p class="text-danger" v-if="DoBError">
                      <small>This field is required</small>
                    </p>
                  </div>

                  <div class="col-lg-6 col-sm-12">
                    <label class="label" for="contact">Contact</label>
                    <inputText
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

                  <div class="col-lg-6 col-sm-12">
                    <label class="label" for="altContact"
                      >Emergency Contact</label
                    >
                    <inputText
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
                </div>

                <div
                  class="d-flex justify-content-between my-lg-2 py-lg-3 py-4"
                >
                  <button class="round" :class="personal && 'round2'">
                    2/4
                  </button>
                  <div>
                    <button
                      class="btn btn-danger me-3"
                      type="button"
                      @click="loginSection()"
                    >
                      <small class="pi pi-caret-left"></small> Back
                    </button>
                    <button
                      class="btn btn-success"
                      type="button"
                      @click="educationSectionBtn()"
                    >
                      Next <small class="pi pi-caret-right"></small>
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
                  <div class="row my-lg-3 gy-1">
                    <div class="col-lg-6">
                      <label class="label" for="school_attending"
                        >School Attending</label
                      >
                      <inputText
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

                    <div class="col-lg-6">
                      <label class="label" for="level">Level</label>
                      <inputText
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

                  <div class="row my-lg-2 gy-1">
                    <div class="col-lg-6">
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

                    <div class="col-lg-6">
                      <label class="label" for="course_studying"
                        >Course Studying</label
                      >
                      <inputText
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
                  <div class="row my-lg-2 gy-1">
                    <div class="col-lg-6">
                      <label class="label" for="schoolCompleted"
                        >School Completed</label
                      >
                      <inputText
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

                    <div class="col-lg-6">
                      <label class="label" for="YoC">Date of Completion</label>
                      <inputText
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
                    <div class="col-lg-6">
                      <label class="label" for="course_studied"
                        >Course Studied</label
                      >
                      <inputText
                        class="apply-input"
                        type="text"
                        name="coursed"
                        v-model="tutorApplication.coursed"
                      />
                      <p class="text-danger lh-1" v-if="error.coursedError">
                        <small>This field is required</small>
                      </p>
                    </div>

                    <div class="col-lg-6">
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
                      <p
                        class="text-danger lh-1"
                        v-if="error.certAttainedError"
                      >
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
                      <small class="pi pi-caret-left"></small> Back
                    </button>
                    <button
                      class="btn btn-success me-lg-2"
                      type="button"
                      @click="expertiseSectionBtn()"
                    >
                      Next <small class="pi pi-caret-right"></small>
                    </button>
                  </div>
                </div>
              </section>
            </fieldset>

            <!-- EXPERTISE -->
            <fieldset v-if="expertise" class="">
              <div class="container-fluid">
                <div class="row gy-2">
                  <!-- <div class="col-lg-6">
                    <label for="" class="label">Pre-School</label>
                    <MultiSelect
                      v-model="tutorApplication.pre_school"
                      display="chip"
                      :options="preSchool"
                      optionLabel="name"
                      filter
                      placeholder="Select Subjects"
                      :maxSelectedLabels="3"
                      class="apply-input"
                    />
                  </div> -->
                  <div class="col-12">
                    <label for="" class="label">Lower Level</label>
                    <MultiSelect
                      v-model="tutorApplication.lower_primary"
                      display="chip"
                      :options="lowerPrimary"
                      optionLabel="name"
                      filter
                      placeholder="Select Subjects"
                      :maxSelectedLabels="3"
                      class="apply-input"
                    />
                  </div>
                  <div class="col-12">
                    <label for="" class="label">Upper Primary</label>
                    <MultiSelect
                      v-model="tutorApplication.upper_primary"
                      display="chip"
                      :options="upperPrimary"
                      optionLabel="name"
                      filter
                      placeholder="Select Subjects"
                      :maxSelectedLabels="3"
                      class="apply-input"
                    />
                  </div>
                  <div class="col-12">
                    <label for="" class="label">Junior High Sch.</label>
                    <MultiSelect
                      v-model="tutorApplication.JHS"
                      display="chip"
                      :options="JHS"
                      optionLabel="name"
                      filter
                      placeholder="Select Subjects"
                      :maxSelectedLabels="3"
                      class="apply-input"
                    />
                  </div>
                  <div class="col-12">
                    <label for="" class="label">Senior High Sch.</label>
                    <MultiSelect
                      v-model="tutorApplication.SHS"
                      display="chip"
                      :options="SHS"
                      optionLabel="name"
                      filter
                      placeholder="Select Subjects"
                      :maxSelectedLabels="3"
                      class="apply-input"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between py-3">
                <button class="round" :class="expertise && 'round4'">
                  4/4
                </button>

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
              <section class="">
                <legend class="legend">Location and Other Details</legend>

                <div class="row gy-2">
                  <div class="col-lg-6">
                    <label class="label" for="Mobile Money"
                      >Mobile Money Number</label
                    >
                    <inputText
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

                  <div class="col-lg-6">
                    <label class="label" for="gps">GPS Address</label>
                    <inputText
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

                  <div class="col-lg-6">
                    <label class="label" for=""
                      >How did you hear about us?</label
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

                  <div class="col-lg-6">
                    <label class="label" for="location"
                      >Area of Residence</label
                    >
                    <inputText
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

                <div class="col-lg-12 text-start">
                  <label class="label" for="accessibleLocations"
                    >Accessible Locations</label
                  >
                  <Textarea
                    name="accessibleLocations"
                    v-model="tutorApplication.accessibleLocations"
                    class="apply-input"
                    placeholder="Tell us other areas you can teach at: eg. Gumani"
                  ></Textarea>
                  <p class="text-danger lh-1" v-if="error.accessibleLocations">
                    <small>This field is required</small>
                  </p>
                </div>

                <div class="col-lg-12 text-start">
                  <label for="">Motivation for applying</label>
                  <Textarea
                    class="apply-input mb-0 pb-0"
                    name="motivation"
                    v-model="tutorApplication.motivation"
                    placeholder="What is your motivation for applying"
                  ></Textarea>
                  <div class="row pt-0 mt-0">
                    <p class="col">
                      <small
                        >Max word Limit:
                        {{ tutorApplication.motivation.length }}/120</small
                      >
                    </p>
                    <p class="col col-lg-3 text-danger" v-if="error.motivation">
                      <small>This field is required</small>
                    </p>
                  </div>
                </div>

                <div class="col">
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
           

                <div v-if="submitError">
                  <small class="bg-danger text-white p-1 rounded">
                    {{ submitErrorMessage }}
                  </small>
                </div>

                <div class="d-flex justify-content-end">
                  <!-- <button class="round" :class="location && 'round4'">4/4</button> -->
                  <div>
                    <button
                      class="btn btn-danger px-2 prev-section mx-4"
                      type="button"
                      @click="toExpertise()"
                    >
                      <small class="pi pi-caret-left"></small> Back
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
      </div>
    </section>

    <div v-if="applying">
      <div class="">
        <div class="mx-5 pt-5">
          <div class="row">
            <div class="col mt-lg-4 mt-md-1 row d-none">
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

    <div class="row">
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
              We are redefining how home tuition (extra-classes) should be done.
              We strongly believe in a complimentary approach model where home
              tuition:
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
    <!-- <About></About> -->
    <!-- <Gallery></Gallery> -->
    <!-- <TutorList></TutorList> -->
    <!-- <TheMessage></TheMessage> -->
  </div>

  <div v-if="join">
    <ContactUs></ContactUs>
    <Footer></Footer>
  </div>

  <!-----------APPLICATION FORM------------>

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
      form: true,
      small: false,
      success: false,
      
      contact: false,
      underGraduate: true,
      graduate: false,
      activeTab: true,
      disableBtn: true,
      seeMore: true,
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
      sex: [{ name: "Male" }, { name: "Female" }],
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
      preSchool: [
        { name: "Reading" },
        { name: "Writing" },
        { name: "Arithmetic" },
        { name: "Phonics" },
      ],
      lowerPrimary: [
        { name: "English Language" },
        { name: "Mathematics" },
        { name: "Science" },
        { name: "Writing" },
        { name: "Reading" },
        { name: "French" },
      ],
      upperPrimary: [
        { name: "English Language" },
        { name: "Mathematics" },
        { name: "Science" },
        { name: "French" },
      ],
      JHS: [
        { name: "English Language" },
        { name: "Mathematics" },
        { name: "Science" },
        { name: "Social Studies" },
        { name: "French" },
      ],
      SHS: [
        { name: "English Language" },
        { name: "Mathematics" },
        { name: "Science" },
        { name: "French" },
      ],

      Referred: [
        { name: "Facebook" },
        { name: "Friends" },
        { name: "WhatsApp" },
        { name: "Others" },
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
            case "already-exist":
              errorMessage = "Error. Already registered, please login.";
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
  border: 5px red solid;
}

.fa {
  font-weight: 5rem;
  font-size: 5rem;
  color: rgb(22, 172, 97);
}

.hero-apply {
  font-weight: bolder;
}

.link {
  text-decoration: none;
  color: blue;
}

.link:hover {
  color: rgb(83, 83, 173);
}

.overflow {
  overflow-y: scroll;
}

.link:clicked {
  color: brown;
}

.filter-hero {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
}

.applyWall {
  margin: auto auto;
  width: 75%;
}

.applyForm {
  width: 98%;
  margin: auto auto;
  padding: 1% 3%;
  height: 495px;
  /* overflow-y: scroll; */
}

.formHead {
  font-size: 1.3rem;
  padding: 10px 0;
  font-weight: bolder;
}

.application {
  /* height: 500px; */
  overflow-x: hidden;
}

.applyBanner {
  width: 100%;
  height: 120vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.686), rgba(0, 0, 0, 0.541)),
    url(/images/tutor2.jpg);
  object-fit: cover;
  background-size: cover;
  overflow: hidden;
  background-position: center bottom;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 600px) {
  .small {
    margin-top: 30%;
  }

  .applyForm {
    height: 60vh;
  }

  .filter-hero {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
  }

  .applyWall {
    margin: auto auto;
    width: 90%;
  }
}
</style>

<!-- <i class="fa fa-search"></i>
<i class="fa fa-life-saver"></i>
<i class="fa fa-sitemap"></i>
<i class="fa fa-server"></i> -->
