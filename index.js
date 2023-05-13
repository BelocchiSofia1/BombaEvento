let i = 10
function countDown(){
 const interval = setInterval(()=>{
    if(i == 0){
        clearInterval(interval)
        console.log("Pimba!");    
    } else {
        console.log(`La bomba hara pimba en ${i} segundos`), i--};
    },1000)
 }

 countDown()

 setTimeout(()=>{
    let i= 10
    const interval = setInterval(()=>{
    if(i == 0){
        clearInterval(interval)
        console.log("Boom!");    
    } else {
        console.log(`La bomba hara boom en ${i} segundos`), i--}
    },1000);
 }, 13000) 

 
 
 //${i === 1? `segundo` : `segundos`}`); para cambiar el ultimo segundo de la bomba