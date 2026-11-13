
//async ==> assincrono

async function imagemApi(){
  
  let respostaApi =  await fetch("https://dog.ceo/api/breeds/image/random");
let dadosApi = await respostaApi.json();
document.querySelector(".img-dog").src =dadosApi.message;
console.log(dadosApi );
}
imagemApi()
  

function whatZap(){

texto = "Olá! Vim pelo site da nomeApp e gostaria de agendar um horário para o meu pet."
const textoFormatado =encodeURIComponent(texto)
 const url= "https://wa.me/4499942651?text=I" + textoFormatado;
 open(url,'_blank');
 console.log(url);
}
