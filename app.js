function goToOlx(){
    window.location.href = 'https://olx-clone-ebon.vercel.app/'
}
function goToOlxGithub(){
    window.location.href = 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/Olx-Clone-Website'
}

function goToMeme(){
    window.location.href = 'https://meme-generator-five-teal.vercel.app/'
}
function goToMemeGithub(){
    window.location.href = 'https://github.com/Saadgithubit/Smit-Next-JS-Projects/tree/main/meme-generator'
}

function goToWeather(){
    window.location.href = 'https://currentweatherweb.vercel.app/'
}
function goToWeatherGithub(){
    window.location.href = 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/weather-app'
}

let xIcon = document.getElementById('x-icon')
xIcon.className = 'hide'
let navIcon = document.getElementById('nav-icon')
let icons = false

function showHide(){
    icons = !icons
    console.log(icons);
    if(icons === true){
        navIcon.className = 'hide'
        xIcon.className = ''
    }
    else{
        xIcon.className = 'hide'
        navIcon.className = ''
    }
}