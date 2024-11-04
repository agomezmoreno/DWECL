window.onload = () => {
    let pantalla = document.getElementById("pantalla");
    let botones = document.getElementById("botones");

    let valorActual = "";
    let operacion = "";
    let valorPrevio = "";

    botones.addEventListener("click", (e) => {
        const boton = e.target.textContent;

        if (boton >= "0" && boton <= "9") { 
            valorActual += boton;
            pantalla.value = valorPrevio + "" + operacion + "" + valorActual;

        } else if (boton === "+" || boton === "-" || boton === "x" || boton === "/") { 
            if (valorActual !== "") {
                operacion = boton;
                valorPrevio = valorActual;
                valorActual = "";
                pantalla.value = valorPrevio + "" + operacion;

            }

        } else if (boton === "c") { 
            valorActual = "";
            valorPrevio = "";
            operacion = "";
            pantalla.value = "";

        } else if (boton === "=") { 
            let resultado;
            const num1 = parseFloat(valorPrevio);
            const num2 = parseFloat(valorActual);

            switch (operacion) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "x":
                    resultado = num1 * num2;
                    break;
                case "/":
                    resultado = num1 / num2;
                    break;
            }
            
            pantalla.value = resultado;
            valorActual = resultado;
            valorPrevio = "";
            operacion = "";

        } else if (boton === '.') { 
            valorActual += '.';
            pantalla.value = valorPrevio + "" + operacion + "" + valorActual;
        }
    });
};
