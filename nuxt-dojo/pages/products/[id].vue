<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex corrupti quis sequi ullam eligendi reiciendis placeat eaque natus magnam.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    
    definePageMeta({
        layout: 'products'
    })
</script>



<style  scoped>

</style>