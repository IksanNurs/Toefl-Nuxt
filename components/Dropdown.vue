<template>
  <div class="dropdown">
    <!-- <img style="width: 17%" alt="" src="/image/notifications1.svg" /> -->
    <button
      class="btn btn-outline-info radius dropdown-toggle text-light mt-1 py-2"
      style="border-color: white; border-radius: 90px 90px 90px 90px"
      type="button"
      data-bs-toggle="dropdown"
    >
      My Account
    </button>
    <ul class="dropdown-menu w-50" style="margin-left: -30px; margin-top: 10px">
      <!-- <li>
        <nuxt-link class="dropdown-item" to="/mypackage">Profil</nuxt-link>
      </li> -->
      <li>
        <a class="dropdown-item" href="#" @click="logout()">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      localStorage.removeItem('token')
    },
  },
}
</script>

