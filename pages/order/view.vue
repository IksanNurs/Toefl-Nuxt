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
              <div class="mb-4 px-2 text-center">
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
        <!-- <div
          class="alert alert-info ms-2"
          style="
            border-radius: 15px 15px 15px 15px;
            color: #00b4d8;
            top: 100px;
            margin-top: -132px;
          "
        >
          <div class="row">
            <div class="col-1">
              <img class="group-icon42" alt="" src="/image/group-113212.svg" />
            </div>
            <div class="ps-0 ps-sm-4 ps-lg-0 col-12 col-sm-9 col-lg-8">
              <span class="fw-semibold" style="color: #06506b"
                >Next Try Out coming soon!</span
              ><br />
              <span style="color: #06506b"
                >Try out the TOEFL test for you to get to the TOEFL prediction
                test. Free 15x Try Out TOEFL!</span
              >
            </div>
            <div class="col-12 col-sm-12 col-lg-3 text-end">
              <button
                type="button"
                class="btn btn-primary py-2"
                style="width: 140px"
              >
                Register here
              </button>
            </div>
          </div>
        </div> -->
        <div class="row mt-3 ps-3">
          <div class="callout">
            <div class="row">
              <div class="col-12 pt-3">
                <span class="fw-semibold">Detail Order</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 pe-2 ps-2">
          <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="row pe-1 ps-1 text-center">
                  <h5 style="color: rgb(14, 105, 126); margin-top: 10px">
                    {{ dataorder.package.name }}
                  </h5>
                </div>
                <div class="row p-3">
                  <div class="col">
                    <div class="row">
                      <div class="col-3">
                        <img alt="" src="/image/iconlytwotoneprofile1.svg" />
                      </div>
                      <div class="col">
                        <span class="fw-semibold">OrderID</span><br />
                        <span>#{{ orderid }}</span>
                      </div>
                    </div>
                    <div class="row mt-5 mt-lg-3">
                      <div class="col-3">
                        <img
                          alt=""
                          src="/image/iconlytwotonetime-circle6.svg"
                        />
                      </div>
                      <div class="col">
                        <span class="fw-semibold">Duration</span>
                        <span>{{ dataorder.package.duration }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col-3">
                        <img alt="" src="/image/iconlytwotonepassword2.svg" />
                      </div>
                      <div class="col">
                        <span class="fw-semibold">PackageID</span>
                        <span>#{{ dataorder.package.id }}</span>
                      </div>
                    </div>
                    <div class="row mt-5 mt-lg-3">
                      <div class="col-3">
                        <img alt="" src="/image/iconlytwotonedocument2.svg" />
                      </div>
                      <div class="col">
                        <span class="fw-semibold">Total Question</span><br />
                        <span>{{ countQuestion }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row px-3">
                  <button
                    v-if="isLoading == true"
                    type="button"
                    class="btn btn-primary py-3"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                  <button
                    v-else-if="dataorder.paid_at != 0"
                    @click="startExam"
                    type="button"
                    class="btn btn-primary py-3"
                  >
                    Start Exam
                  </button>
                  <button
                    v-else
                    @click="reOrder(dataorder.midtrans_payment_url)"
                    type="button"
                    class="btn btn-primary py-3"
                  >
                    Follow up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 pt-5">
          <div class="ca'pp'+indext-0">
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
    const order = await $axios.$get('/api/order/' + query.uuid)
    const dataorder = order.data.orders
    const orderid = dataorder.id
    const count = await $axios.$get(
      '/api/sumquestionbypackage/' + dataorder.package_id
    )
    const countQuestion = count.data
    const isLoading = false
    return { dataorder, orderid, countQuestion, isLoading, examnotif }
  },
  methods: {
    async startExam() {
      this.isLoading = true
      await this.$router.push({
        path: '/start',
        query: {
          order_id: this.orderid,
          package_id: this.dataorder.package.id,
        },
      })
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
    async reOrder(urlpayment) {
      window.location = urlpayment
    },
  },
}
</script>
