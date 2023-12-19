<template>
    <div>
     <h2>About</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium porro mollitia vero omnis explicabo? Cumque beatae fugiat sequi blanditiis?</p> 
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium porro mollitia vero omnis explicabo? Cumque beatae fugiat sequi blanditiis?</p>   
        <div>{{ data }}</div>
    </div>
</template>


<script setup>
// const {data}=await useFetch('/api/ninja?name=kasun',{
//     method: 'post',
//     body: {age: 30 }
// })


// const {data}=await useFetch('/api/ninja')

const { data } = await useFetch('/api/ninja?name=kasun',{
    method: 'post',
    body: {age: 30}
})
console.log("about")
console.log("data ",data)

</script>


<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>