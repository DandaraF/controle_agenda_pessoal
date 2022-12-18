<template>
  <div class="container-users">
    <Navbar/>
  <div class="table">

    <div class="table_header">
      <h2>Usuários</h2>
      <router-link  to="/usuarios/cadastrar" id="add-user" > + Add usuário</router-link>
    </div>

    <div class="table_section">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th class="birthday">Data nascimento</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana Ana</td>
            <td>23/07/1993</td>
            <td>432.090.107-00</td>
            <td>ana@gmail.com</td>
            <td>(16)99281-9898</td>
           
            <td>
              <router-link  to="/usuarios/editar" id="edit_user" >
               <img class="icon-edit" src="../../public/img/edit.png" alt="Editar">
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </div>
 </template>

<script>
import Button from '../components/Button'
import Navbar from '../components/Navbar'

export default {
  name: 'Users',
  components:{
    Button,
    Navbar
  },
  props:{
    user: String
  }

}
</script>

<style scoped>

h2{
  color: rgb(160, 160, 0);
}

#add-user{
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add_user:hover{
  opacity: 0.8;
}

.table{
  width: 100%;
}

.table_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding:  20px;
  background-color: rgb(240,240,240);
}

.table_header p{
  color: #000;
}

.table_section{
  height: 500px;
  overflow: auto;
}

table{
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
}

thead th{
  background-color: rgb(160, 160, 0);
  color: #fff;
  font-size: 15px;
}
th,td{
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
  min-width: 100px;
}


.birthday{
  min-width: 170px;

}
tr:hover td{
  color: #8ca01bfb;
  background-color: #8ca01b09;
  cursor: context-menu;
}
::placeholder{
  color:#8ca01bd2;
}

::-webkit-scrollbar{
  height: 5px;
  width: 5px;
}
.icon-edit{
  width: 25px;
}

.icon-edit:hover{
  opacity: 0.7;
}




</style>