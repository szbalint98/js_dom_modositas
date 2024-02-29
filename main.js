/*fogjuk meg az elemet*/
const azonelem=document.getElementById("azon")
const azonelem2=document.querySelector("#azon")
console.log(typeof azonelem)
azonelem2.innerHTML="Alakul";




const kartyalista=document.querySelectorAll(".kartya")
console.log(kartyalista)
kartyalista[3].innerHTML+="hozzairunk valamit"

const buttonelem=document.querySelectorAll("button")[0]
console.log(buttonelem)
buttonelem.addEventListener("click",funkcio)
kartyalista[4].q
function funkcio(){
    kartyalista[0].innerHTML+=kartyaelem[3].innerHTML;
}

