<template>
  <div>
    <Navbar />
    <FormContact text_form="Editar contato" text_btn="Editar" />
  </div>
</template>

<script>
import FormContact from "./../../components/form/FormContact.vue";
import Navbar from "./../../components/Navbar.vue";

export default {
  name: "EditContact",
  components: {
    FormContact,
    Navbar,
  },
};
</script>
