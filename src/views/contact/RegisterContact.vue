<template>
  <div>
    <Navbar/>
    <FormContact text_form="Cadastrar contato" text_btn="Cadastrar"/>
  </div>
</template>

<script>
import FormContact from './../../components/form/FormContact.vue'
import Navbar from './../../components/Navbar.vue'

export default {
  name: 'RegisterContact',
  components:{
    FormContact,
    Navbar
  }
}

</script>