<template>
  <div>
    <h2>Tops</h2>
    The top is where the brain of your pattern will reside. Tops have
    different capabilities so be sure to choose the one that fits your needs.
    <div v-for="(top, idx) in parts.tops" :key="idx">
      <h4>{{top.title}}</h4>
      <div>{{top.src}}</div>
      <div>{{top.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PatternTops',
  mixins: [getPartsMixin],
};
</script>
