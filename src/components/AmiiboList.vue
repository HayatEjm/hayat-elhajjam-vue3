<script setup>
defineProps(['amiibos', 'limit'])
</script>

<template>
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
                <td><router-link :to="`/detail/${a.tail}`">voir</router-link></td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped></style>