
let counter = 0
export default defineEventHandler((event) => {
    console.log(JSON.stringify(event))
    counter++;
    return{
        counter
    }
  })