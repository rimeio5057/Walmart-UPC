

// "icons": {
//     "48": "icons/border-48.png"
//   },

// image.src  = './clip.png'
// document.querySelector('#button secondary-info-margin-right secondary-margin-bottom display-inline-block valign-middle button--link').appendChild(image)
var data = document.getElementById('item').innerText;

var obj = JSON.stringify(data)
var jsonObj = JSON.parse(obj)
var obj = JSON.parse(jsonObj)

var upc = obj.item.product.buyBox.products[0].upc



function copyText(){
    var input = document.getElementById("js-global-footer-wrapper").appendChild(document.createElement("input"));
    input.value = upc;
    input.select();
    document.execCommand("copy");
    input.parentNode.removeChild(input);
}

document.body.onload = addElement;


function addElement(){
    var UPCcopy = document.createElement("BUTTON");
    UPCcopy.innerHTML = "Copy UPC";
    UPCcopy.addEventListener("click", copyText)

    UPCcopy.setAttribute("style","vertical-align: top; width: 85px; height: 30px; padding: 0; border-radius:2em; font-size: 14px; color: white; text-align: center; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25); background: #2ecc71; border: 0; border-bottom: 2px solid #28be68; cursor: pointer; -webkit-box-shadow: inset 0 -2px #28be68; box-shadow: inset 0 -2px #28be68;")
    var element = document.getElementById("add-on-atc-container");
    element.prepend(UPCcopy)
}

