
let colorIndicator = document.getElementById('color-indicator');
let colorValue = document.getElementById('ColorCode');
const colorPicker = new iro.ColorPicker("#color-picker", {
    width:190, 
    color: "#ffffff"
    
});
var hex = colorPicker.color.hexString;
// console.log(hex); // hex = "#ff0000"

colorPicker.on('color:change', function(color) {
    colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.style.boxshadow = color.hexString;
});


colorPicker.on(['color:init', 'color:change'], function(color) {
// log the current color as a HEX string
colorValue.innerHTML = color.hexString;
colorIndicator.style.backgroundColor = colorValue;
console.log(color.hexString);                 // you cane get hex value from here
});


//*******************    #to do     **************************
function myFunction() {
    colorValue.innerHTML = color.hexString;
    document.getElementById("ColorCode").style.boxShadow = `10px 20px 30px ${colorValue}`;

  }

function toggle()
{
    let p = document.getElementById("hexvalue");
    let c = document.getElementById("color");
    if(p.style.display === "none")
    {
        p.style.display = "block";
        c.style.display = "flex";
        c.style.justifyContent = "center";
        c.style.alignItems = "center";
    }
    else
    {
        p.style.display = "none";
    }
}  