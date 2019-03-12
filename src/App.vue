<template>
  <div id="app">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/ringo-styleguide@1.0.6/dist/css/min/main.css">
    <ASpot 
      :blok="{
        title: 'Knowledgebase', 
        caption: 'This is an important message This is an important message This is an'
      }"
      :mods="['simple-color']" />
      
  </div>
</template>

<script>
import Ringo from 'ringo-styleguide'

export default {
  name: 'app',
  components: {
    ...Ringo
  },
}
</script>
