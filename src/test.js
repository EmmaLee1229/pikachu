import string from './css'

const player ={
    id : undefined,
    time : 100,
    n :1,
    ui:{
        demo : document.querySelector('.demo'),
        demo2 : document.querySelector('.demo2')
    },
    init:()=>{
        player.play()
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.bindEvents()
    },
    events:{
        '#btnPause ':'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents:()=>{
        // const btnPause = document.querySelector('#btnPause')
        // btnPause.onclick=player.pause
        // const btnPlay = document.querySelector('#btnPlay')
        // btnPlay.onclick =player.play
        // const btnSlow = document.querySelector('#btnSlow')
        // btnSlow.onclick =player.slow
        // const btnNormal = document.querySelector('#btnNormal')
        // btnNormal.onclick =player.normal
        // const btnFast = document.querySelector('#btnFast')
        // btnFast.onclick =player.fast
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
     run :()=>{
        player.n= player.n+1
        if(player.n >string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play :()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause : ()=>{
        window.clearInterval(player.id)
    },

    slow :()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal :()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast :()=>{
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()
