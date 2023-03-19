<template>
  <div
    class="
      container
      mx-auto
      h-screen
      mt-5
      d-flex
      justify-content-center
      items-center
      overflow-hidden
    "
  >
    <div class="w-100 px-5 pt-5">
      <div
        class="
          col-12 col-lg-12
          d-flex
          flex-wrap
          justify-content-center
          items-center
          mx-auto
          mt-6
          mb-8
        "
      >
        <img src="/image/404-illustration.svg" alt="" class="w-50" />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">
        Oops! something wrong
      </h2>
      <p class="text-center font-light" v-if="error.statusCode === 404">
        The page that you requsted doesn’t
        <br />
        exist at this moment
      </p>
      <p class="text-center font-light" v-else>An error occurred</p>
      <div class="mb-4 mt-6">
        <div class="mb-3 text-center">
          <button
            @click="$router.push({ path: '/' })"
            class="
              btn btn-primary
              block
              text-white
              fw-semibold
              px-5
              py-4
              text-lg,
              rounded-full
            "
            style="width: 200px"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'success',
}
</script>

<style lang="scss" scoped>
.auth-background {
  background-image: url('/sign-in-background.jpg');
  background-position: center;
  background-size: cover;
}
</style>
