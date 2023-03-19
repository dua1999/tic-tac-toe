<script setup lang="ts">

type AlertBoxTypes = "error" | "warning" | "success" | "info";

const props = defineProps <{
    type: AlertBoxTypes,
}>();

const computedClass = computed(() => {
    switch (props.type){
        case "error":
            return "red";
        case "success":
            return "green";
        case "warning":
            return "orange";
        case "info":
            return "blue";
        default:
            return "black";
    }
})
</script>

<template>
    <div :class= "computedClass" >
        
        <slot />
    </div>
</template>

<style scoped>

.red{
    color: red;
}

.blue{
    color: blue;
}

.green{
    color: green;
}

.orange{
    color: orange;
}

.black{
    color: black;
}
</style>