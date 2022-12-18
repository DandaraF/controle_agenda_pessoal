<template>
      <div>
    <FormPerson text_form="Cadastrar pessoa" text_btn="Cadastrar"/>
  </div>
</template>

<script>
import FormPerson from './../../components/form/FormPerson.vue'

export default {
  name: 'RegisterPerson',
  components:{
    FormPerson
  }
}

</script>