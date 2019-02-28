<template>
  <div class="home">
    <!-- <div class="loader"> -->
      <div class="square" ></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square "></div>
      <div class="square last"></div>
    <!-- </div> -->
    <div class="get-started">
      <router-link to="/create">Get started</router-link> creating your first pattern!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log(process.env.VUE_APP_TEST, process.env.SOME_TEST);
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  text-align: center;
}
.pattern{
  height: 300px;
}
.get-started{
  padding-top: 210px;
  font-size: 25px;
}
@-webkit-keyframes enter{
  0%{ 
    opacity: 0;
    top: -10px;
  }
  5%{ 
    opacity: 1;
    top: 0px;
  }
  50.9%{ 
    opacity: 1;
    top: 0px;
  }
  55.9%{ 
    opacity: 0;
    top: 10px;
  }
}
@keyframes enter{
  0%{ 
    opacity: 0;
    top: -10px;
  }
  5%{ 
    opacity: 1;
    top: 0px;
  }
  50.9%{ 
    opacity: 1;
    top: 0px;
  }
  55.9%{ 
    opacity: 0;
    top: 10px;
  }
}
@-moz-keyframes enter{
  0%{ 
    opacity: 0;
    top: -10px;
  }
  5%{ 
    opacity: 1;
    top: 0px;
  }
  50.9%{ 
    opacity: 1;
    top: 0px;
  }
  55.9%{ 
    opacity: 0;
    top: 10px;
  }
}

.square{
  background: white;
  width: 50px;
  height: 50px;
  border: 50px solid pink;
  float: left;
  top: -10px;
  margin-right: 5px;
  margin-top: 5px;
  position:relative;
  opacity: 0;
  -webkit-animation: enter 6s infinite;
  animation: enter 6s infinite;
}
.enter{
  top: 0px;
  opacity: 1;
}
.square:nth-child(1){
  animation-delay:1.8s;
  background: #6bb9f0;
}
.square:nth-child(2){
  animation-delay:2.4s;
  background: #59abe3;
}
.square:nth-child(3){
   animation-delay:2.1s;
  background: #19b5fe;
}
.square:nth-child(4){
   animation-delay:1.5s;
  background: #5c97bf;
}
.square:nth-child(5){
  animation-delay:2.7s;
  background: #1e8bc3;
}
.square:nth-child(6){
  animation-delay:1.2s;
  background: #2574a9;
}
.square:nth-child(7){
  animation-delay:0.3s;
  background: #3a539b;
}
.square:nth-child(8){
  background: #1f3a93;
}
.square:nth-child(9){
   animation-delay:0.6s;
  background: #4d05e8;
}
.clear{
  clear: both;
 }
.last{
   margin-right:0;
}

</style>
