<script setup>
import { capitalize } from 'vue'

const props = defineProps(
  {
    id: String,
    nom: String,
    image: { type: String, default: 'https://cdn.quasar.dev/img/parallax2.jpg' },
    healthy: Boolean
  }
)
</script>

<template>
<div class="width-1of2 lg-width-1of3 sm-auto " :id="props.id">
  <q-card class="shadow-6 my-card">
    <q-item >
      <q-item-section row justify-center>
        <q-item-label class="text-h6 text-blue-grey-9">{{ capitalize(  props.nom )}}</q-item-label>
        <q-item-label class="text-blue-grey-9" caption>Subhead</q-item-label>
      </q-item-section>
    </q-item>
    <img class="card-img" :src="props.image">
          <q-card-actions align="left">
        <q-btn flat round color="primary" icon="library_add">    <q-tooltip class="text-body2" :delay="1000">Ajouter au Menu de la semaine</q-tooltip> </q-btn>
        <q-btn flat round color="primary" icon="bookmark" > <q-tooltip class="text-body2" :delay="1000">Ajouter aux Favoris</q-tooltip> </q-btn>
        <q-btn flat round color="primary" icon="hide_source" > <q-tooltip class="text-body2" :delay="1000">Cacher</q-tooltip> </q-btn>
      </q-card-actions>
    </q-card>

</div>
</template>

<style >
.my-card{
  height:100%;
  min-height: 350px;
  width: 300px;
  padding: 1rem;
  border-radius: 12px;
}
.card-img{
height: 160px;
margin-bottom: 8px;
margin-top: 10px;
max-width: 100%;
object-fit: cover;
border-radius: 12px;
}
.my-card:hover {
  transform: translate3D(0,-1px,0) scale(1.03);
}
</style>
