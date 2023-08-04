
let colorIndicator = document.getElementById("color-indicator");
let colorValue = document.getElementById("ColorCode");
const colorPicker = new iro.ColorPicker("#color-picker", {
    width:190, 
    color: "#ffffff"
    
});


colorPicker.on(['color:init', 'color:change'], function(color) 
{
    colorValue.innerHTML = color.hexString;
    colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.style.boxShadow = `0px 0px 20px ${color.hexString}`;
    // console.log(color.hexString);                 // you can get hex value from here
});




  let p = document.getElementById("hexvalue");
//   let c = document.getElementById("choose");
  let s = document.getElementById("hexvalue2");
  let t = document.getElementById("hexvalue3");

function hexvalue()
{
    do
    {
        p.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        s.style.display = "none";
        t.style.display = "none";
    }
    while(p.style.display === "none")
    {
        p.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        s.style.display = "none";
        t.style.display = "none";
    };

}  

function rgb()
{
    do{
        s.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        p.style.display = "none";
        t.style.display = "none";
    }
    while(s.style.display === "none")
    {
        s.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        p.style.display = "none";
        t.style.display = "none";
    };
}

function gradient()
{
    do
    {
        
        t.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        p.style.display = "none";
        s.style.display = "none";
    }
    while(t.style.display === "none")
    {
        t.style.display = "block";
        // c.style.display = "flex";
        // c.style.justifyContent = "center";
        // c.style.alignItems = "center";
        p.style.display = "none";
        s.style.display = "none";
    };

}