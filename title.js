titleSection1 = document.querySelector('#titleSection1')

title = ['space', 'planet']
idTitle = 0

titleSection1.innerText = title[idTitle]

setInterval(()=>{
    if(idTitle == title.length - 1){
        idTitle = 0
        titleSection1.innerText = title[idTitle]
    }else{
        idTitle++
        titleSection1.innerText = title[idTitle]
    }
},3000)