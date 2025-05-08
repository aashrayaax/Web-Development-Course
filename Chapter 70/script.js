console.log("Hey Ashuu!!!")

let boxes = document.getElementsByClassName("box")

function getrandomcolor() {
    let val1 = Math.ceil(Math.random() * 255)
    let val2 = Math.ceil(Math.random() * 255)
    let val3 = Math.ceil(Math.random() * 255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getrandomcolor()
        e.style.color = getrandomcolor()
        // e.innerText = getrandomcolor()
    })
