<template>
  <div class="container-fluid">
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
        style="background-color: #00b4d8"
      >
        <notifications group="foo" class="mt-3" />
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
            <div class="mb-3 px-md-5 px-lg-5 text-center fw-semibold fs-4">
              Try out TOEFL IBT Prediction
            </div>
            <div class="mb-3 fw-semibold fs-4">
              <div class="row px-3 fs-6 fw-normal">
                <div class="col-2"></div>
                <div class="col-5">
                  <span>
                    <img alt="" src="/image/iconlytwotoneprofile.svg" />
                    orderID </span
                  ><br />
                  <span class="ps-4 ms-1 fw-semibold"
                    >#{{ this.$route.query.order_id }} </span
                  ><br />

                  <span>
                    <img alt="" src="/image/iconlytwotonetime-circle.svg" />
                    Duration </span
                  ><br />
                  <span class="ps-4 ms-1 fw-semibold">{{ duration }} </span>
                </div>

                <div class="col-5">
                  <span>
                    <img alt="" src="/image/iconlytwotonepassword.svg" />
                    PackageID </span
                  ><br />
                  <span class="ps-4 ms-1 fw-semibold"
                    >#{{ this.$route.query.package_id }} </span
                  ><br />

                  <span>
                    <img alt="" src="/image/iconlytwotonedocument.svg" />
                    total question </span
                  ><br />
                  <span class="ps-4 ms-1 fw-semibold">{{ count }} </span>
                </div>
              </div>
            </div>
            <div
              class="
                mb-3
                ps-3 ps-sm-3 ps-md-5 ps-lg-3
                text-start
                fw-semibold
                fs-6
              "
            >
              Exam procedure
            </div>
            <div class="mb-5 px-md-5 px-lg-2 text-start">
              <ol>
                <li>
                  <span
                    >Make sure during the simulation, your internet connection
                    is smooth</span
                  >
                </li>
                <li>
                  <span>The question package consists of a </span>
                  <i class="listening-section-package"
                    >Listening Section package</i
                  >
                  <span class="listening-section-package">, a </span>
                  <i class="listening-section-package">Structure Section</i>
                  <span class="listening-section-package"> and </span>
                  <i class="listening-section-package">Reading Section</i>
                </li>
                <li>
                  <span
                    >You can skip the questions and skip to the next
                    section</span
                  >
                </li>
                <li>
                  <span>Make sure you end all tests by clicking the </span>
                  <b>"Finish Exam"</b>
                  <span> button</span>
                </li>
              </ol>
            </div>
            <div class="mb-1 px-md-5 px-lg-5">
              <div class="row px-5">
                <div class="col-6">
                  <button
                    type="button"
                    @click="$router.back()"
                    class="btn btn-outline-primary w-100 py-3"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-primary w-100 py-3"
                    v-if="isLoading == true"
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
                    class="btn btn-primary w-100 py-3"
                    @click="createExam()"
                  >
                    Start Exam <img class="ps-2" alt="" src="/image/path.svg" />
                  </button>
                </div>
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
    const packaged = await $axios.get('/api/package/' + query.package_id, {
      progress: false,
    })
    const duration = packaged.data.data.packages.duration
    const countQuestionPackage = await $axios.get(
      '/api/sumquestionbypackage/' + query.package_id,
      { progress: false }
    )
    const count = countQuestionPackage.data.data
    const packageid = query.package_id
    const orderid = query.order_id
    const isLoading = false
    return { packageid, orderid, isLoading, count, duration }
  },
  methods: {
    async createExam() {
      this.isLoading = true
      try {
        let response = await this.$axios
          .post('/api/create-exam', {
            package_id: Number.parseInt(this.packageid),
            order_id: Number.parseInt(this.orderid),
          })
          .then((res) =>
            this.$router.push({
              path: '/ujiantoefl',
              query: {
                examid: res.data.data.exam.id,
                packageid: this.packageid,
              },
            })
          )
      } catch {
        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'Error',
          text: 'ujian sudah dilaksanakan',
          duration: 1000,
          speed: 1000,
        })
        setTimeout(() => {}, 8000)
        this.isLoading = false
        this.$router.push({
          path: '/exam',
        })
      }
    },
  },
}
</script>

