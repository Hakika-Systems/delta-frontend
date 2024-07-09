<template>
  <NuxtLayout name="dashboard">
    <section class="mb-4">
      <div class="container">
        <div class="mb-4 text-center">
          <h5 class="box-text">Select Supermarket</h5>
          <Chip label="Apple" icon="pi pi-apple" />
          <div class="card flex justify-center">
            <Button label="Submit" />
          </div>
        </div>
        <div class="feature-list-wrap">
          <div class="feature-list">
            <div class="box-icon">
              <img
                src="/assets/img/Ok-Zim-Logo.png"
                alt="icon"
                style="margin: auto; margin-top: 18px; width: 80%"
              />
            </div>
            <div class="media-body">
              <h3 class="box-title">OK</h3>
              <p class="box-text"></p>
            </div>
          </div>
          <div class="feature-list-line"></div>
          <div class="feature-list">
            <div class="box-icon">
              <img src="/assets/img/icon/feature_list_2.svg" alt="icon" />
            </div>
            <div class="media-body">
              <h3 class="box-title">Bon Marche</h3>
              <p class="box-text"></p>
            </div>
          </div>
          <div class="feature-list-line"></div>
          <div class="feature-list">
            <div class="box-icon">
              <img src="/assets/img/icon/food_lovers.svg" alt="icon" />
            </div>
            <div class="media-body">
              <h3 class="box-title">Food Lovers</h3>
              <p class="box-text"></p>
            </div>
          </div>
          <div class="feature-list-line"></div>
          <div class="feature-list">
            <div class="box-icon">
              <img
                src="/assets/img/Ok-Zim-Logo.png"
                alt="icon"
                style="margin: auto; margin-top: 18px; width: 80%"
              />
            </div>
            <div class="media-body">
              <h3 class="box-title">OK Mart</h3>
            </div>
          </div>
          <div class="feature-list-line"></div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup>
import Button from "primevue/button";
</script>
