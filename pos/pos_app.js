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
        const newItemRadio = document.createElement("input")
        newItemRadio.setAttribute("id",item.flavor);
        newItemRadio.setAttribute("name", "flavors");
        newItemRadio.setAttribute("type","radio");
        newItemRadio.setAttribute("value", item.flavor);

        flavorList.appendChild(newItemRadio)
        const newItem = document.createElement("label");
        const newItemName = document.createElement("span")
        const checkmark = document.createElement("span");
        const newItemInstock = document.createElement("span")
        const newItemClass = item.instock ? "flavor-item green" : "flavor-item red" ;

        newItem.setAttribute("class", "container flavor-container");
        newItem.setAttribute("for",item.flavor);
        newItemName.appendChild(document.createTextNode(item.flavor))     

        let newItemInstockText;
        let newItemAmount;
        if (item.instock){
            checkmark.setAttribute("class","checkmark green");
            newItemInstockText = "In Stock";
            checkmark.innerHTML = "&#x2713; ";
            newItemName.setAttribute("class", "flavor-name");
            newItemAmount = document.createElement("span");
            newItemAmount.appendChild(document.createTextNode(item.amount))            
        } else {
            checkmark.setAttribute("class","checkmark red");
            newItemName.setAttribute("class", "flavor-name red");
            newItemInstockText = "Out of Stock";
            checkmark.innerHTML = "&#x2717; ";}

        newItemInstock.setAttribute("class", newItemClass)
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
fetch("milktea.json")
    .then((response) => {
        if (!response.ok){
            return "No Series to show"
        } else {
            return response.json();
        }
    })
    .then((response) => {
        generateAddons(response)
    });

function generateAddons(data){
    data.forEach(addOn => {
        
    });    
}