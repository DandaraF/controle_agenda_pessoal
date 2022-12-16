<template>
    <!-- <img :src="avatar" :alt="descricao"> -->
    <img :src="avatar" :alt="descricao">
</template>


<script>


export default {
    name: 'Picture',
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

img{
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 2px solid rgb(169, 172, 19);
    padding: 2px;
}
</style>