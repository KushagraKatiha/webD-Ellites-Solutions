const body = document.querySelector('body')
const input_box = document.getElementsByTagName('input')[0]
const button = document.getElementsByTagName('input')[1]
const form = document.querySelector('form')

const ol = document.createElement('ol')
body.appendChild(ol)

const addTask = () => {
    const li = document.createElement('li')
    li.style.color = "white"
    li.innerHTML = input_box.value
    ol.appendChild(li)
    input_box.value = ""


    // Remove 
    // form.removeChild(input_box)
}

button.addEventListener('click', addTask)
