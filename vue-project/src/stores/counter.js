import { ref } from 'vue'
import { defineStore } from 'pinia'

export const rawData = defineStore('rawData', () => {
  // for add menu
  const menuName = ref('')
  const menuPrice = ref(0)
  const menuDescription = ref('')
  const menuPicture = ref('')

  // for add booking
  const bookingID = ref('')
  const bookingName = ref('')
  const bookingEmail = ref('')
  const bookingTime = ref('')
  const bookingNoPeople = ref('')
  const bookingRequest = ref('')

  const data1 = ref({})
  const bookingData = ref({})
  function fetchFood(endpoint) {
    fetch('http://localhost:3000/' + endpoint)
      .then(res => res.json())
      .then(data => {
        data1.value = data
      })
    // console.log(data1);
  }

  function fetchBooking() {
    fetch('http://localhost:3000/bookings')
      .then(res => res.json())
      .then(data => {
        bookingData.value = data
      })
  }

  function addMenu(data1, endpoint) {
    fetch('http://localhost:3000/' + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: parseInt(data1.length + 1),
        item_name: menuName.value,
        price: parseFloat(menuPrice.value),
        description: menuDescription.value,
        picture: menuPicture.value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data1.value = data;
        alert('Menu added successfully! Please refresh the page');
      })
    menuName.value = '';
    menuPrice.value = 0;
    menuDescription.value = '';
    menuPicture.value = '';
  }

  function getID(id) {
    bookingID.value = id;
  }

  function editMenu(data1, endpoint, id) {
    fetch('http://localhost:3000/' + endpoint + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_name: menuName.value,
        price: parseFloat(menuPrice.value),
        description: menuDescription.value,
        picture: menuPicture.value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data1.value = data;
        alert('Menu updated successfully! Please refresh the page');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    menuName.value = '';
    menuPrice.value = 0;
    menuDescription.value = '';
    menuPicture.value = '';
    console.log("this is id: ", id);
  }

  function addBooking(bookingData) {
    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: parseInt(bookingData.length + 1),
        created_date: new Date(),
        name: bookingName.value,
        email: bookingEmail.value,
        time: bookingTime.value,
        no_people: bookingNoPeople.value,
        request: bookingRequest.value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        bookingData.value = data;
        alert('Booking added successfully! Please refresh the page');
      })
    bookingName.value = '';
    bookingEmail.value = '';
    bookingTime.value = '';
    bookingNoPeople.value = '';
    bookingRequest.value = '';
  }

  return {
    menuName,
    menuPrice,
    menuDescription,
    menuPicture,
    data1,
    bookingData,
    bookingID,
    bookingName,
    bookingEmail,
    bookingTime,
    bookingNoPeople,
    bookingRequest,
    fetchFood,
    fetchBooking,
    getID,
    addMenu,
    editMenu,
    addBooking
  }
})
