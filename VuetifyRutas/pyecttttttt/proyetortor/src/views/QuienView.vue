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
          class="d-block text-center mx-auto mb-9"
        >
        <button>
          <H1>
            <router-link to="/main">
              H
            </router-link>
          </H1>
        </button>
      </v-avatar>
      </v-navigation-drawer>
  
      <v-main class="mx-15">
        <h2 align="center" class="my-10"> Quienes somos </h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mi sit amet lacus iaculis rutrum. Nullam sem metus, semper a erat vel, dictum pharetra ante. Nulla vel risus pellentesque, blandit turpis a, dictum quam. Mauris sit amet fringilla lacus, quis faucibus ante. Nulla enim justo, tempor ac vulputate rutrum, varius vel augue. Aliquam erat volutpat. Suspendisse pretium condimentum sapien vel consectetur. Sed in nisi luctus, mollis ipsum quis, laoreet ex. Mauris non neque vestibulum est maximus vulputate at ut ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.

      Fusce eu ligula molestie, elementum lectus sit amet, placerat dui. Vestibulum luctus eleifend efficitur. Nunc ut dignissim ante. Donec dapibus non augue non congue. Sed vitae dui id sapien mollis tincidunt. Ut varius efficitur tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin id metus dolor. Aenean venenatis elit vitae nisi mattis, et vestibulum neque laoreet. Aliquam vestibulum velit sed mi convallis efficitur. Fusce faucibus rutrum nulla, sit amet aliquet lacus vestibulum eget. Phasellus viverra at nunc gravida vehicula. Phasellus suscipit, risus ut elementum tristique, tortor ex mollis arcu, sit amet tempor nisi ex quis sapien. Nam commodo mi tellus, non ultrices mi luctus eget.

      Donec iaculis dignissim tempus. Integer vulputate lacinia turpis nec dignissim. Aliquam egestas sit amet sapien vel ornare. Ut sagittis ante ac aliquet condimentum. Nam feugiat finibus condimentum. Nunc vitae sapien aliquam, scelerisque neque sed, rhoncus leo. Vestibulum sodales purus erat, eget tincidunt metus accumsan eu. Aliquam erat volutpat. Morbi suscipit posuere urna in porta. Aenean blandit tincidunt molestie. Aliquam faucibus, dolor nec condimentum mattis, quam nisi dictum eros, in rutrum felis nibh id dolor. Pellentesque consequat scelerisque quam, porta hendrerit magna convallis vitae. Nunc ut dolor facilisis, condimentum nisi nec, porta nisi.
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      name: 'QuienView',
    }
  </script>