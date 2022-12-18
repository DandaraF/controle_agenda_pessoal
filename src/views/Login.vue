<template>
  <div id="container-admin">

      <!-- input -->

      <form class='login-form' @submit="login">
        <div class="content-form">

          <h2>Login</h2>

          <!-- input -->
          <div class="content-input">
              <label > Usuário </label>
              <input type="text" class="input-text" v-model="username" required >
          </div>

          <div class="content-input">
              <label > Senha </label>
              <input type="password" class="input-text" v-model="password" required >
          </div>

          <!--  -->
          <!-- checkbox -->
          <div class="container-checkbox">
            <input type="checkbox" id="lembra" name="lembra" checked>
            <label for="scales">Lembra-me</label>
          </div>



          <!-- button -->
          <input id="btn-login" type="submit" value="Logar"/>

          <Message :msg="msg" v-show="msg"/>


        </div>
      </form>
      <!--  -->


  </div>
</template>

<script>

import Input from '../components/Input.vue'
import axios from 'axios'
import Message from '../components/Message'

export default {
  name: 'Login',
  components:{
    Input,
    Message
  },
  data(){
    return{
      username: '',
      password: '',
      msg: null
    }
  },
    methods:{
      login(e){
        e.preventDefault();
        const data = {"password": this.password, "username": this.username}
        
        const response = axios.post("/auth/login", data)
        .then((response) =>{
          let accessToken=response.data['accessToken']
          let user=response.data['tipos'][0]


          localStorage.setItem('token', accessToken)
          localStorage.setItem('user', user)

          this.$router.push('/home')

        })
        .catch((error)=>{
          this.msg = "Usuário ou senha inválido!"
          console.log(error);
          setTimeout(() => this.msg = "", 3000)

        })
      }

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
  padding-top: 10%;
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
  height: 310px;
  background-color: #a7b6ca1f;
  min-width: 300px;
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

.content-input{
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 400px;
  font-size: 1rem;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
  gap: 4px;
  margin-bottom:10px;
}


.input-text{
  height: 30px;
  border: none;
  background-color: rgba(241, 241, 241, 0.178);
  font-size: 1rem;
  padding-left:10px;
  color: #fff;
  border-left: 3px solid rgb(160, 160, 0);
}
@media (max-width:600px) {
  #container-admin{
    padding-top: 30%;
  }
}
</style>
