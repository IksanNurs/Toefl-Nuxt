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
        class="login col-12 col-md-12 col-lg-6"
        style="background-color: white; height: 764px"
      >
        <Backtologin />
        <notifications group="foo" class="mt-3" />
        <div
          class="
            card
            border-0
            mx-auto
            mt-auto
            pt-5
            px-lg-5
            position-relative
            start-50
            translate-middle-x
          "
        >
          <div class="card-title text-center">
            <img
              class="mx-auto"
              alt=""
              style="width: 40%"
              src="/image/capital-1@2x.png"
            />
          </div>
          <div class="card-body px-5">
            <div class="mb-3 px-md-5 px-lg-5 text-start fw-semibold fs-4">
              Forgot Password
            </div>
            <div class="mb-3 px-md-5 px-lg-5 text-start">
              Enter your email and will send a link for set up your
            </div>
            <div class="mb-3 px-md-5 px-lg-5">
              <label for="email" class="form-label">Email Address</label>
              <input
                @keyup.enter="userForgott"
                type="email"
                v-model="forgott.email"
                v-if="cekValid == true"
                id="email"
                :class="
                  forgott.email != '' &&
                  forgott.email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                    ? 'form-control is-valid'
                    : 'form-control is-invalid'
                "
              />
              <input
                @keyup.enter="userForgott"
                type="email"
                v-model="forgott.email"
                v-else
                id="email"
                :class="
                  forgott.email != '' &&
                  forgott.email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                    ? 'form-control is-valid'
                    : forgott.email == ''
                    ? 'form-control '
                    : 'form-control is-invalid'
                "
              />
              <span
                v-if="
                  forgott.email != '' &&
                  !forgott.email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                "
                style="color: red; font-size: 12px"
                >*email belum valid</span
              >
            </div>

            <div class="mb-3 px-md-5 px-lg-5">
              <button
                type="button"
                @click="userForgott"
                class="btn btn-primary w-100 py-3"
              >
                Send
              </button>
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
    let cekValid = false
    return {
      cekValid,
      forgott: {
        email: '',
      },
    }
  },
  methods: {
    async userForgott() {
      if (
        this.forgott.email == '' ||
        !this.forgott.email.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )
      ) {
        this.cekValid = true
      } else {
        try {
          await this.$axios
            .put('/api/auth/request-passwordreset', this.forgott)
            .then(() =>
              this.$router.push({
                name: 'emailsend-email',
                params: { email: this.forgott.email },
              })
            )
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
  },
}
</script>
