<template>
    <!-- <img :src="avatar" :alt="descricao"> -->
    <img :src="avatar" :alt="descricao">
</template>


<script>


export default {
    name: 'Button',
    props:{
        alt: String,
        avatar_user: String
    },
    data(){
        return{
             avatar: "/img/avatar.png"   
        }
    }
}


</script>

<style scoped>
#btn-login{
  width: 100%;
  height: 30px;
  background-color: rgb(160, 160, 0);
  font-size: 1.2rem;
  color:#fff;
  border: none;
  cursor: pointer;
}
#btn-login:hover{
  background-color: rgba(126, 126, 37, 0.616);
}

</style>
   