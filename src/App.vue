<template>
    <router-view></router-view>
</template>
<script>
import router from './router';

export default {
data(){

},
methods:{
  load(){
    setTimeout(() =>{
      router.push('forum')
    }, 2000);
  }
},
mounted() {
this.load()


},
}
</script>
<style>
body{
  min-width: 550px;
}
html, body{
  margin: 0;
  height: 100%;
  background: #13111B;
}
#app{
  min-height: 100%;
}


</style>