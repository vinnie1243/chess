function make() {
    var s = window.innerHeight / 8
    window.sessionStorage.setItem("s", s)
    var off 
    off = s * 8
    off = window.innerWidth - off
    off = off / 2
    var s2 = window.localStorage.getItem("switch")
    if(s2 == undefined) {
        white()
    }
    var pieces = []
    if(s2 == "white") {
        pieces = [
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "queenWhite", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "kingBlack", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
        ]
    } else if(s2 == "black") {
        pieces = [
            ["rookWhite", "knightWhite", "bishopWhite", "queenWhite", "kingWhite", "bishopWhite", "knightWhite", "rookWhite"], 
            ["pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite"],  
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack"], 
            ["rookBlack", "knightBlack", "bishopBlack", "queenBlack", "kingBlack", "bishopBlack", "knightBlack", "rookBlack"], 
        ]
    }
    window.sessionStorage.setItem("parr", JSON.stringify(pieces))
    genboard(pieces, s)
    var c = document.getElementById("con")
    c.style.gridTemplateColumns = `${s}px ${s}px ${s}px ${s}px ${s}px ${s}px ${s}px ${s}px`
}  

function genboard(pieces, s) {
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
}

function kingchck() {
    var pieces = JSON.parse(window.sessionStorage.getItem("parr"))
    //console.log(pieces)
    var k1 = 0
    var k2 = 0
    for(var l = 0; l < pieces.length; l++) {
        for(var i = 0; i < pieces[l].length; i++) {
            if(pieces[l][i] == "kingWhite") {
                k1 = 1
            }
            if(pieces[l][i] == "kingBlack") {
                k2 = 1
            }
        }
    }
    if(k1 == 1 && k2 == 1) {

    }
    if(k1 == 0) {
        window.alert("Black Wins")
    }
    if(k2 == 0) {
        window.alert("White Wins")
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
    //regen()
    del(e)
    var el = e.target
    var color = cchck(el.src)
    var s = window.localStorage.getItem("switch")
    try {
        var arr = gen(el.src, e.target.parentElement.id, color)
    } catch (error) {
        
    }

    
}

async function move(e) {
    var ele = e.target.parentElement
    var c = 0
    while (c == 0) {
        try {
            if(ele.parentElement.id != "con") {
                ele = ele.parentElement
            } else {
                c = 1
            }
        } catch (error) {c = 1}
    }
    var sp = window.sessionStorage.getItem('sp')
    sp = document.getElementById(sp)
    if(ele.children[0] != document.head){
        if(ele.children.length != 0) {
            ele.children[0].remove()
        } 
    }
    ele.appendChild(sp)
    //console.log(sp)
    //kingchck()
    uparr()
}
 
function uparr() {
    //first move array
    var arr = JSON.parse(window.sessionStorage.getItem("arr2"))
    //piece array
    var pieces = JSON.parse(window.sessionStorage.getItem("parr"))
    //old position
    var opos = arr[0][6]
    //new position array
    var npa = []
    //gets all new positions and pushes them to the new position array
    for(var i = 0; i < arr.length; i++) {
        var np = arr[i][0]
        npa.push(np)
    }
    //new position variable
    var npos 
    //piece variable
    var piece = arr[0][4]
    //color variables
    var color = arr[0][1]
    var color2
    //capitalieses color
    if(color == "white") {
        color2 = "White"
    } else {
        color2 = "Black"
    }
    //
    for(var i = 0; i < npa.length; i++) {
        //gets one of the squares from new position array
        var t = document.getElementById(npa[i])
        //checks if that square has children
        if(t.children.length == 1) {
            if(cchck(t.children[0].src) == color) {
                var npi = pichck(t.children[0].src, piece)
                if(npi == piece) {
                    npos = t.id
                }
            }
        }
    }
    var old = fig(opos)
    npos = Number.parseInt(npos)
    var ne = fig(npos)
    var o = []
    o.push(old.substring(0, 1))
    o.push(old.substring(2))
    var n = []
    n.push(ne.substring(0, 1))
    n.push(ne.substring(2))
    var o1 = o[0]
    o1 = Number.parseInt(o1)
    var o2 = o[1]
    o2 = Number.parseInt(o2)
    var n1 = n[0]
    n1 = Number.parseInt(n1)
    var n2 = n[1]
    n2 = Number.parseInt(n2)  
    pieces[o1][o2] = ""
    pieces[n1][n2] = piece + color2
    window.sessionStorage.setItem("parr", JSON.stringify(pieces))
    //console.log(pieces)
    //regen()
}

function r() {
    location.reload()
}

function fig(pos) {
    switch(pos) {
        case 1:
            return "0&0"
        break;
        case 2:
            return "0&1"
        break;
        case 3:
            return "0&2"
        break;
        case 4:
            return "0&3"
        break;
        case 5:
            return "0&4"
        break;  
        case 6:
            return "0&5"
        break
        case 7:
            return "0&6"
        break;
        case 8:
            return "0&7"
        break
        case 9:
            return "1&0"
        break
        case 10:
            return "1&1"
        break;
        case 11:
            return "1&2"
        break
        case 12:
            return "1&3"
        break;
        case 13:
            return "1&4"
        break
        case 14:
            return "1&5"
        break
        case 15:
            return "1&6"
        break;
        case 16:
            return "1&7"
        break;
        case 17:
            return "2&0"
        break;
        case 18:
            return "2&1"
        break
        case 19:
            return "2&2"
        break
        case 20:
            return "2&3"
        break
        case 21:
            return "2&4"
        break
        case 22:
            return "2&5"
        break
        case 23:
            return "2&6"
        break
        case 24:
            return "2&7"
        break
        case 25:
            return "3&0"
        break
        case 26:
            return "3&1"
        break
        case 27:
            return "3&2"
        break
        case 28:
            return "3&3"
        break
        case 29:
            return "3&4"
        break
        case 30:
            return "3&5"
        break
        case 31:
            return "3&6"
        break
        case 32:
            return "3&7"
        break
        case 33:
            return "4&0"
        break
        case 34:
            return "4&1"
        break
        case 35:
            return "4&2"
        break
        case 36:
            return "4&3"
        break
        case 37:
            return "4&4"
        break
        case 38:
            return "4&5"
        break
        case 39:
            return "4&6"
        break
        case 40:
            return "4&7"
        break
        case 41:
            return "5&0"
        break
        case 42:
            return "5&1"
        break
        case 43:
            return "5&2"
        break
        case 44:
            return "5&3"
        break
        case 45:
            return "5&4"
        break
        case 46:
            return "5&5"
        break
        case 47:
            return "5&6"
        break
        case 48:
            return "5&7"
        break
        case 49:
            return "6&0"
        break
        case 50:
            return "6&1"
        break 
        case 51:
            return "6&2"
        break
        case 52:
            return "6&3"
        break
        case 53:
            return "6&4"
        break
        case 54:
            return "6&5"
        break
        case 55:
            return "6&6"
        break
        case 56:
            return "6&7"
        break
        case 57:
            return "7&0"
        break
        case 58:
            return "7&1"
        break
        case 59:
            return "7&2"
        break
        case 60:
            return "7&3"
        break
        case 61:
            return "7&4"
        break
        case 62:
            return "7&5"
        break
        case 63:
            return "7&6"
        break
        case 64:
            return "7&7"
        break
    }
}

function pichck(src) {
    if(src.includes("knight") == true) {
        return "knight"
    } else if(src.includes("queen") == true) {
        return "queen"
    } else if(src.includes("rook") == true) {
        return "rook"
    } else if(src.includes("pawn") == true) {
        return "pawn"
    } else if(src.includes("king") == true) {
        return "king"
    } else if(src.includes("bishop") == true) {
        return "bishop"
    }
}

function fix() {
    var arr = document.getElementsByClassName("take")
    for(var i = 0; i < arr.length; i++) {
        arr[i].removeEventListener("click", addeve, true)
        arr[i].classList.remove("take")
    }
}

function regen() {
    var con = document.getElementById("con")
    while(con.children.length > 0) {
        con.children[0].remove()
    }
    var parr = JSON.parse(window.sessionStorage.getItem("parr"))
    var s = window.sessionStorage.getItem("s")
    console.log(parr)
    genboard(parr, s)
}