<script setup>
definePageMeta({

    middleware:'auth'
})
</script>


<template>

    <div>
        <DefaultHeader></DefaultHeader>
        <title>welcome user</title>
        <slot/>
        <DefaultFooter></DefaultFooter>
    </div>
</template>

