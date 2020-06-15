

var intro = document.querySelector(".intro")
    


        function typeWriter(element) {
            var textoArray = 0;
            var textoArray = element.innerHTML.split('');
            element.innerHTML = '';
            textoArray.forEach((letra, i) => {
              setTimeout(() => element.innerHTML += letra, 65 * i);
               });
             }

        typeWriter (intro);

