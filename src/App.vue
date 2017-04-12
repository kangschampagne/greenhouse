<template>
  <div id="app">

    <main-page></main-page>
    <!--<router-view></router-view>-->

  </div>
</template>

<script>
import MainPage from './components/page/main';

export default {
  name: 'app',

  components: {
    MainPage
  }
}
</script>
