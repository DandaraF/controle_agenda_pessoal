<template>
    
    <form action="" class="container-form">
        <div class="container-image">
          <div class="image-user">
            <Picture/>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
            <label for="avatar">Selecionar foto</label>
          </div>
            

            <div class="info-user">
              <p>Pedro Augusto</p>
              <p>pedroca</p>
              <p>23/07/1993</p>
              <p>111.555.666-89</p>
              <p>dandara@gmail.com</p>
              <p>(16)9999-8989</p>
            </div>
            
        </div>
        
        <Input text_label="Nome:" />
        <Input text_label="Data Nascimento:" />
        <Input text_label="CPF:" />
        <Input text_label="Email:" />
        <Input text_label="Telefone:" />
        <Input text_label="Username:" />
        <Input text_label="Senha antiga:" type_input="password" />
        <Input text_label="Nova senha:" type_input="password" />

        <button class="btn-submit" v-if="salvar">Salvar</button>
        <button class="btn-submit" v-if="editar" @click="ativarForm">Editar</button>
    </form>
</template>


<script>

import Input from "../Input.vue"
import Picture from "../Picture.vue"

export default {
  name: 'FormEdit',
  components:{
    Input,
    Picture
  },
  data(){
    return {
      salvar: false,
      editar: true
    }
  },

    methods:{
      ativarForm(){
        this.salvar = true,
        this.editar = false
      }
    }

  


}
</script>


<style scoped>


.container-form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 650px;
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
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 30px;
    gap:10px;
}

.info-user{
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  height: auto;
  flex-basis: 100%;
  width: 0;
  padding:10px;
  gap: 2px;

}
p{
  word-break: break-all;
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
  background-color: rgba(197, 197, 187, 0.616);
}


@media (max-width:689px) {
  .container-form{
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 430px;
    padding: 20px;
    background-color: #f1f1f12c;
    border-radius: 2px;
}
.container-image{
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    border: 2px solid rgba(160, 160, 0, 0.712);
    padding: 10px 2px;
    border-radius: 4px;
}

.info-user{
  font-size: 16px;
  width: 100%;
  height: auto;
  flex-basis: 100%;
  text-align: center;

}
}


</style>