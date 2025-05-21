<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const amiibos = ref([])

onMounted(async () => {
    const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
    const data = await res.json()

    console.log(data.amiibo)
    amiibos.value = data.amiibo.slice(0, 3)
})

const goToList = () => {
    router.push('/liste')
}
</script>

<template>
    <div id="page-wrapper">
        <!-- Header -->
        <section id="header">
            <h1>AmiiVue</h1>

            <!-- Nav -->
            <nav id="nav">
                <ul>
                    <li class="current">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/liste">Liste Amiibo</router-link>
                    </li>
                </ul>
            </nav>

            <!-- Banner -->
            <section id="banner">
                <header>
                    <h2>Hey. Bienvenue sur ma collection</h2>
                </header>
            </section>
        </section>

        <!-- Intro (3 amiibos) -->
        <section id="intro" class="container">
            <div class="row">
                <div class="col-4 col-12-medium" v-for="a in amiibos" :key="a.tail">
                    <section class="middle">
                        <img :src="a.image" :alt="a.character" />
                        <header>
                            <h2>{{ a.character }}</h2>
                        </header>
                        <p>{{ a.gameSeries }}</p>
                    </section>
                </div>
            </div>

            <footer>
                <ul class="actions">
                    <li><button class="button large" @click="goToList">Liste complète</button></li>
                </ul>
            </footer>
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
