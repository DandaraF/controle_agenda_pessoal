<template>
    <div>
        <button class="btn">{{text_button}}</button>
    </div>
</template>



<script>

export default {
  name: 'Button',
  props:{
    text_button: String
  }
}

</script>

<style scoped>

button{
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  color: #fff;
  min-width: 60px;
}

 button:nth-child(1){
  background-color: rgb(160, 160, 0);
}
 button:nth-child(2){
  background-color: #f80000;
}

/* .add_new{
  padding: 10px 20px;
  color: #fff;
  background-color: #0298cf;
} */

button:hover{
background: rgba(160, 160, 0, 0.658);
}

</style>