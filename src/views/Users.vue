<template>
  <div class="container-usuarios">
    <Navbar />
    <div class="message">
      <Message :msg="msg" v-show="msg" />
    </div>
    <div class="table">
      <div class="table_header">
        <h2>Usuários</h2>
        <router-link to="/usuarios/cadastrar" id="add-user">
          + Add usuário</router-link
        >
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              <td>{{ usuario.nome }}</td>
              <td>{{ usuario.dataNascimento }}</td>
              <td>{{ usuario.cpf }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import axios from "axios";

export default {
  name: "usuarios",
  components: {
    Button,
    Navbar,
    Message,
  },
  data() {
    return {
      usuarios: [],
      msg: null,
    };
  },
  methods: {
    getusuarios() {
      const response = axios
        .post("/usuario/pesquisar", { termo: "" })
        .then((response) => {
          this.usuarios = response.data;
        });
    },
  },
  mounted() {
    this.getusuarios();
  },
};
</script>

<style scoped>
.message {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: rgb(160, 160, 0);
}

#add-user {
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add_user:hover {
  opacity: 0.8;
}

.table {
  width: 100%;
}

.table_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(240, 240, 240);
}

.table_header p {
  color: #000;
}

.table_section {
  height: 500px;
  overflow: auto;
}

table {
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
}

thead th {
  background-color: rgb(160, 160, 0);
  color: #fff;
  font-size: 15px;
}
th,
td {
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
  min-width: 100px;
}

.birthday {
  min-width: 170px;
}
tr:hover td {
  color: #8ca01bfb;
  background-color: #8ca01b09;
  cursor: context-menu;
}
::placeholder {
  color: #8ca01bd2;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
.icon-edit {
  width: 25px;
}

.icon-edit:hover {
  opacity: 0.7;
}
</style>