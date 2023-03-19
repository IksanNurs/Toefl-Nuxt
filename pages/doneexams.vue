<template>
  <div class="container-fluid overflow-auto">
    <div class="row position-relative">
      <div
        class="col-12 col-lg-6"
        style="background-color: #00b4d8; height: 764px"
      >
        <img
          class="position-absolute ms-5"
          style="width: 40%; top: 10%"
          alt="banner"
          src="/image/group-11021.svg"
        />
      </div>
      <div
        class="login col-12 col-md-12 col-lg-6"
        style="background-color: #00b4d8; height: 764px"
      >
        <div
          class="
            card
            border-0
            mx-auto
            pt-3
            mt-5
            px-lg-2
            me-5
            position-relative
            start-50
            translate-middle-x
          "
        >
          <div class="card-title text-center">
            <img
              class="mx-auto"
              alt=""
              style="width: 30%"
              src="/image/capital-1@2x.png"
            />
          </div>
          <div class="card-body px-2">
            <div
              class="mb-3 px-md-5 px-lg-5 text-center fw-semibold fs-4"
              style="
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 150%;
              "
            >
              TOEFL EXAM PREPARATION
            </div>
            <div class="fw-semibold">
              <div
                class="pie mt-5 mt-lg-4"
                :data-progress="'' + finalScore1"
                :style="'--progress: ' + progressScore + 'deg'"
              >
                36%
              </div>
              <br />
              <!-- <div class="row d-flex flex-wrap justify-content-center">
                <div class="card border-0" style="width: 90px">
                  <span class="text-light" style="background-color: #15bf8c"
                    >lulus</span
                  >
                </div>
              </div> -->
            </div>
            <div class="mb-3 px-md-5 px-lg-2 text-start">
              <div class="p-2 flex-grow-1">
                <div class="card" style="border-radius: 20px">
                  <div class="card-body">
                    <div class="container text-center">
                      <div class="row">
                        <div class="col border-end">
                          <h1 style="color: rgb(94, 220, 94)">
                            {{ CorrectAnswerPersen }}%
                          </h1>
                          <p>Correct Answer</p>
                        </div>
                        <div class="col border-end">
                          <h1 style="color: rgb(226, 38, 101)">
                            {{ WrongAnswerPersen }}%
                          </h1>
                          <p>Wrong Answer</p>
                        </div>
                        <div class="col">
                          <h1>{{ SkippedPersen }}%</h1>
                          <p>Question Skipped</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-1 px-md-5 px-lg-5 text-center">
              <div
                class="row pb-4 text-center"
                style="
                  font-family: 'DM Sans';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 18px;
                  line-height: 140.62%;
                  text-align: center;
                  color: #37373f;
                "
              >
                <span>Thank You For Join</span>
                <span>TOEFL EXAM PREPERATION</span>
              </div>
              <div class="row px-5 justify-content-center">
                <button
                  type="button"
                  v-if="isLoading == true"
                  class="btn btn-primary py-3"
                  style="width: 200px"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                  <img class="ps-2" alt="" src="/image/path.svg" />
                </button>
                <button
                  v-else
                  @click="cekSolution()"
                  type="button"
                  class="btn btn-primary py-3"
                  style="width: 200px"
                >
                  Lihat Detail Score
                  <img class="ps-2" alt="" src="/image/path.svg" />
                </button>
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
  middleware: 'auth',
  async asyncData({ $axios, query }) {
    const countQuestionPackage = await $axios.get(
      '/api/sumquestionbypackage/' + query.packageid
    )
    const progressExam = await $axios.get('/api/progressexam/' + query.examid)
    const scoreBysection = await $axios.get(
      '/api/scoringbysection/' + query.examid
    )
    const finalScore = await $axios.get('/api/scoring/' + query.examid)
    const finalScore1 = finalScore.data.data
    let listening1 = scoreBysection.data.data.score.listening
    let structure1 = scoreBysection.data.data.score.structure
    let reading1 = scoreBysection.data.data.score.reading
    let score = listening1 + structure1 + reading1
    let CorrectAnswerPersen = Math.round(
      (score / countQuestionPackage.data.data) * 100
    )
    let WrongAnswerPersen = Math.round(
      ((progressExam.data.data - score) / countQuestionPackage.data.data) * 100
    )
    let SkippedPersen = Math.round(
      ((countQuestionPackage.data.data - progressExam.data.data) /
        countQuestionPackage.data.data) *
        100
    )
    // let progressScore1 = (finalScore1 / 677) * 100
    let progressScore = (CorrectAnswerPersen * 360) / 100
    let isLoading = false
    return {
      SkippedPersen,
      CorrectAnswerPersen,
      WrongAnswerPersen,
      finalScore1,
      progressScore,
      isLoading,
    }
  },
  methods: {
    async cekSolution() {
      this.isLoading = true
      await this.$router.push({
        path: '/solution',
        query: {
          examid: this.$route.query.examid,
          packageid: this.$route.query.packageid,
        },
      })
    },
  },
}
</script>
