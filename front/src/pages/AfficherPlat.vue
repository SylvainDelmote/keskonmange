<template>
  <q-page class="flex flex-center">
    <PlatAfficher :plats = plats />
  </q-page>
</template>

<script setup>

import PlatAfficher from '../components/PlatsAfficher.vue'
import { api } from 'src/boot/axios'
import { ref, onMounted } from 'vue'

const plats = ref([])

onMounted(() =>
  api.get('/plats?page=1')
    .then(function (response) {
      plats.value = response.data['hydra:member']
    })
)
</script>
