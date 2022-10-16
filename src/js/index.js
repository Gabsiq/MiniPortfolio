const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if(aba.classList.contains("selected")){
            return;
        }

        selectAba(aba) 

        ShowInfo(aba)

    });
});

function selectAba(aba){
    const abaSelected = document.querySelector(
        ".aba.selected");
        abaSelected.classList.remove("selected");

        aba.classList.add("selected");
}

function ShowInfo(aba){
     const informacaoSelected = document.querySelector(".informacao.selected");
            
     informacaoSelected.classList.remove("selected");

     const idInfoAba = `info-${aba.id}`

     const infoShow = document.getElementById(idInfoAba)
           infoShow.classList.add("selected")
}