const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", function() {
    const newColor = input.value;
    if (!isValidColor(newColor)) {
        return;
    }
    document.body.style.backgroundColor = newColor;
});

function isValidColor(color) {
    const validColors = ["red", "green", "blue", "yellow", "pink", "purple"]
    return validColors.includes(color.toLowerCase());
}
