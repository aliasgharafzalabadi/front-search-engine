<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-text-field @keyup.enter="getData()" v-model="query.query" class="mx-auto mt-8" label="Search"
                hide-details="auto" outlined dense flat solo solo-inverted rounded color="error" variant="solo-inverted"
                prepend-inner-icon="mdi-magnify" style="max-width: 400px; width: 100%;">
            </v-text-field>
        </v-col>
    </v-row>
    <div>
        About  {{ query.query.length }}  results in   {{ time}}  ms
    </div>
    <div class="d-flex flex-column align-center mt-4">
        <div v-if="isQueryFixed">
            <div class="fix">Did you mean:</div>
            <div>{{ fixedQuery }}</div>
        </div>
        <template v-for="(dock, index) in docks" :key="index">
            <v-card width="600" loading :title="dock.title" :text="dock.summary" variant="tonal" link @click="openlink(dock.url)"></v-card>
        </template>
    </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const fixedQuery = ref("")
const isQueryFixed= ref(false)
const time = ref()
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

    router.push({path:'/results', query: {query : query.query}})
    query.query = []

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

    docks.value = data.value[0]
    fixedQuery.value = data.value[1]
    time.value = data.value[2]
    isQueryFixed.value = data.value[3]
}

const openlink = (url)=>{
    window.open(url)

}
</script>
<style scoped>
.d-flex {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
}

.fix {
    color: red;
    display: flex;
}

.v-card {
    margin-top: 20px;
    margin-bottom: 5px;
}
</style>