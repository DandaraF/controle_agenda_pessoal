<template>
  <div class="container-contacts">

    <div class="content-contacts-header">
      <h2>Contatos</h2>
      <div class="container-seacher">
        <Input/>
        <img src="../../public/img/search.png" :alt="Pesquisar" id="search"/>
      </div>
      <router-link  to="/contatos/cadastrar" id="add-contact"> + Add contato</router-link>

    </div>
    
  <div class="table">

    <div class="table_section">
      <table>
        <thead>
          <tr>
            <th>Nome contato</th>
            <th>CPF</th>
            <th>Foto</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>telefone</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stella Kamilly Freita</td>
            <td>432.090.107-00</td>
            <td><img class="photo-user" src="../../public/img/avatar.png" alt=""></td>
            <td class="address">Avenida Alameda das Travessas, nº 111, Edifício Bosque do Cerrado, apartamento 2222 - Bairro dos Barris. CEP: 40000-000</td>
            <td>sthela@gmail.com</td>
            <td>(81) 3953-9681</td>
            <td>
              <router-link  to="/contatos/editar" id="edit-contact" >
               <img class="icon-edit" src="../../public/img/edit.png" alt="Editar">
              </router-link>
            </td>
            <td><img class="icon-delete" src="../../public/img/delete.png" alt="Editar"></td>
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
  name: 'Contacts',
  components:{
    Button,
    Input
  }

}
</script>

<style scoped>


#add-contact{
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add-contact:hover{
  opacity: 0.8;
}

h2{
  color: rgb(105, 105, 10);
}

#search{
  width: 25px;
}

.content-contacts-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding:  20px;
  background-color: rgb(240,240,240);
}

.content-contacts-headerr p{
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

.icon-delete{
  width: 25px;
}

.icon-delete:hover{
  opacity: 0.7;
}


@media (max-width:600px) {
  .container-seacher{
    margin: 10px 0 20px;
  }
  .content-contacts-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
tbody{
  font-size: 14px;
}

}


</style>