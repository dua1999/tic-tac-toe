<script setup>

import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/stores/user';

const userStore = useUserStore();
const {isLogged, userName} = storeToRefs(userStore);
</script>

<template>
    <div >
    <section v-if="isLogged" class="pace-y-3">
       <span> {{ userName }}</span>
       
       <button class="rounded-md bg-slate-200 w-20 shadow" @click="userStore.logout">Logout</button>
    </section>
    <section v-else>
        <button class="rounded-md bg-slate-200 w-20 shadow " @click="userStore.login('Welcome'+' '+'Dua')">Login</button>
    </section>
    </div>
</template>