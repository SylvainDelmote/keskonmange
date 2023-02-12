<template>
  <q-card class="shadow-13" q-pa-lg>
  <div class="q-pa-lg" style="width: 600px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="payload.nom"
        label="Nom"
        hint="Nom du Plat"
        lazy-rules = 'ondemand'
        :rules="[ val => val && val.length > 0 || 'Ajouter le nom du plat']"
      />

      <q-input
        filled
        v-model.trim="payload.image"
        label="Image"
        hint="Lien vers une image du Plat"

      />
      <q-input
        filled
        v-model.trim="payload.recette"
        label="recette"
      />
      <q-input
        filled
        v-model.trim="payload.ingredients[0]"
        label="ingredients"
      />

      <q-checkbox v-model="payload.healthy" left-label label="Healthy ? " />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { reactive } from 'vue'
import { api } from 'src/boot/axios'

const $q = useQuasar()

const payload = reactive({
  nom: '',
  image: '',
  recette: '',
  ingredients: [],
  healthy: false
})
const succes = {
  color: 'green-4',
  textColor: 'white',
  icon: 'local_dining',
  message: 'Encore un bon petit plat ajouté à notre liste!'
}
const erreur = (status) => ({
  color: 'red-4',
  textColor: 'white',
  icon: 'error',
  message: `Quelque chose ne passe pas dans cette recette ... Erreur ${status}`
})

function onSubmit () {
  api.post('/plats', payload)
    .then((res) => (
      res.status === 201
        ? $q.notify(succes) : $q.notify(erreur(res.status))
    )
    )
    .catch((err) =>
      $q.notify(erreur(err.response.status))
    )

  onReset()
}

function onReset () {
  payload.nom = null
  payload.image = null
  payload.recette = null
  payload.ingredients = null
}

</script>
