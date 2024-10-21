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
    try {
        const response = await Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,
            Username: 'saad45257@gmail.com',
            Password: "4AECA7B1137F1EE16DEC0B90BB37B96FF4FE",
            To: 'saad45257@gmail.com',
            From: 'saad4525789@gmail.com',
            Subject: 'Your Portfolio Contact Form',
            Body: `Name:${name} <br> Email:${email} <br> Contact No: ${number} <br> Message: ${message}`
        });
        alert('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        alert(`Failed to send email: ${error.message || error}`);
    }

}
