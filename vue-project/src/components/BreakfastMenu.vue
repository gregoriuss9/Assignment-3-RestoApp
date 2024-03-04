<script setup>
import { rawData } from '@/stores/counter';

const raw_data = rawData();

raw_data.fetchFood('breakfast')

</script>

<template>
    <div class="container px-0">
        <div class="row my-3 mx-0 g-3 text-center justify-content-center">
            <div class="col-sm-2">
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#AddMenuModal" >Add Menu</button>
            </div>
        </div> 
        <div class="row my-3 mx-0 g-3">
            <div class="col-12 col-sm-6 p-2" v-for="item in raw_data.data1" :key="item.id" :item="item">
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
                        <div class="row mt-auto">
                            <div class="col-sm-6">
                                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editMenuModal" :data-id="item.id" @click.prevent="$event => raw_data.getID(item.id)">Edit Menu</button> 
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <p class="fw-light fst-italic ">{{ item.description }}</p>
                        </div>
                    </div>

                    
                </div>

                <!-- ADD MENU MODAL -->
                <div class="modal fade" id="AddMenuModal" tabindex="-1" aria-labelledby="AddMenuLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="AddMenuLabel">Add Menu</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row g-3 my-3">
                                    <div class="col-sm-6">
                                        <input required type="text" placeholder="Menu Name" class="form-control" v-model="raw_data.menuName">
                                    </div>
                                    <div class="input-group col-sm">
                                        <span class="input-group-text">$</span>
                                        <input required type="text" placeholder="Menu Price" class="form-control" v-model="raw_data.menuPrice">
                                    </div>
                                    <div class="col-sm-12">
                                        <input required type="text" placeholder="Menu Picture URL" class="form-control" v-model="raw_data.menuPicture">
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea required placeholder="Menu Description" class="form-control" rows="3" v-model="raw_data.menuDescription"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="$event => raw_data.addMenu(raw_data.data1,'breakfast')">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- EDIT MENU MODAL -->
                <div class="modal fade" id="editMenuModal" tabindex="-1" aria-labelledby="editMenuLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="editMenuLabel">Edit Menu</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row g-3 my-3">
                                    <div class="col-sm-6">
                                        <input required type="text" placeholder="Menu Name" class="form-control" v-model="raw_data.menuName">
                                    </div>
                                    <div class="input-group col-sm">
                                        <span class="input-group-text">$</span>
                                        <input required type="text" placeholder="Menu Price" class="form-control" v-model="raw_data.menuPrice">
                                    </div>
                                    <div class="col-sm-12">
                                        <input required type="text" placeholder="Menu Picture URL" class="form-control" v-model="raw_data.menuPicture">
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea required placeholder="Menu Description" class="form-control" rows="3" v-model="raw_data.menuDescription"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$event => raw_data.editMenu(raw_data.data1,'breakfast', raw_data.bookingID) ">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<style></style>