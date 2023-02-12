<script setup>
import { api } from 'src/boot/axios'
import { useRoute } from 'vue-router'
const route = useRoute()

const detail = await api.get(`/plats/${route.params.id}`)

console.log(detail.data)
</script>

<template>
<q-card class="card shadow-12 q-ma-sm"  style="width:65vw; min-height: 70vh;">
  <q-card-section horizontal col justify-between>
  <q-card-section class="col-9">
      <div class="text-h4 q-mt-sm q-mb-xs text-capitalize">{{detail.data.nom}}</div>
      <div class="text-overline text-primary">Overline</div>
  </q-card-section>
  <q-card-actions class="q-pa-lg col-3">
    <q-btn flat round color="primary" icon="library_add">    <q-tooltip class="text-body2" :delay="1000">Ajouter au Menu de la semaine</q-tooltip> </q-btn>
    <q-btn flat round color="primary" icon="bookmark" > <q-tooltip class="text-body2" :delay="1000">Ajouter aux Favoris</q-tooltip> </q-btn>
    <q-btn flat round color="primary" icon="share" > <q-tooltip class="text-body2" :delay="1000">Partager</q-tooltip> </q-btn>
  </q-card-actions>
</q-card-section>

<q-separator inset spaced/>

<q-card-section horizontal class="q-pa-lg">
  <q-img :src="detail.data.image"  style="max-width: 300px;"/>
  <q-card-section class="text-subitle2 q-pa-xl fit">
      <div class="text-h5" align="left"> Ingredients  </div>
      <div class="row">
      <q-list class="q-pl-xl" padding separator>
        <q-item>  {{detail.data.ingredients[0]}}</q-item>
        <q-item>  Lorem ipsum dolor sit</q-item>
        <q-item>  Lorem ipsum dolor sit</q-item>
      </q-list>
      <q-list class="q-pl-xl" padding separator>
        <q-item>  Lorem ipsum dolor sit</q-item>
        <q-item>  Lorem ipsum dolor sit</q-item>
        <q-item>  Lorem ipsum dolor sit</q-item>
      </q-list>
    </div>
  </q-card-section>
</q-card-section >

</q-card>

</template>
