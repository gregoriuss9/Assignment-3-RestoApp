import { ref } from 'vue'
import { defineStore } from 'pinia'

export const rawData = defineStore('rawData', () => {

  const data1 = ref({})
  function fetchFood(endpoint) {
    fetch('http://localhost:3000/' + endpoint)
      .then(res => res.json())
      .then(data => {
        data1.value = data
      })
    console.log(data1);
  }

  return { data1, fetchFood }
})
