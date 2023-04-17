planetImg = document.querySelector('#planet')
titlePlanet = document.querySelector('.titlePlanet')

namePlanet = ['mercurio', 'venus', 'terra', 'marte', 'jupiter', 'saturno', 'urano', 'netuno']
planetUrl = ['planets/mercurio.png', 'planets/venus.png', 'planets/terra.png', 'planets/marte.png', 'planets/jupiter.png', 'planets/saturno.jpg', 'planets/urano.png', 'planets/netuno.png']
idPlanet = 0

planetImg.src = planetUrl[idPlanet]
titlePlanet.innerText = namePlanet[idPlanet]
setTimeout(()=>{
    planetImg.style.opacity = 0
    titlePlanet.style.opacity = 0
}, 2000)

setInterval(()=>{
    if(idPlanet == namePlanet.length - 1){
        idPlanet = 0
        planetImg.style.opacity = 1
        titlePlanet.style.opacity = 1
        planetImg.src = planetUrl[idPlanet]
        titlePlanet.innerText = namePlanet[idPlanet]
        setTimeout(()=>{
            planetImg.style.opacity = 0
            titlePlanet.style.opacity = 0
        }, 2000)
    }else{
        idPlanet++
        planetImg.style.opacity = 1
        titlePlanet.style.opacity = 1
        planetImg.src = planetUrl[idPlanet]
        titlePlanet.innerText = namePlanet[idPlanet]
        setTimeout(()=>{
            planetImg.style.opacity = 0
            titlePlanet.style.opacity = 0
        }, 2000)
    }
},3000)