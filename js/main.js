const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) { document.body.classList.add('dark') } else { document.body.classList.remove('dark') }

// Select check box
const dtoggle = document.querySelector('.check');
const label = document.querySelector('label');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
// Check if dark class is applied
let active = document.body.classList.contains('dark');
console.log(active)
if (active) {
    label.innerHTML = 'Light';
    sun.classList.add('transparent')
    dtoggle.click();
}
if (!active) {
    label.innerHTML = 'Dark';
    sun.classList.remove('transparent')
}
// check.checked = true;
// dtoggle.disabled = false;
dtoggle.addEventListener('click', () => {
    console.log(dtoggle.checked)
        // Change label text
    if (dtoggle.checked) {
        label.innerHTML = 'Light';
        sun.classList.add('transparent')
            // dtoggle.checked = true;
        dtoggle.click();
    }
    if (!dtoggle.checked) {
        label.innerHTML = 'Dark';
        sun.classList.remove('transparent')
            // Use Click method
        dtoggle.click()
    }
    // Toggle dark theme
    document.body.classList.toggle('dark')
});

// Paragraph
let paragraph = document.querySelector('.text')
    //console.log(paragraph.innerHTML)
    //console.log(paragraph.innerHTML.length)
let str = paragraph.innerText;
// Insert New Line Function
function newLine(str, maxLength) {
    // Empty line
    var line = "";
    // Calc number of lines
    var numOfLines = Math.floor(str.length / maxLength);
    // For loop
    for (var i = 0; i < numOfLines + 1; i++) {
        // Add text string to line
        line += str.substr(i * maxLength, maxLength);
        // Brake
        if (i !== numOfLines) { line += "\n "; }
    }

    // return buff;
    // console.log(line)
    paragraph.innerText = line;
}
// Run
newLine(str, 50)