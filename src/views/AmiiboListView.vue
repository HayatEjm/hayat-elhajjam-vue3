<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const amiibos = ref([])
const limit = ref(10)

onMounted(async () => {
    const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
    const data = await res.json()
    amiibos.value = data.amiibo
})

const chargerPlus = () => {
    limit.value += 10
}

const voirDetail = (tail) => {
    router.push(`/detail/${tail}`)
}
</script>

<template>
    <div id="page-wrapper">
        <!-- Header -->
        <section id="header">
            <h1>Liste</h1>
            <nav id="nav">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li class="current"><router-link to="/liste">Liste Amiibo</router-link></li>
                </ul>
            </nav>
        </section>

        <!-- Main -->
        <section id="main">
            <div class="container">
                <article class="box post">
                    <header>
                        <h2>Ma Collection (10 par 10)</h2>
                        <p>Page 1/n</p>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <th>Character</th>
                                <th>Game Series</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="a in amiibos.slice(0, limit)" :key="a.tail">
                                <td>{{ a.character }}</td>
                                <td>{{ a.gameSeries }}</td>
                                <td>
                                    <button @click="voirDetail(a.tail)">voir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button @click="chargerPlus">Charger plus</button>
                </article>
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
