const expandableButtons = document.querySelectorAll(".data-expand-button")
console.log(expandableButtons)

expandableButtons.forEach(button => {
    button.addEventListener("click", toggleText)
})

function toggleText(e) {
    console.log("hello")
    const expandableElement = e.target.closest("[data-expandable]")
    expandableElement.closest.toggle("expanded")
    console.log(expandableElement)
}