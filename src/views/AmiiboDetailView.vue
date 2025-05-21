<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const amiibo = ref(null)

onMounted(async () => {
  const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${route.params.tail}`)
  const data = await res.json()
  amiibo.value = data.amiibo[0]
})
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <section id="header">
      <h1>Détail</h1>
      <nav id="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/liste">Liste Amiibo</router-link></li>
        </ul>
      </nav>
    </section>

    <!-- Main -->
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <!-- Sidebar -->
            <section class="box" v-if="amiibo">
              <header>
                <h3>Infos</h3>
              </header>
              <p>
                amiiboSeries: <b>{{ amiibo.amiiboSeries }}</b><br />
                character: {{ amiibo.character }}<br />
                gameSeries: {{ amiibo.gameSeries }}<br />
                type: {{ amiibo.type }}
              </p>
            </section>

            <section class="box" v-if="amiibo?.release">
              <header>
                <h3>Dates sorties</h3>
              </header>
              <ul class="divided">
                <li v-if="amiibo.release.au">au: {{ amiibo.release.au }}</li>
                <li v-if="amiibo.release.eu">eu: {{ amiibo.release.eu }}</li>
                <li v-if="amiibo.release.jp">jp: {{ amiibo.release.jp }}</li>
                <li v-if="amiibo.release.na">na: {{ amiibo.release.na }}</li>
              </ul>
            </section>
          </div>

          <div class="col-8 col-12-medium imp-medium">
            <!-- Content -->
            <article class="box post" v-if="amiibo">
              <img class="featured" :src="amiibo.image" :alt="amiibo.character" />
              <header>
                <h2>{{ amiibo.name }}</h2>
                <p>{{ amiibo.type }}</p>
              </header>
            </article>
            <!-- Lien retour -->
            <router-link to="/liste" class="button">← Retour à la liste</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div id="copyright">
              <ul class="links">
                <li>&copy; AmiiVue ~ 2024</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
