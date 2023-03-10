<template>
    <v-app id="inspire" class="bg-light-blue-lighten-1"
    :class="d-block">
    <v-navigation-drawer v-model="drawer">
        <slot name="drawer"></slot>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-name >
        <slot></slot>
        <slot name="hola"></slot>
    </v-name>
  </v-app>
</template>

<script>


  export default {
    data: () => ({ drawer: true }),
    methods: {
        url(ruta){
            this.$route.push(ruta)
        }
    }
}
</script>