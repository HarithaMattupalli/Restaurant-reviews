if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js')
   .then((register)=>{
     console.log("Registration successful");
   })
   .catch((e)=>{
     console.log("Registration failed");
   })
} else {
  console.log("Browser not supported");
}
