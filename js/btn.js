const menuBtn = document.querySelector("#menu_btn");
menuBtn.addEventListener("click", function () {
    const nav =  document.querySelector("#nav");
    nav.classList.toggle('active'); /* toggle ativa se tiver desativado, desativa se tiver ativado */

})