<template>
    <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      msg: String,
      type_mensage: String
    }
  }
</script>

<style scoped>
  .message-container {
    color: #004085;
    background-color: #cce5ffa8;
    border: 2px solid #b8daffaf;
    border-radius: 5px;
    padding: 8px;
    max-width: 400px;
    margin: 5px 0;
  }

</style>