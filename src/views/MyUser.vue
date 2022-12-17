<template>
  <div class="container-myuser">
    <FormEdit/>
    
  </div>
 </template>

<script>
import FormEdit from '../components/form/FormEdit'

export default {
  name: 'MyUser',
  components:{
    FormEdit
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