<template>
  <div class="container-fluid">
    <div class="row d-flex flex-wrap ps--scrolling-x">
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
      <div class="col-lg-10" style="background-color: rgb(0, 180, 216, 0.09)">
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
          <div class="alert alert-light" role="alert" style="width: 97%">
            <div class="d-flex flex-row mb-3">
              <div class="p-2 border-start border-5 border-info"></div>
              <div class="p-2" style="color: rgb(14, 105, 126)">
                <h3>Exam History</h3>
              </div>
            </div>
            <div class="d-flex flex-wrap">
              <div class="p-2" style="margin: 20px 15px 15px 0px">
                Filter by
              </div>
              <div class="p-2" style="margin: 15px 5px 5px 10px">
                <input class="form-control" type="date" id="date" />
              </div>
              <div class="ps-3 pt-4">
                <select
                  class="form-select form-control"
                  aria-label="Default select example"
                  style="width: 150px"
                >
                  <option selected>Status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="ps-3 pt-4">
                <select
                  class="form-select form-control"
                  aria-label="Default select example"
                  style="width: 170px"
                >
                  <option selected>Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="ps-3 pt-4 mb-3">
                <span class="position-relative"
                  ><input
                    class="form-control"
                    type="search"
                    id="search"
                    placeholder="Find exam.."
                    aria-label="default input example"
                  />
                  <li
                    class="fa fa-search position-absolute"
                    style="top: 19px; left: 190px"
                  ></li>
                </span>
              </div>
            </div>

            <div class="row p-2">
              <div
                class="col-12 col-sm-12 col-lg-4 mb-3"
                v-for="(examdata, index) in dataExam"
                :key="'S' + index"
              >
                <div class="card">
                  <div class="card-body shadow-sm bg-body rounded">
                    <div class="row pe-1 ps-1">
                      <div class="col-4" style="margin-left: -20px">
                        <div
                          class="pie"
                          :data-progress="examdata.score"
                          :style="
                            '--progress: ' +
                            ((examdata.score / 677) * 100 * 360) / 100 +
                            'deg'
                          "
                        ></div>
                      </div>
                      <div class="col ps-5">
                        <h6 style="color: rgb(0, 180, 221)">
                          Try Out {{ examdata.id }}
                        </h6>
                        <h5 style="color: rgb(14, 105, 126); margin-top: 10px">
                          Try Out TOEFL
                          <br />
                          test preparation
                        </h5>
                      </div>
                    </div>
                    <hr class="mt-2" />
                    <div class="row p-3">
                      <div class="col">
                        <div class="row">
                          <div class="col-3">
                            <img
                              alt=""
                              src="/image/iconlytwotonepassword2.svg"
                            />
                          </div>
                          <div class="col">
                            <span class="fw-semibold">Package</span><br />
                            <span>#{{ examdata.Package.id }}</span>
                          </div>
                        </div>
                        <!-- <div class="row">
                          <div class="col-3">
                            <img
                              alt=""
                              src="/image/iconlytwotonetime-circle6.svg"
                            />
                          </div>
                          <div class="col">
                            <span class="fw-semibold">Processing time</span>
                            <span>{{ examdata.Package.duration }}</span>
                          </div>
                        </div> -->
                      </div>
                      <div class="col">
                        <div class="row">
                          <div class="col-3">
                            <img
                              alt=""
                              src="/image/iconlytwotonetime-circle6.svg"
                            />
                          </div>
                          <div class="col">
                            <span class="fw-semibold">Duration</span>
                            <span>{{ examdata.Package.duration }}</span>
                          </div>
                          <!-- <div class="col-3">
                            <img
                              alt=""
                              src="/image/iconlytwotonedocument2.svg"
                            />
                          </div>
                          <div class="col">
                            <span class="fw-semibold">Number OF Question</span
                            ><br />
                            <span>{{ count }}</span>
                          </div> -->
                        </div>
                      </div>
                    </div>
                    <hr class="mt-2" />
                    <div class="row px-3">
                      <button
                        type="button"
                        v-if="isLoading == true && examid == examdata.id"
                        class="btn btn-outline-primary"
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
                        @click="pushDetail(examdata.id, examdata.Package.id)"
                        class="btn btn-outline-primary"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5" v-if="isCekF == true">
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
    let isCekF = true
    const exam = await $axios.$get('/api/exams')
    let dataExam = exam.data.exams
    let count = 0
    if (dataExam == null) {
      isCekF = false
    }
    const isLoading = false
    const examid = 0
    console.log(isLoading)
    return { dataExam, count, isCekF, isLoading, examid, examnotif }
  },
  methods: {
    // async countQuest(id) {
    //   const countQuestionPackage = await this.$axios.get(
    //     '/api/sumquestionbypackage/' + id
    //   )
    //   this.count = countQuestionPackage.data.data
    //   return this.count
    // },
    async pushDetail(examid, packageid) {
      this.examid = examid
      this.isLoading = true
      try {
        await this.$router.push({
          path: '/exam/view',
          query: {
            examid: examid,
          },
        })
      } catch (error) {
        this.isLoading = false
      }
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
  },
}
</script>

