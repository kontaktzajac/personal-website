function zmiana(view)
{
  var wyswietl = view;

  document.getElementById("o-mnie").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("kontakt").style.display = "none";
  document.getElementById("start").style.display = "none";

  document.getElementById(wyswietl).style.display = "block";

  if(wyswietl=="o-mnie")
  {
    setTimeout(function(){ document.getElementById("myDescriptionID").style.display = "block"; }, 2000);
  }

}

function schowaj()
{
  document.getElementsByClassName("nav__cb")[0].checked = false;
}