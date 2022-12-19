<template>
  <div>
    <Navbar />
    <FormPerson text_form="Cadastrar pessoa" text_btn="Cadastrar" />
  </div>
</template>

<script>
import FormPerson from "./../../components/form/FormPerson.vue";
import Navbar from "./../../components/Navbar.vue";

export default {
  name: "RegisterPerson",
  components: {
    FormPerson,
    Navbar,
  },
};
</script>