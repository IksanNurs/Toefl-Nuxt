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
      <notifications group="foo" class="mt-3" />
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
            <div class="row pt-3">
              <span class="fw-semibold">My package</span>
            </div>
          </div>
        </div>
        <div class="row mt-3 pe-2">
          <div
            class="col d-flex flex-wrap justify-content-center"
            v-for="(packaged, index) in packages"
            :key="'A' + index"
          >
            <div
              class="card border-0 mb-5 shadow bg-body rounded"
              style="width: 300px"
            >
              <div
                class="card-header text-center"
                style="
                  border-radius: 10px 10px 10px 10px;
                  background-color: #00b4d8;
                "
              >
                <span class="fs-5 text-light"> Toefl Preparation</span><br />
                <p
                  class="text-center p-2 bg-light mt-3 fs-4 fw-semibold"
                  style="color: #06506b; border-radius: 20px 20px 20px 20px"
                >
                  {{ packaged.name }}
                </p>
              </div>
              <div class="card-body" style="background-color: white">
                <div class="row text-center">
                  <span class="fw-semibold fs-3" style="color: #00b4d8">
                    Rp
                    {{ new Intl.NumberFormat().format(packaged.price) }}</span
                  >
                </div>
                <div class="row d-flex flex-wrap justify-content-center pt-2">
                  <button
                    type="button"
                    v-if="isLoading1 == true && orderid1 == packaged.id"
                    class="btn btn-primary py-3 w-50 fw-semibold"
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
                    @click="startExam(packaged.order_id, packaged.id)"
                    :class="
                      examnotif.time_left != 0
                        ? 'btn btn-primary py-3 w-50 fw-semibold disabled'
                        : 'btn btn-primary py-3 w-50 fw-semibold '
                    "
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row ps-3">
          <div class="callout">
            <div class="row pt-3">
              <span class="fw-semibold">All Package</span>
            </div>
          </div>
        </div>
        <div class="row mt-3 pe-2">
          <div
            class="col d-flex flex-wrap justify-content-center"
            v-for="(allpackaged, index) in Allpackages.data.packages"
            :key="'B' + index"
          >
            <div
              class="card border-0 mb-5 shadow bg-body rounded"
              style="width: 300px"
            >
              <div
                class="card-header text-center"
                style="
                  border-radius: 10px 10px 10px 10px;
                  background-color: #00b4d8;
                "
              >
                <span class="fs-5 text-light"> Toefl Preparation</span><br />
                <p
                  class="text-center p-2 bg-light mt-3 fs-4 fw-semibold"
                  style="color: #06506b; border-radius: 20px 20px 20px 20px"
                >
                  {{ allpackaged.name }}
                </p>
              </div>
              <div class="card-body" style="background-color: white">
                <div class="row text-center">
                  <span class="fw-semibold fs-3" style="color: #00b4d8">
                    Rp
                    {{
                      new Intl.NumberFormat().format(allpackaged.price)
                    }}</span
                  >
                </div>
                <div class="row d-flex flex-wrap justify-content-center pt-2">
                  <button
                    type="button"
                    v-if="isLoading == true && packageid == allpackaged.id"
                    class="btn btn-primary py-3 w-50 fw-semibold"
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
                    @click="
                      allpackaged.price != 0
                        ? $router.push({
                            name: 'purchase-id',
                            params: { id: allpackaged.id },
                          })
                        : buyPackage(allpackaged.id)
                    "
                    class="btn btn-primary py-3 w-50 fw-semibold"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
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
    const Allpackages = await $axios.$get('/api/packages')
    const packaged = await $axios.$get('/api/packageup')
    let packages = []
    if (packaged.data.packages !== null) {
      packages = packaged.data.packages
    }
    const isLoading = false
    const isLoading1 = false
    const packageid = 0
    const orderid1 = 0
    return {
      packages,
      Allpackages,
      isLoading,
      isLoading1,
      packageid,
      orderid1,
      examnotif,
    }
  },
  methods: {
    async startExam(orderid, packageid) {
      this.isLoading1 = true
      this.orderid1 = orderid
      await this.$router.push({
        path: '/start',
        query: {
          order_id: orderid,
          package_id: packageid,
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
    async buyPackage(id) {
      this.packageid = id
      console.log(this.packageid)
      this.isLoading = true
      try {
        await this.$axios.$post('/api/create-order', {
          package_id: Number.parseInt(id),
        })
        await this.$nuxt.refresh()
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'success',
          text: 'package berhasil di beli',
          duration: 1000,
          speed: 1000,
        })
      } catch (err) {
        this.isLoading = false
        console.log(err)
      }
    },
  },
}
</script>


