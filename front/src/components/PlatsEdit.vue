<script setup>
import { api } from 'src/boot/axios'
import { ref, reactive, watch } from 'vue'
const plats = ref([])
const alert = ref(false)
const edit = ref(false)
const idCible = ref()
const platEdite = reactive({ nom: '', image: '', recette: '', healthy: false })

watch(plats, fetchData(), { immediate: true })

function fetchData () {
  api.get('/plats?page=1')
    .then(function (response) {
      plats.value = response.data['hydra:member']
    })
}

function handleDelete (e, id) {
  alert.value = true
  idCible.value = id
}

function handleEdit (e, id) {
  edit.value = true
  const tempPlat = plats.value.filter(plat => plat.id === id)
  console.log(tempPlat[0].nom)
  platEdite.nom = tempPlat[0].nom
  platEdite.recette = tempPlat[0].recette
  platEdite.image = tempPlat[0].image
  platEdite.healthy = tempPlat[0].healthy
  idCible.value = id
}

function deletePlats () {
  api.delete(`/plats/${idCible.value}`)
    .then(idCible.value = '')
    .catch(err => { console.log(err) })
}

function editPlat () {
  console.log(idCible.value)
  api.put(`/plats/${idCible.value}`, platEdite)
    .then(fetchData())
}

</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <h2> Edit </h2>
      <q-markup-table bordered wrap-cells="true" separator="cell">
      <thead>
        <tr>
          <th class="text-left">ID </th>
          <th class="text-left">NOM </th>
          <th class="text-left">IMAGE </th>
          <th class="text-left">RECETTE </th>
          <th class="text-left">HEALTHY </th>
          <th class="text-left">EDIT </th>
          <th class="text-left">DELETE </th>

        </tr>
      </thead>
      <tbody  v-for="({id,nom, recette, image, healthy }) in plats" :key="id">
        <tr>
          <td class="text-left">{{id}}</td>
          <td class="text-left">{{nom}}</td>
          <td class="text-left">{{image ? "Yes": "No" }}</td>
          <td class="text-left">{{ recette ? "Yes":"No" }}</td>
          <td class="text-left">{{ healthy ? "Yes":"No" }}</td>
          <td ><q-btn  mini-fab flat color="primary" icon="edit" size="sm" @click="handleEdit($event,id)" /></td>
          <td ><q-btn mini-fab flat color="red-4" icon="delete" size="sm"  @click="handleDelete($event, id)" /></td>
        </tr>
      </tbody>
    </q-markup-table>
    </div>
  </q-page>

  <template>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Confirmation</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Etes-vous sur de vouloir supprimer ce plat ?
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="deletePlats()" v-close-popup />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>

  <template>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">Edit </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
         <q-input v-model="platEdite.nom" label="Nom"/>
         <q-input v-model="platEdite.recette" label="Recette"/>
         <q-input v-model="platEdite.image" label="Image"/>
          <q-checkbox v-model="platEdite.healthy" label="healthy?" />

        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="editPlat()" v-close-popup />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>

</template>

<style>

</style>
