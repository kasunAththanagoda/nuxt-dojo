export default defineEventHandler(async (event)=>{
    const { name } = getQuery(event)

    const { age } = await readBody(event)
    
    return{
        message: `heeloo , ${name}!! you are years ${age} old`
    }
})