
let colorIndicator = document.getElementById("color-indicator");
let colorValue = document.getElementById("ColorCode");
let contentColor = document.getElementById("hexvalue");
const colorPicker = new iro.ColorPicker("#color-picker", {
    width:190, 
    color: "#ffffff"
    
});


colorPicker.on(['color:init', 'color:change'], function(color) 
{
    colorValue.innerHTML = color.hexString;
    colorValue.style.boxShadow = `0px 0px 20px ${color.hexString}`;
    colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.style.boxShadow = `0px 0px 20px ${color.hexString}`;
    contentColor.style.boxShadow = `0px 0px 20px ${color.hexString}`;
    // console.log(color.hexString);                 // you can get hex value from here
});




let h = document.getElementById("hexvalue");
let r = document.getElementById("rgb-value");
  let grd = document.getElementById("gradient-value");

function hexvalue()
{
    do
    {
        h.style.display = "block";
        r.style.display = "none";
        grd.style.display = "none";
    }
    while(p.style.display === "none")
    {
        h.style.display = "block";
        r.style.display = "none";
        grd.style.display = "none";
    };

}  

function rgb()
{
    do{
        r.style.display = "block";
        h.style.display = "none";
        grd.style.display = "none";
    }
    while(s.style.display === "none")
    {
        r.style.display = "block";
        h.style.display = "none";
        grd.style.display = "none";
    };
}

function gradient()
{
    do
    {
        
        grd.style.display = "block";
        h.style.display = "none";
        r.style.display = "none";
    }
    while(t.style.display === "none")
    {
        grd.style.display = "block";
        h.style.display = "none";
        e.style.display = "none";
    };

}

//******** Rgb color section *****************************
let rgbColorValue = document.getElementById("rgbColorCode");
let rgbColorIndicator = document.getElementById("rgbcolor-indicator");

function rgbColor(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var color = 'rgb('+ red +','+ green +','+ blue +')';
    rgbColorValue.innerHTML = color;
    rgbColorIndicator.style.backgroundColor = color;
    rgbColorIndicator.style.boxShadow = `0px 0px 20px ${color}`;
    // document.body.style.backgroundColor = color;
    // document.getElementById('box').value = color;
}

document.getElementById('red').addEventListener('input',rgbColor);
document.getElementById('green').addEventListener('input',rgbColor);
document.getElementById('blue').addEventListener('input',rgbColor);