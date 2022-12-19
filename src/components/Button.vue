<template>
  <div>
    <button class="btn">{{ text_button }}</button>
  </div>
</template>



<script>
export default {
  name: "Button",
  props: {
    text_button: String,
  },
};
</script>

<style scoped>
button {
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px;
  color: #fff;
  min-width: 55px;
}

button:nth-child(1) {
  background-color: rgb(160, 160, 0);
}
button:hover {
  background: rgba(160, 160, 0, 0.658);
}
</style>