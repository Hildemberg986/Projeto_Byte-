<template>
    <div class="container-soon">
      <div class="F2"></div>
      <div class="F1"></div>
      <div class="F3"></div>
    </div>
  
</template>
<script>
  export default {
    name: 'SplashLoad'
  }
</script>
<style scoped>
  .container-soon{
    position: absolute;
    height: 263px;
    width: 196px;
    top: calc(50% - 131.5px);
    left: calc(50% - 98px);
  }
  .F1{
    position: absolute;
    width: 93.39px;
    height: 263px;
    background:#F43EA7;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .F2{
    position: absolute;
    width: 80px;
    height: 196px;
    background:#FD59B7;
    transform: rotate(-90deg);
    top: -58px;
    left: 58px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
  }
  .F3{
    position: absolute;
    width: 83px;
    height: 156px;
    background:#FD59B7;
    transform: rotate(-90deg);
    top: 75px;
    left: 36.5px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
  }
</style>