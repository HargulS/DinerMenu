// Navbar pulldown on click
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})
const target = document.querySelectorAll('.target')
console.log('target',target)
//Flashing Icons
const icons = document.querySelectorAll('.section-1-icons i')
let i=1
//setInterval allows to run function over and over. Takes two arguments. First is the callback function that is executed over and over. Second is the amount of time and is denoted in milliseconds
setInterval(()=>{
    i++
   
    const icon=document.querySelector('.section-1-icons .change')
        icon.classList.remove('change')
        if(i>icons.length){
            icons[0].classList.add('change')
            i=1
        }else{
            icon.nextElementSibling.classList.add('change')
        }
       

},2000)