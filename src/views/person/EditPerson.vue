<template>
  <div>
    <Navbar />
    <FormPerson text_form="Editar pessoa" text_btn="Editar" />
  </div>
</template>

<script>
import FormPerson from "./../../components/form/FormPerson.vue";
import Navbar from "./../../components/Navbar.vue";

export default {
  name: "EditPerson",
  components: {
    FormPerson,
    Navbar,
  },
  props: ["person"],
};
</script>
