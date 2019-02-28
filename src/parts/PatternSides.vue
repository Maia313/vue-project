<template>
  <div>
    <h2>Sides</h2>
    The sides are how your pattern will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(side, idx) in parts.sides" :key="idx">
      <h4>{{side.title}}</h4>
      <div>{{side.src}}</div>
      <div>{{side.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PatternSides',
  mixins: [getPartsMixin],
};
</script>
