<template>
    <div class="content-input">
        <label > {{text_label}} </label>
        <input :type="type_input" class="input-text" :value="value_input" >
    </div>
</template>

<script>

export default {
  name: 'Input',
    props:{
        text_label:String,
        value_input: String,
        type_input: String
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
  gap: 5px;
  margin-bottom:15px;
}

label{
  border-left: 4px solid rgb(160, 160, 0);
  color: #000;
  padding-left: 3px;
  font-weight: 560;

}
.input-text{
  height: 30px;
  min-width: 250px;
  border: 1px solid rgb(122, 122, 122);
  font-size: 1rem;
  padding-left: 10px;
}

</style>