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
              <div class="mb-1 px-2 text-center">
                <img alt="" style="width: 80%" src="/image/capital-1@2x.png" />
              </div>
              <div class="mb-1 text-center">
                <img style="width: 60%" alt="" src="/image/peopleuser.svg" />
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
            class="navbar pb-5"
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
              <div class="ms-5 ms-sm-0 ms-lg-0 ps-5 ms-sm-0 ms-lg-0 just">
                <Dropdown />
              </div>
            </div>
          </nav>
        </div>
        <div class="row mt-3 ps-3">
          <div class="callout">
            <div class="row">
              <div class="col-12 col-sm-8 col-lg-10 pt-3">
                <span class="fw-semibold"> Exam Overview</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 pe-2" v-if="getLength != 0">
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="row ps-3">
              <div class="card border-0 py-2 shadow-sm bg-body rounded">
                <div class="row">
                  <div class="col">
                    <img
                      class="w-50 ps-4"
                      alt=""
                      src="/image/group-11434.svg"
                    />
                  </div>
                  <div class="col">
                    <div class="fs-6">Total Test</div>
                    <span class="fs-5 fw-semibold">{{ getLength }}</span>
                  </div>
                </div>
              </div>
              <div class="card border-0 py-2 mt-3 shadow-sm bg-body rounded">
                <div class="row">
                  <div class="col">
                    <img
                      class="w-50 ps-4"
                      alt=""
                      src="/image/group-11542.svg"
                    />
                  </div>
                  <div class="col">
                    <div class="fs-6">Highest score</div>
                    <span class="fs-5 fw-semibold">{{ high }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mt-3 mt-sm-0 mt-md-0 mt-lg-0">
            <div class="row ps-3">
              <div class="card border-0 py-2 shadow-sm bg-body rounded">
                <div class="row">
                  <div class="col">
                    <img
                      class="w-50 ps-4"
                      alt=""
                      src="/image/piechart-1@2x.png"
                    />
                  </div>
                  <div class="col">
                    <div class="fs-6">Average Score</div>
                    <span class="fs-5 fw-semibold">{{ avg }}</span>
                  </div>
                </div>
              </div>
              <div class="card border-0 py-2 mt-3 shadow-sm bg-body rounded">
                <div class="row">
                  <div class="col">
                    <img
                      class="w-50 ps-4"
                      alt=""
                      src="/image/group-11541.svg"
                    />
                  </div>
                  <div class="col">
                    <div class="fs-6">Lowest Score</div>
                    <span class="fs-5 fw-semibold">{{ low }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-4 mt-3 mt-lg-0 ps-3 pe-0">
            <div class="card border-0 shadow-sm bg-body rounded">
              <div class="p-4">
                <chartjs-line
                  v-bind:beginzero="beginzero"
                  v-bind:datalabel="datalabel"
                  v-bind:labels="labels"
                  v-bind:data="data"
                  v-bind:fill="fill"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-8 mt-3 mt-lg-0">
            <div class="row ps-3">
              <div class="card border-0 py-2 px-4 shadow-sm bg-body rounded">
                <div class="row pt-2">
                  <span class="fs-6 fw-semibold">Last Exam Score Overview</span>
                  <!-- <span class="fs-6">August, 9 2022</span> -->
                </div>
                <div class="row pt-5">
                  <div class="col text-start ps-3">
                    <img
                      class="p-2"
                      style="
                        border-radius: 50%;
                        width: 16%;
                        background-color: #80d9eb;
                      "
                      alt=""
                      src="/image/listening-1@2x.png"
                    />
                    <span> Listening Section </span>
                  </div>
                  <div class="col text-center">
                    <b class="fs-3" style="color: #ed0f87">{{ lisning }}</b>
                  </div>
                  <!-- <div class="col text-end">
                    <button
                      type="button"
                      @click="solution()"
                      class="btn btn-outline-info py-2 fs-6 text-center"
                      style="color: #00b4d8; width: 100px"
                    >
                      Detail
                    </button>
                  </div> -->
                </div>
                <div class="row pt-5">
                  <div class="col text-start ps-3">
                    <img
                      class="p-2"
                      style="
                        border-radius: 50%;
                        width: 16%;
                        background-color: #80d9eb;
                      "
                      alt=""
                      src="/image/listening-1@2x.png"
                    />
                    <span> Structure Section </span>
                  </div>
                  <div class="col text-center">
                    <b class="fs-3" style="color: #15bf8c">{{ strucktur }}</b>
                  </div>
                  <!-- <div class="col text-end">
                    <button
                      type="button"
                      @click="solution()"
                      class="btn btn-outline-info py-2 fs-6 text-center"
                      style="color: #00b4d8; width: 100px"
                    >
                      Detail
                    </button>
                  </div> -->
                </div>
                <div class="row pt-5">
                  <div class="col text-start ps-3">
                    <img
                      class="p-2"
                      style="
                        border-radius: 50%;
                        width: 16%;
                        background-color: #80d9eb;
                      "
                      alt=""
                      src="/image/listening-1@2x.png"
                    />
                    <span> Reading Section </span>
                  </div>
                  <div class="col text-center">
                    <b class="fs-3" style="color: #15bf8c">{{ reading }}</b>
                  </div>
                  <!-- <div class="col text-end">
                    <button
                      type="button"
                      @click="solution()"
                      class="btn btn-outline-info py-2 fs-6 text-center"
                      style="color: #00b4d8; width: 100px"
                    >
                      Detail
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
            <!--
            <div class="row mt-3 ps-3">
              <div
                class="card border-0 py-2 px-4 overflow-auto"
                style="height: 40%"
              >
                <div class="row pt-2">
                  <span class="fs-6 fw-semibold">Continue your payment</span>
                </div>
                <div class="row pt-5">
                  <div class="col text-start ps-3">
                    <b> #122244 </b>
                  </div>
                  <div class="col text-center">
                    <span class="fs-6">Toefl free</span>
                  </div>
                  <div class="col text-center">
                    <span class="fs-6">6IDR</span>
                  </div>
                  <div class="col text-center">
                    <button
                      type="button"
                      class="btn btn-primary py-2 text-light fs-6"
                      style="width: 100px"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div
            class="
              col-12 col-sm-12 col-lg-4
              mt-3 mt-sm-3 mt-md-3 mt-lg-2
              ps-3
              pe-0
            "
          >
            <!-- <div class="card border-0 py-2 px-3">
              <div class="row">
                <span class="fs-6 fw-semibold ps-3">All Test</span>
              </div>
              <div class="row pt-3">
                <div class="col text-start ps-3">
                  <span> Free Toefl Preparation </span>
                </div>
                <div class="col text-center">
                  <button
                    type="button"
                    class="
                      btn btn-outline-info
                      py-2
                      fs-6
                      text-center
                      fw-semibold
                    "
                    style="color: #00b4d8; width: 100px"
                  >
                    Start Now
                  </button>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col text-start ps-3">
                  <span> Free Toefl Preparation </span>
                </div>
                <div class="col text-center">
                  <button
                    type="button"
                    class="
                      btn btn-outline-info
                      py-2
                      fs-6
                      text-center
                      fw-semibold
                    "
                    style="color: #00b4d8; width: 100px"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="row mt-5 pt-2 ps-3 mb-5 pb-5 justify-content-center" v-else>
          <div
            class="card mt-5 mb-5 text-center shadow bg-body rounded"
            style="
              width: 300px;
              border-top: 9px solid #00b4d8;
              border-bottom: none; ;
            "
          >
            <div class="text-center pb-3 pt-3">
              <img style="width: 20%" alt="" src="/image/group-11541.svg" />
            </div>
            Belum Ada Package Exam
            <div class="px-0 px-lg-5 pt-3 pb-3">
              <button
                type="button"
                class="btn btn-primary py-2"
                style="width: 120px"
                @click="$router.push('/package')"
              >
                Pilih Package
              </button>
            </div>
          </div>
        </div>
        <div class="row mt-5" v-if="getLength != 0">
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
  async asyncData({ $axios }) {
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
    const getExams = await $axios.$get('/api/exams', { progress: false })
    console.log(getExams)
    if (getExams.data.exams == null) {
      getExams.data.exams = []
    }
    const length = getExams.data.exams.length
    if (length == 0 || getExams.data.exams[length - 1].score == 0) {
      let getLength = length
      let high = 0
      let low = 0
      let avg = 0
      let lisning = 0
      let strucktur = 0
      let reading = 0
      let lastExam = 0
      return {
        examnotif,
        getLength,
        high,
        low,
        avg,
        lisning,
        strucktur,
        reading,
        getExams,
        lastExam,
      }
    } else {
      const getlastExams = await $axios.$get('/api/last-exams', {
        progress: false,
      })
      const high = getlastExams.data.exam.high_score
      const low = getlastExams.data.exam.low_score
      const avg = getlastExams.data.exam.avg_score
      const getLength = getExams.data.exams.length
      const lastExam = getExams.data.exams[getLength - 1]
      const scoreBysection = await $axios.get(
        '/api/scoringbysection/' + lastExam.id,
        {
          progress: false,
        }
      )
      const lisning = scoreBysection.data.data.score.listening
      const strucktur = scoreBysection.data.data.score.structure
      const reading = scoreBysection.data.data.score.reading
      return {
        getLength,
        getExams,
        high,
        examnotif,
        low,
        avg,
        lisning,
        strucktur,
        reading,
        lastExam,
        beginZero: true,
        datalabel: 'My label',
        labels: [1, 2, 3, 4, 5],
        data: [0, 0, 0, 0, getExams.data.exams[getLength - 1].score],
        fill: true,
      }
    }
  },
  // data() {
  //   return {
  //     beginZero: true,
  //     datalabel: 'My label',
  //     labels: [1, 2, 3, 4, 5],
  //     data: [this.getExams.data.exams[this.getLength].score, 0, 0, 0, 0],
  //     fill: true,

  //     // bgcolor
  //     // border-color
  //   }
  // },
  methods: {
    async trytest(exam_id, package_id) {
      await this.$router.push({
        path: '/ujiantoefl',
        query: {
          examid: exam_id,
          packageid: package_id,
        },
      })
    },
    async solution() {
      await this.$router.push(
        {
          path: '/solution',
          query: {
            examid: this.lastExam.id,
            packageid: this.lastExam.package_id,
          },
        },
        { progress: false }
      )
    },
  },
}
</script>

