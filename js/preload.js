function aviso(){
    var r=confirm("A página a seguir contem um vídeo com luzes piscando em seu plano de fundo, caso deseje continuar, clique em 'OK', caso prefira outro vídeo, em 'Cancelar'");
    if (r==true){
        document.getElementById("bodyParte").innerHTML = '<video src="videos/supernatural-intros-seasons-1-15.mp4" autoplay muted loop id="conteudo"></video>'
    }
    else{
        document.getElementById("bodyParte").innerHTML = '<video src="videos/supernaturalBaby.mp4" autoplay muted loop id="conteudo"></video>'
    }
}

function funcao1()
{
var x;
var r=confirm("Escolha um valor!");
if (r==true)
  {
  x="você pressionou OK!";
  }
else
  {
  x="Você pressionou Cancelar!";
  }
document.getElementById("demo").innerHTML=x;
}