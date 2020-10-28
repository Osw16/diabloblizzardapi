<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name: 'Home' }">
          <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
          <span class="font-diablo ml-2">D3PF</span>
        </b-navbar-brand>
      </b-navbar>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HeaderBar'
}
</script>
