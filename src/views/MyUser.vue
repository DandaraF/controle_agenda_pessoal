<template>
  <div class="container-myuser">
    <Form/>
    
  </div>
 </template>

<script>
import Form from '../components/Form'

export default {
  name: 'MyUser',
  components:{
    Form
  }

}
</script>

<style scoped>
.container-myuser{
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>