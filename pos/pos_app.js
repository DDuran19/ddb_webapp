const CLASS = "class";
const ID = "id";
const SPAN = "span";
const DIV = "div";
const INPUT = "input";
const RADIO = "radio";
const CHECKBOX = "checkbox";
const LABEL = "label"

const flavorList = document.getElementById("flavorList");
fetch("milkteaStock.json")
    .then((response) =>{
        if (!response.ok) {
            return "No items to show";
        };
        return response.json();
           
    })
    .then((response) => {generateFlavor(response)});

function generateFlavor(data){
    data.sort((min, max) => max.amount - min.amount);
    data.forEach(item => {
        const newItemRadio = document.createElement(INPUT)
        newItemRadio.setAttribute(ID,item.flavor);
        newItemRadio.setAttribute("name", "flavors");
        newItemRadio.setAttribute("type",RADIO);
        newItemRadio.setAttribute("value", item.flavor);

        flavorList.appendChild(newItemRadio)
        const newItem = document.createElement(LABEL);
        const newItemName = document.createElement(SPAN)
        const checkmark = document.createElement(SPAN);
        const newItemInstock = document.createElement(SPAN)
        const newItemClass = item.instock ? "flavor-item green" : "flavor-item red" ;

        newItem.setAttribute(CLASS, "container flavor-container");
        newItem.setAttribute("for",item.flavor);
        newItemName.appendChild(document.createTextNode(item.flavor))     

        let newItemInstockText;
        let newItemAmount;
        if (item.instock){
            checkmark.setAttribute(CLASS,"checkmark green");
            newItemInstockText = "In Stock";
            checkmark.innerHTML = "&#x2713; ";
            newItemName.setAttribute(CLASS, "flavor-name");
            newItemAmount = document.createElement(SPAN);
            newItemAmount.appendChild(document.createTextNode(item.amount))            
        } else {
            checkmark.setAttribute(CLASS,"checkmark red");
            newItemName.setAttribute(CLASS, "flavor-name red");
            newItemInstockText = "Out of Stock";
            checkmark.innerHTML = "&#x2717; ";}

        newItemInstock.setAttribute(CLASS, newItemClass)
        newItemInstock.appendChild(document.createTextNode(newItemInstockText));
        newItem.appendChild(newItemName);
        newItem.appendChild(document.createElement("br"));
        newItem.appendChild(checkmark);
        newItem.appendChild(newItemInstock);
        newItem.appendChild(document.createElement("br"));
        if (newItemAmount){newItem.appendChild(newItemAmount)} else{
        newItemRadio.disabled=true
        }
        flavorList.appendChild(newItem)
    });
};

const seriesContainer = document.getElementById("series-container")
const addonContainer = document.getElementById("addon-container")
fetch("milktea.json")
    .then((response) => {
        if (!response.ok){
            return "No Series to show"
        } else {
            return response.json();
        }
    })
    .then((response) => {
        generateMilkteaComponents(response,"series", RADIO, seriesContainer);
        generateMilkteaComponents(response,"addons", RADIO, addonContainer);

    });

function generateMilkteaComponents(response, Type, htmlElement,htmlContainer){
    let i = 0;
    response[Type].forEach((item) => {
        const itemNameRadio = document.createElement(INPUT);
        const itemName = document.createElement(LABEL)
        itemName.appendChild(document.createTextNode(item))
        itemName.setAttribute("for", item)
        itemName.setAttribute(CLASS, "container series-item")
        itemNameRadio.setAttribute(ID,item);
        htmlElement === RADIO ? itemNameRadio.setAttribute("name", Type): false;
        itemNameRadio.setAttribute("type",htmlElement);
        itemNameRadio.setAttribute("value", item);

        htmlContainer.appendChild(itemNameRadio);
        htmlContainer.appendChild(itemName);

        i++
    });    
}