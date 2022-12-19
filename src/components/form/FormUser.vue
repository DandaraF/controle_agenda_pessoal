<template>
  <div class="container-form-user">
    <h2>{{ text_form }}</h2>
    <form @submit="postUser($event)">
      <div class="message">
        <Message :msg="msg" v-show="msg" />
      </div>
      <input
        type="text"
        placeholder="Nome"
        v-model="data_user.usuario.nome"
        required
      />
      <input
        type="date"
        placeholder="Data nascimento"
        v-model="data_user.usuario.dataNascimento"
        required
      />
      <input
        type="text"
        placeholder="CPF"
        v-model="data_user.usuario.cpf"
        required
      />
      <input
        type="email"
        placeholder="Email"
        v-model="data_user.usuario.email"
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        v-model="data_user.usuario.telefone"
        required
      />
      <input
        type="text"
        placeholder="Username"
        v-model="data_user.usuario.username"
        required
      />
      <input
        type="password"
        placeholder="Senha"
        v-model="data_user.usuario.password"
        required
      />
      <input type="submit" :value="text_btn" />
    </form>
  </div>
</template>
  
<script>
import axios from "axios";
import Message from "../../components/Message.vue";

export default {
  name: "FormUser",
  components: {
    Message,
  },
  props: {
    text_form: String,
    text_btn: String,
  },
  data() {
    return {
      msg: null,
      id: 0,
      data_user: {
        tipos: [],
        usuario: {
          nome: "",
          dataNascimento: "",
          cpf: "",
          email: "",
          telefone: "",
          username: "",
          password: "",
        },
      },
    };
  },
  methods: {
    getUser(id) {
      const response = axios.get("/usuario/buscar/" + id).then((response) => {
        this.data_user = response.data.object;
      });
    },
    postUser(e) {
      e.preventDefault();
      const data = {
        tipos: ["ROLE_ADMIN"],
        usuario: {
          cpf: this.data_user.usuario.cpf,
          dataNascimento: this.data_user.usuario.dataNascimento,
          email: this.data_user.usuario.email,
          nome: this.data_user.usuario.nome,
          password: this.data_user.usuario.password,
          telefone: this.data_user.usuario.telefone,
          username: this.data_user.usuario.username,
        },
      };
      const response = axios
        .post("/usuario/salvar", data)
        .then((response) => {
          alert("Requisição efetuada com sucesso!");
          this.$router.push({ name: "users" });
        })
        .catch((error) => {
          this.msg = "Não foi possivel alterar os dados!";
        });
    },
  },
  mounted() {
    const id = localStorage.getItem("id");
    this.getUser(id);
    this.id = id;
  },
};
</script>

<style scoped>
.container-form-user {
  font-family: "Open Sans Condensed", arial, sans;
  max-width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 20px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
}
.container-form-user h2 {
  background: #354152;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
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
.container-form-user select {
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
.container-form-user input[type="submit"] {
  -moz-box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
  -webkit-box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
  box-shadow: inset 0px 1px 0px 0px rgb(160, 160, 0);
  background-color: rgb(160, 160, 0);
  border: 1px solid rgb(160, 160, 0);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 14px;
  padding: 8px 18px;
  text-decoration: none;
  text-transform: uppercase;
}
.container-form-user input[type="button"]:hover,
.container-form-user input[type="submit"]:hover {
  background: linear-gradient(
    to bottom,
    rgba(160, 160, 0, 0.452) 5%,
    rgba(160, 160, 0, 0.548) 100%
  );
  background-color: rgba(160, 160, 0, 0.329);
}
</style>