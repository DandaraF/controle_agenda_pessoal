<template>
      <div>
    <FormContact text_form="Cadastrar contato" text_btn="Cadastrar"/>
  </div>
</template>

<script>
import FormContact from './../../components/form/FormContact.vue'

export default {
  name: 'RegisterContact',
  components:{
    FormContact
  }
}

</script>