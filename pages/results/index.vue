<template>
    <div>

    </div>
</template>
<script setup>
const route = useRoute();

onMounted(() =>{
    console.log(route.query)
})
</script>