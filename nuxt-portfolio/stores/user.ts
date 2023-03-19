import { defineStore } from "pinia";

export const useUserStore = defineStore('user', ()=>{
   
   const name = ref('');
   const Logged =ref(false);

   const userName = computed(() => name.value);
   const isLogged = computed(() => Logged.value);

   function login(_name:string, _password:string):void{
   console.log('login', _name) 
   Logged.value = true;
   name.value = _name
   }

   function logout():void{
    name.value = ''
    Logged.value = false
   }
    return{userName, isLogged, login, logout};
});