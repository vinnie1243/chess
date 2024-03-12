function make() {
    window.sessionStorage.setItem("50Rule", 0)
    window.sessionStorage.setItem("move", "w")
    window.sessionStorage.setItem("moveNum", 0)
    window.sessionStorage.setItem("ep", "-")
    window.sessionStorage.setItem("lB", 1)
    window.sessionStorage.setItem("rB", 1)
    window.sessionStorage.setItem("lW", 1)
    window.sessionStorage.setItem("rW", 1)
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
            ["rookBlack", "knightBlack", "bishopBlack", "queenBlack", "kingBlack", "bishopBlack", "knightBlack", "rookBlack"], 
            ["pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack"],            
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite"],
            ["rookWhite", "knightWhite", "bishopWhite", "queenWhite", "kingWhite", "bishopWhite", "knightWhite", "rookWhite"], 
        ]
    } else if(s2 == "black") {
        pieces = [
            ["rookWhite", "knightWhite", "bishopWhite", "kingWhite", "queenWhite", "bishopWhite", "knightWhite", "rookWhite"], 
            ["pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite"],  
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack"], 
            ["rookBlack", "knightBlack", "bishopBlack", "kingBlack", "queenBlack", "bishopBlack", "knightBlack", "rookBlack"], 
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
    if(piece.includes("Dot")) {
        color = "green"
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
    var cl = classgrab(e.target)
    if(brckChck(e, cl) == 1) {
        stop()
        return
    }
    //regen()
    del()
    var el = e.target
    var color = cchck(el.src)
    var s = window.localStorage.getItem("switch")
    var arr = gen(el.src, e.target.parentElement.id, color)
}

function brckChck(e, cl) {
    e = document.getElementById(e.target.id)
    if(cl != classgrab(e)) {
        return 1
    }
    return 0
}

function classgrab(tar) {
    if(tar.classList.contains("white")) {
        return "white"
    } else {
        return "black"
    }
}

async function move(e) {
    //fen string stuff will uncomment after fix
    var toMove = window.sessionStorage.getItem("move")
    if(toMove == "w") {
        toMove = "b"
    } else if(toMove == "b") {
        toMove = "w"
    }
    var rule = JSON.parse(window.sessionStorage.getItem("50Rule"))
    //add 50 move rule logic
    window.sessionStorage.setItem("move", toMove)
    var moveNum = JSON.parse(window.sessionStorage.getItem("moveNum"))
    moveNum += 1
    //console.log(moveNum)
    window.sessionStorage.setItem("moveNum", moveNum)
    var check = 0
    var arr2 = JSON.parse(window.sessionStorage.getItem("arr2"))
    for(var i = 0; i < arr2.length; i++) {
        console.log(arr2[i][5])
        if(arr2[i][5] == "pawnMove2") {
            var color = arr2[i][1]
            var sw = arr2[i][2]
            if(sw == "white" && color == "white") {
                check = 1
                var pos = arr2[i][0]
                var ep = fig(pos + 8)
                window.sessionStorage.setItem("ep", stand(ep))
            } else if(sw == "white" && color == "black") {
                check = 1
                var pos = arr2[i][0]
                var ep = fig(pos - 8)
                window.sessionStorage.setItem("ep", stand(ep))
            } else if(sw == "black" && color == "white") {
                check = 1
                var pos = arr2[i][0]
                var ep = fig(pos - 8)
                window.sessionStorage.setItem("ep", stand(ep))
            } else if(sw == "black" && color == "black") {
                check = 1
                var pos = arr2[i][0]
                var ep = fig(pos + 8)
                window.sessionStorage.setItem("ep", stand(ep))
            }
        }
    }
    if(check == 0) {
        window.sessionStorage.setItem("ep", "-")
    }
    var ele = e.target.parentElement
    var c = 0
    while (c == 0) {
        if(ele.parentElement.id != "con") {
            ele = ele.parentElement
        } else {
            c = 1
        }
    }
    var sp = window.sessionStorage.getItem('sp')
    sp = document.getElementById(sp)
    if(ele.children[0] != document.head){
        if(ele.children.length != 0) {
            ele.children[0].remove()
        } 
    }
    ele = document.getElementById(ele.id)
    ele.appendChild(sp)
    change()
    kingchck()
    castle()
    uparr(ele)
    regen()
}
 
async function uparr(ele) {
    var promo = 0
    //first move array
    var arr = JSON.parse(window.sessionStorage.getItem("arr2"))
    //piece array
    var pieces = JSON.parse(window.sessionStorage.getItem("parr"))
    //var oldId = arr[0][6]
    //old position
    var opos = arr[0][6]
    //new position array
    var npa = []
    //gets all new positions and pushes them to the new position array
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][5] == "pawnMove7") {
            promo = 1
        }
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
    for(var i = 0; i < npa.length; i++) {
        //gets one of the squares from new position array
        var t = document.getElementById(npa[i])
        //checks if that square has children
        if(t.children.length == 1) {
            //checks color of squares children
            if(cchck(t.children[0].src) == color) { 
                //gets piece based on source
                var npi = pichck(t.children[0].src)
                //checks if it matches
                if(npi == piece) {
                    // sets the new position to the squares id
                    console.log(arr[i][5])
                    var oldPos = document.getElementById(opos)
                    if(oldPos.children.length != 0) {
                        if(oldPos.children.length == 2) {
                            oldPos = oldPos.children[1].id
                        } else {
                            oldPos = oldPos.children[0].id
                        }
                    } else {
                        oldPos = oldPos.id
                    }
                    npos = ele.id
                }
            } else if(cchck(t.children[0].src) == "green") {
                npos = ele.id
            }
        } else {
            npos = ele.id
        }
    }

    //converts number to coordinate
    var old = fig(opos)
    //turns new position from string to number
    npos = Number.parseInt(npos)
    //turns new position to a coordinate
    if(npos == NaN) {
        uparr(ele)
        console.console.warn("rerun");
        return
    }
    var ne = fig(npos)
    //old array
    var o = []
    //splits the corrdinates up
    o.push(old.substring(0, 1))
    o.push(old.substring(2))
    //new array
    var n = []
    //splits coords up
    n.push(ne.substring(0, 1))
    n.push(ne.substring(2))        
    //old 1
    var o1 = o[0]
    //converts old 1 to number  
    o1 = Number.parseInt(o1)
    // old 2
    var o2 = o[1]
    //converts old 2 to number
    o2 = Number.parseInt(o2)
    //new 1
    var n1 = n[0]
    //converts new 1 to number
    n1 = Number.parseInt(n1)
    //new 2
    var n2 = n[1]
    //converts new 2 to number
    n2 = Number.parseInt(n2)  
    //goes to old piece index to reset it
    pieces[o1][o2] = ""
    //puts piece in new position
    if(promo == 1) {
        var prop = window.prompt("what piece do you want to promote to q for queen r for rook b for bishop k for knight", "q")
        piece = promote(prop)
    }
    pieces[n1][n2] = piece + color2
    //saves to session storage
    window.sessionStorage.setItem("parr", JSON.stringify(pieces))
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

async function regen() {
    var con = document.getElementById("con")
    while(con.children.length > 0) {
        con.children[0].remove()
    }
    var parr = JSON.parse(window.sessionStorage.getItem("parr"))
    var s = window.sessionStorage.getItem("s")
    genboard(parr, s)
}

function fenDe() {
    //rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 rn1qkr2/1p6/7p/p1pp3R/2N2P2/1P1PP3/P4KP1/b1B3N1 b q - 2 24
    var fen = document.getElementById("load").value
    var fend = fen.split(" ")
    var pa = fend[0] 

    window.sessionStorage.setItem("parr", JSON.stringify(decode(pa)))
    var toMove = fend[1]
    window.sessionStorage.setItem("move", toMove)
    var castle = fend[2]
    var br
    if(castle.includes("K")) {
        br = 1
    } else {
        br = 0
    }
    var bl
    if(castle.includes("Q")) {
        bl = 1
    } else {
        bl = 0
    }
    var wr
    if(castle.includes("k")) {
        wr = 1
    } else {
        wr = 0
    }
    var wl
    if(castle.includes("q")) {
        wl = 1
    } else {
        wl = 0
    }
    window.sessionStorage.setItem("rB", br)
    window.sessionStorage.setItem("lB", bl)
    window.sessionStorage.setItem("rW", wr)
    window.sessionStorage.setItem("lW", wl)
    var ep = fend[3]
    window.sessionStorage.setItem("ep", ep)
    var moveClock = fend[4]
    window.sessionStorage.setItem("50Rule", moveClock)
    var moveNum = fend[5]
    window.sessionStorage.setItem("moveNum", moveNum)
    regen()

}

function fenEn() {
    var ep = window.sessionStorage.getItem("ep")
    var toMove = window.sessionStorage.getItem("move")
    var pa = arrEn()
    var castle = castleChck()
    var moveClock = JSON.parse(window.sessionStorage.getItem("50Rule")) 
    var moveNum = JSON.parse(window.sessionStorage.getItem("moveNum"))
    if(moveNum == 0) {moveNum = 1}
    var fen = pa + " " + toMove + " " + castle + " " + ep + " " + moveClock + " " + moveNum
    fen = fen.slice(1, fen.length)
    return fen
}

function change() {
    var toMove = window.sessionStorage.getItem("move")
    if(toMove == undefined) {
        if(toMove == "w") {
            window.sessionStorage.setItem("move", "b")
        } else if(toMove == "b") {
            window.sessionStorage.setItem("move", "w")
        }
    }
}

function arrEn() {
    var sw = window.localStorage.getItem("switch")
    var pieces = JSON.parse(window.sessionStorage.getItem("parr"))
    var fen = ""
    for(var j = 0; j < pieces.length; j++) {
        fen = fen + "/"
        for(var i = 0; i < pieces[j].length; i++) {
            switch (pieces[j][i]) {
                case "":
                    var hold = fen.charAt(fen.length - 1)
                    if(hold == 1 || hold == 2 || hold == 3 || hold == 4 || hold == 5 || hold == 6 || hold == 7) {
                        hold = Number.parseInt(hold)
                        hold += 1
                        fen = fen.slice(0, fen.length - 1)
                        fen = fen + hold
                    } else {
                        fen = fen + "1"
                    }
                break;
                case "pawnWhite":
                    fen = fen + "P"
                break;
                case "rookWhite":
                    fen = fen + "R"
                break;
                case "knightWhite":
                    fen = fen + "N"
                break;
                case "bishopWhite":
                    fen = fen + "B"
                break;
                case "queenWhite":
                    fen = fen + "Q"
                break;
                case "kingWhite":
                    fen = fen + "K"
                break;
                case "pawnBlack":
                    fen = fen + "p"
                break;
                case "rookBlack":
                    fen = fen + "r"
                break;
                case "knightBlack":
                    fen = fen + "n"
                break;
                case "bishopBlack":
                    fen = fen + "b"
                break;
                case "queenBlack":
                    fen = fen + "q"
                break;
                case "kingBlack": 
                    fen = fen + "k"
                break;
            }
        }
    }
    var arr = []
    if(sw == "black") {
        for(var i = 0; i < fen.length; i++) {
            arr.push(fen.charAt(i))
        }
        arr.reverse()
        fen = arr.toString()
        fen = fen.replaceAll(",", "")
    }
    return fen
}

function castleChck() {
    var c = ""
    var lB = window.sessionStorage.getItem("lB")
    var rB = window.sessionStorage.getItem("rB")
    var lW = window.sessionStorage.getItem("lW")
    var rW = window.sessionStorage.getItem("rW")
    if(rW == 1) {
        c = c + "K"
    }
    if(lW == 1) {
        c = c + "Q"
    }
    if(rB == 1) {
        c = c + "k"
    }
    if(lB == 1) {
        c = c + "q"
    }
    return c
}

function stand(val) {
    switch(val) {
        case "0&0":
            return "a8"
        break;
        case "0&1":
            return "b8"
        break;
        case "0&2":
            return "c8"
        break;
        case "0&3":
            return "d8"
        break;
        case "0&4":
            return "e8"
        break;
        case "0&5":
            return "f8"
        break;
        case "0&6": 
            return "g8"
        break;
        case "0&7":
            return "h8"
        break; 
        case "1&0":
            return "a7"
        break;
        case "1&1":
            return "b7"
        break;
        case "1&2":
            return "c7"
        break;
        case "1&3":
            return "d7"
        break;
        case "1&4":
            return "e7"
        break;
        case "1&5":
            return "f7"
        break;
        case "1&6":
            return "g7"
        break;
        case "1&7":
            return "h7"
        break;
        case "2&0":
            return "a6"
        break;
        case "2&1":
            return "b6"
        break;
        case "2&2":
            return "c6"
        break;
        case "2&3":
            return "d6"
        break;
        case "2&4":
            return "e6"
        break;
        case "2&5":
            return "f6"
        break;
        case "2&6":
            return "g6"
        break;
        case "2&7":
            return "h6"
        break;
        case "3&0":
            return "a5"
        break;
        case "3&1":
            return "b5"
        break;
        case "3&2":
            return "c5"
        break;
        case "3&3":
            return "d5"
        break;
        case "3&4":
            return "e5"
        break;
        case "3&5":
            return "f5"
        break;
        case "3&6":
            return "g5"
        break;
        case "3&7":
            return "h5"
        break;
        case "4&0":
            return "a4"
        break;
        case "4&1":
            return "b4"
        break;
        case "4&2":
            return "c4"
        break;
        case "4&3":
            return "d4"
        break;
        case "4&4":
            return "e4"
        break;
        case "4&5":
            return "f4"
        break;
        case "4&6":
            return "g4"
        break;
        case "4&7":
            return "h4"
        break;
        case "5&0":
            return "a3"
        break;
        case "5&1":
            return "b3"
        break;
        case "5&2":
            return "c3"
        break;
        case "5&3":
            return "d3"
        break;
        case "5&4":
            return "e3"
        break;
        case "5&5":
            return "f3"
        break;
        case "5&6":
            return "g3"
        break;
        case "5&7":
            return "h3"
        break;
        case "6&0":
            return "a2"
        break;
        case "6&1":
            return "b2"
        break;
        case "6&2":
            return "c2"
        break;
        case "6&3":
            return "d2"
        break;
        case "6&4":
            return "e2"
        break;
        case "6&5":
            return "f2"
        break;
        case "6&6":
            return "g2"
        break;
        case "6&7":
            return "h2"
        break;
        case "7&0":
            return "a1"
        break;
        case "7&1":
            return "b1"
        break;
        case "7&2":
            return "c1"
        break;
        case "7&3":
            return "d1"
        break;
        case "7&4":
            return "e1"
        break;
        case "7&5":
            return "f1"
        break;
        case "7&6":
            return "g1"
        break;
        case "7&7":
            return "h1"
        break;
    }
}

function castle() {
    var sw = window.localStorage.getItem("switch")
    var lB = window.sessionStorage.getItem("lB")
    var rB = window.sessionStorage.getItem("rB")
    var lW = window.sessionStorage.getItem("lW")
    var rW = window.sessionStorage.getItem("rW")
    if(lB == 1) {
        if(sw == "white") {
            var bLR = document.getElementById(1)
            if(bLR.children.length == 1) {
                if(pichck(bLR.children[0].src) == "rook") {
                    if(cchck(bLR.children[0].src) != "black") {
                        window.sessionStorage.setItem("lB", "0")
                    }
                } else {
                    window.sessionStorage.setItem("lB", "0")
                }
            } else {
                window.sessionStorage.setItem("lB", "0")
            }
        } else if(sw == "black") {
            var bLR = document.getElementById("57")
            if(bLR.children.length == 1) {
                if(pichck(bLR.children[0].src) == "rook") {
                    if(cchck(bLR.children[0].src) != "black") {
                        window.sessionStorage.setItem("lB", 0)
                    }
                } else {
                    window.sessionStorage.setItem("lB", 0)
                }
            } else {
                window.sessionStorage.setItem("lB", 0)
            }
        }
    }
    if(rB == 1) {
        if(sw == "white") {
            var bRR = document.getElementById("8")
            if(bRR.children.length == 1) {
                if(pichck(bRR.children[0].src) == "rook") {
                    if(cchck(bRR.children[0].src) != "black") {
                        window.sessionStorage.setItem("rB", 0)
                    }
                } else {
                    window.sessionStorage.setItem("rB", 0)
                }
            } else {
                window.sessionStorage.setItem("rB", 0)
            }
        } else if(sw == "black") {
            var bRR = document.getElementById("64")
            if(bRR.children.length == 1) {
                if(pichck(bRR.children[0].src) == "rook") {
                    if(cchck(bRR.children[0].src) != "black") {
                        window.sessionStorage.setItem("rB", 0)
                    }
                } else {
                    window.sessionStorage.setItem("rB", 0)
                }
            } else {
                window.sessionStorage.setItem("rB", 0)
            } 
        }
    } 
    if(lW == 1) {
        if(sw == "white") {
            var wLR = document.getElementById("57")
            if(wLR.children.length == 1) {
                if(pichck(wLR.children[0].src) == "rook") {
                    if(cchck(wLR.children[0].src) != "white") {
                        window.sessionStorage.setItem("lW", 0)
                    }
                } else {
                    window.sessionStorage.setItem("lW", 0)
                }
            } else {
                window.sessionStorage.setItem("lW", 0)
            }
        } else if(sw == "black") {
            var wLR = document.getElementById("1")
            if(wLR.children.length == 1) {
                if(pichck(wLR.children[0].src) == "rook") {
                    if(cchck(wLR.children[0].src) != "white") {
                        window.sessionStorage.setItem("lW", 0)
                    }
                } else {
                    window.sessionStorage.setItem("lW", 0)
                }
            } else {
                window.sessionStorage.setItem("lW", 0)
            }
        }
    }
    if(rW == 1) {
        if(sw == "white") {
            var wRR = document.getElementById("64")
            if(wRR.children.length == 1) {
                if(pichck(wRR.children[0].src) == "rook") {
                    if(cchck(wRR.children[0].src) != "white") {
                        window.sessionStorage.setItem("rW", 0)
                    }
                } else {
                    window.sessionStorage.setItem("rW", 0)
                }
            } else {
                window.sessionStorage.setItem("rW", 0)
            }
        } else if(sw == "black") {
            var wRR = document.getElementById("8")
            if(wRR.children.length == 1) {
                if(pichck(wRR.children[0].src) == "rook") {
                    if(cchck(wRR.children[0].src) != "white") {
                        window.sessionStorage.setItem("rW", 0)
                    }
                } else {
                    window.sessionStorage.setItem("rW", 0)
                }
            } else {
                window.sessionStorage.setItem("rW", 0)
            }
        }
    }
}

function disFen() {
    var fen = fenEn()
    navigator.clipboard.writeText(fen)
    window.alert("copied: " + fen)
}

function decode(pa) {
    var arr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    var sw = window.localStorage.getItem("switch")
    if(sw == "white") {
        var j = 0
        for(var i = 0; i < pa.length; i++) {
            var hold = pa.charAt(i)
            console.log(hold)
            if(hold == 1 || hold == 2 || hold == 3 || hold == 4 || hold == 5 || hold == 6 || hold == 7 || hold == 8) {
                for(var l = 0; l < hold; l++) {
                    arr[j].push(" ")
                }
            } else if(hold == "P") {
                arr[j].push("pawnWhite")
            } else if(hold == "R") {
                arr[j].push("rookWhite")
            } else if(hold == "N") {
                arr[j].push("knightWhite")
            } else if(hold == "B") {
                arr[j].push("bishopWhite")
            } else if(hold == "Q") {
                arr[j].push("queenWhite")
            } else if(hold == "K") {
                arr[j].push("kingWhite")
            } else if(hold == "p") {
                arr[j].push("pawnBlack")
            } else if(hold == "r") {
                arr[j].push("rookBlack")
            } else if(hold == "n") {
                arr[j].push("knightBlack")
            } else if(hold == "b") {
                arr[j].push("bishopBlack") 
            } else if(hold == "q") {
                arr[j].push("queenBlack")
            } else if(hold == "k") {
                arr[j].push("kingBlack")
            } else if(hold == "/") {        
                j++
            }
        }
    } else if(sw == "black") {
        for(var i = 0; i < pa.length; i++) {
            var arr2 = pa.split("")
            arr2.reverse()
            pa = arr2.toString()
            pa = pa.replaceAll(",", "")
        }
        //console.log(pa)
        var j = 0
        for(var i = 0; i < pa.length; i++) {
            var hold = pa.charAt(i)
            //console.log(hold)
            if(hold == 1 || hold == 2 || hold == 3 || hold == 4 || hold == 5 || hold == 6 || hold == 7 || hold == 8) {
                for(var l = 0; l < hold; l++) {
                    arr[j].push(" ")
                }
            } else if(hold == "P") {
                arr[j].push("pawnWhite")
            } else if(hold == "R") {
                arr[j].push("rookWhite")
            } else if(hold == "N") {
                arr[j].push("knightWhite")
            } else if(hold == "B") {
                arr[j].push("bishopWhite")
            } else if(hold == "Q") {
                arr[j].push("queenWhite")
            } else if(hold == "K") {
                arr[j].push("kingWhite")
            } else if(hold == "p") {
                arr[j].push("pawnBlack")
            } else if(hold == "r") {
                arr[j].push("rookBlack")
            } else if(hold == "n") {
                arr[j].push("knightBlack")
            } else if(hold == "b") {
                arr[j].push("bishopBlack") 
            } else if(hold == "q") {
                arr[j].push("queenBlack")
            } else if(hold == "k") {
                arr[j].push("kingBlack")
            } else if(hold == "/") {        
                j++
            }
        }
    }
    return arr
}