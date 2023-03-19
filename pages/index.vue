<template>
  <div class="container-fluid">
    <div class="container-lg">
      <div class="row px-3 py-0 mb-5 pb-3">
        <nav
          v-if="examnotif.time_left != 0"
          class="
            navbar navbar-expand-lg navbar-lg
            fixed-top
            shadow-sm
            rounded
            cfff
          "
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
                      class="text-light fs-5 fw-semibold"
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
        <nav
          class="
            navbar navbar-expand-lg navbar-lg
            fixed-top
            shadow-sm
            bg-body
            rounded
          "
        >
          <div class="container">
            <a class="navbar-brand fs-3 fw-semibold" style="color: #06506b"
              >Toefl Preparation</a
            >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ps-5" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-semibold">
                <!-- <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    style="color: #00b4d8; text-decoration: underline"
                    >Home</a
                  >
                </li> -->
                <li class="nav-item">
                  <nuxt-link class="nav-link fs-6" to="/dashboard"
                    >Dashboard</nuxt-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="#">Testimonial</a>
                </li> -->
              </ul>
              <span class="navbar-text" style="width: 500px">
                <div class="row">
                  <div class="col">
                    <div
                      class="dropdown text-end"
                      v-if="this.$store.state.auth.loggedIn"
                      v-bind="loggin(this.$store.state.auth.user.name)"
                    >
                      <button
                        class="
                          btn btn-outline-info
                          radius
                          dropdown-toggle
                          text-dark
                          py-2
                        "
                        style="
                          border-color: white;
                          border-radius: 90px 90px 90px 90px;
                        "
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {{ this.$store.state.auth.user.name }}
                      </button>
                      <ul
                        class="dropdown-menu mt-2 w-50"
                        style="margin-left: 33%"
                      >
                        <li>
                          <nuxt-link class="dropdown-item" to="/package"
                            >Profil</nuxt-link
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="#" @click="logout()"
                            >Logout</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col" v-if="!this.$store.state.auth.loggedIn">
                    <button
                      @click="$router.push({ path: '/login' })"
                      type="button"
                      class="btn btn-outline-primary py-3 w-100"
                    >
                      Login
                    </button>
                  </div>
                  <div class="col" v-if="!this.$store.state.auth.loggedIn">
                    <button
                      type="button"
                      @click="$router.push({ path: '/register' })"
                      class="btn btn-primary py-3 w-100"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <section class="container">
      <div class="row position-relative">
        <div class="col-12 col-lg-6 stack2">
          <div
            class="
              card
              border-0
              pb-5
              ps-2
              pb-lg-0
              pt-0 pt-sm-0 pt-lg-5
              ms-0 ms-lg-4
            "
          >
            <div class="providing-the-best-service-you pt-5">
              <span class="providing-the-best pt-0 pt-sm-0 pt-lg-5">
                <hr style="width: 20%; border-top: 8px solid black" />
                <span style="color: #ffd166">Providing </span>
                <span style="color: #06506b">The Best</span>
              </span>
              <p style="color: #06506b">
                <span>Service You</span>
              </p>
              <p style="color: #06506b">
                <span>All Need </span>
              </p>
              <p style="width: 40%">
                <button
                  type="button"
                  @click="$router.push('/dashboard')"
                  class="btn btn-primary py-3 w-100 fs-3 fw-semibold"
                >
                  Start
                </button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 stack1">
          <div
            class="card border-0 w-100"
            style="background-color: transparent"
          >
            <img alt="" src="/image/group-6@2x.png" class="w-100" />
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row text-center margintopabsolute pt-4">
        <span
          style="
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            color: #06506b;
          "
          >What Will You Get From us ?</span
        >
      </div>
      <div class="row mt-3">
        <div
          class="
            col-sm-6 col-lg-6
            position-relative
            text-center text-lg-end
            pe-0 pe-lg-5
          "
        >
          <img
            class="position-absolute w-75"
            alt=""
            src="/image/-2-1-1@2x.png"
          />
          <img class="w-75" alt="" src="/image/Group 11330.svg" />
        </div>
        <div
          class="
            col-sm-6 col-lg-6
            text-center text-sm-start text-lg-start
            ps-0 ps-lg-5
            pt-0 pt-sm-3 pt-lg-5
            mt-3
          "
        >
          <div class="card border-0">
            <div class="row">
              <span
                style="
                  font-size: 32px;
                  font-weight: 500;
                  font-family: Roboto;
                  color: #06506b;
                "
                >Online/Offline TOEFL Preperation</span
              >
              <p
                style="
                  font-size: 22px;
                  font-weight: 500;
                  font-family: Roboto;
                  color: #06506b;
                "
              >
                You will get online/offline course TOEFL
                <br />
                preperation with listening, structure
                <br />an reading on:<br />
              </p>
              <span class="ps-3"
                ><img
                  style="width: 30px"
                  alt=""
                  src="/image/vector-11@2x.png"
                />
                IELTS/TOEFL ITP Prediction Test</span
              >
              <span class="ps-3 pt-2">
                <img style="width: 30px" alt="" src="/image/vector-11@2x.png" />
                IELTS/TOEFL ITP Prediction Test</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div
        class="container-lg"
        style="background-color: rgb(0, 180, 216, 0.09)"
      >
        <div class="row text-center mt-3">
          <span style="font-size: 32px; font-weight: 500; font-family: Roboto"
            >Choose Your Package</span
          >
        </div>
        <div class="row mt-3 pt-3">
          <div
            class="col d-flex flex-wrap justify-content-center"
            v-for="(packaged, index) in packages.data.packages"
            :key="'DD' + index"
          >
            <div
              class="card border-0 mb-5 shadow bg-body rounded"
              style="width: 400px"
            >
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
                    @click="validatelogin(packaged.id)"
                    type="button"
                    class="btn btn-primary py-3 w-50 fw-semibold"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
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
              style="width: 50%"
              src="/image/capital-1@2x.png"
            />
            <span class="pt-2">
              <p class="ps-0 ps-lg-2" style="color: #06506b">
                Jalan Dr.Abdul Riva'i No.17, Kayu Kubu, <br />Kec. Guguk
                Panjang, Bukittinggi 26136
              </p>
            </span>
            <span class="pt-2">
              <p class="ps-0 ps-lg-2" style="color: #06506b">
                Copyright &copy; 2022
              </p>
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
                class="mt-lg-3"
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
  </div>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    let examnotif = {
      time_left: 0,
    }
    const packages = await $axios.$get('/api/packages')
    return { packages, examnotif }
  },
  methods: {
    async loggin(status) {
      if (status != '') {
        let notif = await this.$axios.$get('/api/exams-notif', {
          progress: false,
        })
        if (notif.data.exam.time_left != 0) {
          await this.$router.push({
            path: '/dashboard',
          })
        }
      }
    },
    // async notifExam() {
    //   let notif = await this.$axios.$get('/api/exams-notif', {
    //     progress: false,
    //   })
    //   this.examnotif = notif.data.exam
    //   let distance = this.examnotif.time_left

    //   let x = setInterval(function () {
    //     let hours = Math.floor(distance / 3600)
    //     let distanceM = (distance %= 3600)
    //     let minutes = Math.floor(distanceM / 60)
    //     let seconds = distanceM % 60
    //     minutes = String(minutes).padStart(2, '0')
    //     hours = String(hours).padStart(2, '0')
    //     seconds = String(seconds).padStart(2, '0')

    //     document.getElementById('countdown').innerHTML =
    //       hours + ':' + minutes + ':' + seconds
    //     if (distance == 0) {
    //       clearInterval(x)
    //       document.getElementById('countdown').innerHTML = 'EXPIRED'
    //       window.location.href =
    //         '/doneexams?examid=' +
    //         this.examnotif.id +
    //         '&packageid=' +
    //         this.examnotif.package_id
    //     }
    //     distance -= 1
    //   }, 1000)
    // },
    async validatelogin(idpackage) {
      await this.$router.push({
        name: 'detailpackage-id',
        params: { id: idpackage },
      })
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
