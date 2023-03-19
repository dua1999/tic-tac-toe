<script setup lang="ts">
import { Ref } from 'vue';
import { useUserStore } from '~~/stores/user';

const message: Ref<String> = ref("hello");

const {login, userName} = useUserStore();
</script>


<template>
    <header class="space-y-3 py-5 px-40 h-14 bg-gradient-to-r from-purple-500 to-pink-500 shadow border-transparent backdrop-opacity-79 ">
        
        <ul class="grid grid-cols-5 content-center">
            <li>
                <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-500 Float" to="/">Home</NuxtLink>
            </li>
            
            <li>
                <NuxtLink class="text-base font-medium text-gray-900 hover:text-gray-500" to="/about/aboutme">About Me</NuxtLink>
            </li>
            
            <li>
                <NuxtLink class="text-base font-medium text-gray-900 hover:text-gray-500" to="/oman">About Oman</NuxtLink>
            </li>
            
            <li>
                <NuxtLink class="text-base font-medium text-gray-900 hover:text-gray-500" to="/projects">Error page</NuxtLink>
            </li>
            <li>
                <UserLogin/>
            </li>
        </ul>
    </header>
</template>

<style scoped>
.margin20{
    margin: 20px;
}

</style>