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
                                <circle cx="7" cy="7" r="7" />
                              </svg>
                              <small class="text-muted">answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3">
                              <small class="text-muted">{{ elisning }}</small>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10">
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
                            <div class="col-1 ps-1 ps-lg-3">
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
                            <div class="col-1 ps-1 ps-lg-3">
                              <small class="text-muted">
                                {{ eStructure }}</small
                              >
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10">
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
                            <div class="col-1 ps-1 ps-lg-3">
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
                          <div class="col-1 text-start ms-1 fw-semibold">
                            {{ creading }}
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
                                <circle cx="7" cy="7" r="7" />
                              </svg>
                              <small class="text-muted"> answered</small>
                            </div>
                            <div class="col-1 ps-1 ps-lg-3">
                              <small class="text-muted"> {{ ereading }} </small>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10">
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
                            <div class="col-1 ps-1 ps-lg-3">
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
                  <div class="d-flex justify-content-arround">
                    <div class="pe-3">
                      <img
                        alt=""
                        src="/image/stopwatch1.svg"
                        style="width: 40px"
                      />
                      <span class="text-light p-0 m-0"
                        >Time Remaining<br />
                        <span
                          class="text-light fs-5 fw-semibold ps-5"
                          id="countdown"
                        ></span
                      ></span>
                    </div>
                    <div>
                      <button class="btn btn-outline-info border text-light">
                        {{ this.$store.state.auth.user.name }}
                      </button>
                    </div>
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
                    <div class="col">
                      <img
                        alt=""
                        src="/image/stopwatch1.svg"
                        style="width: 40px"
                      />
                      <span class="text-light">Time Remaining</span><br />
                      <span
                        class="text-light fs-5 fw-semibold"
                        id="countdown"
                      ></span>
                    </div>
                    <div class="col text-start">
                      <button class="btn btn-outline-info border text-light">
                        time
                      </button>
                    </div>
                  </div> -->
                </div>
              </nav>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="border-radius: 30px">
                  <div class="modal-body mx-3 px-5">
                    <div class="row justify-content-center mt-4 mb-3">
                      <img
                        class="group-icon42"
                        style="width: 100px"
                        alt=""
                        src="/image/Group 11545.svg"
                      />
                    </div>
                    <div class="row text-center">
                      <span class="pb-2 fs-4 fw-semibold"
                        >Review Hasil Ujian</span
                      >
                      <span class="pb-2 fs-6 fw-semibold"
                        >soal terisi dari {{ pExams.data.data }}/{{
                          pPackage.data.data
                        }}
                      </span>
                    </div>
                    <div class="progress" style="height: 15px; margin-top: 7px">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        :style="
                          'width: ' +
                          progressExam +
                          '%; background-color: #15bf8c'
                        "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="row text-center mt-3">
                      <p>
                        Apakah Kamu yakin akan mengakhiri tes ini? Mohon periksa
                        kembali jawaban kamu sebelum mengakhiri sesi tes ini.
                      </p>
                    </div>
                  </div>
                  <div class="row m-0 mb-5 p-0">
                    <div class="col-6 text-end">
                      <button
                        type="button"
                        @click="isFalse()"
                        class="btn btn-outline-primary px-5 py-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Tidak
                      </button>
                    </div>
                    <div class="col-6 text-start">
                      <button
                        type="button"
                        class="btn btn-primary px-3 py-2"
                        @click="final()"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Ya, Saya yakin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
            <div
              class="card border-0 shadow p-3 mb-5 mt-5 pt-5 bg-body rounded"
            >
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
                class="card mt-3 py-4 px-3"
                style="border-radius: 20px"
                v-for="(quest, index) in questioned"
                :key="'B' + index"
              >
                <div class="row">
                  <div
                    class="col-2 text-start ms-4 p-0 pe-5"
                    style="width: 14px"
                  >
                    <div
                      class="
                        card
                        py-1
                        mt-1
                        text-center
                        border border-1 border-primary
                      "
                      style="width: 40px; font-family: 'inter'; font-size: 14px"
                    >
                      {{ quest.sequence }}
                    </div>
                  </div>
                  <div class="col text-start ps-2 pt-0">
                    <p v-if="quest.section_text == 'reading'" class="pe-5">
                      <span
                        v-if="quest.articles.direction != ''"
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
                            quest.articles.content+
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
                          v-html="
                            '<div>' + quest.question + '</div>'
                          " /></span
                      ><br />
                      <span class="d-flex flex-wrap justify-content-center pt-2"
                        ><img
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
                        autoplay
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
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="2"
                    :id="'flexRadioDefault' + option.id"
                    checked
                    v-if="
                      AllExamQuestion.some(
                        (element) => element.option_id == option.id
                      )
                    "
                  />
                  <span v-else :id="option.id">
                    <input
                      class="form-check-input"
                      @click="
                        submitOptionQuestion(
                          option.id,
                          quest.package_question_id
                        )
                      "
                      type="radio"
                      :value="option.id"
                      name="flexRadioDefault"
                      :id="'flexRadioDefault' + option.id"
                    />
                  </span>

                  <label
                    class="form-check-label"
                    :for="'flexRadioDefault' + option.id"
                    style="font-family: 'inter'; font-size: 14px"
                  >
                    <span>{{ option.name }}. &nbsp;</span
                    ><span v-if="option.description != ''">{{
                      option.description
                    }}</span>
                    <span v-else>
                      <br />
                      <img
                        :src="
                          'https://appskep-toefl.remorac.com/question/download-option-image?id=' +
                          option.id
                        "
                        alt=""
                        style="width: 300px"
                      />
                    </span>
                  </label>
                </div>
              </div>
              <div class="row d-flex flex-wrap pt-4">
                <ul
                  class="nav col-12 ps-5 ms-5 justify-content-start"
                  v-for="(quest, index) in questioned"
                  :key="'D' + index"
                >
                  <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-muted">
                      <button
                        @click="previousQuestion(quest.sequence, quest.section)"
                        type="button"
                        class="btn btn-outline-primary py-1"
                        style="width: 100px"
                      >
                        Previous
                      </button>
                    </a>
                  </li>
                  <!-- <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-muted">
                      <button
                        @click="submitOptionQuestion()"
                        type="button"
                        class="btn btn-primary"
                        style="width: 100px; background-color: #15bf8c"
                      >
                        Submit
                      </button>
                    </a>
                  </li> -->
                  <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-muted">
                      <button
                        type="button"
                        @click="nextQuestion(quest.sequence, quest.section)"
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
                  @click="readQuestion(question.sequence, question.section)"
                  type="button"
                  class="btn btn-outline-secondary m-0 border rounded"
                  style="font-family: 'inter'; font-size: 14px; width: 47px"
                  :style="
                    AllExamQuestion.some(
                      (element) =>
                        element.pacakage_question_id ==
                        question.package_question_id
                    )
                      ? ' background-color:#15BF8C; color:white'
                      : ''
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
        <div class="row">
          <div
            class="col-4 col-lg-5 text-center text-lg-end p-0 m-0 px-0 px-lg-1"
          >
            <button
              @click="lisningSection()"
              type="button"
              class="btn btn-outline-primary py-2 px-4"
              style="background-color: white; width: 110px"
            >
              Listening
            </button>
          </div>
          <div
            class="
              col-4 col-lg-1
              text-center text-lg-start
              p-0
              m-0
              px-0 px-lg-2
            "
          >
            <button
              type="button"
              @click="struktureSection()"
              class="btn btn-outline-primary py-2 px-4"
              style="background-color: white; width: 110px"
            >
              Structure
            </button>
          </div>
          <div
            class="
              col-4 col-lg-1
              text-center text-lg-start
              p-0
              m-0
              px-0 px-lg-3
            "
          >
            <button
              type="button"
              @click="readingSection()"
              class="btn btn-outline-primary py-2 px-4"
              style="background-color: white; width: 110px"
            >
              Reading
            </button>
          </div>
          <div
            class="
              col-12 col-sm-12 col-lg-5
              text-center text-sm-center text-lg-end
              mt-3 mt-sm-2 mt-lg-0
            "
          >
            <button
              type="button"
              v-if="isLoading == true"
              class="btn btn-primary py-2 px-4"
              style="background-color: #ed0f87; width: 170px"
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary py-2 px-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="cekIsloading()"
              style="background-color: #ed0f87; width: 170px"
            >
              Finish Exam
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, query }) {
    const totalSeconds = await $axios.$get('/api/exam-time/' + query.examid, {
      progress: false,
    })
    let distance = totalSeconds.data.exam.time_left
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
            query.examid +
            '&packageid=' +
            query.packageid
        }
        distance -= 1
      }, 1000)
    }

    const progressExamBysection = await $axios.get(
      '/api/progressexambysection/' + query.examid,
      { progress: false }
    )
    const elisning = progressExamBysection.data.data.progress.listening
    const eStructure = progressExamBysection.data.data.progress.structure
    const ereading = progressExamBysection.data.data.progress.reading

    const plisning = await $axios.$get('/api/listening/' + query.packageid, {
      progress: false,
    })
    let pquestion = await $axios.$get(
      '/api/countquestionbysection/' + query.packageid,
      {
        progress: false,
      }
    )
    let clisning = pquestion.data.count.listening
    let cstructur = pquestion.data.count.structure
    let creading = pquestion.data.count.reading
    let totQuestion = clisning + cstructur + creading
    let nlisning = clisning - elisning
    let nstruckture = cstructur - eStructure
    let nreading = creading - ereading
    const pExams = await $axios.get('/api/progressexam/' + query.examid, {
      progress: false,
    })
    const pPackage = await $axios.get(
      '/api/sumquestionbypackage/' + query.packageid,
      { progress: false }
    )
    const progressExam = (pExams.data.data / pPackage.data.data) * 100
    console.log('as:' + progressExam)
    const All = await $axios.get('/api/exam-questions/' + query.examid, {
      progress: false,
    })
    let AllExamQuestion = All.data.data.examsquestions
    if (All.data.data.examsquestions == null) {
      AllExamQuestion = []
    }
    let allquestions = plisning
    const indexNumber = Math.ceil(allquestions.data.questions.length / 5)
    let questioned = allquestions.data.questions.slice(0 * 1, 1 * 1)

    let indPackageQuest = 1
    const indexOption = 0
    let isLoading = false
    let dataStructure = []
    let dataReading = []
    const pStructure = await $axios.$get('/api/structure/' + query.packageid, {
      progress: false,
    })
    dataStructure = pStructure
    const preading = await $axios.$get('/api/reading/' + query.packageid, {
      progress: false,
    })

    dataReading = preading
    return {
      progressExam,
      dataStructure,
      dataReading,
      isLoading,
      allquestions,
      questioned,
      indPackageQuest,
      indexOption,
      indexNumber,
      AllExamQuestion,
      plisning,
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
      distance,
      pquestion,
    }
  },
  methods: {
    async final() {
      await this.$router.push(
        {
          path: '/doneexams',
          query: {
            examid: this.$route.query.examid,
            packageid: this.$route.query.packageid,
          },
        },
        { progress: false }
      )
    },
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
    async lisningSection() {
      this.allquestions = this.plisning
      this.questioned = this.plisning.data.questions.slice(0 * 1, 1 * 1)
    },
    async readingSection() {
      if (this.dataReading.length == 0) {
        const preading = await this.$axios.$get(
          '/api/reading/' + this.$route.query.packageid,
          {
            progress: false,
          }
        )
        this.allquestions = preading
        this.dataReading = preading
        this.questioned = this.dataReading.data.questions.slice(0 * 1, 1 * 1)
      } else {
        this.allquestions = this.dataReading
        this.questioned = this.dataReading.data.questions.slice(0 * 1, 1 * 1)
      }
    },
    async struktureSection() {
      if (this.dataStructure.length == 0) {
        const pStructure = await this.$axios.$get(
          '/api/structure/' + this.$route.query.packageid,
          {
            progress: false,
          }
        )
        this.allquestions = pStructure
        this.dataStructure = pStructure

        this.questioned = this.dataStructure.data.questions.slice(0 * 1, 1 * 1)
      } else {
        this.allquestions = this.dataStructure
        this.questioned = this.dataStructure.data.questions.slice(0 * 1, 1 * 1)
      }
    },
    async nextQuestion(idSequence, section) {
      idSequence += 1
      if (section == 1) {
        let countElement = this.plisning.data.questions.length - 1
        if (idSequence > this.plisning.data.questions[countElement].sequence) {
          if (this.dataStructure.length == 0) {
            this.dataStructure = await this.$axios.$get(
              '/api/structure/' + this.$route.query.packageid,
              {
                progress: false,
              }
            )
          }
          this.allquestions = this.dataStructure
          this.questioned = this.dataStructure.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        } else {
          this.questioned = this.plisning.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        }
      } else if (section == 2) {
        let countElement = this.dataStructure.data.questions.length - 1
        if (
          idSequence > this.dataStructure.data.questions[countElement].sequence
        ) {
          if (this.dataReading.length == 0) {
            this.dataReading = await this.$axios.$get(
              '/api/reading/' + this.$route.query.packageid,
              {
                progress: false,
              }
            )
          }
          this.allquestions = this.dataReading
          this.questioned = this.dataReading.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        } else {
          this.questioned = this.dataStructure.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        }
      } else {
        let countElement = this.dataReading.data.questions.length - 1
        if (
          idSequence > this.dataReading.data.questions[countElement].sequence
        ) {
          this.questioned = this.dataReading.data.questions.filter(
            (question) =>
              question.sequence ==
              this.dataReading.data.questions[countElement].sequence
          )
        } else {
          this.questioned = this.dataReading.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        }
      }
      console.log('nex:' + idSequence)
    },
    async previousQuestion(idSequence, section) {
      idSequence -= 1
      if (idSequence < 1) {
        idSequence = 1
      }
      if (section == 1) {
        this.questioned = this.plisning.data.questions.filter(
          (question) => question.sequence == idSequence
        )
      } else if (section == 2) {
        if (idSequence < this.dataStructure.data.questions[0].sequence) {
          this.allquestions = this.plisning
          this.questioned = this.plisning.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        } else {
          this.questioned = this.dataStructure.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        }
      } else if (section == 3) {
        if (idSequence < this.dataReading.data.questions[0].sequence) {
          this.allquestions = this.dataStructure
          this.questioned = this.dataStructure.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        } else {
          this.allquestions = this.dataReading
          this.questioned = this.dataReading.data.questions.filter(
            (question) => question.sequence == idSequence
          )
        }
        // console.log('data' + this.dataReading)
        // console.log(this.dataReading.data.questions[0].sequence)
        // console.log('data setelah' + this.dataReading)
      }
      console.log(idSequence)
    },
    async readQuestion(idSequence, section) {
      if (section == 1) {
        this.questioned = this.plisning.data.questions.filter(
          (question) => question.sequence == idSequence
        )
      } else if (section == 2) {
        this.questioned = this.dataStructure.data.questions.filter(
          (question) => question.sequence == idSequence
        )
      } else {
        this.questioned = this.dataReading.data.questions.filter(
          (question) => question.sequence == idSequence
        )
      }
    },
    isFalse() {
      this.isLoading = false
    },
    async submitOptionQuestion(optionId, package_question) {
      try {
        await this.$axios.$post(
          '/api/create-examquestion',
          {
            exam_id: Number.parseInt(this.$route.query.examid),
            package_question_id: Number.parseInt(package_question),
            option_id: Number.parseInt(optionId),
          },
          { progress: false }
        )

        this.All = await this.$axios.get(
          '/api/exam-questions/' + this.$route.query.examid
        )

        this.AllExamQuestion = this.All.data.data.examsquestions
        console.log(this.AllExamQuestion)

        this.pExams = await this.$axios.get(
          '/api/progressexam/' + this.$route.query.examid,
          {
            progress: false,
          }
        )
        this.pPackage = await this.$axios.get(
          '/api/sumquestionbypackage/' + this.$route.query.packageid,
          { progress: false }
        )
        this.progressExam =
          (this.pExams.data.data / this.pPackage.data.data) * 100
        this.progressExamBysection = await this.$axios.get(
          '/api/progressexambysection/' + this.$route.query.examid,
          { progress: false }
        )

        this.elisning = this.progressExamBysection.data.data.progress.listening
        this.eStructure =
          this.progressExamBysection.data.data.progress.structure
        this.ereading = this.progressExamBysection.data.data.progress.reading
        this.clisning = this.pquestion.data.count.listening
        this.cstructur = this.pquestion.data.count.structure
        this.creading = this.pquestion.data.count.reading
        this.nlisning = this.clisning - this.elisning
        this.nstruckture = this.cstructur - this.eStructure
        this.nreading = this.creading - this.ereading

        // this.totalSeconds = await this.$axios.$get(
        //   '/api/exam-time/' + this.$route.query.examid,
        //   {
        //     progress: false,
        //   }
        // )
        // this.distance = 30
        // console.log(this.distance)
        // console.log(this.totalSeconds)
      } catch (err) {
        console.log(err)
      }
    },
    cekIsloading() {
      this.isLoading = true
    },
  },
}
</script>





