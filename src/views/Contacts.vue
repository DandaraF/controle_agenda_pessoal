<template>
  <div class="container-contacts">
    <Navbar />
    <div class="content-contacts-header">
      <h2>Contatos</h2>
      <div class="container-seacher">
        <Input />
        <img src="../../public/img/search.png" :alt="Pesquisar" id="search" />
      </div>
      <router-link to="/contatos/cadastrar" id="add-contact">
        + Add contato</router-link
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
            <tr v-for="contact in contacts" :key="contact.pessoa.id">
              <td>{{ contact.pessoa.nome }}</td>
              <td>{{ contact.pessoa.cpf }}</td>
              <td>
                <img
                  class="photo-user"
                  src="../../public/img/avatar.png"
                  alt=""
                />
              </td>
              <td class="address">
                {{ contact.pessoa.endereco.logradouro }},
                {{ contact.pessoa.endereco.numero }},
                {{ contact.pessoa.endereco.bairro }} -
                {{ contact.pessoa.endereco.cidade }}-
                {{ contact.pessoa.endereco.estado }},
                {{ contact.pessoa.endereco.pais }}. CEP:
                {{ contact.pessoa.endereco.cep }}
              </td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.telefone }}</td>
              <td>
                <router-link
                  :to="{
                    path: '/contatos/editar',
                    query: { id_user: contact.pessoa.id },
                  }"
                  id="edit-contact"
                >
                  <img
                    class="icon-edit"
                    src="../../public/img/edit.png"
                    alt="Editar"
                  />
                </router-link>
              </td>
              <td>
                <img
                  @click="deleteContact(contact.pessoa.id, contact.pessoa.nome)"
                  class="icon-delete"
                  src="../../public/img/delete.png"
                  alt="Editar"
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
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import axios from "axios";

export default {
  name: "Contacts",
  components: {
    Button,
    Input,
    Navbar,
    Message,
  },
  data() {
    return {
      contacts: [],
      msg: null,
    };
  },
  methods: {
    getContacts() {
      const response = axios
        .post("/contato/pesquisar", { termo: "" })
        .then((response) => {
          this.contacts = response.data;
          console.log("cont", this.contacts);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    deleteContact(id, contact) {
      const response = axios
        .delete("/contato/remover/" + id)
        .then((response) => {
          this.msg = "Dado deletado com sucesso!";
          this.setMessage();
          this.getPeople();
        })
        .catch(() => {
          this.msg = `Não foi possivel remover os dados de ${contact}.`;
          this.setMessage();
        });
    },
    setMessage() {
      setTimeout(() => (this.msg = ""), 2500);
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>

<style scoped>
.message {
  display: flex;
  align-items: center;
  justify-content: center;
}
#add-contact {
  background-color: rgb(36, 124, 65);
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
}

#add-contact:hover {
  opacity: 0.8;
}

h2 {
  color: rgb(105, 105, 10);
}

#search {
  width: 25px;
}

.content-contacts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(240, 240, 240);
}

.content-contacts-headerr p {
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
  text-align: center;
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

.icon-delete {
  width: 25px;
}

.icon-delete:hover {
  opacity: 0.7;
}

@media (max-width: 600px) {
  .container-seacher {
    margin: 10px 0 20px;
  }
  .content-contacts-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  tbody {
    font-size: 14px;
  }
}
</style>