<script setup>
const route = useRoute();
const titleText = route.params.slug == "best" ? "My best project" : "My fun project"
  const title = ref(titleText);
  </script>

<template>
    <div>
        <Head>
        <Title class="margin-top-20">{{ title }}</Title>
        <Meta name="description" :content="title" />
      </Head>
      <h1>{{ title }}</h1>
       If you enter an unkown page name a message will be displaed. Try it!
    <br/>
    {{ $route.params.slug }}</div>
   
</template>