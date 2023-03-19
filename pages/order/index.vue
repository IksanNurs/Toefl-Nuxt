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
              <div class="col-12 pt-3">
                <span class="fw-semibold">Payment History</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 pe-2 ps-3">
          <div class="card border-0">
            <div class="d-flex flex-row">
              <div class="p-2">Show</div>
              <div class="p-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  5
                </a>
              </div>
              <div class="p-2">entris</div>
              <div class="ms-auto p-2">
                <div class="mb-3">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 overflow-auto">
            <table class="table caption-top">
              <thead>
                <tr>
                  <th>#</th>
                  <!-- <th>Serial</th> -->
                  <th>Name</th>
                  <!-- <th>Type</th> -->
                  <th>Price</th>
                  <!-- <th>Date</th> -->
                  <th class="text-center">Status</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in paginateOrders" :key="'S' + index">
                  <th>{{ order.id }}</th>
                  <!-- <td>88311122</td> -->
                  <td>{{ order.package.name }}</td>
                  <!-- <td>Paid Test</td> -->
                  <td>{{ order.package.price }}</td>
                  <!-- <td>2022-08-12 15:04:23</td> -->
                  <td style="width: 200px" class="px-5">
                    <div
                      v-if="order.paid_at != 0"
                      class="alert alert-success p-0 m-0 py-2 px-3 text-center"
                      role="alert"
                    >
                      success
                    </div>
                    <div
                      v-else-if="order.expired_at != 0"
                      class="alert alert-danger p-0 m-0 py-2 px-3 text-center"
                      role="alert"
                    >
                      expired
                    </div>
                    <div
                      v-else
                      class="alert alert-warning p-0 m-0 py-2 px-3 text-center"
                      role="alert"
                    >
                      pending
                    </div>
                  </td>
                  <td style="width: 200px" class="px-5">
                    <!-- <button
                      type="button"
                      v-if="order.paid_at == 0"
                      class="btn btn-primary rounded-pill py-2"
                      @click="reOrder(order.midtrans_payment_url)"
                      style="width: 100px"
                    >
                      Follow up
                    </button> -->
                    <button
                      @click="
                        $router.push(
                          {
                            path: '/order/view',
                            query: {
                              uuid: order.uuid,
                            },
                          },
                          {
                            progress: false,
                          }
                        )
                      "
                      type="button"
                      class="btn btn-outline-primary rounded-pill py-2"
                      style="width: 100px"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card border-0">
            <!-- <p>Showing 1 to 2 of 2 entries</p> -->
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link"
                    @click="paginate((indexOrder -= 1))"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true" style="cursor: pointer"
                      >&laquo;</span
                    >
                  </a>
                </li>
                <li class="page-item" v-for="index in paginated" :key="index">
                  <a class="page-link" @click="paginate(index)">{{ index }}</a>
                </li>
                <li class="page-item">
                  <a
                    style="cursor: pointer"
                    class="page-link"
                    @click="paginate((indexOrder += 1))"
                    aria-label="Next"
                  >
                    <span aria-hidden="true" style="cursor: pointer"
                      >&raquo;</span
                    >
                  </a>
                </li>
              </ul>
            </nav>
            <br />
          </div>
        </div>
        <div class="row mt-5 pt-5" v-if="orders.data.orders.length != 0">
          <div class="card border-0 mt-5">
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
    const orders = await $axios.$get('/api/orders')
    if (orders.data.orders === null) {
      orders.data.orders = []
    }
    const page_size = 5
    let paginated = Math.ceil(orders.data.orders.length / page_size)
    let paginateOrders = orders.data.orders.slice(0 * page_size, 1 * page_size)
    let indexOrder = 1
    return {
      orders,
      page_size,
      paginated,
      paginateOrders,
      indexOrder,
      examnotif,
    }
  },
  methods: {
    async paginate(page_number) {
      if (page_number <= 0) {
        page_number = 1
        this.indexOrder = 1
      } else if (page_number > this.paginated) {
        page_number = this.paginated
        this.indexOrder = this.paginated
      }
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      this.paginateOrders = this.orders.data.orders.slice(
        (page_number - 1) * this.page_size,
        page_number * this.page_size
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
  },
}
</script>



// function paginate(array, page_size, page_number) {
//   // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
//   return array.slice((page_number - 1) * page_size, page_number * page_size);
// }

// console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
// console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1));
