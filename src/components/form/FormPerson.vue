<template>
    <div class="container-form-people">
      <h2>{{ text_form }}</h2>
      <form>
        <div class="container-image-person">
          <Picture/>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" required/>
          <label for="avatar" class="select-photo">Selecionar foto</label>
        </div>

        <input type="text" name="nome" placeholder="Nome" :value="name" required/>
        <input type="text" name="cpf" placeholder="CPF" :value="cpf" required/>
        <div class="address">
          <h3>Endereço</h3>

          <input type="text" name="logradouro"   placeholder="Logradouro" :value="phone"  required/>
          <input type="text" name="number-house" placeholder="Número" :value="phone" required />
          <input type="text" name="cep" placeholder="CEP" :value="phone" required />
          <input type="text" name="bairro" placeholder="Bairro" :value="phone" required/>
          <input type="text" name="city" placeholder="Cidade" :value="phone" required/>
          <input type="text" name="city" placeholder="Estado: SP" :value="phone" maxlength="2" class="acronym" required/>
          <input type="text" name="country" placeholder="País: BR" :value="phone" maxlength="2" class="acronym" required/>
        </div>

        <input type="button" :value="text_btn" :id="id_btn" />
      </form>
    </div>
  </template>
  
<script>
import Picture  from "../Picture.vue"

export default {
  name: 'FormUser',
  components:{
    Picture
  },
  props:{
    "text_form": String,
    "name": String,
    "cpf": Number,




    "phone": Number,
    "username": String,
    "password": String,
    "text_btn": String,
    "id_btn": String
  }
}

</script>
  
<style scoped>
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