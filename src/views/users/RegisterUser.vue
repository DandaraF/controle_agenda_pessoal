<template>
  <div>
    <Navbar/>
    <FormUser text_form="Cadastrar Usuário" text_btn="Cadastrar" />
  </div>
</template>

<script>
import FormUser from "./../../components/form/FormUser.vue";
import Navbar from "./../../components/Navbar.vue";

export default {
  name: "RegisterUser",
  components: {
    FormUser,
    Navbar
  },
};
</script>