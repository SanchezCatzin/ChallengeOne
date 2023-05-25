let areaTexto = document.getElementById("texto");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopiar = document.getElementById("btnCopiar");
let textoEncriptado = document.getElementsByClassName("textoEncriptado")[0];
let areaEncriptada = document.getElementsByClassName("areaEncriptada")[0];


texto.addEventListener('input', () =>{
    areaTexto.style.height = "auto";
    areaTexto.style.height = `${areaTexto.scrollHeight}px`;
    }
);

btnEncriptar.addEventListener('click', () => {
    

    let texto = areaTexto.value
    let textoNuevo = ""

    for (let i = 0; i < texto.length; i++) {
        
        if (texto[i] == "a") {
            textoNuevo += "ai";
        }else if(texto[i] == "e") {
            textoNuevo += "enter";
        }else if (texto[i] == "i"){
            textoNuevo += "imes";
        }else if (texto[i] == "o"){
            textoNuevo += "ober";
        }else if (texto[i] == "u"){
            textoNuevo += "ufat";
        }else{
            textoNuevo += texto[i];
        }

    }
        textoEncriptado.innerHTML = textoNuevo;
    }
); 

btnDesencriptar.addEventListener('click', () => {
    
    let texto = areaTexto.value
    let textoNuevo = ""

    textoNuevo = texto.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi, "o").replace(/ufat/gi,"u")

    textoEncriptado.innerHTML = `<p>${textoNuevo}<p>`;

});

btnCopiar.addEventListener('click', async () => {
    let texto = document.getElementsByClassName("textoEncriptado")[0].innerText
    /*let item = new ClipboardItem({'text/plain': new Blob([texto], {type: 'text/plain'}) });
    try{
        await navigator.clipboard.write([item]);
    }catch(error){
        console.error('Ha ocurrido un herror')
    } */
    await navigator.clipboard.writeText(texto)
});




