<template>
  <div>
     <Navbar/>
    <FormUser text_form="Editar meu cadastro" text_btn="Editar"/>
  </div>
 </template>

<script>
import FormUser from './../components/form/FormUser.vue'
import Navbar from '../components/Navbar'

export default {
  name: 'MyUser',
  components:{
    FormUser,
    Navbar
  }

}
</script>

