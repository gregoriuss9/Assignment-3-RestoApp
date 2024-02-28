<script setup>
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
                            <input type="text" placeholder="Your Name" class="form-control p-3">
                        </div>
                        <div class="col-sm-6 col-12">
                            <input type="email" placeholder="Email" class="form-control p-3">
                        </div>
                        <div class="col-sm-6 col-12">
                            <input type="date" placeholder="Date and Time" class="form-control p-3">
                        </div>
                        <div class="col-sm-6 col-12">
                            <select class="form-select p-3">
                                <option selected>Number of Guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">More than 2 and less than 4</option>
                                <option value="4">More than 4 and less than 8</option>
                                <option value="5">More than 8</option>
                            </select>
                        </div>
                        <div class="col-sm-12">
                            <textarea placeholder="Request" class="form-control p-3" rows="3"></textarea>
                        </div>
                        <div class="col-sm-12">
                            <button class="btn btn-warning text-white" type="submit">BOOK NOW</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<style>
.btn {
    width: 100%;
}
</style>