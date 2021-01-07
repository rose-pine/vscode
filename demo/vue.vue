<template>
  <header class="px-6 h-20 flex items-center justify-between">
    <h1 class="text-sm font-medium">Rosé Pine</h1>

    <nav class="space-x-3">
      <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        class="text-sm text-gray-700 hover:text-gray-900"
        >{{ link.name }}</router-link
      >
    </nav>
  </header>
</template>

<script setup>
let links = [
  {
    name: 'Base',
    url: '/base',
  },
  {
    name: 'Moon',
    url: '/moon',
  },
  {
    name: 'Dawn',
    url: '/dawn',
  },
]
</script>
