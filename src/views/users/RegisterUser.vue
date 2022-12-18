<template>
      <div>
    <FormUser text_form="Cadastrar Usuário" text_btn="Cadastrar"/>
  </div>
</template>

<script>
import FormUser from './../../components/form/FormUser.vue'

export default {
  name: 'RegisterUser',
  components:{
    FormUser
  }
}

</script>