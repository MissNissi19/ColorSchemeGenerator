let colorPicker = document.getElementById("color-picker")
let schemeSelector = document.getElementById("scheme-selector")
let getColorBtn = document.getElementById("get-color-btn")

let colorCode = document.querySelectorAll("color-code")
getColorBtn.addEventListener("click", function(event){
    event.preventDefault()
    
    console.log(colorPicker.value)
    let colorPickerValue = colorPicker.value.split("#")[1]
    let schemeSelectorValue = schemeSelector.value 
    let url = `https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${schemeSelectorValue}&count=5`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let colorArray = data.colors
            let htmlString = ""
            for (let color of colorArray) {
                    htmlString += 
                    `
                    <div class = "element">
                         <div class="wrapper" style="background-color:${color.hex.value}"> </div>
                         <p class="color-code">${color.hex.value}</p>  
                   </div>
                   `
            }
            document.getElementById("container2").innerHTML = htmlString 
        })
})

document.addEventListener("click", function(event){
    // console.log(event.target.tagName)
    if(event.target.tagName === "P") {
        const colorValue = event.target.innerHTML;
         navigator.clipboard.writeText(colorValue)
    }
})



