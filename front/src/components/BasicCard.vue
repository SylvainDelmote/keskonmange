<script setup>
const props = defineProps(
  {
    id: String,
    nom: String,
    image: { type: String, default: 'https://cdn.quasar.dev/img/parallax2.jpg' },
    healthy: Boolean
  }
)
console.log(props.more)
</script>

<template>
<div class="width-1of2 lg-width-1of3 sm-auto" :id="props.id">
  <q-card class="my-card" :id="props.id">
  <q-img :src="props.image" class="card-image">
    <div class="absolute-bottom text-subtitle2 text-center">
     {{ props.nom }}
    </div>
   <q-chip v-if="props.healthy"  square class="glossy" dense size="xs" color="secondary" >Healthy</q-chip>

   </q-img>

  </q-card>
</div>
</template>

<style >
.my-card{
  width: 250px;
  height:auto;
}
.card-image{
height: 150px;
}
.card-image:hover{
filter:  contrast(120%);
}
</style>
