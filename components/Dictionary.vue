<template>
  <section class="px-5 py-4 shadow-two my-4">
    <div class="row">
      <div class="col-lg-6 text-white bg-primary py-3">
        <h1 class="fw-bolder">DICTIONARY</h1>
        <h6 class="px-lg-4 px-2">
          SEARCH THE MEANING OF WORDS, SYNONYMS, USAGE, AUDIO SOUND AND OTHERS.
        </h6>

        <div class="d-none d-lg-block">
          <img
            class="my-5"
            src="/images/homepage.png"
            alt=""
            width="260"
            height="140"
          />
        </div>

        <small>Powered by the Urban Dictionary</small>
      </div>
      <div class="col-lg-6 text-start shadow-two bg-white">
        <div class="container shadow-two my-2">
          <h3 class="my-2">Dictionary Search</h3>
          <form class="py-2" @submit.prevent="dictionaryWord">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border border-primary"
                name="word"
                placeholder="Enter a word to search"
                v-model="word"
              />
              <button class="btn btn-success shadow-one">
                <i class="bi-search me-2"></i>Search
                <div
                  class="spinner-grow spinner-grow-sm dic-spin"
                  role="status"
                  v-if="spinner"
                ></div>
              </button>
            </div>
          </form>

          <div
            class="mt-2 dictionary shadow-one px-2 py-2"
            v-for="definition in definitions"
          >
            {{ definition }}
          </div>
        </div>
      </div>
    </div>
    <div id="results" class="text-start"></div>
  </section>
</template>

<script>
// import Axios from "axios";
export default {
  name: "Dictionary App",
  data() {
    return {
      spinner: false,
      word: "",
      definitions: [],
    };
  },

  methods: {
    // Dictionary Data
    dictionaryWord() {
      axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.word)
        .then((response) => {
          console.log("Dictionary", response.data);
          this.definitions = response.data;
        })
        .catch((error) => {
          console.log("Errors", error);
        });

      this.spinner = true;
    },

    searchWord() {
      this.spinner = true;
    },
  },
};
</script>

<style scoped></style>

<!-- https://api.dictionaryapi.dev/api/v2/entries/en/<word> -->
