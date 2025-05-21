<script setup>
defineProps(['amiibo'])
</script>

<template>
    <section class="middle">
        <img :src="amiibo.image" :alt="amiibo.character" />
        <header>
            <h2>{{ amiibo.character }}</h2>
        </header>
        <p>{{ amiibo.gameSeries }}</p>
    </section>
</template>


<style scoped>
.amiibo-card {
    text-align: center;
    padding: 1rem;
}

img {
    max-width: 100px;
}
</style>
