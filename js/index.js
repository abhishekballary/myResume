function onLoadFunction(){
   let bar = document.querySelectorAll('.bar')
   bar.forEach((el,i)=>{
    document.querySelector(`.bar${i}`).style.width = el.attributes[1].value
   })
}


function darkMode(el){
	if(el.classList.contains('fa-sun')){
	el.classList.toggle("fa-moon")
	// document.body.style.backgroundColor = '#000000 !important'
	el.style.color = '#ffffff'
	document.body.style.transition = "all 2s"
	// document.body.style.color = 'blue'
	document.body.classList.remove('body')
	document.body.classList.toggle('darkMode')
	}
	else{
		el.classList.toggle("fa-sun")
	// document.body.style.backgroundColor = '#ffffff !important'
	// el.style.color = '#000000'
	document.body.style.transition = "all 2s"
	// document.body.style.color = 'black'
	document.body.classList.remove('darkMode')
	document.body.classList.toggle('body')
	}
	
	}