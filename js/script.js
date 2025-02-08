const cursor = document.querySelector(".cursor"),
blob = document.querySelectorAll(".blob")

document.addEventListener("mousemove", (element) =>{
    cursor.style.left = `${element.pageX}px`
    cursor.style.top = `${element.pageY}px`

    blob.forEach((e) =>{
        let move_value = e.getAttribute("trf")
        let x = (element.clientX * move_value) / 50
        let y = (element.clientY * move_value) / 50

        e.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})