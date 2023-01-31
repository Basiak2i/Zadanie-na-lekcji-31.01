
const addElementBtn = document.querySelector("button");
const display = document.querySelector("#display");
const podajelement = document.querySelector("#podajelement");
const kolor = document.querySelector("#kolor");
const nazwaelement = document.querySelector("#nazwaelement");
const kolortekst = document.querySelector("#kolortekst");
const range = document.querySelector("#range");
const wyrownanie = document.querySelector('[type="radio"]:checked');

function addElement() {
    const Element = document.createElement(podajelement.value);
    Element.innerHTML += `Element <strong>${podajelement.value}</strong> z tekstem <strong>${nazwaelement.value}<br>`;
    Element.style.padding = range.value + "em" ;
    Element.style.backgroundColor = kolor.value ;
    Element.style.color = kolortekst.value;
    Element.addEventListener('click', function(){
        this.remove();
    });
    display.appendChild(Element);

}

addElementBtn.addEventListener('click', addElement);