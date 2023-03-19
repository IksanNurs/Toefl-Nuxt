<template>
  <div class="container-fluid overflow-hidden">
    <div class="row position-relative">
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
            <div class="mb-3 px-md-5 px-lg-5 text-center fw-semibold fs-4">
              <img class="w-25" alt="" src="/image/send-1@2x.png" />
            </div>
            <div class="mb-3 px-md-5 px-lg-5 text-center fw-semibold fs-4">
              Email Send
            </div>
            <div class="mb-3 px-md-5 px-lg-5 text-center">
              <span>
                Kami telah mengirimkan link melalui email
                {{ this.$route.params.email }} Anda untuk merubah kata sandi.
                Klik link untuk melanjutkan merubah kata sandi.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

