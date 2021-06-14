{#if someFruit.isSweet}
    <h2>The best time to eat {someFruit.name} is { whenToEatSweetFruits }!</h2>
{:else}
    <h2>The best time to eat {someFruit.name} is { whenToEatSourFruits }!</h2>
{/if}

<script lang="ts">
    interface Fruit {
        name: string
        isSweet: boolean
    }

    const whenToEatSweetFruits = 'all the time'
    const whenToEatSourFruits = 'all the time'
    const someFruit: Fruit = {
        name: "pitaya",
        isSweet: true
    }
</script>

<style>
    h2 {
        color: palevioletred;
    }
</style>