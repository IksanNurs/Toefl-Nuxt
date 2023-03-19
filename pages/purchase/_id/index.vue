<template>
  <div class="container-fluid">
    <div class="row px-3">
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
      <nav class="navbar p-0">
        <div class="row">
          <div class="container-fluid">
            <a class="navbar-brand fs-5 fw-semibold" style="color: #06506b"
              >Toefl Preparation</a
            >
          </div>
        </div>
        <span class="navbar-text">
          <div class="row">
            <div class="col-5 pt-2 ps-4">
              <span class="text-dark">
                {{ this.$store.state.auth.user.username }}</span
              >
            </div>
            <div class="col-7 text-end">
              <button
                type="button"
                @click="
                  $router.push({
                    path: '/dashboard',
                  })
                "
                class="btn btn-primary"
                style="width: 75px"
              >
                Dash
              </button>
            </div>
          </div>
        </span>
      </nav>
    </div>
    <div
      class="row position-relative"
      style="background-color: #00b4d8; height: 100px"
    >
      <div class="col-6 pt-4">
        <p
          style="
            width: 150px;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
          "
        >
          Online Class Toefl Preparation
        </p>
      </div>
      <div class="col-6 p-0 text-end">
        <img style="width: 64px" alt="" src="/image/Rectangle 6387.svg" />
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Apakah Kamu Yakin membeli paket {{ packaged.data.packages.name }}?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary px-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Batal
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="checkout(packaged.data.packages.id)"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Ya, beli sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row pt-5 justify-content-center px-4"
      style="background-color: rgb(0, 180, 216, 0.09)"
    >
      <div
        class="card border-0 mb-5 shadow bg-body rounded"
        style="width: 400px"
      >
        <div class="row">
          <div
            class="card-header text-center"
            style="
              border-radius: 10px 10px 10px 10px;
              background-color: #00b4d8;
            "
          >
            <span class="fs-5 text-light"
              >Tryout Class
              <br />
              Toefl Preparation</span
            ><br />
            <p
              class="text-center p-2 bg-light mt-3 fs-4 fw-semibold"
              style="color: #06506b; border-radius: 20px 20px 20px 20px"
            >
              {{ packaged.data.packages.name }}
            </p>
          </div>
          <div class="card-body" style="background-color: white">
            <div class="row text-center">
              <span class="fw-semibold fs-3" style="color: #00b4d8">
                Rp
                {{
                  new Intl.NumberFormat().format(packaged.data.packages.price)
                }}</span
              >
            </div>
            <div class="row d-flex flex-wrap justify-content-center pt-2">
              <button
                v-if="isLoading == true"
                type="button"
                class="btn btn-primary py-3 w-50 fw-semibold"
                style="background-color: #ffde4f; color: white"
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
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn btn-primary py-3 w-50 fw-semibold"
                style="background-color: #ffde4f; color: white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-1 m-0">
      <div class="col-12 col-sm-12 col-lg-5 text-center text-lg-start">
        <div
          class="
            row
            ps-0 ps-lg-4
            justify-content-center justify-content-lg-start
          "
        >
          <img
            class="ps-0 ps-lg-3 justify-align-center"
            style="width: 40%"
            src="/image/capital-1@2x.png"
          />
          <span class="pt-2">
            <p class="ps-0 ps-lg-2" style="color: #06506b">
              Jalan Dr.Abdul Riva'i No.17, Kayu Kubu, <br />Kec. Guguk Panjang,
              Bukittinggi 26136
            </p>
          </span>
          <span class="pt-2">
            <p class="ps-0 ps-lg-2" style="color: #06506b">Copyright 2022</p>
          </span>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-lg-4 text-center text-lg-start">
        <div class="row ps-0 ps-lg-5 pt-5">
          <span class="pt-2">
            <p class="ps-0 ps-lg-2" style="color: #06506b">About us</p>
            <p class="ps-0 ps-lg-2" style="color: #06506b">Help</p>
          </span>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-lg-3 text-center text-lg-start">
        <div class="row ms-0 ms-lg-5 ps-0 ps-lg-5 pt-5">
          <span>
            <p class="ps-0 ps-lg-2" style="color: #06506b">Contact us</p>
          </span>
          <div
            class="
              row
              ps-4 ps-lg-4
              justify-content-center justify-content-lg-start
            "
          >
            <img
              src="/image/yt.png "
              style="cursor: pointer; width: 60px; height: 30px"
            />
            <img
              src="/image/fb.png"
              style="cursor: pointer; width: 60px; height: 33px"
            />
            <img
              src="/image/medsos2.svg"
              style="cursor: pointer; width: 60px; height: 30px"
            />
          </div>
          <span>
            <p class="ps-0 ps-lg-2 pt-2" style="color: #06506b">
              Capitol toefl
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
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
    const packaged = await $axios.$get('/api/package/' + params.id)
    const isLoading = false
    return { packaged, isLoading, examnotif }
  },
  methods: {
    async checkout(idpackage) {
      this.isLoading = true
      try {
        let response = await this.$axios.$post('/api/create-order', {
          package_id: Number.parseInt(idpackage),
        })
        window.location = response.data.order.midtrans_payment_url
        console.log(response)
        this.isLoading = false
      } catch (err) {
        isLoading = false
        console.log(err)
      }
    },
    async logout() {
      await this.$auth.logout()
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
