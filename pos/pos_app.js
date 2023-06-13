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
    data.forEach(item => {
        const newItem = document.createElement("div")

        const newItemName = document.createElement("div");
        const newItemInstock = document.createElement("div");
        const newItemAmount = document.createElement("div");        
        newItemName.appendChild(document.createTextNode(item.flavor));

        const checkmark = document.createElement("span");
        checkmark.innerHTML = "&#x2713; ";
        
        let newItemInstockText;
        if (item.instock){
            checkmark.setAttribute("class","checkmark green");
            newItemInstockText = "In Stock";
        } else {
            checkmark.setAttribute("class","checkmark red");
            newItemInstockText = "Out of Stock";}
        
        newItemInstock.appendChild(checkmark);
        newItemInstock.appendChild(document.createTextNode( newItemInstockText));

        const newItemClass = item.instock ? "flavor-item" : "flavor-item red" ;
        newItemInstock.setAttribute("class", newItemClass)
        newItemAmount.appendChild(document.createTextNode(item.amount))

        newItem.setAttribute("id",item.flavor);
        newItem.setAttribute("class", "flavor-container");
        newItem.appendChild(newItemName)
        newItem.appendChild(newItemInstock)
        newItem.appendChild(newItemAmount)
        flavorList.appendChild(newItem)
    });
}