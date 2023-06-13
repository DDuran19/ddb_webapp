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
        const newItem = document.createElement("li");
        const newItemText = `${item.flavor} - ${item.instock ? "In Stock" : "Out of Stock"} (${item.amount})`;
        const newItemClass = item.instock ? "flavor-item" : "flavor-item red" 
        
        newItem.setAttribute("id",item.flavor);
        newItem.setAttribute("class", newItemClass);
        newItem.appendChild(document.createTextNode(newItemText))
        
        flavorList.appendChild(newItem)
    });
}