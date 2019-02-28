<template>
  <div class="part" :class="position" >
    <router-link :to="{
        name: 'Parts',
        params: {
          id: this.selectedPart.id,
          partType: this.selectedPart.type,
        }}">
      <img :src="selectedPart.src" title="side"/>
    </router-link>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span
      @click="pinPadding='30px'"
      v-pin="{ bottom: pinPadding, right: pinPadding}"
      class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  props: {
    parts: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
      validator(value) {
        return ['left', 'right', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right', 'center'].includes(value);
      },
    },
  },
  data() {
    return {
      selectedPartIndex: 0,
      pinPadding: '10px',
    };
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created() {
    this.emitSelectedPart();
  },
  updated() {
    this.emitSelectedPart();
  },
  methods: {
    emitSelectedPart() {
      this.$emit('partSelected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },

  },
};

</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 2px solid #aaa;
}
.sale {
  color: white;
  background-color: red;
  padding: 3px;
}
.part-title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 5px;
  top: -25px;
}
.part img {
  width:165px;
  cursor: pointer;
}
.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.bottom {
  border-top: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -2px;
  width: 0.1px;
  height: 171px;
  color: blue;
  opacity: 0.5;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -2px;
  width: 0.1px;
  height: 171px;
  color: blue;
  opacity: 0.5;
}
.left .prev-selector:after,  .right .prev-selector:after,  .top-right .prev-selector:after, .bottom-right .prev-selector:after, .top-left .prev-selector:after, .bottom-left .prev-selector:after{
  content: '\25C4'
}
.left .next-selector:after, .right .next-selector:after, .top-left .next-selector:after, .bottom-left .next-selector:after, .top-right .next-selector:after, .bottom-right .next-selector:after {
  content: '\25BA'
}
.top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
  content: '\25C4'
}
.top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
  content: '\25BA'
}
.center .prev-selector, .center .next-selector {
  opacity:0.3;
}
.highlight {
  border: 1px solid red;
}
</style>
