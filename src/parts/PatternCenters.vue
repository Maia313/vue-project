<template>
  <div>
    <h2>Centers</h2>
    The center is the central part of your pattern that holds everything
    together. Choosing the right center will help ensure your pattern
    functions well with the parts you choose.
    <div v-for="(center, idx) in parts.centers" :key="idx">
      <h4>{{center.title}}</h4>
      <div>{{center.src}}</div>
      <div>{{center.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PatternCenters',
  mixins: [getPartsMixin],
};
</script>
