<template>
    <div class="container-form-people">
      <p >{{mensage_info}}</p>
      <h2>{{ text_form }}</h2>
      <form @submit="postPerson($event)">
        <div class="container-image-person" :key="person.id">
          <Picture/>
        </div>

        <input type="text" name="nome" placeholder="Nome" v-model="person.nome" required/>
        <input type="text" name="cpf" placeholder="CPF" v-model="person.cpf" required/>
        <div class="address">
          <h3>Endereço</h3>

          <input type="text" name="logradouro"   placeholder="Logradouro" v-model="person.endereco.logradouro"  required/>
          <input type="text" name="number-house" placeholder="Número" v-model="person.endereco.numero" required />
          <input type="text" name="cep" placeholder="CEP" v-model="person.endereco.cep" required />
          <input type="text" name="bairro" placeholder="Bairro" v-model="person.endereco.bairro" required/>
          <input type="text" name="city" placeholder="Cidade" v-model="person.endereco.cidade" required/>
          <input type="text" name="city" placeholder="Estado: SP" v-model="person.endereco.estado" maxlength="2" class="acronym" required/>
          <input type="text" name="country" placeholder="País: BR" v-model="person.endereco.pais" maxlength="2" class="acronym" required/>
        </div>

        <input type="submit" :value="text_btn"  />
      </form>
    </div>
  </template>
  
<script>
import Picture  from "../Picture.vue"
import axios from 'axios'

export default {
  name: 'FormUser',
  components:{
    Picture
  },
  props:{
    "mensage_info": String,
    "text_form": String,
    "text_btn": String
  },
  data(){
    return{
      mensage_info:"",
      person: {
        nome:'',
        cpf:'',
        endereco:{
          logradouro:'',
          numero:0,
          cep:'',
          bairro:'',
          cidade:'',
          estado:'',
          pais:''
        }
      }

    }
  },
  methods:{
    getPerson(id){
      const response = axios.get("/pessoa/buscar/" + id)
      .then((response)=>{
        this.person=response.data.object
      })
    },
    postPerson(e){
      e.preventDefault()
      const data ={"cpf": this.person.cpf , 
                  "nome": this.person.nome,
                  "endereco":{
                    "logradouro": this.person.endereco.logradouro,
                    "numero": this.person.endereco.numero,
                    "cep": this.person.endereco.cep,
                    "bairro": this.person.endereco.bairro,
                    "cidade": this.person.endereco.cidade,
                    "estado":this.person.endereco.estado,
                    "pais": this.person.endereco.pais
                  }}

      const response = axios.post("/pessoa/salvar", data)
      .then((response)=>{
        alert("Requisição efetuada com sucesso!")
        this.$router.push({name: "people"})
      })
      .catch((error)=>{
        alert("Solicitação não efetuada ", error)
      })

    }
  },

  mounted(){
    this.getPerson(this.$route.query.id)
  }
}

</script>
  
<style scoped>

.mensage_info{
  display: none;
}
.acronym{
  text-transform: uppercase;
}

h3{
  margin: 10px 0;
  font-size: 22px;
}
.address{
  padding:10px;
}

.container-form-people{
    font-family: 'Open Sans Condensed', arial, sans;
    max-width: 500px;
    padding: 30px;
    background: #FFFFFF;
    margin: 20px auto;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);

}
.container-form-people h2{
    background: #354152;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #f5f1f1;
    font-size: 16px;
    font-weight: 100;
    padding: 20px;
    margin: -30px -30px 30px -30px;
}
.container-form-people input[type="text"],
.container-form-people input[type="date"],
.container-form-people input[type="number"],
.container-form-people input[type="email"],
.container-form-people input[type="password"],
.container-form-people textarea,
.container-form-people select 
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
.container-form-people input[type="button"], 
.container-form-people input[type="submit"]{
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
.container-form-people input[type="button"]:hover, 
.container-form-people input[type="submit"]:hover {
    background:linear-gradient(to bottom, rgba(160, 160, 0, 0.452) 5%, rgba(160, 160, 0, 0.548) 100%);
    background-color:rgba(160, 160, 0, 0.329);
}

.container-image-person{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap:10px;
}

.select-photo{
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  color: #ff1100;
}

input[type="file"] {
    display: none;
}



  </style>