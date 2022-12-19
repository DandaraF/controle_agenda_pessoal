<template>
  <div class="container-people">
    <Navbar />
    <div class="content-people-header">
      <h2>Pessoas</h2>
      <div class="container-seacher">
        <Input />
        <img src="../../public/img/search.png" :alt="Pesquisar" id="search" />
      </div>
      <router-link to="/pessoas/cadastrar" id="add-person">
        + Add pessoa</router-link
      >
    </div>

    <div class="message">
      <Message :msg="msg" v-show="msg" />
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
            <tr v-for="person in people" :key="person.id">
              <td>{{ person.nome }}</td>
              <td>{{ person.cpf }}</td>
              <td>
                <img
                  class="photo-user"
                  src="../../public/img/avatar.png"
                  alt="foto"
                />
              </td>

              <td class="address">
                {{ person.endereco.logradouro }}, {{ person.endereco.numero }},
                {{ person.endereco.bairro }} - {{ person.endereco.cidade }}-
                {{ person.endereco.estado }}, {{ person.endereco.pais }}. CEP:
                {{ person.endereco.cep }}
              </td>
              <td>
                <router-link
                  :to="{ path: '/pessoas/editar', query: { id: person.id } }"
                  id="edit-person"
                >
                  <img
                    class="icon-edit"
                    src="../../public/img/edit.png"
                    alt="Editar"
                  />
                </router-link>
              </td>
              <td>
                <Button
                  text_button="Excluir"
                  @click="deletePerson(person.id, person.nome)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Message from "../components/Message";

export default {
  name: "People",
  components: {
    Button,
    Input,
    Navbar,
    Message,
  },
  data() {
    return {
      people: [],
      msg: null,
    };
  },
  methods: {
    getPeople() {
      const response = axios
        .post("/pessoa/pesquisar", { nome: "" })
        .then((response) => {
          this.people = response.data;
        });
    },
    getPhoto(id) {
      const response = axios.get("foto/download/" + id).then((response) => {
        return response;
      });
    },
    deletePerson(id, person) {
      const response = axios
        .delete("pessoa/remover/" + id)
        .then((response) => {
          this.msg = "Dado deletado com sucesso!";
          this.setMessage();
          this.getPeople();
        })
        .catch(() => {
          this.msg = `Não foi possivel remover os dados de ${person}.`;
          this.setMessage();
        });
    },
    setMessage() {
      setTimeout(() => (this.msg = ""), 2500);
    },
  },
  mounted() {
    this.getPeople();
  },
};
</script>

<style scoped>
.message {
  display: flex;
  align-items: center;
  justify-content: center;
}

#add-person {
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add-person:hover {
  opacity: 0.8;
}

h2 {
  color: rgb(160, 160, 0);
}

#search {
  width: 25px;
}

.content-people-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(240, 240, 240);
}

.content-people-headerr p {
  color: #000;
}

.container-seacher {
  display: flex;
  gap: 6px;
  align-items: center;
}

.table {
  width: 100%;
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

.address {
  max-width: 350px;
  min-width: 300px;
  height: 100%;
}

.photo-user {
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid rgb(160, 160, 0);
  padding: 2px;
}

tr:hover td {
  color: #8ca01bfb;
  cursor: context-menu;
  background-color: #8ca01b09;
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

@media (max-width: 600px) {
  .container-seacher {
    margin: 10px 0 20px;
  }
  .content-people-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>