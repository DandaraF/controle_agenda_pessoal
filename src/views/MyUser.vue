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
  padding: 40px 20px 0 20px;

  align-items: center;
}


@media (max-width:600px) {
  .container-myuser{
    padding-top: 0;
}

}
</style>