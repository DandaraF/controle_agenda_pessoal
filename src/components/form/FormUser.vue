<template>
    <div class="container-form-user">
      <h2>{{ text_form }}</h2>
      <form>
        <input type="text" placeholder="Nome" v-model="user.nome"/>
        <input type="date" placeholder="Data nascimento" v-model="user.dataNascimento"/>
        <input type="text" placeholder="CPF" v-model="user.cpf"/>
        <input type="email" placeholder="Email" v-model="user.email" />
        <input type="text" placeholder="Telefone" v-model="user.phone"/>
        <input type="text" placeholder="Username" v-model="user.username" />
        <input type="password" placeholder="Senha" v-model="user.password"/>
        <input type="button" :value="text_btn" />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormUser',
    props:{
      "text_form": String
     
    },
    data(){
      return{
        user:{
          nome:'',
          dataNascimento: '',
          cpf: '',
          email: '',
          telefone:'',
          username:'',
          password:''
        }
        

      }
    },
    methods:{ 
      getUser(id){
        const response = axios.get("usuario/buscar/" + id)
        .then((response) =>{
          return response
        })
        .catch((error) =>{
          console.log('ERRO ',error)
        })
      },
      postUser(e){
      e.preventDefault()
      const data ={"tipos":["ROLE_USER"],
                   "usuario":{
                    "cpf": this.user.cpf,
                    "dataNascimento": this.user.dataNascimento,
                    "email": this.user.email,
                    "nome": this.user.nome,
                    "password": this.user.password,
                    "telefone":this.user.telefone,
                    "username": this.user.username
                     }}

      const response = axios.post("/usuario/salvar", data)
      .then((response)=>{
        console.log(response)
        alert("Requisição efetuada com sucesso!")
        this.$router.push({name: "people"})
      })
      .catch((error)=>{
        alert("Erro ao tentar fazer a requisição", error)
      })

    }

    }
  }
  
  </script>
  
  <style scoped>
  .container-form-user{
      font-family: 'Open Sans Condensed', arial, sans;
      max-width: 500px;
      padding: 30px;
      background: #FFFFFF;
      margin: 20px auto;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
      -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
      -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);
  
  }
  .container-form-user h2{
      background: #354152;
      text-transform: uppercase;
      font-family: 'Open Sans Condensed', sans-serif;
      color: #f5f1f1;
      font-size: 16px;
      font-weight: 100;
      padding: 20px;
      margin: -30px -30px 30px -30px;
  }
  .container-form-user input[type="text"],
  .container-form-user input[type="date"],
  .container-form-user input[type="email"],
  .container-form-user input[type="password"],
  .container-form-user textarea,
  .container-form-user select 
  {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      outline: none;
      display: block;
      width: 100%;
      padding: 7px;
      border: none;
      border-bottom: 1px solid #ddd;
      background: transparent;
      margin-bottom: 10px;
      font: 16px Arial, Helvetica, sans-serif;
      height: 45px;
  }
  .container-form-user input[type="button"], 
  .container-form-user input[type="submit"]{
      -moz-box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
      -webkit-box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
      box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
      background-color: rgb(160, 160, 0);
      border: 1px solid rgb(160, 160, 0);
      display: inline-block;
      cursor: pointer;
      color: #FFFFFF;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 14px;
      padding: 8px 18px;
      text-decoration: none;
      text-transform: uppercase;
  }
  .container-form-user input[type="button"]:hover, 
  .container-form-user input[type="submit"]:hover {
      background:linear-gradient(to bottom, rgba(160, 160, 0, 0.452) 5%, rgba(160, 160, 0, 0.548) 100%);
      background-color:rgba(160, 160, 0, 0.329);
  }
  </style>