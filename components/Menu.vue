<template>
  <div class="row ms-1">
    <div class="list-group" id="list-tab" role="tablist">
      <nuxt-link
        to="/dashboard"
        class="list-group-item list-group-item-action p-0 py-2 ps-3 mb-3"
      >
        <img
          class="w-25 pe-3"
          alt=""
          src="/image/group-110511.svg"
        />Overview</nuxt-link
      >
      <nuxt-link
        to="/package"
        class="list-group-item list-group-item-action p-0 py-2 ps-3 mb-3"
      >
        <img
          class="w-25 pe-3"
          alt=""
          src="/image/book 1.svg"
        />Package</nuxt-link
      >
      <nuxt-link
        to="/exam"
        class="list-group-item list-group-item-action p-0 py-2 ps-3 mb-3"
      >
        <img class="w-25 pe-3" alt="" src="/image/group-110504.svg" />Exam
      </nuxt-link>
      <nuxt-link
        to="/order"
        class="list-group-item list-group-item-action p-0 py-2 ps-3 mb-3"
      >
        <img class="w-25 pe-3" alt="" src="/image/group-110481.svg" />Payment
      </nuxt-link>
    </div>
  </div>
</template>




<style scoped>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  background-color: #80d9eb !important;
  border-color: #80d9eb !important;
}
</style>
