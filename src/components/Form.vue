<template>
    
    <form action="" class="container-form">
        <div class="container-image">
            <Picture/>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
            <label for="avatar">Selecionar foto</label>
        </div>
        
        <Input text_label="Nome:" />
        <Input text_label="Data Nascimento:" />
        <Input text_label="CPF:" />
        <Input text_label="Email:" />
        <Input text_label="Telefone:" />
        <Input text_label="Username:" />
        <Input text_label="Password:" type_input="password" />

        <button class="btn-submit">Salvar</button>
    </form>
</template>


<script>

import Input from "./Input.vue"
import Picture from "./Picture.vue"

export default {
  name: 'Form',
  components:{
    Input,
    Picture
  },
  


}
</script>


<style scoped>


.container-form{
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 430px;
    padding: 20px;
    background-color: #eeeded;
}


input[type="file"] {
    display: none;
}

label {
    text-align: center;
    width: 150px;
    height: auto;
    background-color:rgba(67, 67, 70, 0.795);
    color: rgb(247, 247, 247);
    text-transform: uppercase;
    display: block;
    font-size: 12px;
    cursor: pointer;
    padding: 6px 0 ;
}
.container-image{
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
}

.btn-submit{
  width: 100%;
  height: 30px;
  background-color: rgb(160, 160, 0);
  font-size: 1.2rem;
  color:#fff;
  border: none;
  cursor: pointer;
}
.btn-submit:hover{
  background-color: rgba(126, 126, 37, 0.616);
}
</style>