<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main container d-flex justify-content-between">
    <div class="row align-items-center">
      <div class="col-sm-4 caption">
        <h1 class="text-info">Welcome! Enjoy Our Best Food</h1>
        <br>
        <h6 class="text-white fw-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil asperiores eveniet
          pariatur
          quisquam neque
          iste consequatur velit, repudiandae vero eius exercitationem nam, minima aut optio ullam! Saepe eveniet ea ab.
        </h6>
        <br>
        <div class="col-sm-5">
          <RouterLink to="/book" class="btn btn-warning text-danger">BOOK A TABLE</RouterLink>
          <RouterView />
        </div>
      </div>

      <div class="col-sm-6 sidepict ms-sm-auto">
        <img src="../assets/photokanan.png" class="img-fluid" alt="...">
      </div>

    </div>
  </div>
</template>

<style>
/* body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
} */


.main {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.3; */
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-color: rgba(0, 0, 0, 0.88);
}


.caption,
.sidepict {
  opacity: 1;
  position: relative;
}

.btn {
  width: 50%;
}
</style>
