<template>
    <div class="container-search">
        
        <input type="text" placeholder="Pesquisar">
        <div class="search">
            <img :src="src_img" :alt="alt">

        </div>
    </div>
</template>

<script>
import Input from "./Input.vue"
export default {
  name: 'Search',

  components:{
    Input
  },
  data(){
    return{
        src_img:"/img/search.png",
        alt: "Pesquisar"
    }
  }

}
</script>

<style scoped>

.container-search{
    display: flex;
    align-content: center;
    justify-content: center;
    min-width:330px;
    height: auto;
    padding: 10px;

}

img{
    width: 23px;
    height: 23px;
}

.search{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 0 4px 4px 0;
    -moz-border-radius: 0 4px 4px 0;
    -webkit-border-radius: 0 4px 4px 0;
    border: 1px solid rgba(39, 39, 39, 0.438);
    border-left: 0;
    cursor: pointer;
}
input{
    height: 35px;
    width: 250px;
    border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    -webkit-border-radius: 4px 0 0 4px;
    border: 1px solid rgba(39, 39, 39, 0.438);
    padding-left: 7px;
}
input::placeholder{
    font-style: italic;
    color: rgba(78, 77, 77, 0.788);
}

</style>