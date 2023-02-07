<template>
  <q-page class="q-pa-xl">
    <div class="flex justify-center q-gutter-y-md" style="max-width: 1000px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab v-for="({label,icon}) in tabContent"  :icon="icon" :name="label" :label="label" :key="label" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-for="({label,childComponent}) in tabContent"  v-model="tab" animated :key="label">
          <q-tab-panel :name="label">
            <component :is=childComponent />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import AfficherPlat from 'src/pages/AfficherPlat.vue'
import AjouterPlat from 'src/pages/AjouterPlat.vue'
import EditerPlat from 'src/pages/EditerPlat.vue'

const tabContent = [
  { label: 'Liste', icon: 'list', childComponent: AfficherPlat },
  { label: 'Edit', icon: 'edit', childComponent: EditerPlat },
  { label: 'Add', icon: 'add', childComponent: AjouterPlat }
]

const tab = ref(tabContent[0].label)

</script>
