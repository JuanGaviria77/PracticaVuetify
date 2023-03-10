<template>
    <NavBar>
      <template v-slot:drawer>
        <ButtonV />
      </template>
        <HelloWorld />
    </NavBar>
  </template>
  
<script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavBar from '../components/NavBar.vue';
  import ButtonV from '../components/Buttons.vue'
  import HelloWorld from '../components/HelloWorld.vue';


  
  export default defineComponent({
    name: 'InicioView',
    components: {
    NavBar,
    ButtonV,
    HelloWorld
},
  });
</script>