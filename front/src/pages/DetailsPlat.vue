<script setup>
import FetchingDetail from 'src/components/FetchingDetail.vue'
</script>

<template>
  <q-page class="q-pa-sm row justify-center"  >
    <q-btn class="back-btn" round unelevated size="xl" icon="arrow_back_ios_new"  @click="()=>{$router.go(-1)}"></q-btn>
    <div class="q-ma-lg">
      <Suspense>
        <template #default>
          <FetchingDetail />
        </template>
        <template #fallback>
          <q-inner-loading :showing="visible">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>
        </template>
    </Suspense>
    </div>
</q-page>
</template>

<style scoped>

.back-btn{
background-color: transparent;
box-shadow: none;
height: 3rem;
align-self: center;
}

</style>
