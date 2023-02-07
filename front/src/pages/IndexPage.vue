<template>
  <q-page class="flex flex-center">
    <PlatAfficher :plats = plats />
    <PlatEdit />
  </q-page>
</template>

<script setup>

import PlatEdit from '../components/PlatsEdit.vue'
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
