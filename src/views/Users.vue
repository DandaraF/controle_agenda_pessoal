<template>
  <div class="table">
    <div class="table_header">
      <p>Product Details</p>

      <div>
        <input type="text" placeholder="product"/>
        <button class="add_new"> + Add New</button>
      </div>
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
             <td><button>Ed</button></td>
            <td><button>Del</button></td>
          </tr>

          <tr>
            <td>Ana Ana</td>
            <td>23/07/1993</td>
            <td><img src="../../public/img/avatar.png" alt=""></td>
            <td>432.090.107-00</td>
            <td>ana@gmail.com</td>
            <td>(16)99281-9898</td>
             <td><button>Ed</button></td>
            <td><button>Del</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    

  </div>
 </template>

<script>

export default {
  name: 'Users',


}
</script>

<style scoped>
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

button{
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  color: #fff;
}

td button:nth-child(1){
  background-color: #0298cf;
}
td button:nth-child(2){
  background-color: #f80000;
}
.add_new{
  padding: 10px 20px;
  color: #fff;
  background-color: #0298cf;
}

input{
  padding: 10px 20px;
  margin: 0 10px;
  outline: none;
  border: 1px solid #0298cf;
  border-radius: 6px;
  color:#0298cf;
}

.table_section{
  height: 500px;
  overflow: auto;
}

table{
  width: 100%;
  table-layout: fixed;
  min-width: 900px;
  border-collapse: collapse;
}

thead th{
  position: sticky;
  top:0;
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

::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

::-webkit-scrollbar-thumb{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

</style>