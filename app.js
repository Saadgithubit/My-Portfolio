const { API_URL } = require("./config/environment")

function goToOlx() {
    window.location.href = 'https://olx-clone-ebon.vercel.app/'
}
function goToOlxGithub() {
    window.location.href = 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/Olx-Clone-Website'
}

function goToMeme() {
    window.location.href = 'https://meme-generator-five-teal.vercel.app/'
}
function goToMemeGithub() {
    window.location.href = 'https://github.com/Saadgithubit/Smit-Next-JS-Projects/tree/main/meme-generator'
}

function goToWeather() {
    window.location.href = 'https://currentweatherweb.netlify.app'
}
function goToWeatherGithub() {
    window.location.href = 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/weather-app'
}
function goToSapphire() {
    window.location.href = 'https://saphhire.vercel.app/'
}
function goToSapphireGithub() {
    window.location.href = 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/Mernstack-Project'
}

let xIcon = document.getElementById('x-icon')
xIcon.className = 'hide'
let navIcon = document.getElementById('nav-icon')
let icons = false

function showHide() {
    icons = !icons
    console.log(icons);
    if (icons === true) {
        navIcon.className = 'hide'
        xIcon.className = ''
    }
    else {
        xIcon.className = 'hide'
        navIcon.className = ''
    }
}

const receiveEmail = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    const { name, number, email, message } = data
    if (!name && !number && !email && !message) {
        alert('Please Fill Required Fields')
        return
    }
    // alert('Button Is Clicked')
    try {
        const response = await fetch(`${API_URL}/sendemail/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data }),
        })
        const res = await response.json()
        console.log(res);

    } catch (error) {
        console.error('Error submitting form:', error);

    }
}