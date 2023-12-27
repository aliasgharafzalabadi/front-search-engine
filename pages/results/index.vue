<template>
    <div>
        <template v-for="(dock, index) in docks" :key="index">
            <v-card loading :title="dock.title" :text="dock.summary" variant="tonal"></v-card>
        </template>
    </div>
</template>
<script setup>
const route = useRoute();
const query = ref({
    query: "",
    chance: ""
})
const docks = ref([])
onMounted(async() => {

    setTimeout(() => {
        query.value = route.query
        getData()
    })

})

const getData = async () => {

    const { data } = await useFetch('/', {
        baseURL: "http://127.0.0.1:5000",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',

        },
        method: "POST",
        body: query.value
    })

    console.log(data)

    docks.value = data
}
</script>