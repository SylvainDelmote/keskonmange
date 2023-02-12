<script setup>
import BasicCard from '../components/BasicCard.vue'
const props = defineProps(
  { plats: Array }
)
console.log(props.plats)
</script>

<template>
<q-page class='q-pa-lg'>
  <h2> Plats </h2>
  <div class="flex wrap q-gutter-lg justify-center">
    <div v-for="({id,nom,image,healthy, ...more}) in props.plats" :key='id' >
      <RouterLink :to="`/plats/${id}`">
        <BasicCard  v-bind="{ id, nom, image,more,healthy }"/>
      </RouterLink>
      </div>
    </div>

</q-page>
</template>

<style scoped>

</style>
