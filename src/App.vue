<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>



<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components:{
    Navbar
  }

}
</script>
<style>

* {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .main-container{
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>