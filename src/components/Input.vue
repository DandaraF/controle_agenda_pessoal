<template>
    <div class="content-input">
        <label > {{text_label}} </label>
        <input type="text" class="input-text" :value="value_input" >
    </div>
</template>

<script>

export default {
  name: 'Input',
    props:{
        text_label:String,
        value_input: String
    },
 }

</script>


<style scoped>

.content-input{
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  font-size: 1rem;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
  gap: 4px;
  margin-bottom:10px;
}


.input-text{
  height: 30px;
  border: none;
  background-color: rgba(241, 241, 241, 0.178);
  font-size: 1rem;
  padding-left:10px;
  color: #fff;
  border-left: 3px solid rgb(160, 160, 0);
}
</style>