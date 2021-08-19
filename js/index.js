function onLoadFunction(){
   let bar = document.querySelectorAll('.bar')
   bar.forEach((el,i)=>{
    document.querySelector(`.bar${i}`).style.width = el.attributes[1].value
   })
}