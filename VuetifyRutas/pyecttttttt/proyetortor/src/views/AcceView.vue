<template>
    <v-app id="inspire">
      <v-navigation-drawer
        model-value
        class="pt-4"
        color="grey-lighten-3"
        rail
      >
        <v-avatar
          v-for="n in 1"
          :key="n"
          :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
          :size="n === 1 ? 36 : 20"
          class="d-block text-center mx-auto mb-9
          "
        ><button>
          <H1>
            <router-link to="/main">
              H
            </router-link>
          </H1>
        </button>
      </v-avatar>
      </v-navigation-drawer>
  
      <v-main class="mx-15">
        <h2 align="center" class="my-10"> Acceso </h2>
        <v-sheet class=" pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>

      </v-main>
    </v-app>
  </template>
  <script>
    export default {
      name: 'AccederView',
      data: () => ({ 
        form: false,
        email: null,
        password: null,
        loading: false,
      rutas: [
          {nombre: 'home', ruta:'/'},
      ] }),

  methods: {
        url(ruta){
            this.$router.push(ruta)
        }
    },
    onSubmit () {
        if (!this.form) return
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    }
  </script>