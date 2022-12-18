<template>
  <div class="container-people">

    <div class="content-people-header">
      <h2>Pessoas</h2>
      <div class="container-seacher">
        <Input/>
        <img src="../../public/img/search.png" :alt="Pesquisar" id="search"/>
      </div>
      <router-link  to="/pessoas/cadastrar" id="add-person"> + Add pessoa</router-link>

    </div>
    
  <div class="table">

    <div class="table_section">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Foto</th>
            <th>Endereço</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana Ana</td>
            <td>432.090.107-00</td>
            <td><img class="photo-user" src="../../public/img/avatar.png" alt=""></td>
            <td class="address">Avenida Alameda das Travessas, nº 111, Edifício Bosque do Cerrado, apartamento 2222 - Bairro dos Barris. CEP: 40000-000</td>
            <td>
              <router-link  to="/pessoas/editar" id="edit-person" >
               <img class="icon-edit" src="../../public/img/edit.png" alt="Editar">
              </router-link>
            </td>
            <td><Button text_button="Excluir"/></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>

  </div>
 </template>

<script>
import Button from '../components/Button'
import Input from '../components/Input'

export default {
  name: 'People',
  components:{
    Button,
    Input
  }

}
</script>

<style scoped>
#add-person{
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add-person:hover{
  opacity: 0.8;
}

h2{
  color: rgb(160, 160, 0);
}

#search{
  width: 25px;
}

.content-people-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding:  20px;
  background-color: rgb(240,240,240);
}

.content-people-headerr p{
  color: #000;
}

.container-seacher{
  display: flex;
  gap: 6px;
  align-items: center;
}

.table{
  width: 100%;
}

.table_section{
  height: 500px;
  overflow: auto;
}

table{
  width: 100%;
  /* table-layout: fixed; */
  min-width: 900px;
  border-collapse: collapse;
}

thead th{
  /* position: sticky; */
  /* top:0; */
  background-color: rgb(160, 160, 0);
  color: #fff;
  font-size: 15px;
}
th,td{
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
}


.address{
  max-width: 350px;
  min-width: 300px;
  height: 100%;
}

.photo-user{
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid rgb(160, 160, 0);
  padding: 2px;
}

tr:hover td{
  color: #8ca01bfb;
  cursor: context-menu;
  background-color: #8ca01b09;
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


@media (max-width:600px) {
  .container-seacher{
    margin: 10px 0 20px;
  }
  .content-people-header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}


</style>