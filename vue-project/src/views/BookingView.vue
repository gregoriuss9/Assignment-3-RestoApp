<script setup>
import { rawData } from '@/stores/counter';

const raw_data = rawData();

raw_data.fetchBooking()
</script>

<template>
    <div class="book container">
        <div class="row bg-dark text-warning">
            <div class="col-sm-5 p-0">
                <img src="../assets/bookphoto.jpg" class="img-fluid h-100" alt="">
            </div>
            <div class="col-sm-7 p-3 d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-success">Reservation</h3>
                <h1>Book a table online now!</h1>
                <form>
                    <div class="row g-3 my-3">
                        <div class="col-sm-6 col-12">
                            <input required type="text" placeholder="Your Name" class="form-control p-3" v-model="raw_data.bookingName">
                        </div>
                        <div class="col-sm-6 col-12">
                            <input required type="email" placeholder="Email" class="form-control p-3" v-model="raw_data.bookingEmail">
                        </div>
                        <div class="col-sm-6 col-12">
                            <input required type="date" placeholder="Date and Time" class="form-control p-3" v-model="raw_data.bookingTime">
                        </div>
                        <div class="col-sm-6 col-12">
                            <select required class="form-select p-3" v-model="raw_data.bookingNoPeople">
                                <option selected>Number of Guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="More than 2 and less than 4">More than 2 and less than 4</option>
                                <option value="More than 4 and less than 8">More than 4 and less than 8</option>
                                <option value="More than 8">More than 8</option>
                            </select>
                        </div>
                        <div class="col-sm-12">
                            <textarea required placeholder="Request" class="form-control p-3" rows="3" v-model="raw_data.bookingRequest"></textarea>
                        </div>
                        <div class="col-sm-12">
                            <button class="btn btn-warning text-white" type="submit" @click.prevent="$event => raw_data.addBooking(raw_data.bookingData)">BOOK NOW</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

       
        <div class="row bg-dark text-warning p-3 mt-5 text-center">
            <table class="table table-dark table-striped table-hover">
                <caption>List of Bookings</caption>
                <thead class="table-light">
                    <tr>
                        <th scope="col ">Name</th>
                        <th scope="col ">Email</th>
                        <th scope="col ">Time</th>
                        <th scope="col ">No. of People</th>
                        <th scope="col ">Request</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for ="booking in raw_data.bookingData">
                        <th scope="row">{{booking.name}}</th>
                        <th>{{booking.email}}</th>
                        <th>{{booking.time}}</th>
                        <th>{{booking.no_people}}</th>
                        <th>{{booking.request}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.btn {
    width: 100%;
}
</style>