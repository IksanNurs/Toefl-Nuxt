<template>
  <div class="container-fluid">
    <div class="row position-relative" style="background-color: white">
      <div
        class="radius col-12 col-lg-6"
        style="background-color: #00b4d8; height: 764px"
      >
        <img
          class="w-75 mt-5 ms-5 ps-5"
          alt="banner"
          src="/image/group-10@2x.png"
        />
      </div>
      <div
        class="login col-12 col-md-12 col-lg-6"
        style="background-color: white; height: 764px"
      >
        <div
          class="
            card
            border-0
            mx-auto
            pt-3
            px-lg-3
            position-relative
            start-50
            translate-middle-x
          "
        >
          <notifications group="foo" class="mt-3" />
          <div class="card-title text-center m-0 p-0">
            <img
              class="mx-auto"
              alt=""
              style="width: 40%"
              src="/image/capital-1@2x.png"
            />
          </div>
          <div class="card-body overflow">
            <div class="mb-3 text-center fw-semibold fs-4">
              Account Registration
            </div>
            <div class="mb-2 text-start">
              Please field the form of registration
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="mb-3">
                  <label for="name" class="form-label">Nama</label>
                  <input
                    type="text"
                    v-if="cekValid == true"
                    id="name"
                    :class="
                      register.name == ''
                        ? 'form-control is-invalid'
                        : 'form-control is-valid'
                    "
                    v-model="register.name"
                  />
                  <input
                    v-else
                    type="text"
                    id="name"
                    :class="
                      register.name != ''
                        ? 'form-control is-valid'
                        : register.name == ''
                        ? 'form-control'
                        : 'form-control is-invalid'
                    "
                    v-model="register.name"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    v-model="register.email"
                    type="email"
                    v-if="cekValid == true"
                    id="email"
                    :class="
                      register.email != '' &&
                      register.email.match(
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                      )
                        ? 'form-control is-valid'
                        : 'form-control is-invalid'
                    "
                  />
                  <input
                    v-model="register.email"
                    type="email"
                    v-else
                    id="email"
                    :class="
                      register.email != '' &&
                      register.email.match(
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                      )
                        ? 'form-control is-valid'
                        : register.email == ''
                        ? 'form-control '
                        : 'form-control is-invalid'
                    "
                  />
                  <span
                    v-if="
                      register.email != '' &&
                      !register.email.match(
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                      )
                    "
                    style="color: red; font-size: 12px"
                    >*email belum valid</span
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      id="phone"
                      v-if="cekValid == true"
                      :class="
                        register.phone == ''
                          ? 'form-control is-invalid'
                          : 'form-control is-valid'
                      "
                      v-model="register.phone"
                    />
                    <input
                      v-else
                      type="number"
                      id="phone"
                      :class="
                        register.phone != ''
                          ? 'form-control is-valid'
                          : register.phone == ''
                          ? 'form-control'
                          : 'form-control is-invalid'
                      "
                      v-model="register.phone"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="mb-3">
                  <label for="inputPassword" class="form-label">
                    Password</label
                  >
                  <div class="position-relative">
                    <input
                      v-model="register.password"
                      type="password"
                      id="inputPassword"
                      v-if="cekValid == true"
                      :class="
                        register.password != '' && register.password.length > 7
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      "
                    />
                    <input
                      v-model="register.password"
                      type="password"
                      v-else
                      id="inputPassword"
                      :class="
                        register.password != '' && register.password.length > 7
                          ? 'form-control is-valid'
                          : register.password == ''
                          ? 'form-control '
                          : 'form-control is-invalid'
                      "
                    />
                    <i
                      toggle="#inputPassword"
                      class="fa fa-eye fa-lg suffixcicon"
                      @click="suffixIcon()"
                    ></i>
                  </div>
                  <span
                    v-if="
                      register.password != '' && register.password.length < 8
                    "
                    style="color: red; font-size: 12px"
                    >*password harus 8 karakter</span
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="mb-4 pb-3">
                  <label
                    for="institution"
                    class="form-label"
                    @click="chooseProv()"
                    >Institution
                    <span
                      v-if="register.institutionid == '' && cekValid == true"
                      style="color: red; font-size: 12px"
                      >*required</span
                    >
                    <span
                      v-if="register.provinceid != ''"
                      style="color: green; font-size: 15px"
                      >*</span
                    ></label
                  >
                  <Select2
                    v-model="register.institutionid"
                    :options="dataInstitusi"
                    :settings="{
                      settingOption: dataInstitusi,
                      settingOption: dataInstitusi,
                      width: '100%',
                      placeholder: 'select..',
                    }"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="mb-4 pb-3">
                  <label for="provinsi" class="form-label"
                    >Provinsi
                    <span
                      v-if="register.provinceid == '' && cekValid == true"
                      style="color: red; font-size: 12px"
                      >*required</span
                    >
                    <span
                      v-if="register.provinceid != ''"
                      style="color: green; font-size: 15px"
                      >*</span
                    >
                  </label>
                  <Select2
                    v-model="register.provinceid"
                    :options="dataProvinsi"
                    :settings="{
                      settingOption: dataProvinsi,
                      settingOption: dataProvinsi,
                      width: '100%',
                      placeholder: 'select..',
                    }"
                    @change="myChangeEvent($event)"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="mb-4 pb-3">
                  <label for="district" class="form-label">
                    Kota/Kabupaten
                    <span
                      v-if="register.districtid == '' && cekValid == true"
                      style="color: red; font-size: 12px"
                      >*required</span
                    >
                    <span
                      v-if="register.provinceid != ''"
                      style="color: green; font-size: 15px"
                      >*</span
                    ></label
                  >
                  <Select2
                    v-model="register.districtid"
                    :options="dataDistrict"
                    :settings="{
                      settingOption: dataDistrict,
                      settingOption: dataDistrict,
                      width: '100%',
                      placeholder: 'select..',
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 px-md-5 px-lg-5 text-center">
              <span>
                sudah punya akun?
                <nuxt-link to="/login" style="color: #00b4d8"> login</nuxt-link>
              </span>
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <button
                type="button"
                @click="userRegister"
                class="btn btn-primary w-100 py-3"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select2 from 'v-select2-component'
