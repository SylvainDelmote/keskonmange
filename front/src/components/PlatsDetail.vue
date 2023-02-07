<template>
  <q-page class="q-pa-md">
    <q-btn  round color="primary" icon="arrow_back"  @click="()=>{$router.go(-1)}"></q-btn>
  <h3>Page Detail </h3>
  <div>Item: {{ $route.params.id }}</div>
</q-page>

</template>
