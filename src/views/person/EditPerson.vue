<template>
  <div>
    <FormPerson text_form="Editar pessoa" text_btn="Editar"/>
  </div>
  
</template>

<script>
import FormPerson from './../../components/form/FormPerson.vue'

export default {
  name: 'EditPerson',
  components:{
    FormPerson
  }
}

</script>
