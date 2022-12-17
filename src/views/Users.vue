<template>
  <div class="container-users">
  <div class="table">
    <div class="table_header">
      <h2>Usuários</h2>
        
      <Button text_button="+ Add Usuário"/>
      <!-- <div>
        <button class="add_new"> + Add New</button>
      </div> -->
    </div>

    <div class="table_section">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data nascimento</th>
            <th>Foto</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana Ana</td>
            <td>23/07/1993</td>
            <td><img src="../../public/img/avatar.png" alt=""></td>
            <td>432.090.107-00</td>
            <td>ana@gmail.com</td>
            <td>(16)99281-9898</td>
            <td><Button text_button="Editar"/></td>
            <td><Button text_button="Excluir"/></td>
          </tr>

          <tr>
            <td>Ana Ana</td>
            <td>23/07/1993</td>
            <td><img src="../../public/img/avatar.png" alt=""></td>
            <td>432.090.107-00</td>
            <td>ana@gmail.com</td>
            <td>(16)99281-9898</td>
            <td><Button text_button="Editar"/></td>
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
export default {
  name: 'Users',
  components:{
    Button
  }

}
</script>

<style scoped>


h2{
  color: rgb(160, 160, 0);
 
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
  /* table-layout: fixed; */
  min-width: 900px;
  border-collapse: collapse;
}

thead th{
  /* position: sticky; */
  /* top:0; */
  background-color: #f6f9fc;
  color: #8493a5;
  font-size: 15px;
}
th,td{
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
}

td img{
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 15px;
  border: 5px solid #ced0d2;
}

tr:hover td{
  color: #0298cf;
  cursor: pointer;
  background-color: #f6f9fc;
}
::placeholder{
  color:#0298cf;
}

::-webkit-scrollbar{
  height: 5px;
  width: 5px;
}


</style>