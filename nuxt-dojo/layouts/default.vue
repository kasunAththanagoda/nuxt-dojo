<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt Dojo</NuxtLink>
                <ul>
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