<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-text-field @keyup.enter="getData()" v-model="query.query" class="mx-auto mt-8" label="Search"
                hide-details="auto" outlined dense flat solo solo-inverted rounded color="error" variant="solo-inverted"
                prepend-inner-icon="mdi-magnify" style="max-width: 400px; width: 100%;">
            </v-text-field>
        </v-col>
    </v-row>
    <div class="d-flex flex-column align-center mt-4">
        <template v-for="(dock, index) in docks" :key="index">
            <v-card width="600" loading :title="dock.title" :text="dock.summary" variant="tonal" link></v-card>
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
onMounted(async () => {

    setTimeout(() => {
        query.value = route.query
        getData()
    })

})

const getData = async () => {

    const { data } = await useFetch('/', {
        baseURL: "http://127.0.0.1:5000",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',

        },
        method: "POST",
        body: query.value
    })

    console.log(data)

    docks.value = data.value
}
</script>
<style scoped>
.d-flex {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
}

.v-card {
    margin-top: 20px;
    margin-bottom: 5px;
}
</style>