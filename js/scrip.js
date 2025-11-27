$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.menu-principal').addClass("sticky");
        } else {
            $('.menu-principal').removeClass("sticky");
        }
    });

    var typed = new Typed('#typed',{
        strings:["#BAﾃ前S", "#CONTENEDORES", "#SERVICIOS", "#CASETAS"],
        backSpeed: 70,
        typeSpeed: 70,
        loop: true,
        // shuffle: true
    });
});

window.onload = function(){
    document.getElementById("anio").innerText = new Date().getFullYear();
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100 ) {
        toTop.classList.add("active");
    }else {
        toTop.classList.remove("active");
    }
})

/* SCROOLL ACTIVATED NUMBER COUNTER */
//Obtener los elementos del DOM
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

//Variable que rastrea si los contadores se han activado
let activated = false;

//Agregar evento de desplazamiento a la pﾃ｡gina
window.addEventListener("scroll", () => {
    //Si la pﾃ｡gina se desplaza hasta el elemento contenedores y los contadores no estﾃ｡n activados.
    if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false){
        //Seleccionamos todos los contadores
        counters.forEach(counter => {
            //set counter values to zero
            counter.innerText = 0;
            //set count variable to track the count
            let count = 0;

            //update count function
            function updateCount() {
                //get counter target number to count to
                const target = parseInt(counter.dataset.count);
                //as long as the count is below the target number
                if(count < target){
                    //increment the count
                    count++;
                    //set the counter text to the count
                    counter.innerText = count;
                    //repeat this every 10 milliseconds
                    setTimeout(updateCount, 5); //count speed
                    //and when the target is reached
                } else {
                    //set the counter text to the target number 
                    counter.innerText = target;
                }
            }
            //run the function initialy
            updateCount();
            //set activated to true
            activated = true;
        });
    }else if(pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true){
        //select all counters
        counters.forEach(counter => {
            //set counter text back to zero
            counter.innerText = 0;
        });
        //set activated to false
        activated = false;
    }
});