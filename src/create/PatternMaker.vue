<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedPattern.topLeftSide.src"/>
            <img :src="selectedPattern.top.src"/>
            <img :src="selectedPattern.topRightSide.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedPattern.leftSide.src" class="rotate-left"/>
            <img :src="selectedPattern.center.src"/>
            <img :src="selectedPattern.rightSide.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedPattern.baseLeftSide.src" class="rotate-bottom"/>
            <img :src="selectedPattern.base.src" class="rotate-bottom"/>     
            <img :src="selectedPattern.baseRightSide.src" class="rotate-bottom"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-library" @click="addToLibrary()">Add to Library</button>
    </div>
    <div class="top-row">
        <PartSelector
          :parts="availableParts.tops"
          position="top-left"
          @partSelected="part => selectedPattern.topLeftSide=part"/>
        <PartSelector
          :parts="availableParts.tops"
          position="top"
          @partSelected="part => selectedPattern.top=part"/>
        <PartSelector
          :parts="availableParts.tops"
          position="top-right"
          @partSelected="part => selectedPattern.topRightSide=part"/>
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.sides"
        position="left"
        @partSelected="part => selectedPattern.leftSide=part"/>
      <PartSelector
        :parts="availableParts.centers"
        position="center"
        @partSelected="part => selectedPattern.center=part"/>
      <PartSelector
        :parts="availableParts.sides"
        position="right"
        @partSelected="part => selectedPattern.rightSide=part"/>
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom-left"
        @partSelected="part => selectedPattern.baseLeftSide=part"/>
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedPattern.base=part"/>
      <PartSelector
        :parts="availableParts.bases"
        position="bottom-right"
        @partSelected="part => selectedPattern.baseRightSide=part"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import createdHookMixin from './created-hook-mixin';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'PatternMaker',
  created() {
    this.getParts();
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToLibrary) {
      next(true);
    } else {
      const response = confirm('You have not added your pattern to your library, are you sure you want to leave?');
      next(response);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      addedToLibrary: false,
      library: [],
      selectedPattern: {
        top: {},
        topLeftSide: {},
        topRightSide: {},
        leftSide: {},
        center: {},
        rightSide: {},
        baseRightSide: {},
        baseLeftSide: {},
        base: {},
      },
    };
  },
  mixins: [createdHookMixin],
  computed: {
    availableParts() {
      return this.$store.state.patterns.parts;
    }
  },
  methods: {
    ...mapActions('patterns', ['getParts', 'addPatternToLibrary']),
    addToLibrary() {
      const pattern = this.selectedPattern;
      const color = pattern.top.color;
      this.addPatternToLibrary(Object.assign({}, pattern, { color }))
        .then(() => this.$router.push('/library'));
      this.addedToLibrary = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 2px solid #aaa;
}
.part {
  img {
    width:165px;
  }
}
.color-input{
  width:150px;
}
.top-row {
  display:flex;
  justify-content: center;
}
.middle-row {
  display:flex;
  justify-content: center;
  
}
.bottom-row {
  display:flex;
  justify-content: center;
  border-top: none;
}
.top {
  border-bottom: none;
}
.top-left {
  border-bottom: none;
  border-right: none;

}
.top-right {
  border-bottom: none;
  border-left: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
  // transform: rotate(180deg);
}
.bottom-left{
  border-top: none;
  border-right: none;
}
.bottom-right {
  border-top: none;
  border-left: none;
}
.pattern-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-library {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
  background-color: pink;
}

.preview {
  position: absolute;
  top: -4px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 2px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.rotate-bottom {
  transform: rotate(180deg);
}
</style>
