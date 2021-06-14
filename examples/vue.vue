<template>
  <h2 v-if="someFruit.isSweet">
    The best time to eat {{ someFruit.name }} is {{ whenToEatSweetFruits }}!
  </h2>
  <h2 v-else>
    The best time to eat {{ someFruit.name }} is {{ whenToEatSourFruits }}!
  </h2>
</template>

<script setup lang="ts">
interface Fruit {
  name: string;
  isSweet: boolean;
}

const whenToEatSweetFruits = "all the time";
const whenToEatSourFruits = "all the time";
const someFruit: Fruit = {
  name: "pitaya",
  isSweet: true,
};
</script>

<style scoped>
h2 {
  color: palevioletred;
}
</style>
