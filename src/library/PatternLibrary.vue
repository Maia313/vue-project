<template>
  <div>
    <h1>Library</h1>
    <table>
      <thead>
        <tr>
          <th class="pattern-count">
            Nr.
          </th>
          <th class="pattern-title">
            Pattern
          </th>
          <th class="color">
            Color
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pattern, index) in library" :key="index">
          <td class="pattern-count">
            {{index+1}}
          </td>
          <td class="pattern-title">
            <div class="preview-content">
              <div class="top-row">
                <img class="preview-pattern" :src="pattern.topLeftSide.src" />
                <img class="preview-pattern" :src="pattern.top.src" />
                <img class="preview-pattern" :src="pattern.topRightSide.src" />
              </div>
              <div class="middle-row">
                <img class="preview-pattern" :src="pattern.leftSide.src" />
                <img class="preview-pattern" :src="pattern.center.src" />
                <img class="preview-pattern" :src="pattern.rightSide.src" />
              </div>
               <div class="bottom-row">
                <img class="preview-pattern" :src="pattern.baseLeftSide.src" />
                <img class="preview-pattern" :src="pattern.base.src" />
                <img class="preview-pattern" :src="pattern.baseRightSide.src" />
              </div>
            </div>
          </td>
          <td class="color">
            {{pattern.color}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Library',
  computed: {
    library() {
      return this.$store.state.patterns.library;
    }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  th{
    background: #ccc;

  }
  .preview-content{
    border: 1px solid blue;
    padding: 1px 1px 0px;
  }
  .preview-pattern{
    width: 30px;
  }
  .pattern-title {
    text-align: left;
    padding-right: 200px;
  }
  .pattern-count{
    text-align: center;
    border: 1px solid yellow;
    background: yellow;
  }
  .delete,
  .color {
    text-align: center;
    padding: 50px auto;
  }
  .delete{
    cursor: pointer;
    color: red;
    border: 1px solid red;
  }
</style>
