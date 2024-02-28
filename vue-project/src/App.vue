<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils, faMugSaucer } from '@fortawesome/free-solid-svg-icons'

library.add(faUtensils, faMugSaucer);

</script>

<template>
  <div class="container">

    <header>

      <nav class="navbar sticky-top navbar-expand-lg bg-white p-3">
        <div class="container">
          <a class="navbar-brand">
            <h2><font-awesome-icon icon="fa-solid fa-utensils" /> Restoran</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-md-auto">
              <a class="nav-link fs-5 ">
                <RouterLink to="/">HOME</RouterLink>
              </a>

              <a class="nav-link fs-5 ">
                <RouterLink to="/menu">MENU</RouterLink>
              </a>

              <a class="nav-link fs-5 ">
                <RouterLink to="/book">BOOK A TABLE</RouterLink>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <RouterView />

    </header>

  </div>
</template>

<style >
nav a.router-link-exact-active {
  /* color: var(--color-text); */
  color: white;
  background-color: rgb(0, 0, 0);
  ;
}

/* nav a.router-link-exact-active:hover { */
nav a:hover {
  /* background-color: transparent; */
  color: rgb(9, 206, 9);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}
</style>
