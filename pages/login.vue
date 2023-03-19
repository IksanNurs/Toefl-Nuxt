<template>
  <div class="container-fluid overflow-hidden">
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
        class="login col-12 col-lg-6 col-md-12"
        style="background-color: white; height: 764px"
      >
        <div
          class="
            card
            border-0
            mx-auto
            mt-auto mt-lg-4
            pt-5
            px-lg-5
            position-relative
            start-50
            translate-middle-x
          "
        >
          <notifications group="foo" />
          <div class="card-title text-center">
            <img
              class="mx-auto"
              alt=""
              style="width: 40%"
              src="/image/capital-1@2x.png"
            />
          </div>

          <div class="card-body px-5">
            <div class="mb-3 px-md-5 px-lg-5">
              <label for="email" class="form-label">Email Address</label>
              <input
                v-model="login.emailphone"
                type="email"
                v-if="cekValid == true"
                id="emailphone"
                :class="
                  login.emailphone != '' &&
                  login.emailphone.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                    ? 'form-control is-valid'
                    : 'form-control is-invalid'
                "
              />
              <input
                v-model="login.emailphone"
                type="email"
                v-else
                id="emailphone"
                :class="
                  login.emailphone != '' &&
                  login.emailphone.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                    ? 'form-control is-valid'
                    : login.emailphone == ''
                    ? 'form-control '
                    : 'form-control is-invalid'
                "
              />
              <span
                v-if="
                  login.emailphone != '' &&
                  !login.emailphone.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                "
                style="color: red; font-size: 12px"
                >*email belum valid
              </span>
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <label for="inputPassword5" class="form-label">Password</label>
              <div class="position-relative">
                <input
                  @keyup.enter="userLogin"
                  v-model="login.password"
                  type="password"
                  id="inputPassword5"
                  v-if="cekValid == true"
                  :class="
                    login.password != '' && login.password.length > 7
                      ? 'form-control is-valid'
                      : 'form-control is-invalid'
                  "
                />
                <input
                  @keyup.enter="userLogin"
                  v-model="login.password"
                  type="password"
                  v-else
                  id="inputPassword5"
                  :class="
                    login.password != '' && login.password.length > 7
                      ? 'form-control is-valid'
                      : login.password == ''
                      ? 'form-control '
                      : 'form-control is-invalid'
                  "
                />
                <i
                  toggle="#inputPassword5"
                  @click="suffixIcon()"
                  class="fa fa-eye fa-lg suffixcicon"
                ></i>
              </div>
              <span
                v-if="login.password != '' && login.password.length < 8"
                style="color: red; font-size: 12px"
                >*password harus 8 karakter</span
              >
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <div class="row">
                <div class="col-7">
                  <div class="input-group">
                    <div class="col-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        aria-label="Radio button for following text input"
                      />
                    </div>
                    <div class="col-8 ms-2">Remember me</div>
                  </div>
                </div>
                <div class="col-5 text-end">
                  <nuxt-link to="/forgotpassword" style="color: #00b4d8">
                    Forget Password</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <button
                v-if="cekLoading == true"
                @click="userLogin"
                type="button"
                class="btn btn-primary w-100 py-3"
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
                @click="userLogin"
                type="button"
                class="btn btn-primary w-100 py-3"
              >
                Login
              </button>
            </div>
            <div class="mb-3 px-md-5 px-lg-5 text-center">
              Belum punya akun?
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <nuxt-link to="/register">
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 py-3"
                >
                  Register
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    const cekLoading = false
    let cekValid = false
    return {
      cekLoading,
      cekValid,
      login: {
        emailphone: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      if (
        this.login.emailphone == '' ||
        !this.login.emailphone.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        ) ||
        this.login.password == '' ||
        this.login.password.length < 6
      ) {
        this.cekValid = true
      } else {
        this.cekLoading = true
        try {
          let response = await this.$auth.loginWith('local', {
            data: this.login,
          })
          this.$auth.setUser(response.data.data.user)
        } catch (err) {
          this.cekLoading = false
          console.log(err)
          // this.$toast.global.my_error(err)
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



