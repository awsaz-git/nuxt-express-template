<script setup>
// to toggle colors just create a button with this
// @click="$colorMode.preference = 'dark'"

// you can replace 'dark' with any other 'color' you want
// dont forget to add a css class for that color
// example: @click="$colorMode.preference = 'pink'" --> css class would be (pink-mode)
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
