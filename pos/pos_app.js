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
        const newItem = document.createElement("div")

        const newItemName = document.createElement("div");
        newItemName.appendChild(document.createTextNode(item.flavor));

        const newItemInstock = document.createElement("div");
        const newItemAmount = document.createElement("div");        
        const checkmark = document.createElement("span");
        
        
        
        let newItemInstockText;
        if (item.instock){
            checkmark.setAttribute("class","checkmark green");
            newItemInstockText = "In Stock";
            checkmark.innerHTML = "&#x2713; ";
            newItemName.setAttribute("class", "flavor-name");
            newItemAmount.appendChild(document.createTextNode(item.amount));
        } else {
            checkmark.setAttribute("class","checkmark red");
            newItemName.setAttribute("class", "flavor-name red");
            newItemInstockText = "Out of Stock";
            checkmark.innerHTML = "&#x2717; ";}
        
        newItemInstock.appendChild(checkmark);
        newItemInstock.appendChild(document.createTextNode( newItemInstockText));

        const newItemClass = item.instock ? "flavor-item green" : "flavor-item red" ;
        newItemInstock.setAttribute("class", newItemClass)
        

        newItem.setAttribute("id",item.flavor);
        newItem.setAttribute("class", "flavor-container");
        newItem.appendChild(newItemName)
        newItem.appendChild(newItemInstock)
        newItem.appendChild(newItemAmount)
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
    })
function generateAddons(data){
    data.forEach(addOn => {
        
    });    
}