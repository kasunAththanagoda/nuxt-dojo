<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
                
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>


<script>



</script>


<style scoped>
    .router-link-exact-active{
        color: aquamarine;
    }
</style>