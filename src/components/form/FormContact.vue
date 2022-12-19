<template>
  <div class="container-form-contact">
    <h2>{{ text_form }}</h2>
    <form @submit="postContact($event)" :key="contact.pessoa.id">
      <div class="container-image-contact">
        <Picture />
      </div>

      <input
        type="text"
        placeholder="Nome"
        v-model="contact.pessoa.nome"
        required
      />
      <input
        type="text"
        placeholder="CPF"
        v-model="contact.pessoa.cpf"
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        v-model="contact.telefone"
        required
      />
      <div class="address">
        <h3>Endereço</h3>

        <input
          type="text"
          placeholder="Logradouro"
          v-model="contact.pessoa.endereco.logradouro"
          required
        />
        <input
          type="text"
          placeholder="Número"
          v-model="contact.pessoa.endereco.numero"
          required
        />
        <input
          type="text"
          placeholder="CEP"
          v-model="contact.pessoa.endereco.cep"
          required
        />
        <input
          type="text"
          placeholder="Bairro"
          v-model="contact.pessoa.endereco.bairro"
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          v-model="contact.pessoa.endereco.cidade"
          required
        />
        <input
          type="text"
          placeholder="Estado: SP"
          v-model="contact.pessoa.endereco.estado"
          maxlength="2"
          class="acronym"
          required
        />
        <input
          type="text"
          placeholder="País: BR"
          v-model="contact.pessoa.endereco.pais"
          maxlength="2"
          class="acronym"
          required
        />
      </div>

      <input type="submit" :value="text_btn" />
    </form>
  </div>
</template>
  
<script>
import Picture from "../Picture.vue";
import axios from "axios";

export default {
  name: "FormContact",
  components: {
    Picture,
  },
  props: {
    text_form: String,
    text_btn: String,
  },
  data() {
    return {
      contact: {
        pessoa: {
          id: 1,
          nome: "",
          cpf: "",
          endereco: {
            logradouro: "",
            numero: 0,
            cep: "",
            bairro: "",
            cidade: "",
            estado: "",
            pais: "",
          },
        },
        telefone: "",
        tipoContato: "",
      },
    };
  },
  methods: {
    getContact(id) {
      const response = axios.get("/contato/listar/" + id).then((response) => {
        this.contact = response.data[0];
      });
    },
    postContact(e) {
      e.preventDefault();
      const data = {
        pessoa: {
          id: this.contact.pessoa.id,
          cpf: this.contact.pessoa.cpf,
          nome: this.contact.pessoa.nome,
          endereco: {
            logradouro: this.contact.pessoa.endereco.logradouro,
            numero: this.contact.pessoa.endereco.numero,
            cep: this.contact.pessoa.endereco.cep,
            bairro: this.contact.pessoa.endereco.bairro,
            cidade: this.contact.pessoa.endereco.cidade,
            estado: this.contact.pessoa.endereco.estado,
            pais: this.contact.pessoa.endereco.pais,
          },
        },
        telefone: this.contact.telefone,
        tipoContato: this.contact.tipoContato,
        usuario: {
          nome: "string",
          dataNascimento: "2022-12-14",
          cpf: "string",
          email: "string",
          telefone: "string",
          username: "string",
          password: "string",
        },
      };

      const response = axios
        .post("/contato/salvar", data)
        .then((response) => {
          alert("Requisição efetuada com sucesso!");
          this.$router.push({ name: "contacts" });
        })
        .catch((error) => {
          alert("Solicitação não efetuada", error);
        });
    },
  },
  mounted() {
    this.getContact(this.$route.query.id_user);
  },
};
</script>
  
<style scoped>
hr {
  margin-bottom: 20px;
}
.acronym {
  text-transform: uppercase;
}

h3 {
  margin: 10px 0;
  font-size: 22px;
}
.address {
  padding: 10px;
}

.container-form-contact {
  font-family: "Open Sans Condensed", arial, sans;
  max-width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 20px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
}
.container-form-contact h2 {
  background: #354152;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  color: #f5f1f1;
  font-size: 16px;
  font-weight: 100;
  padding: 20px;
  margin: -30px -30px 30px -30px;
}
.container-form-contact input[type="text"],
.container-form-contact input[type="date"],
.container-form-contact input[type="number"],
.container-form-contact input[type="email"],
.container-form-contact input[type="password"],
.container-form-contact textarea,
.container-form-contact select {
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
.container-form-contact input[type="button"],
.container-form-contact input[type="submit"] {
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
.container-form-contact input[type="button"]:hover,
.container-form-contact input[type="submit"]:hover {
  background: linear-gradient(
    to bottom,
    rgba(160, 160, 0, 0.452) 5%,
    rgba(160, 160, 0, 0.548) 100%
  );
  background-color: rgba(160, 160, 0, 0.329);
}

.container-image-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

.select-photo {
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  color: #ff1100;
}

input[type="file"] {
  display: none;
}
</style>