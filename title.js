titleSection1 = document.querySelector('#titleSection1')

title = ['space', 'planet']
idTitle = 0

titleSection1.innerText = title[idTitle]
setTimeout(()=>{
    titleSection1.style.opacity = 0
},2000)

setInterval(()=>{
    if(idTitle == title.length - 1){
        idTitle = 0
        titleSection1.style.opacity = 1
        titleSection1.innerText = title[idTitle]
        setTimeout(()=>{
            titleSection1.style.opacity = 0
        },2000)
    }else{
        idTitle++
        titleSection1.style.opacity = 1
        titleSection1.innerText = title[idTitle]
        setTimeout(()=>{
            titleSection1.style.opacity = 0
        },2000)
    }
},3000)