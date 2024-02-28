<script setup>
import { rawData } from '@/stores/counter';

const raw_data = rawData();

raw_data.fetchFood('lunch')

</script>

<template>
    <!-- <h1>This is Sub Menu View Example</h1> -->
    <div class="container px-0">
        <div class="row my-3 mx-0 g-3">
            <div class="col-12 col-sm-6 p-2" v-for="item in raw_data.data1" :key="item.item_name">
                <div class="row">
                    <div class="col-3">
                        <img :src="item.picture" :alt="item.item_name" class="img-fluid">
                    </div>
                    <div class="col">
                        <div class="row justify-content-between">
                            <div class="col">
                                <h3 class="text-capitalize text-danger">{{ item.item_name }}</h3>
                            </div>
                            <div class="col">
                                <h4 class="text-warning text-end">${{ item.price }}</h4>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <p class="fw-light fst-italic text-break">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>