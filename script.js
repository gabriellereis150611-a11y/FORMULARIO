const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbxyQgmdl7JMrfxaxWLf6sVm5WMNHGH9G3elsEsRr5CiyJfGUSDe5T3y4XYUS_uuWEvf8w/exec"

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function (evento){
    evento.preventDefault();

    aviso.textContent = "Enviando..."

    fetch(URL_PLANILHA, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })
     .then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });


})
