<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMugSaucer, faBowlFood, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted } from 'vue'

library.add(faMugSaucer, faBowlFood, faChampagneGlasses);
const iconSize = ref('3x')

</script>

<template>
  <div class="about container">
    <div class="row text-center my-2">
      <h1>Most Popular Items</h1>
    </div>
    <nav>
      <div class="row justify-content-center">
        <RouterLink to="/menu/breakfast" class="p-1 d-flex align-items-center col-sm-2 col-12">
          <div class="col-4">
            <font-awesome-icon icon="fa-solid fa-mug-saucer" :size="iconSize" />
          </div>
          <div class="col">
            <p class="text-warning m-0">Popular</p>
            <h5 class="m-0">Breakfast</h5>
          </div>
        </RouterLink>

        <RouterLink to="/menu/lunch" class="p-1 d-flex align-items-center col-sm-2 col-12">
          <div class="col-4">
            <font-awesome-icon icon="fa-solid fa-bowl-food" :size="iconSize" />
          </div>
          <div class="col">
            <p class="text-warning m-0">Special</p>
            <h5>Lunch</h5>
          </div>
        </RouterLink>

        <RouterLink to="/menu/dinner" class="p-1 d-flex align-items-center col-sm-2 col-12">
          <div class="col-4">
            <font-awesome-icon icon="fa-solid fa-champagne-glasses" :size="iconSize" />
          </div>
          <div class="col">
            <p class="text-warning m-0">Lovely</p>
            <h5>Dinner</h5>
          </div>
        </RouterLink>
      </div>
    </nav>


    <RouterView />
  </div>
</template>
