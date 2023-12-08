function make() {
    var s = window.innerHeight / 8
    var off 
    off = s * 8
    off = window.innerWidth - off
    off = off / 2
    var s2 = window.localStorage.getItem("switch")
    var pieces = []
    if(s2 == "white") {
        pieces = [
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "knightWhite", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "knightBlack", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
        ]
    } else if(s2 == "black") {
        pieces = [
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "knightWhite", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "knightBlack", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""],    
        ]
    }
    window.sessionStorage.setItem("parr", JSON.stringify(pieces))
    var num = 1
    for(var j = 0; j < 8; j++) {
        for(var i = 0; i < 8; i++) {
            var e = document.createElement("div")
            if(j % 2 == 0) {
                if(i % 2 == 0) {
                    e.style.backgroundColor = "white"
                } else  {
                    e.style.backgroundColor = "#43464a"
                }
            } else {
                if(i % 2 == 0) {
                    e.style.backgroundColor = "#43464a"
                } else {   
                    e.style.backgroundColor = "white"
                }
            }
            e.style.width = `${s}px`
            e.style.height = `${s}px`
            e.classList.add("noselect")
            e.id = `${num}`
            e.style.textAlign = "center"
            var img = document.createElement("img")
            if(document.getElementById(pieces[j][i]) != undefined) {
                var im = document.getElementById(`${pieces[j][i]}`)
                img.src = im.src
                img.style.width = `${s * 0.9}px`
                img.style.height = `${s * 0.9}px`   
                img.style.padding = `${s * 0.05}px`
                var color = cchck(pieces[j][i])
                img.classList.add(color)
                img.classList.add("mouse")
                img.id = `${num}$`
                img.draggable = false
                img.addEventListener("click", (e) => {
                    clic(e)
                    window.sessionStorage.setItem("sp", e.target.id)
                }, true)
                e.appendChild(img)
            } 
            var c = document.getElementById("con")
            c.appendChild(e)
            num++
        }
    }
    var c = document.getElementById("con")
    c.style.gridTemplateColumns = `${s}px ${s}px ${s}px ${s}px ${s}px ${s}px ${s}px ${s}px`
}  

function kingchck() {
    var black = 0
    var white = 0
    for(var i = 1; i < 65; i++) {
        var e = document.getElementById(i)
        if(e.children.length == 1) {
            if(e.children[0].src == "http://localhost:5500/Chess/Media/Images/kingBlack.png") {
                black = 1
            } else if(e.children[0].src == "http://localhost:5500/Chess/Media/Images/kingWhite.png") {
                white = 1
            }
        }
    }
    if(white == 0) {        
        window.alert("Black Wins")
        location.reload()
    } else if(black == 0) {
        window.alert("White Wins")
        location.reload()
    }
}

function cchck(piece) { 
    var color 
    for(var i = 0; i < piece.length; i++) {
        if(piece.charAt(i) == "W") {
            color = "white"
        } else if(piece.charAt(i) == "B") {
            color = "black"
        }
    }
    return color 
}

function white() {
    window.localStorage.setItem("switch", "white")
    location.reload()
}

function black() {
    window.localStorage.setItem("switch", "black")
    location.reload()
}

function clic(e) {
    del(e)
    var el = e.target
    var color = cchck(el.src)
    var pos = e.target.parentElement.id
    var s = window.localStorage.getItem("switch")
    var arr = gen(el.src, e.target.parentElement.id, color)

}

function move(e) {
    var ele = e.target.parentElement
    //console.log(ele, ele.parentElement)
    var c = 0
    while (c == 0) {
        if(ele.parentElement.id != "con") {
            ele = ele.parentElement
        } else {
            c = 1
        }
    }
    //console.log(ele)
    var sp = window.sessionStorage.getItem('sp')
    sp = document.getElementById(sp)
    //console.log(sp)
    if(ele.children.length != 0) {
        ele.children[0].remove()
    }
    ele.appendChild(sp)
}

function uparr() {
    var pieces = window.sessionStorage.getItem("pieces")
}

function r() {
    location.reload()
}