import { conectaapi } from "./conectaapi.js";
import constroiCard from "./mostrarVideos.js";



async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca =await conectaapi.buscaVideo(dadosDePesquisa);
    
    const lista= document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento=> lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

}



const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click",evento =>buscarVideo(evento));