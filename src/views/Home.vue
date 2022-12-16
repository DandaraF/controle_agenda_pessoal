<template>
  <div class="home">
    <div class="container-home">
      <div class="content-home">
        <Picture/>
    </div>

    </div>

  </div>
</template>


<script>
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'

export default{
  components:{
    Navbar,
    Picture
  }
}
</script>


<style scoped>

.home{
  width: 100%;
  height: 100%;
}
.container-home{
  display: flex;
  align-content: center;
  justify-content: center;
  padding:20px 0;
  width: 100%;
  height: 100%;
}

.content-home{
  background-color: #f1f1f1;
  width: 80%;
  height: 100% ;
  display: flex;
  align-content: center;
  padding: 10px;
  -webkit-box-shadow: 10px 10px 5px -7px rgba(182,184,134,0.4);
  -moz-box-shadow: 10px 10px 5px -7px rgba(182,184,134,0.4);
  box-shadow: 10px 10px 5px -7px rgba(182,184,134,0.4);
  
}


</style>
