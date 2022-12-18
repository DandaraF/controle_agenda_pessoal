<template>
    <div class="container-form-user">
      <h2>{{ text_form }}</h2>
      <form>
        <input type="text" name="name" placeholder="Nome" :value="name"/>
        <input type="date" name="birth-date" placeholder="Data nascimento" :value="birth-date"/>
        <input type="text" name="cpf" placeholder="CPF" :value="cpf"/>
        <input type="email" name="email" placeholder="Email" :value="email" />
        <input type="text" name="phone" placeholder="Telefone" :value="phone"/>
        <input type="text" name="username" placeholder="Username" :value="username" />
        <input type="password" name="password" placeholder="Senha" :value="password"/>
        <input type="button" :value="text_btn" :id="id_btn"/>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormUser',
    props:{
      "text_form": String,
      "name": String,
      "birth-date": Date,
      "cpf": Number,
      "email": String,
      "phone": Number,
      "username": String,
      "password": String,
      "text_btn": String,
      "id_btn": String
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