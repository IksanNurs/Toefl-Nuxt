<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <nav
        v-if="examnotif.time_left != 0"
        class="navbar navbar-expand-lg navbar-lg fixed-top shadow-sm rounded"
        style="background-color: #012131bd"
      >
        <div class="container d-flex justify-content-between">
          <a class="navbar-brand fs-3 fw-semibold" style="color: #06506b"
            ><div class="d-flex justify-content-arround">
              <div class="col">
                <img alt="" src="/image/stopwatch1.svg" />
              </div>
              <div class="col p-0 ps-2">
                <p class="text-light fs-6">
                  Sisa waktu<br />
                  <span
                    class="text-light fs-5 fw-semibold text-mono"
                    id="countdown"
                  ></span>
                </p>
              </div></div
          ></a>
          <a class="navbar-brand fs-3 fw-semibold" style="color: #06506b"
            ><div class="d-flex justify-content-arround">
              <div class="col text-start">
                <span class="text-light fs-6"
                  >{{ examnotif.package_name }} Sedang Berlangsung</span
                ><br />
              </div></div
          ></a>
          <a class="navbar-brand fs-3 fw-semibold" style="color: #06506b"
            ><div class="d-flex justify-content-arround">
              <div class="col text-start">
                <div
                  class="btn btn-warning btn-pill ml-4"
                  @click="trytest(examnotif.id, examnotif.package_id)"
                  href="/exam/run?id=426015"
                >
                  Lanjutkan Test &nbsp; <i class="fa fa-chevron-right"></i>
                </div>
              </div></div
          ></a>
        </div>
      </nav>
      <div class="col-lg-2">
        <div
          class="offcanvas-lg offcanvas-start"
          tabindex="-1"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="row pt-lg-4">
              <div class="mb-4 pt-2 px-2 text-center">
                <img alt="" style="width: 80%" src="/image/capital-1@2x.png" />
              </div>
              <div class="mb-3 text-center">
                <img style="width: 60%" alt="" src="/image/group-11@2x.png" />
              </div>
              <div class="mb-1 text-center">
                <b style="color: #00b4d8">
                  {{ this.$store.state.auth.user.name }}</b
                >
              </div>
              <div class="mb-1 text-center">
                <div style="font-size: 12px">
                  {{ this.$store.state.auth.user.email }}
                </div>
              </div>
              <div class="mb-1 text-center">
                <div style="font-size: 12px">
                  {{ this.$store.state.auth.user.institution.name }}
                </div>
              </div>
              <div class="mb-1 text-center">
                <div style="font-size: 12px">
                  {{ this.$store.state.auth.user.district.text }}
                </div>
              </div>
              <div class="mb-1 text-center">
                <div style="font-size: 12px">
                  {{ this.$store.state.auth.user.province.text }}
                </div>
              </div>
              <div class="mb-4 px-5 text-center">
                <div
                  class="text-light fs-6"
                  style="
                    background-color: #15bf8c;
                    border-radius: 5px 5px 5px 5px;
                  "
                >
                  online
                </div>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <div
        class="login col-lg-10"
        style="background-color: rgb(0, 180, 216, 0.09)"
      >
        <div class="row">
          <nav
            class="navbar pb-5 mb-0 mb-sm-2 mb-lg-4"
            style="background-color: #00b4d8; border-radius: 0px 0px 20px 20px"
          >
            <div class="container-fluid d-flex justify-content-between">
              <div class="navbar-brand">
                <button
                  class="btn btn-secondary d-lg-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-controls="offcanvasResponsive"
                >
                  <i class="fa fa-list"></i>
                </button>
                <span class="text-light fs-5 pt-5 fw-semibold">
                  Welcome back, {{ this.$store.state.auth.user.name }}</span
                >
              </div>
              <div class="ms-5 ms-sm-0 ms-lg-0 ps-5 ms-sm-0 ms-lg-0 mb-4">
                <Dropdown />
              </div>
            </div>
          </nav>
          <div
            class="alert alert-light ms-1 ms-sm-3 ms-lg-4"
            role="alert"
            style="width: 97%"
            shadow-sm
            bg-body
            rounded
          >
            <div class="d-flex flex-row mb-3">
              <div class="p-2" style="color: rgb(14, 105, 126)">
                <span style="color: #00b4d8"
                  >Try out No.{{ this.$route.query.examid }}</span
                >
                <h3>Try Out TOEFL test preparation</h3>
              </div>
            </div>
            <div class="row">
              <div class="col col-lg-3">
                <div class="row">
                  <div class="col-1">
                    <img alt="" src="/image/iconlytwotonepassword2.svg" />
                  </div>
                  <div class="col-1">
                    <span class="fw-semibold ps-3">PackageID</span>
                    <span class="ps-3">#{{ this.packageid }}</span>
                  </div>
                </div>
              </div>
              <div class="col col-lg-3">
                <div class="row">
                  <div class="col-1">
                    <img alt="" src="/image/iconlytwotonedocument2.svg" />
                  </div>
                  <div class="col">
                    <span class="fw-semibold ps-3">Question</span><br />
                    <span class="ps-3">{{ count }}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="col-4 col-lg-3">
                <div class="row">
                  <div class="col-1">
                    <img alt="" src="/image/iconlytwotonetime-circle6.svg" />
                  </div>
                  <div class="col">
                    <span class="fw-semibold">Processing time</span><br />
                    <span>888888</span>
                  </div>
                </div>
              </div> -->
              <div class="col-12 col-lg-6 pe-4 text-end">
                <button
                  type="button"
                  class="btn btn-primary py-2 fs-6 text-center"
                  style="color: white; width: 150px"
                  v-if="isLoading == true"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    style="color: white"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
                <button
                  v-else
                  type="button"
                  @click="seeAnswer()"
                  class="btn btn-outline-primary py-2 fs-6 text-center"
                  style="color: #00b4d8; width: 150px"
                >
                  See Answer
                </button>
              </div>
              <hr />
            </div>
            <div class="row">
              <div class="col-6 col-lg-1 p-0 m-0 pt-4 mb-3">
                <div
                  class="pie"
                  :data-progress="dataexam.score"
                  :style="
                    '--progress: ' +
                    ((dataexam.score / 677) * 100 * 360) / 100 +
                    'deg'
                  "
                ></div>
              </div>
              <div class="col-6 col-lg-5">
                <div class="pt-4 ps-5 pt-5">
                  <a>Finished on Time</a>
                  <br />
                  <b>2 hours 30 minute</b>
                </div>
              </div>
              <div class="col-12 col-lg-6">
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
            </div>
          </div>
          <div class="row ps-5">
            <div class="col-12 col-lg-6">
              <div class="card border-0 p-3 shadow-sm bg-body rounded">
                <h5 class="ps-2" style="color: rgb(14, 105, 126)">
                  Score overview
                </h5>
                <table class="ms-3">
                  <tr>
                    <td width="920px" style="color: rgb(14, 105, 126)">
                      Listening
                    </td>
                    <td>
                      <b>{{ listening1 }}/{{ clisning }}</b>
                    </td>
                  </tr>
                </table>
                <div
                  class="progress"
                  style="margin: 5px 15px 0px 15px; border-radius: 10px"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    :style="
                      'width: ' +
                      lisningPersen +
                      '%;background-color: rgb(255, 181, 9);border-radius: 10px;'
                    "
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <table class="ms-3">
                  <tr>
                    <td width="920px" style="color: rgb(14, 105, 126)">
                      Structure
                    </td>
                    <td>
                      <b>{{ structure1 }}/{{ cstructur }}</b>
                    </td>
                  </tr>
                </table>
                <div
                  class="progress"
                  style="margin: 5px 15px 0px 15px; border-radius: 10px"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    :style="
                      'width: ' +
                      structurePersen +
                      '%;background-color: rgb(9, 169, 255);border-radius: 10px;'
                    "
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <table class="ms-3">
                  <tr>
                    <td width="920px" style="color: rgb(14, 105, 126)">
                      Reading
                    </td>
                    <td>
                      <b>{{ reading1 }}/{{ creading }}</b>
                    </td>
                  </tr>
                </table>
                <div
                  class="progress"
                  style="margin: 5px 15px 0px 15px; border-radius: 10px"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    :style="
                      'width: ' +
                      readingPersen +
                      '%;background-color: rgb(173, 9, 255);border-radius: 10px;'
                    "
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 col-lg-6 mt-3 mt-sm-3 mt-lg-0">
              <div class="card border-0 p-3">
                <h5
                  style="color: rgb(14, 105, 126); padding: 20px 15px 10px 15px"
                >
                  Time management
                </h5>
                <div class="row px-3">
                  <div class="col">
                    <img alt="" src="/image/iconlytwotonetime-circle6.svg" />
                    Listening
                    <br />
                    <a style="padding-left: 30px">Comprehensioon</a>
                  </div>
                  <div class="col text-end">
                    <td>
                      <b>4hours 30 minutes</b>
                    </td>
                  </div>
                  <hr class="mt-2" />
                </div>
                <div class="row px-3">
                  <div class="col">
                    <img alt="" src="/image/iconlytwotonetime-circle6.svg" />
                    Structure and
                    <br />
                    <a style="padding-left: 30px">Written Expression</a>
                  </div>
                  <div class="col text-end">
                    <td>
                      <b>4hours 30 minutes</b>
                    </td>
                  </div>
                  <hr class="mt-2" />
                </div>
                <div class="row px-3">
                  <div class="col">
                    <img alt="" src="/image/iconlytwotonetime-circle6.svg" />
                    Reading
                    <br />
                    <a style="padding-left: 30px">Comprehension</a>
                  </div>
                  <div class="col text-end">
                    <td>
                      <b>4hours 30 minutes</b>
                    </td>
                  </div>
                  <hr class="mt-2" />
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="row mt-5">
          <div class="card border-0">
            <footer>
              <p class="mb-0 text-center">2022 Copyright &copy; Toefl</p>
            </footer>
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
    let notif = await $axios.$get('/api/exams-notif', { progress: false })
    let examnotif = notif.data.exam
    console.log('ss' + examnotif)
    let distance = examnotif.time_left
    if (distance != 0) {
      let x = setInterval(function () {
        let hours = Math.floor(distance / 3600)
        distance %= 3600
        let minutes = Math.floor(distance / 60)
        let seconds = distance % 60
        minutes = String(minutes).padStart(2, '0')
        hours = String(hours).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')

        document.getElementById('countdown').innerHTML =
          hours + ':' + minutes + ':' + seconds
        if (distance == 0) {
          clearInterval(x)
          document.getElementById('countdown').innerHTML = 'EXPIRED'
          window.location.href =
            '/doneexams?examid=' +
            examnotif.id +
            '&packageid=' +
            examnotif.package_id
        }
        distance -= 1
      }, 1000)
    }
    const exam = await $axios.$get('/api/exam/' + query.examid)
    let dataexam = exam.data.exam
    let packageid = dataexam.package_id
    const countQuestionPackage = await $axios.get(
      '/api/sumquestionbypackage/' + packageid,
      { progress: false }
    )
    let count = countQuestionPackage.data.data

    let pquestion = await $axios.$get(
      '/api/countquestionbysection/' + packageid,
      {
        progress: false,
      }
    )
    let clisning = pquestion.data.count.listening
    let cstructur = pquestion.data.count.structure
    let creading = pquestion.data.count.reading

    const progressExam = await $axios.get('/api/progressexam/' + query.examid, {
      progress: false,
    })
    const progressBysection = await $axios.get(
      '/api/progressexambysection/' + query.examid,
      { progress: false }
    )
    let listening1 = progressBysection.data.data.progress.listening
    let structure1 = progressBysection.data.data.progress.structure
    let reading1 = progressBysection.data.data.progress.reading
    let score = listening1 + structure1 + reading1
    let CorrectAnswerPersen = Math.round(
      (score / countQuestionPackage.data.data) * 100
    )
    let WrongAnswerPersen = Math.round(
      ((progressExam.data.data - score) / countQuestionPackage.data.data) * 100
    )
    let SkippedPersen =
      Math.round(
        (countQuestionPackage.data.data - progressExam.data.data) /
          countQuestionPackage.data.data
      ) * 100

    let lisningPersen = (listening1 / clisning) * 100
    let structurePersen = (structure1 / cstructur) * 100
    let readingPersen = (reading1 / creading) * 100
    const isLoading = false
    // let progressScore1 = (finalScore1 / 677) * 100
    return {
      SkippedPersen,
      isLoading,
      CorrectAnswerPersen,
      WrongAnswerPersen,
      listening1,
      structure1,
      reading1,
      clisning,
      cstructur,
      creading,
      count,
      lisningPersen,
      structurePersen,
      readingPersen,
      dataexam,
      examnotif,
      packageid,
    }
  },
  methods: {
    async seeAnswer() {
      this.isLoading = true
      await this.$router.push(
        {
          path: '/solution',
          query: {
            examid: this.$route.query.examid,
            packageid: this.packageid,
          },
        },
        { progress: false }
      )
    },
    async trytest(exam_id, package_id) {
      await this.$router.push({
        path: '/ujiantoefl',
        query: {
          examid: exam_id,
          packageid: package_id,
        },
      })
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
