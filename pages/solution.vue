<template>
  <div class="container-fluid">
    <div class="row overflow-hidden">
      <div class="col-lg-2">
        <div
          class="offcanvas-lg offcanvas-start position-fixed wlf"
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
            <div class="row pt-0">
              <div class="m-0 pt-2 text-center">
                <img alt="" style="width: 80%" src="/image/capital-1@2x.png" />
              </div>
              <ul class="navigation-list p-0 ps-1 m-0">
                <li class="pt-2 px-3">
                  <div class="row p-0">
                    <div class="col">
                      Exam ID<br />
                      <span class="fw-semibold"
                        >#{{ this.$route.query.examid }}</span
                      >
                      <hr class="p-0 m-0 mb-3" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      Total Duration<br />
                      <span class="fw-semibold">2h:30m</span>
                      <hr class="p-0 m-0 mb-3" />
                    </div>
                  </div>
                  <div class="row py-2" style="background-color: #e9e9e9">
                    <div class="col">
                      <a class="navigation-link fw-semibold" href="#">
                        Exercise Resume
                      </a>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <a class="navigation-link" href="#">
                        <div class="row">
                          <div class="col-9 text-start fw-semibold">
                            Total question
                          </div>
                          <div class="col-1 text-start fw-semibold">
                            {{ totQuestion }}
                          </div>
                          <hr />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <a class="navigation-link" href="#">
                        <div class="row">
                          <div class="col-9 text-start fw-semibold">
                            Listening
                          </div>
                          <div
                            class="col-2 col-lg-1 text-start fw-semibold ms-1"
                          >
                            {{ clisning }}
                          </div>
                          <div class="row">
                            <div class="col-10 fs-6">
                              <svg
                                style="color: #15bf8c"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-circle-fill"
                                viewbox="0 0 14 14"
                              >
                                <circle cx="7" cy="7" r="7" />
                              </svg>
                              <small class="text-muted">answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted">{{ elisning }}</small>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10 fs-6">
                              <input
                                class="form-check-input"
                                disabled
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                style="
                                  border-color: black;
                                  margin-top: 6px;
                                  width: 14px;
                                  height: 14px;
                                "
                              />
                              <small class="text-muted"> not answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted"> {{ nlisning }}</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col">
                      <a class="navigation-link" href="#">
                        <div class="row">
                          <div class="col-9 text-start fw-semibold">
                            Structure
                          </div>
                          <div class="col-1 fw-semibold ps-3">
                            {{ cstructur }}
                          </div>
                          <div class="row">
                            <div class="col-10">
                              <svg
                                style="color: #15bf8c"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-circle-fill"
                                viewbox="0 0 14 14"
                              >
                                <circle cx="8" cy="8" r="6" />
                              </svg>
                              <small class="text-muted">answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted">
                                {{ eStructure }}</small
                              >
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10 fs-6">
                              <input
                                class="form-check-input"
                                disabled
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                style="
                                  border-color: black;
                                  margin-top: 6px;
                                  width: 14px;
                                  height: 14px;
                                "
                              />
                              <small class="text-muted">not answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted">
                                {{ nstruckture }}</small
                              >
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row mt-2 overflow-auto">
                    <div class="col">
                      <a class="navigation-link" href="#">
                        <div class="row">
                          <div class="col-9 text-start fw-semibold">
                            Reading
                          </div>
                          <div class="col-1 text-start fw-semibold ps-3">
                            {{ creading }}
                          </div>
                          <div class="row">
                            <div class="col-10 fs-6">
                              <svg
                                style="color: #15bf8c"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-circle-fill"
                                viewbox="0 0 14 14"
                              >
                                <circle cx="7" cy="7" r="7" />
                              </svg>
                              <small class="text-muted"> answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted"> {{ ereading }} </small>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10 fs-6">
                              <input
                                class="form-check-input"
                                disabled
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                style="
                                  border-color: black;
                                  margin-top: 6px;
                                  width: 14px;
                                  height: 14px;
                                "
                              />
                              <small class="text-muted"> not answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3 fs-6">
                              <small class="text-muted"> {{ nreading }} </small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-5">
        <div class="row mb-5" id="main">
          <div class="col">
            <div class="row">
              <nav
                class="navbar navbar-expand-lg fixed-top mlg wtg"
                style="background-color: #00b4d8"
              >
                <div class="container-fluid d-flex justify-content-arround">
                  <div class="">
                    <span class="text-light fs-5">
                      <button
                        class="btn btn-primary d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasResponsive"
                        aria-controls="offcanvasResponsive"
                      >
                        <i class="fa fa-list"></i></button
                      >TOEFL Exam Preperation</span
                    >
                  </div>

                  <div class="">
                    <button class="btn btn-outline-info border text-light">
                      {{ this.$store.state.auth.user.name }}
                    </button>
                  </div>

                  <!-- <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                      <span class="text-light fs-5">
                        <button
                          class="btn btn-primary d-lg-none"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasResponsive"
                          aria-controls="offcanvasResponsive"
                        >
                          <i class="fa fa-list"></i></button
                        >TOEFL Exam Preperation</span
                      >
                    </li>
                  </ul> -->
                  <!-- <div class="row">
                    <div class="col-2 text-end">
                      <img alt="" src="/image/stopwatch1.svg" />
                    </div>
                    <div class="col ps-4 text-start">
                      <span class="text-light fw-">Time Remaining</span><br />
                      <span
                        class="text-light fs-5 fw-semibold"
                        id="countdown"
                      ></span>
                    </div>
                  </div> -->
                </div>
              </nav>
            </div>

            <div class="m-0 p-0 position-relative">
              <span
                class="fs-5 position-absolute"
                style="
                  cursor: pointer;
                  left: 99.8%;
                  top: 200px;
                  background-color: #00b4d8;
                "
                @click="toggleNav()"
                ><i style="color: white" class="fa fa-arrow-left"></i
              ></span>
            </div>
            <div class="card border-0 shadow p-3 mb-5 mt-5 bg-body rounded">
              <div class="d-flex">
                <div class="p-2 flex-grow-1">
                  <div class="progress" style="height: 15px; margin-top: 7px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Basic example"
                      :style="
                        'width: ' +
                        progressExam +
                        '%; background-color: rgb(26, 214, 151)'
                      "
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="p-2">1 of {{ Math.round(progressExam) }}%</div>
              </div>
              <div
                class="row"
                v-for="(quest1, index) in questioned"
                :key="'A' + index"
              >
                <h5
                  style="
                    padding-left: 15px;
                    padding-top: 15px;
                    padding-bottom: 0px;
                    color: rgb(20, 104, 149);
                  "
                >
                  {{ quest1.section_text }} section
                </h5>
              </div>
              <div
                class="card mt-3 py-4 px-3 border-0"
                style="border-radius: 20px"
                v-for="(quest, index) in questioned"
                :key="'B' + index"
              >
                <div class="row">
                  <div class="col-2 text-start pe-5" style="width: 14px">
                    <div
                      class="
                        card
                        py-1
                        mt-1
                        text-center
                        border border-1 border-primary
                        bg-light
                        mb-2
                      "
                      style="width: 40px; font-family: 'inter'; font-size: 14px"
                    >
                      {{ quest.sequence }}
                    </div>
                  </div>
                  <div class="col text-start pt-0">
                    <p v-if="quest.section_text == 'reading'" class="pe-5">
                      <span
                        class="mb-2"
                        v-if="quest.articles.direction != ''"
                        style="
                          font-family: 'inter';
                          font-size: 14px;
                          text-align: justify;
                        "
                      >
                        <div
                          class="mb-4"
                          v-html="
                            `` +
                            quest.articles.direction.replace(/\r\n/g, '<br />')
                          "
                        />
                      </span>
                      <span
                        v-if="quest.direction != ''"
                        style="
                          font-family: 'inter';
                          font-size: 14px;
                          text-align: justify;
                        "
                      >
                        <div
                          class="pb-2"
                          v-html="
                            `` + quest.direction.replace(/\r\n/g, '<br />')
                          "
                        />
                      </span>
                      <span
                        style="
                          font-family: 'inter';
                          font-size: 14px;
                          text-align: justify;
                        "
                      >
                        <div
                          style="overflow-x: auto"
                          v-html="
                            '<table>' +
                            quest.articles.content +
                            '</table>'
                          "
                        />
                      </span>
                      <span style="font-family: 'inter'; font-size: 14px">
                        <div
                          class="pt-3 text-justify"
                          v-html="`` + quest.question"
                        ></div> </span
                      ><br />
                      <span class="d-flex flex-wrap justify-content-center pt-2"
                        ><img
                          v-if="quest.file_image != ''"
                          :src="
                            'https://appskep-toefl.remorac.com/question/download-image?id=' +
                            quest.id
                          "
                          alt=""
                          style="width: 400px"
                        />
                      </span>
                    </p>
                    <p v-else-if="quest.section_text == 'structure'">
                      <span style="font-family: 'inter'; font-size: 14px">
                        <div
                          v-html="'<div>' + quest.question + '</div>'"
                        ></div> </span
                      ><br />
                      <span class="d-flex flex-wrap pt-2"
                        ><img
                          class="rounded border mb-2"
                          v-if="quest.file_image != ''"
                          :src="
                            'https://appskep-toefl.remorac.com/question/download-image?id=' +
                            quest.id
                          "
                          alt=""
                          style="width: 400px"
                        />
                      </span>
                    </p>

                    <p v-else>
                      <span
                        v-if="quest.audio_direction != ''"
                        style="
                          font-family: 'inter';
                          font-size: 14px;
                          text-align: justify;
                        "
                      >
                        <div
                          class="pb-2"
                          v-html="
                            `` +
                            quest.audio_direction.replace(/\r\n/g, '<br />')
                          "
                        />
                      </span>
                      <span
                        v-if="quest.direction != ''"
                        style="
                          font-family: 'inter';
                          font-size: 14px;
                          text-align: justify;
                        "
                      >
                        <div
                          class="pb-2"
                          v-html="
                            `` + quest.direction.replace(/\r\n/g, '<br />')
                          "
                        />
                      </span>
                      <audio
                        :src="
                          'https://appskep-toefl.remorac.com/audio/download?id=' +
                          quest.audio_id
                        "
                        controls
                      ></audio>
                    </p>
                  </div>
                </div>
                <div
                  class="form-check"
                  style="margin-left: 72px"
                  v-for="(option, index) in quest.options"
                  :key="'C' + index"
                >
                  <svg
                    v-if="
                      AllExamQuestion.some(
                        (element) =>
                          element.Option.id == option.id &&
                          element.Option.is_true == 0
                      )
                    "
                    style="color: rgb(248, 55, 119); margin-left: -24px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-circle-fill"
                    viewbox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                    />
                  </svg>
                  <svg
                    style="
                      color: rgb(26, 214, 151);
                      margin-left: -25px;
                      padding-bottom: 20px;
                    "
                    v-if="
                      AllExamQuestion.some(
                        (element) =>
                          element.option_id == option.id && option.is_true == 1
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-circle-fill"
                    viewbox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    />
                  </svg>
                  <svg
                    style="color: rgb(26, 214, 151); margin-left: -23px"
                    v-if="option.is_true == 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill"
                    viewbox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    />
                  </svg>
                  <label
                    :class="
                      AllExamQuestion.some(
                        (element) => element.option_id == option.id
                      )
                        ? 'form-check-label ps-1'
                        : option.is_true == 1
                        ? 'form-check-label ps-1'
                        : 'form-check-label'
                    "
                    for="flexRadioDefault1"
                    style="font-family: 'inter'; font-size: 14px"
                  >
                    {{ option.name }}. &nbsp;{{ option.description }}
                  </label>
                </div>
              </div>
              <div
                class="row mx-5 ps-4"
                v-for="(quest, index) in questioned"
                :key="'D' + index"
              >
                <div
                  class="card border-0 ps-3 pt-3 mb-2 rounded"
                  style="background-color: #f4f4f4"
                  v-if="quest.explanation != ''"
                >
                  <span class="fs-6 fw-semibold" style="color: #657085"
                    >Explanation</span
                  >
                  <p
                    style="
                      font-family: 'DM Sans';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 110%;
                      text-align: justify;
                      color: #363636;
                    "
                  >
                    {{ quest.explanation }}
                  </p>
                </div>
              </div>
              <div class="row d-flex flex-wrap">
                <ul
                  class="nav col-12 ps-5 ms-5 justify-content-start"
                  v-for="(quest, index) in questioned"
                  :key="'D' + index"
                >
                  <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-muted">
                      <button
                        @click="previousQuestion((idNum -= 1))"
                        type="button"
                        class="btn btn-outline-primary py-1"
                        style="width: 100px"
                      >
                        Previous
                      </button>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-muted">
                      <button
                        type="button"
                        @click="nextQuestion((idNum += 1))"
                        class="btn btn-outline-primary py-1"
                        style="width: 100px"
                      >
                        Next
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sidenav pt-5"
          style="background-color: white"
          id="mySidenav"
        >
          <h6 class="ps-4 ps-lg-1 pb-4" style="color: rgb(20, 104, 149)">
            Question number
          </h6>
          <table>
            <tr
              class="ps-4"
              style="width: 300px"
              v-for="ind1 in indexNumber"
              :key="ind1"
            >
              <td
                class="pb-3 p-0 px-1"
                style="width: 60px"
                v-for="(question, ind) in allquestions.data.questions.slice(
                  (ind1 - 1) * 5,
                  ind1 * 5
                )"
                :key="ind"
              >
                <button
                  @click="readQuestion(question.sequence)"
                  type="button"
                  class="btn btn-outline-secondary m-0 border rounded"
                  style="
                    color: white;
                    font-family: 'inter';
                    font-size: 14px;
                    width: 47px;
                  "
                  :style="
                    AllExamQuestion.some(
                      (element) =>
                        element.Package_Question.question_id == question.id &&
                        element.Option.is_true == 1
                    )
                      ? ' background-color:#15BF8C'
                      : 'background-color:#ED0F87'
                  "
                >
                  {{ question.sequence }}
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <footer class="fixed-bottom py-3 mt-5" style="background-color: #00b4d8">
        <div class="row justify-content-end px-3">
          <button
            type="button"
            class="btn btn-primary py-2 px-4"
            @click="$router.back()"
            style="background-color: orange; width: 170px"
          >
            kembali
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, query }) {
    const progressExamBysection = await $axios.get(
      '/api/progressexambysection/' + query.examid,
      { progress: false }
    )
    const elisning = progressExamBysection.data.data.progress.listening
    const eStructure = progressExamBysection.data.data.progress.structure
    const ereading = progressExamBysection.data.data.progress.reading

    const pquestion = await $axios.$get(
      '/api/countquestionbysection/' + query.packageid,
      {
        progress: false,
      }
    )

    const clisning = pquestion.data.count.listening
    const cstructur = pquestion.data.count.structure
    const creading = pquestion.data.count.reading
    const totQuestion = clisning + cstructur + creading
    const nlisning = clisning - elisning
    const nstruckture = cstructur - eStructure
    const nreading = creading - ereading
    const pExams = await $axios.get('/api/progressexam/' + query.examid, {
      progress: false,
    })
    const pPackage = await $axios.get(
      '/api/sumquestionbypackage/' + query.packageid,
      { progress: false }
    )
    const progressExam = (pExams.data.data / pPackage.data.data) * 100

    const All = await $axios.get('/api/exam-questions/' + query.examid, {
      progress: false,
    })
    let AllExamQuestion = All.data.data.examsquestions
    if (All.data.data.examsquestions == null) {
      AllExamQuestion = []
    }
    console.log(AllExamQuestion)
    let allquestions = await $axios.$get(
      '/api/package-questions/' + query.packageid,
      {
        progress: false,
      }
    )
    const indexNumber = Math.ceil(allquestions.data.questions.length / 5)
    let questioned = allquestions.data.questions.slice(0 * 1, 1 * 1)

    let indPackageQuest = 1
    const indexOption = 0
    let idNum = 1
    return {
      progressExam,
      allquestions,
      questioned,
      indPackageQuest,
      indexOption,
      indexNumber,
      AllExamQuestion,
      totQuestion,
      elisning,
      eStructure,
      ereading,
      clisning,
      cstructur,
      creading,
      nlisning,
      nstruckture,
      nreading,
      pExams,
      pPackage,
      idNum,
    }
  },
  methods: {


    toggleNav() {
      let navSize = document.getElementById('mySidenav').style.width
      if (navSize == '300px') {
        return this.closeNav()
      }
      return this.openNav()
    },
    openNav() {
      document.getElementById('mySidenav').style.width = '300px'
      document.getElementById('main').style.marginRight = '300px'
    },
    closeNav() {
      document.getElementById('mySidenav').style.width = '0px'
      document.getElementById('main').style.marginRight = '-12px'
    },
    async nextQuestion(id) {
      console.log(this.idNum)
      if (this.idNum > this.allquestions.data.questions.length) {
        this.idNum = this.allquestions.data.questions.length
      }
      this.questioned = this.allquestions.data.questions.slice(
        (this.idNum - 1) * 1,
        this.idNum * 1
      )
    },
    async previousQuestion(id) {
      if (this.idNum < 1) {
        this.idNum = 1
      }
      this.questioned = this.allquestions.data.questions.slice(
        (this.idNum - 1) * 1,
        this.idNum * 1
      )
    },
    async readQuestion(idSequence) {
      this.questioned = this.allquestions.data.questions.filter(
        (question) => question.sequence == idSequence
      )
    },
  },
}
</script>





