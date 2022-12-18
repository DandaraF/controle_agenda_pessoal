<template>
  <div class="container-edit-user">
    <h2>Editar usuário</h2>
    <form>
      <input type="text" name="name" placeholder="Nome" />
      <input type="date" name="birth-date" placeholder="Data nascimento" />
      <input type="text" name="cpf" placeholder="CPF" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="phone" placeholder="Telefone" />
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Senha" />
      <input type="button" value="Salvar" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditUser',

}

</script>

<style scoped>
.container-edit-user{
	font-family: 'Open Sans Condensed', arial, sans;
	max-width: 500px;
	padding: 30px;
	background: #FFFFFF;
	margin: 20px auto;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);

}
.container-edit-user h2{
	background: #354152;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	color: #f5f1f1;
	font-size: 16px;
	font-weight: 100;
	padding: 20px;
	margin: -30px -30px 30px -30px;
}
.container-edit-user input[type="text"],
.container-edit-user input[type="date"],
.container-edit-user input[type="email"],
.container-edit-user input[type="password"],
.container-edit-user textarea,
.container-edit-user select 
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
.container-edit-user input[type="button"], 
.container-edit-user input[type="submit"]{
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
.container-edit-user input[type="button"]:hover, 
.container-edit-user input[type="submit"]:hover {
	background:linear-gradient(to bottom, rgba(160, 160, 0, 0.452) 5%, rgba(160, 160, 0, 0.548) 100%);
	background-color:rgba(160, 160, 0, 0.329);
}
</style>