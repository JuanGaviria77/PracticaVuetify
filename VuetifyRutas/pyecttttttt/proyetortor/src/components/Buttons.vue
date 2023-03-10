<template>
    <div>
        <v-btn 
        v-for="(item,index) in rutas" :key="index"
        class="bg-light-blue-lighten-1 ml-10 my-2" 
        :class="d-block"
        variant="tonal"
        @click="url(item.ruta)"> 
        <span>{{item.nombre}}</span>
        </v-btn>
    </div>
</template>


<script>
export default {
    name: 'ButtonV',
  data: () => ({ 
  rutas: [
      {nombre: 'info', ruta:'/info'},
      {nombre:'contactos', ruta: '/contacto'},
      {nombre:'help', ruta: '/help'},
      {nombre:'quienes somos', ruta: '/QuienesSomos'},
      {nombre:'acceder', ruta: '/Acceso'}
  ] }),

  methods: {
        url(ruta){
            this.$router.push(ruta)
        }
    }
}
</script>