export default {
  layout: 'auth',
  components: { Select2 },
  data() {
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let username = ''
    var chaactersLength = characters.length

    for (var i = 0; i < 5; i++) {
      username += characters.charAt(Math.floor(Math.random() * chaactersLength))
    }
    let cekValid = false
    return {
      cekValid,
      dataDistrict: [],
      register: {
        username,
        name: '',
        email: '',
        phone: '',
        institutionid: '',
        provinceid: '',
        districtid: '',
        password: '',
      },
    }
  },
  async asyncData({ $axios }) {
    const provinsi = await $axios.get('/api/province')
    const institusi = await $axios.get('/api/institutions')
    const dataProvinsi = provinsi.data.data.provinces
    const dataInstitusi = institusi.data.data.intitutions
    console.log(dataInstitusi)
    return { dataProvinsi, dataInstitusi }
  },
  methods: {
    chooseProv() {
      console.log(this.register)
    },
    async myChangeEvent(val) {
      console.log(val)
      const district = await this.$axios.get(
        '/api/districts?province_id=' + val
      )
      this.dataDistrict = district.data.data.districts
    },

    async userRegister() {
      if (
        this.register.email == '' ||
        !this.register.email.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        ) ||
        this.register.password == '' ||
        this.register.password.length < 6 ||
        this.register.name == '' ||
        this.register.phone == '' ||
        this.register.provinceid == '' ||
        this.register.districtid == '' ||
        this.register.institutionid == ''
      ) {
        this.cekValid = true
      } else {
        try {
          let response = await this.$axios.post('/api/auth/signup', {
            name: this.register.name,
            username: this.register.username,
            password: this.register.password,
            email: this.register.email,
            phone: this.register.phone,
            institutionid: Number.parseInt(this.register.institutionid),
            provinceid: this.register.provinceid,
            districtid: this.register.districtid,
          })
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'success',
            text: 'Berhasil daftar',
            duration: 1000,
            speed: 1000,
          })
          console.log(response.data.data.token)
          this.$auth
            .setUserToken(response.data.data.token)
            .then(() => this.$router.push({ path: '/dashboard' }))
        } catch (err) {
          console.log(err)
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Error',
            text: err,
            duration: 1000,
            speed: 1000,
          })
        }
      }
    },
    suffixIcon() {
      $('.suffixcicon').toggleClass('fa-eye fa-eye-slash')
      var input = $($('.suffixcicon').attr('toggle'))
      if (input.attr('type') == 'password') {
        input.attr('type', 'text')
      } else {
        input.attr('type', 'password')
      }
    },
  },
}
</script>

