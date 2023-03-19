<script setup>
const {data} = useFetch('/api/counter')
definePageMeta({
  layout:"no-header"
})

</script>

<template>
    <dev>
       <p class="2xl-text">Oman’s culture is deeply rooted in its proud heritage and history of seafaring, trading, and exploration. Today, long-standing traditions blend seamlessly with modern day living, with the latest fashion and electronics brands sold alongside traditional handmade crafts, jewellery, and even livestock at souqs around the country.</p>
    
    <br/>
    <section ><img src="img/Oman.jpg"/></section>
     <br/>
    <h1>This is my visitor's counter</h1>
      {{ data.counter }}
      <br/>
      <NuxtLink to="/"><b>Back Home</b></NuxtLink>
    </dev>
</template>


