<template>
  <div id="container-admin">

      <!-- input -->

      <form class='login-form'>
        <div class="content-form">
          <h2>Login</h2>
          <!-- input -->
         <Input text_label="Usuário"/>
         <Input text_label="Senha"/>
          <!--  -->
          <!-- checkbox -->
          <div class="container-checkbox">
            <input type="checkbox" id="lembra" name="lembra" checked>
            <label for="scales">Lembra-me</label>
          </div>




          <!-- button -->
          <button id="btn-login">Logar</button>


        </div>
      </form>
      <!--  -->


  </div>
</template>

<script>

import Input from '../components/Input.vue'

export default {
  name: 'Login',
  components:{
    Input
  },


}
</script>

<style scoped>

#container-admin{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-content: center;
  background-color: #354152;
  padding: 10%;
}
.container-form{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8rem;
  max-width: 450px;
  min-width: 320px;
  height: 100%;
  background-color: #bebebe3a;
  border-top: 4px solid rgb(216, 12, 12) ;
  opacity: 0.5;
  
}
h2{
  color:  rgb(194, 194, 15);
  text-align: center;
  padding-bottom: 20px;
  text-transform: uppercase;
}

/* form */
.login-form{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 300px;
  background-color: #a7b6ca1f;
  min-width: 320px;
  max-width: 450px;
  padding: 20px;
}

/* btn */

#btn-login{
  width: 100%;
  height: 30px;
  background-color: rgb(160, 160, 0);
  font-size: 1.2rem;
  color:#fff;
  border: none;
  cursor: pointer;
}
#btn-login:hover{
  background-color: rgba(126, 126, 37, 0.616);
}

/* checkbox: */
.container-checkbox{
  display: flex;
  align-content: center;
  gap:5px;
  color: #FFF;
  font-size: 0.9rem;
  padding: 10px 0;
}


</style>
