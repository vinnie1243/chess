async function gen(piece, pos, color) { 
    pos = Number.parseInt(pos)
    var s = window.localStorage.getItem("switch")
    var text = piece.split("Images/")[1]
    var text2
    for(var i = 0; i < text.length; i++) {
        if(text.charAt(i) == "B") {
            text2 = text.split("B")[0]
        } else if(text.charAt(i) == "W") {
            text2 = text.split("W")[0]

        }
    }
    //console.log(s, text2, color, pos)
    var p8 = pos % 8
    console.log(p8)
    var arr = []
    switch (text2) {
        case "pawn":
            //move 1 forward
            var pawnMove1
            if(s == "white" && color == "white") {
                var npos = pos - 8
                pawnMove1 = [npos, color, s, "green", "pawn", "pawnMove1", pos, "nt"]
                arr.push(pawnMove1)
            } else if(s == "white" && color == "black") {
                var npos = pos + 8
                pawnMove1 = [npos, color, s, "green", "pawn", "pawnMove1", pos, "nt"]
                arr.push(pawnMove1)
            } else if(s == "black" && color == "white") {
                var npos = pos + 8
                pawnMove1 = [npos, color, s, "green", "pawn", "pawnMove1", pos, "nt"]
                arr.push(pawnMove1)
            } else if(s == "black" && color == "black") {
                var npos = pos - 8 
                pawnMove1 = [npos, color, s, "green", "pawn", "pawnMove1", pos, "nt"]
                arr.push(pawnMove1)
            }
            //move 2 foward at start
            var pawnMove2
            if(s == "white" && color == "white" && (pos - 16) > 32 && (pos - 16) < 41) {
                var npos = pos - 16
                pawnMove2 = [npos, color, s, "green", "pawn", "pawnMove2", pos, "nt"]
                arr.push(pawnMove2)
            } else if(s == "white" && color == "black" && (pos + 16) > 24 && (pos + 16) < 33) {
                var npos = pos + 16     
                pawnMove2 = [npos, color, s, "green", "pawn", 'pawnMove2', pos, "nt"]
                arr.push(pawnMove2)
            } else if(s == "black" && color == "white" && (pos + 16) > 24 && (pos + 16) < 33) {
                var npos = pos + 16
                pawnMove2 = [npos, color, s, "green", "pawn", "pawnMove2", pos, "nt"]
                arr.push(pawnMove2)
            } else if(s == "black" && color == "black" && (pos - 16) > 32 && (pos - 16) < 41) {
                var npos = pos - 16
                pawnMove2 = [npos, color, s, "green", "pawn", "pawnMove2", pos, "nt"]
                arr.push(pawnMove2)
            }
            //move 3 take diagonally right
            var pawnMove3   
            if(s == "white" && color == "white" && ptchckR(pos, color, s) == true) {
                var npos = pos - 9
                pawnMove3 = [npos, color, s, "red", "pawn", "pawnMove3", pos, "t"]
                arr.push(pawnMove3)
            } else if(s == "white" && color == "black" && ptchckR(pos, color, s) == true) {
                var npos = pos + 9
                pawnMove3 = [npos, color, s, "red", "pawn", "pawnMove3", pos, "t"]
                arr.push(pawnMove3)
            } else if(s == "black" && color == "white" && ptchckR(pos, color, s) == true) {
                var npos = pos + 9
                pawnMove3 = [npos, color, s, "red", "pawn", "pawnMove3", pos, "t"] 
                arr.push(pawnMove3)
            } else if(s == "black" && color == "black" && ptchckR(pos, color, s) == true) {
                var npos = pos - 9
                pawnMove3 = [npos, color, s, "red", "pawn", "pawnMove3", pos, "t"]
                arr.push(pawnMove3)
            }
            //move4 take diagonally left
            var pawnMove4
            if(s == "white" && color == "white" && ptchckL(pos, color, s) == true) {
                var npos = pos - 7
                pawnMove4 = [npos, color, s, "red", "pawn", "pawnMove4", pos, "t"]
                arr.push(pawnMove4)
            } else if(s == "white" && color == "black" &&  ptchckL(pos, color, s) == true) {
                var npos = pos + 7
                pawnMove4 = [npos, color, s, "red", "pawn", "pawnMove4", pos, "t"]
                arr.push(pawnMove4)
            } else if(s == "black" && color == "white" &&  ptchckL(pos, color, s) == true) {
                var npos = pos + 7
                pawnMove4 = [npos, color, s, "red", "pawn", "pawnMove4", pos, "t"]
                arr.push(pawnMove4)
            } else if(s == "black" && color == "black" &&  ptchckL(pos, color, s) == true) {
                var npos = pos - 7
                pawnMove4 = [npos, color, s, "red", "pawn", "pawnMove4", pos, "t"]
                arr.push(pawnMove4)
            }
            //move 5 en pasant R
            var pawnMove5
            //move 6 en pasant L
            var pawnMove6
        break;
        case "rook":
            //vertical moves//
            //move 1 up
            var rookMove1
            if(s == "white" && color == "white" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                rookMove1 = [npos, color, s, takec(npos, color), "rook", "rookMove1", pos, "t"]
                arr.push(rookMove1)
            } else if(s == "white" && color == "black" && (pos + 8) < 65 && (pos + 8) > 0) {
                var npos = pos + 8
                rookMove1 = [npos, color, s, takec(npos, color), "rook", "rookMove1", pos, "t"]
                arr.push(rookMove1)
            } else if(s == "black" && color == "white" && (pos + 8) < 65 && (pos + 8) > 0) {
                var npos = pos + 8
                rookMove1 = [npos, color, s, takec(npos, color), "rook", "rookMove1", pos, "t"] 
                arr.push(rookMove1)
            } else if(s == "black" && color == "black" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                rookMove1 = [npos, color, s, takec(npos, color), "rook", "rookMove1", pos, "t"]
                arr.push(rookMove1)
            } 
            //move 2 up
            var rookMove2
            if(s == "white" && color == "white" && (pos - 16) < 65 && (pos - 16) > 0) {
                var npos = pos - 16
                rookMove2 = [npos, color, s, takec(npos, color), "rook", "rookMove2", pos, "t"]
                arr.push(rookMove2)
            } else if(s == "white" && color == "black" && (pos + 16) < 65 && (pos + 16) > 0) {
                var npos = pos + 16
                rookMove2 = [npos, color, s, takec(npos, color), "rook", "rookMove2", pos, "t"]
                arr.push(rookMove2)
            } else if(s == "black" && color == "white" && (pos + 16) < 65 && (pos + 16) > 0) {
                var npos = pos + 16
                rookMove2 = [npos, color, s, takec(npos, color), "rook", "rookMove2", pos, "t"]
                arr.push(rookMove2)
            } else if(s == "black" && color == "black" && (pos - 16) < 65 && (pos - 16) > 0) {
                var npos = pos - 16
                rookMove2 = [npos, color, s, takec(npos, color), "rook", "rookMove2", pos, "t"]
                arr.push(rookMove2)
            }
            //move 3 up
            var rookMove3
            if(s == "white" && color == "white" && (pos - 24) < 65 && (pos - 24) > 0) {
                var npos = pos - 24
                rookMove3 = [npos, color, s, takec(npos, color), "rook", "rookMove3", pos, "t"]
                arr.push(rookMove3)
            } else if(s == "white" && color == "black" && (pos + 24) < 65 && (pos + 24) > 0) {
                var npos = pos + 24
                rookMove3 = [npos, color, s, takec(npos, color), "rook", "rookMove3", pos, "t"]
                arr.push(rookMove3)
            } else if(s == "black" && color == "white" && (pos + 24) < 65 && (pos + 24) > 0) {
                var npos = pos + 24
                rookMove3 = [npos, color, s, takec(npos, color), "rook", "rookMove3", pos, "t"]
                arr.push(rookMove3)
            } else if(s == "black" && color == "black" && (pos - 24) < 65 && (pos - 24) > 0) {
                var npos = pos - 24
                rookMove3 = [npos, color, s, takec(npos, color), "rook", "rookMove3", pos, "t"]
                arr.push(rookMove3) 
            }
            //move 4 up
            var rookMove4
            if(s == "white" && color == "white" && (pos - 32) < 65 && (pos - 32) > 0) {
                var npos = pos - 32
                rookMove4 = [npos, color, s, takec(npos, color), "rook", "rookMove4", pos, "t"]
                arr.push(rookMove4)
            } else if(s == "white" && color == "black" && (pos + 32) < 65 && (pos + 32) > 0) {
                var npos = pos + 32
                rookMove4 = [npos, color, s, takec(npos, color), "rook", "rookMove4", pos, "t"]
                arr.push(rookMove4)
            } else if(s == "black" && color == "white" && (pos + 32) < 65 && (pos + 32) > 0) {
                var npos = pos + 32
                rookMove4 = [npos, color, s, takec(npos, color), "rook", "rookMove4", pos, "t"]
                arr.push(rookMove4)
            } else if(s == "black" && color == "black" && (pos - 32) < 65 && (pos - 32) > 0) {
                var npos = pos - 32
                rookMove4 = [npos, color, s, takec(npos, color), "rook", "rookMove4", pos, "t"]
                arr.push(rookMove4)
            }
            //move 5 up
            var rookMove5
            if(s == "white" && color == "white" && (pos - 40) < 65 && (pos - 40) > 0) {
                var npos = pos - 40
                rookMove5 = [npos, color, s, takec(npos, color), "rook", "rookMove5", pos, "t"]
                arr.push(rookMove5)
            } else if(s == "white" && color == "black" && (pos + 40) < 65 && (pos + 40) > 0) {
                var npos = pos + 40
                rookMove5 = [npos, color, s, takec(npos, color), "rook", "rookMove5", pos, "t"]
                arr.push(rookMove5)
            } else if(s == "black" && color == "white" && (pos + 40) < 65 && (pos + 40) > 0) {
                var npos = pos + 40
                rookMove5 = [npos, color, s, takec(npos, color), "rook", "rookMove5", pos, "t"]
                arr.push(rookMove5)
            } else if(s == "black" && color == 'black' && (pos - 40) < 65 && (pos - 40) > 0) {
                var npos = pos - 40
                rookMove5 = [npos, color, s, takec(npos, color), "rook", "rookMove5", pos, "t"]
                arr.push(rookMove5)
            }
            //move 6 up 
            var rookMove6 
            if(s == "white" && color == "white" && (pos - 48) < 65 && (pos - 48) > 0) {
                var npos = pos - 48
                rookMove6 = [npos, color, s, takec(npos, color), "rook", "rookMove6", pos, "t"]
                arr.push(rookMove6)
            } else if(s == "white" && color == "black" && (pos + 48) < 65 && (pos + 48) > 0) {
                var npos = pos + 48
                rookMove6 = [npos, color, s, takec(npos, color), "rook", "rookMove6", pos, "t"]
                arr.push(rookMove6)
            } else if(s == "black" && color == "white" && (pos + 48) < 65 && (pos + 48) > 0) {
                var npos = pos + 48
                rookMove6 = [npos, color, s, takec(npos, color), "rook", "rookMove6", pos, "t"]
                arr.push(rookMove6)
            } else if(s == "black" && color == "black" && (pos - 48) < 65 && (pos - 48) > 0) {
                var npos = pos - 48
                rookMove6 = [npos, color, s, takec(npos, color), "rook", "rookMove6", pos, "t"]
                arr.push(rookMove6)
            }
            //move 7 up
            var rookMove7
            if(s == "white" && color == "white" && (pos - 56) < 65 && (pos - 56) > 0) {
                var npos = pos - 56
                rookMove7 = [npos, color, s, takec(npos, color), "rook", "rookMove7", pos, "t"]
                arr.push(rookMove7)
            } else if(s == "white" && color == "black" && (pos + 56) < 65 && (pos + 56) > 0) {
                var npos = pos + 56
                rookMove7 = [npos, color, s, takec(npos, color), "rook", "rookMove7", pos, "t"]
                arr.push(rookMove7)
            } else if(s == "black" && color == "white" && (pos + 56) < 65 && (pos + 56) > 0) {
                var npos = pos + 56
                rookMove7 = [npos, color, s, takec(npos, color), "rook", "rookMove7", pos, "t"]
                arr.push(rookMove7)
            } else if(s == "black" && color == "black" && (pos + 56) < 65 && (pos + 56) > 0) {
                var npos = pos + 56
                rookMove7 = [npos, color, s, takec(npos, color), "rook", "rookMove7", pos, "t"]
                arr.push(rookMove7)
            }
            //move 1 down
            var rookMove8
            if(s == "white" && color == "white" && (pos + 8) < 65 && (pos + 8) > 0) {
                var npos = pos + 8
                rookMove8 = [npos, color, s, takec(npos, color), "rook", "rookMove8", pos, "t"]
                arr.push(rookMove8)
            } else if(s == "white" && color == "black" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                rookMove8 = [npos, color, s, takec(npos, color), "rook", "rookMove8", pos, "t"]
                arr.push(rookMove8)
            } else if(s == "black" && color == "white" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                rookMove8 = [npos, color, s, takec(npos, color), "rook", "rookMove8", pos, "t"]
                arr.push(rookMove8)
            } else if(s == "black" && color == "black" && (pos + 8) < 65 && (pos + 8) > 0) {
                var npos = pos + 8 
                rookMove8 = [npos, color, s, takec(npos, color), "rook", "rookMove8", pos, "t"]
                arr.push(rookMove8)
            }
            //move 2 down
            var rookMove9
            if(s == "white" && color == "white" && (pos + 16) < 65 && (pos + 16) > 0) {
                var npos = pos + 16   
                rookMove9 = [npos, color, s, takec(npos, color), "rook", "rookMove9", pos, "t"]
                arr.push(rookMove9)
            } else if(s == "white" && color == "black" && (pos - 16) < 65 && (pos - 16) > 0) {
                var npos = pos - 16
                rookMove9 = [npos, color, s, takec(npos, color), "rook", "rookMove9", pos, "t"]
                arr.push(rookMove9)
            } else if(s == "black" && color == "white" && (pos - 16) < 65 && (pos - 16) > 0) {
                var npos = pos - 16
                rookMove9 = [npos, color, s, takec(npos, color), "rook", "rookMove9", pos, "t"]
                arr.push(rookMove9)
            } else if(s == "black" && color == "black" && (pos + 16) < 65 && (pos + 16) > 0) {
                var npos = pos + 16
                rookMove9 = [npos, color, s, takec(npos, color), "rook", "rookMove9", pos, "t"]
                arr.push(rookMove9)
            }
            //move 3 down
            var rookMove10
            if(s == "white" && color == "white" && (pos + 24) < 65 && (pos + 24) > 0) {
                var npos = pos + 24
                rookMove10 = [npos, color, s, takec(npos, color), "rook", "rookMove10", pos, "t"]
                arr.push(rookMove10)
            } else if(s == "white" && color == "black" && (pos - 24) < 65 && (pos - 24) > 0) {
                var npos = pos - 24
                rookMove10 = [npos, color, s, takec(npos, color), "rook", "rookMove10", pos, "t"]
                arr.push(rookMove10)
            } else if(s == "black" && color == "white" && (pos - 24) < 65 && (pos - 24) > 0) {
                var npos = pos - 24
                rookMove10 = [npos, color, s, takec(npos, color), "rook", "rookMove10", pos, "t"]
                arr.push(rookMove10)
            } else if(s == "black" && color == "black" && (pos + 24) < 65 && (pos + 24) > 0) {
                var npos = pos + 24
                rookMove10 = [npos, color, s, takec(npos, color), "rook", "rookMove10", pos, "t"]
                arr.push(rookMove10)
            }
            //move 4 down
            var rookMove11 
            if(s == "white" && color == "white" && (pos + 32) < 65 && (pos + 32) > 0) {
                var npos = pos + 32
                rookMove11 = [npos, color, s, takec(npos, color), "rook", "rookMove11", pos, "t"]
                arr.push(rookMove11)
            } else if(s == "white" && color == "black" && (pos - 32) < 65 && (pos - 32) > 0) {
                var npos = pos - 32 
                rookMove11 = [npos, color, s, takec(npos, color), "rook", "rookMove11", pos, "t"]
                arr.push(rookMove11)
            } else if(s == "black" && color == "white" && (pos - 32) < 65 && (pos - 32) > 0) {
                var npos = pos - 32
                rookMove11 = [npos, color, s, takec(npos, color), "rook", "rookMove11", pos, "t"]
                arr.push(rookMove11)
            } else if(s == "black" && color == "black" && (pos + 32) < 65 && (pos + 32) > 0) {
                var npos = pos + 32
                rookMove11 = [npos, color, s, takec(npos, color), "rook", "rookMove11", pos, "t"]
                arr.push(rookMove11)
            } 
            //move 5 down
            var rookMove12
            if(s == "white" && color == "white" && (pos + 40) < 65 && (pos + 40) > 0) {
                var npos = pos + 40
                rookMove12 = [npos, color, s, takec(npos, color), "rook", "rookMove12", pos]
                arr.push(rookMove12)
            }
            //move 6 down
            var rookMove13
            if(s == "white" && color == "white" && (pos + 48) < 65 && (pos + 48) > 0) {
                var npos = pos + 48
                rookMove13 = [npos, color, s, takec(npos, color), "rook", "rookMove13", pos]
                arr.push(rookMove13)
            }
            //move 7 down
            var rookMove14
            if(s == "white" && color == "white" && (pos + 56) < 65 && (pos + 56) > 0) {
                var npos = pos + 56
                rookMove14 = [npos, color, s, takec(npos, color), "rook", "rookMove14", pos]
                arr.push(rookMove14)
            }
            //horizontal moves//
            //move 1 right
            var rookMove15
            if(s == "white" && color == "white" && (pos + 1) < 65 && (pos + 1) > 0 && p8 != 0) {
                var npos = pos + 1
                rookMove15 = [npos, color, s, takec(npos, color), "rook", "rookMove15", pos, "t"]
                arr.push(rookMove15)
            } else if(s == "white" && color == "black" && (pos + 1) < 65 && (pos + 1) > 0 && p8 != 0) {
                var npos = pos + 1
                rookMove15 = [npos, color, s, takec(npos, color), "rook", "rookMove15", pos, "t"]
                arr.push(rookMove15)
            } else if(s == "black" && color == "white" && (pos + 1) < 65 && (pos + 1) > 0 && p8 != 0) {
                var npos = pos + 1
                rookMove15 = [npos, color, s, takec(npos, color), "rook", "rookMove15", pos, "t"]
                arr.push(rookMove15)
            } else if(s == "black" && color == "black" && (pos + 1) < 65 && (pos + 1) > 0 && p8 != 0) {
                var npos = pos + 1
                rookMove15 = [npos, color, s, takec(npos, color), "rook", "rookMove15", pos, "t"]
                arr.push(rookMove15)
            }
            //move 2 right
            var rookMove16
            if(s == "white" && color == "white" && (pos + 2) < 65 && (pos + 2) > 0 && p8 < 7 && p8 != 0) {
                var npos = pos + 2
                rookMove16 = [npos, color, s, takec(npos, color), "rook", "rookMove16", pos, "t"]
                arr.push(rookMove16)
            } else if(s == "white" && color == "black" && (pos + 2) < 65 && (pos + 2) > 0 && p8 < 7 && p8 != 0) {
                var npos = pos + 2
                rookMove16 = [npos, color, s, takec(npos, color), "rook", "rookMove16", pos, "t"]
                arr.push(rookMove16)
            } else if(s == "black" && color == "white" && (pos + 2) < 65 && (pos + 2) > 0 && p8 < 7 && p8 != 0) {
                var npos = pos + 2
                rookMove16 = [npos, color, s, takec(npos, color), "rook", "rookMove16", pos, "t"]
                arr.push(rookMove16)
            } else if(s == "black" && color == "black" && (pos + 2) < 65 && (pos + 2) > 0 && p8 < 7 && p8 != 0) {
                var npos = pos + 2
                rookMove16 = [npos, color, s, takec(npos, color), "rook", "rookMove16", pos, "t"]
                arr.push(rookMove16)
            }
            //move 3 right
            var rookMove17
            if(s == "white" && color == "white" && (pos + 3) < 65 && (pos + 3) > 0 && p8 < 6 && p8 != 0) {
                var npos = pos + 3
                rookMove17 = [npos, color, s, takec(npos, color), "rook", "rookMove17", pos]
                arr.push(rookMove17)
            }
            //move 4 right
            var rookMove18
            if(s == "white" && color == "white" && (pos + 4) < 65 && (pos + 4) > 0 && p8 < 5 && p8 != 0) {
                var npos = pos + 4
                rookMove18 = [npos, color, s, takec(npos, color), "rook", "rookMove18", pos]
                arr.push(rookMove18)
            }
            //move 5 right
            var rookMove19
            if(s == "white" && color == "white" && (pos + 5) < 65 && (pos + 5) > 0 && p8 < 4 && p8 != 0) {
                var npos = pos + 5
                rookMove19 = [npos, color, s, takec(npos, color), "rook", "rookMove19", pos]
                arr.push(rookMove19)
            }
            //move 6 right
            var rookMove20
            if(s == "white" && color == "white" && (pos + 6) < 65 && (pos + 6) > 0 && p8 < 3 && p8 != 0) {
                var npos = pos + 6 
                rookMove20 = [npos, color, s, takec(npos, color), "rook", "rookMove20", pos]
                arr.push(rookMove20)
            }
            //move 7 right  
            var rookMove21
            if(s == "white" && color == "white" && (pos + 7) < 65 && (pos + 7) > 0 && p8 < 2 && p8 != 0) {
                var npos = pos + 7 
                rookMove21 = [npos, color, s, takec(npos, color), "rook", "rookMove21", pos] 
                arr.push(rookMove21)
            }
            //move 1 left
            console.log(pos - 1)
            var rookMove22
            if(s == "white" && color == "white" && (pos - 1) < 65 && (pos - 1) > 0 && p8 != 1) {   
                console.log("ran")
                var npos = pos - 1
                console.log(npos)
                rookMove22 = [npos, color, s, takec(npos, color), "rook", "rookMove22", pos, "t"]
                arr.push(rookMove22)
            } else if(s == "white" && color == "black" && (pos - 1) < 65 && (pos - 1) > 0 && p8 != 1) { 
                var npos = pos - 1
                rookMove22 = [npos, color, s, takec(npos, color), "rook", "rookMove22", pos, "t"]
                arr.push(rookMove22)
            } else if(s == "black" && color == "white" && (pos - 1) < 65 && (pos - 1) > 0 && p8 != 1) {
                var npos = pos - 1
                rookMove22 = [npos, color, s, takec(npos, color), "rook", "rookMove22", pos, "t"]
                arr.push(rookMove22)
            } else if(s == "black" && color == "black" && (pos - 1) < 65 && (pos - 1) > 0 && p8 != 1) {
                var npos = pos - 1
                rookMove22 = [npos, color, s, takec(npos, color), "rook", "rookMove22", pos, "t"]
                arr.push(rookMove22)
            }
            //move 2 left 
            var rookMove23 
            if(s == "white" && color == "white" && (pos - 2) < 65 && (pos - 2) > 0 && p8 != 1 && p8 != 2) {
                var npos = pos - 2
                rookMove23 = [npos, color, s, takec(npos, color), "rook", "rookMove23", pos, "t"]
                arr.push(rookMove23)
            } else if(s == "white" && color == "black" && (pos - 2) < 65 && (pos - 2) > 0 && p8 != 1 && p8 != 2) {
                var npos = pos - 2
                rookMove23 = [npos, color, s, takec(npos, color), "rook", "rookMove23", pos, "t"]
                arr.push(rookMove23)
            } else if(s == "black" && color == "white" && (pos - 2) < 65 && (pos - 2) > 0 && p8 != 1 && p8 != 2) {
                var npos = pos - 2
                rookMove23 = [npos, color, s, takec(npos, color), "rook", "rookMove23", pos, "t"]
                arr.push(rookMove23)
            } else if(s == "black" && color == "black" && (pos - 2) < 65 && (pos - 2) > 0 && p8!= 1 && p8 != 2) {
                var npos = pos - 2
                rookMove23 = [npos, color, s, takec(npos, color), "rook", "rookMove23", pos, "t"]
                arr.push(rookMove23)
            }
            //move 3 left
            var rookMove24
            if(s == "white" && color == "white" && (pos - 3) < 65 && (pos - 3) > 0 && p8 != 1 && p8 != 2 && p8 != 3) {
                var npos = pos - 3
                rookMove24 = [npos, color, s, takec(npos, color), "rook", "rookMove24", pos, "t"]
                arr.push(rookMove24)
            } else if(s == "white" && color == "black" && (pos - 3) < 65 && (pos - 3) > 0 && p8 != 1 && p8 != 2 && p8 != 3) {
                var npos = pos - 3
                rookMove24 = [npos, color, s, takec(npos, color), "rook", "rookMove24", pos, "t"]
                arr.push(rookMove24)
            } else if(s == "black" && color == "white" && (pos - 3) < 65 && (pos - 3) > 0 && p8 != 1 && p8 != 2 && p8 != 3) {
                var npos = pos - 3
                rookMove24 = [npos, color, s, takec(npos, color), "rook", "rookMove24", pos, "t"]
                arr.push(rookMove24)
            } else if(s == "black" && color == "black" && (pos - 3) < 65 && (pos - 3) > 0 && p8 != 1 && p8 != 2 && p8 != 3) {
                var npos = pos - 3
                rookMove24 = [npos, color, s, takec(npos, color), "rook", "rookMove24", pos, "t"]
                arr.push(rookMove24)
            }
            //move 4 left
            var rookMove25
            if(s == "white" && color == "white" && (pos - 4) < 65 && (pos - 4) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4) {
                var npos = pos - 4
                rookMove25 = [npos, color, s, takec(npos, color), "rook", "rookMove25", pos, "t"]
                arr.push(rookMove25)
            } else if(s == "white" && color == "black" && (pos - 4) < 65 && (pos - 4) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4) {
                var npos = pos - 4
                rookMove25 = [npos, color, s, takec(npos, color), "rook", "rookMove25", pos, "t"]
                arr.push(rookMove25)
            } else if(s == "black" && color == "white" && (pos - 4) < 65 && (pos - 4) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4) {
                var npos = pos - 4
                rookMove25 = [npos, color, s, takec(npos, color), "rook", "rookMove25", pos, "t"]
                arr.push(rookMove25)
            } else if(s == "black" && color == "black" && (pos - 4) < 65 && (pos - 4) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4) {
                var npos = pos - 4
                rookMove25 = [npos, color, s, takec(npos, color), "rook", "rookMove25", pos, "t"]
                arr.push(rookMove25)
            }
            //move 5 left
            var rookMove26
            if(s == "white" && color == "white" && (pos - 5) < 65 && (pos - 5) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4 && p8 != 5) {
                var npos = pos - 5
                rookMove26 = [npos, color, s, takec(npos, color), "rook", "rookMove26", pos]
                arr.push(rookMove26)
            }
            //move 6 left
            var rookMove27 
             if(s == "white" && color == "white" && (pos - 6) < 65 && (pos - 6) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4 && p8 != 5 && p8 != 6) {
                var npos = pos - 6
                rookMove27 = [npos, color, s, takec(npos, color), "rook", "rookMove27", pos]
                arr.push(rookMove27)
            }
            //move 7 left       ,
            var rookMove28  
            if(s == "white" && color == "white" && (pos - 7) < 65 && (pos - 7) > 0 && p8 != 1 && p8 != 2 && p8 != 3 && p8 != 4 && p8 != 5 && p8 != 6 && p8 != 7) {
                var npos = pos - 7
                rookMove28 = [npos, color, s, takec(npos, color), "rook", "rookMove28", pos]
                arr.push(rookMove28)
            }
            //castle
            var rookMove29
        break;
        case "king":    
            //move 1 left
            var kingMove1
            if(s == "white" && color == "white" && (pos - 1) < 65 && (pos - 1) > 0) {
                var npos = pos - 1
                kingMove1 = [npos, color, s, takec(), "king", "kingMove1", pos]
                arr.push(kingMove1)
            }
            //move 1 right
            var kingMove2
            if (s == "white" && color == "white" && (pos + 1) < 65 && (pos + 1) > 0) {
                var npos = pos + 1
                kingMove2 = [npos, color, s, takec(), "king", "kingMove2", pos]
                arr.push(kingMove2)
            }
            //move 1 up
            var kingMove3
            if(s == "white" && color == "white" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                kingMove3 = [npos, color, s, takec(), "king", "kingMove3", pos]
                arr.push(kingMove3)
            }
            //move 1 down
            var kingMove4
            if(s == "white" && color == "white" && (pos + 8) < 65 && (pos + 8) > 0) {
                var npos = pos + 8
                kingMove4 = [npos, color, s, takec(), "king", "kingMove4", pos]
                arr.push(kingMove4)
            } 
            //move up right 1
            var kingMove5
            if(s == "white" && color == "white" && (pos - 7) < 65 && (pos - 7) > 0) {
                var npos = pos - 7
                kingMove5 = [npos, color, s, takec(), "king", "kingMove5", pos]
                arr.push(kingMove5)
            }
            //move down right 1
            var kingMove6
            if(s == "white" && color == "white" && (pos + 9) < 65 && (pos + 9) > 0) {
                var npos = pos + 9
                kingMove6 = [npos, color, s, takec(), "king", "kingMove6", pos]
                arr.push(kingMove6)
            }
            //move down left 1
            var kingMove7 
            if(s == "white" && color == "white" && (pos + 7) < 65 && (pos + 7) > 0) {
                var npos = pos + 7
                kingMove7 = [npos, color, s, takec(), "king", "kingMove7", pos]
                arr.push(kingMove7)
            }
            //move up left 1
            var kingMove8
            if(s == "white" && color == "white" && (pos - 7) < 65 && (pos - 7) > 0) {
                var npos = pos - 9
                kingMove8 = [npos, color, s, takec(), "king", "kingMove8", pos]
                arr.push(kingMove8)
            }
            //castle
            var kingMove9
        break;
        case "knight":
            //up 2 left 1
            var knightMove1
            if(s == "white" && color == "white" && ((pos - 16) - 1) < 65 && ((pos - 16) - 1) > 0) {
                var npos = (pos - 16) - 1
                knightMove1 = [npos, color, s, takec(), "knight", "knightMove1", pos]
                arr.push(knightMove1)
            }
            //move up 2 right 1
            var knightMove2
            if(s == "white" && color == "white" && ((pos - 16) + 1) < 65 && ((pos - 16) + 1) > 0) {
                var npos = (pos - 16) + 1
                knightMove2 = [npos, color, s, takec(), "knight", "knightMove2", pos]
                arr.push(knightMove2)
            }
            //move right 2 up 1
            var knightMove3
            if(s == "white" && color == "white" && ((pos - 8) + 2) < 65 && ((pos - 8) + 2) > 0) {
                var npos = (pos - 8) + 2 
                knightMove3 = [npos, color, s, takec(), "knight", "knightMove3", pos]
                arr.push(knightMove3)
            }
            //move right 2 down 1
            var knightMove4
            if(s == "white" && color == "white" && ((pos + 8) + 2) < 65 && ((pos + 8) + 2) > 0) {
                var npos = (pos + 8) + 2
                knightMove4 = [npos, color, s, takec(), "knight", "knightMove4", pos]
                arr.push(knightMove4)
            }
            //move down 2 right 1
            var knightMove5
            if(s == "white" && color == "white" && ((pos + 16) + 1) < 65 && ((pos + 16) + 1) > 0) {
                var npos = (pos + 16) + 1
                knightMove5 = [npos, color, s, takec(), "knight", "knightMove5", pos]
                arr.push(knightMove5)
            }
            //move down 2 left 1
            var knightMove6
            if(s == "white" && color == "white" && ((pos + 16) - 1) < 65 && ((pos + 16) - 1) > 0) {
                var npos = (pos + 16) - 1
                knightMove6 = [npos, color, s, takec(), "knight", "knightMove6", pos]
                arr.push(knightMove6)
            }
            //move left 2 down 1
            var knightMove7 
            if(s == "white" && color == "white" && ((pos + 8) - 2) < 65 && ((pos + 8) - 2) > 0) {
                var npos = (pos + 8) - 2
                knightMove7 = [npos, color, s, takec(), "knight", "knightMove7", pos]
                arr.push(knightMove7)
            }
            //move left 2 up 1
            var knightMove8
            if(s == "white" && color == "white" && ((pos - 8) - 2) < 65 && ((pos - 8) - 2) > 0) {
                var npos = (pos - 8) - 2
                knightMove8 = [npos, color, s, takec(), "knight", "knightMove8", pos]
                arr.push(knightMove8)
            }
        break;
        case "bishop":
            //Down Left//
            //move left 1 down 1
            var bishopMove1
            if(s == "white" && color == "white" && ((pos + 8) - 1) < 65 && ((pos + 8) - 2) > 0) {
                var npos = (pos + 8) - 1
                bishopMove1 = [npos, color, s, takec(), "bishop", "bishopMove1", pos]
                arr.push(bishopMove1)
            }
            //move left 2 down 2
            var bishopMove2 
            if(s == "white" && color == "white" && ((pos + 16) - 2) < 65 && ((pos + 16) - 2) > 0) {
                var npos = (pos + 16) - 2
                bishopMove2 = [npos, color, s, takec(), "bishop", "bishopMove2", pos]
                arr.push(bishopMove2)
            }
            //move left 3 down 3
            var bishopMove3
            if(s == "white" && color == "white" && ((pos + 24) - 3) < 65 && ((pos + 24) - 3) > 0) {
                var npos = (pos + 24) - 3
                bishopMove3 = [npos, color, s, takec(), "bishop", "bishopMove3", pos]
                arr.push(bishopMove3)
            }
            //move left 4 down 4
            var bishopMove4
            if(s == "white" && color == "white" && ((pos + 32) - 4) < 65 && ((pos + 32) - 3) > 0) {
                var npos = (pos + 32) - 4
                bishopMove4 = [npos, color, s, takec(), "bishop", "bishopMove4", pos]
                arr.push(bishopMove4)
            }
            //move left 5 down 5
            var bishopMove5
            if(s == "white" && color == "white" && ((pos + 40) - 5) < 65 && ((pos + 40) - 5) > 0) {
                var npos = (pos + 40) - 5
                bishopMove5 = [npos, color, s, takec(), "bishop", "bishopMove5", pos]
                arr.push(bishopMove5)
            }
            //move left 6 down 6
            var bishopMove6
            if(s == "white" && color == "white" && ((pos + 48) - 6) < 65 && ((pos + 48) - 6) > 0) {
                var npos = (pos + 48) - 6
                bishopMove6 = [npos, color, s, takec(), "bishop", "bishopMove6", pos]
                arr.push(bishopMove6)
            }
            //move left 7 down 7
            var bishopMove7
            if(s == "white" && color == "white" && ((pos + 56) - 7) < 65 && ((pos + 56) - 6) > 0) {
                var npos = (pos + 56) - 7
                bishopMove7 = [npos, color, s, takec(), "bishop", "bishopMove7", pos]
                arr.push(bishopMove7)
            }
            //Down Right//
            //move right 1 down 1
            var bishopMove8
            if(s == "white" && color == "white" && ((pos + 8) + 1) < 65 && ((pos + 8) + 1) > 0) {
                var npos = (pos + 8) + 1
                bishopMove8 = [npos, color, s, takec(), "bishop", "bishopMove8", pos]
                arr.push(bishopMove8)
            }
            //move right 2 down 2
            var bishopMove9
            if(s == "white" && color == "white" && ((pos + 16) + 2) < 65 && ((pos + 16) + 2) > 0) {
                var npos = (pos + 16) + 2
                bishopMove9 = [npos, color, s, takec(), "bishop", "bishopMove9", pos]
                arr.push(bishopMove9)
            }
            //move right 3 down 3
            var bishopMove10
            if(s == "white" && color == "white" && ((pos + 24) + 3) < 65 && ((pos + 24) + 3) > 0) {
                var npos = (pos + 24) + 3
                bishopMove10 = [npos, color, s, takec(), "bishop", "bishopMove10", pos]
                arr.push(bishopMove10)
            }
            //move right 4 down 4
            var bishopMove11
            if(s == "white" && color == "white" && ((pos + 32) + 4) < 65 && ((pos + 32) + 4) > 0) {
                var npos = (pos + 32) + 4
                bishopMove11 = [npos, color, s, takec(), "bishop", "bishopMove11", pos]
                arr.push(bishopMove11)
            }
            //move right 5 down 5
            var bishopMove12 
            if(s == "white" && color == "white" && ((pos + 40) + 5) < 65 && ((pos + 40) + 5) > 0) {
                var npos = (pos + 40) + 5
                bishopMove12 = [npos, color, s, takec(), "bishop", "bishopMove12", pos]
                arr.push(bishopMove12)
            }
            //move right 6 down 6
            var bishopMove13
            if(s == "white" && color == "white" && ((pos + 48) + 6) < 65 && ((pos + 48) + 6) > 0) {
                var npos = (pos + 48) + 6
                bishopMove13 = [npos, color, s, takec(), "bishop", "bishopMove13", pos]
                arr.push(bishopMove13)
            }
            //move right 7 down 7
            var bishopMove14
            if(s == "white" && color == "white" && ((pos + 56) + 7) < 65 && ((pos + 56) + 7) > 0) {
                var npos = (pos + 56) + 7
                bishopMove14 = [npos, color, s, takec(), "bishop", "bishopMove14", pos]
                arr.push(bishopMove14)
            } 
            //Up Right//
            //move right 1 up 1
            var bishopMove15
            if(s == "white" && color == "white" && ((pos - 8) + 1) < 65 && ((pos - 8) + 1) > 0) {
                var npos = (pos - 8) + 1
                bishopMove15 = [npos, color, s, takec(), "bishop", "bishopMove15", pos]
                arr.push(bishopMove15)
            }
            //move right 2 up 2
            var bishopMove16
            if(s == "white" && color == "white" && ((pos - 16) + 2) < 65 && ((pos - 16) + 2) > 0) {
                var npos = (pos - 16) + 2
                bishopMove16 = [npos, color, s, takec(), "bishop", "bishopMove16", pos]
                arr.push(bishopMove16)
            }
             //move right 3 up 3
            var bishopMove17
            if(s == "white" && color == "white" && ((pos - 24) + 3) < 65 && ((pos - 24) + 3) > 0) {
                var npos = (pos - 24) + 3
                bishopMove17 = [npos, color, s, takec(), "bishop", "bishopMove17", pos]
                arr.push(bishopMove17)
            }
            //move right 4 up 4
            var bishopMove18
            if(s == "white" && color == "white" && ((pos - 32) + 4) < 65 && ((pos - 32) + 4) > 0) {
                var npos = (pos - 32) + 4
                bishopMove18 = [npos, color, s, takec(), "bishop", "bishopMove18", pos]
                arr.push(bishopMove18)
            }
            //move right 5 up 5
            var bishopMove19
            if(s == "white" && color == "white" && ((pos - 40) + 5) < 65 && ((pos - 40) + 5) > 0) {
                var npos = (pos - 40) + 5
                bishopMove19 = [npos, color, s, takec(), "bishop", "bishopMove19", pos]
                arr.push(bishopMove19)
            }
            //move right 6 up 6
            var bishopMove20
            if(s == "white" && color == "white" && ((pos - 48) + 6) < 65 && ((pos - 48) + 6) > 0) {
                var npos = (pos - 48) + 6
                bishopMove20 = [npos, color, s, takec(), "bishop", "bishopMove20", pos]
                arr.push(bishopMove20)
            }
            //move right 7 up 7
            var bishopMove21
            if(s == "white" && color == "white" && ((pos - 56) + 7) < 65 && ((pos - 56) + 7) > 0) {
                var npos = (pos - 56) + 7
                bishopMove21 = [npos, color, s, takec(), "bishop", "bishopMove21", pos]
                arr.push(bishopMove21)
            }
            //Up Left//
            //move left 1 up 1
            var bishopMove22 
            if(s == "white" && color == "white" && ((pos - 8) - 1) < 65 && ((pos - 8) - 1) > 0) {
                var npos = (pos - 8) - 1
                bishopMove22 = [npos, color, s, takec(), "bishop", "bishopMove22", pos]
                arr.push(bishopMove22)
            }
            //move left 2 up 2
            var bishopMove23
            if(s == "white" && color == "white" && ((pos - 16) - 2) < 65 && ((pos - 16) - 2) > 0) {
                var npos = (pos - 16) - 2
                bishopMove23 = [npos, color, s, takec(), "bishop", "bishopMove23", pos]
                arr.push(bishopMove23)
            }
            //move left 3 up 3
            var bishopMove24
            if(s == "white" && color == "white" && ((pos - 24) - 3) < 65 && ((pos - 24) - 3) > 0) {
                var npos = (pos - 24) - 3
                bishopMove24 = [npos, color, s, takec(), "bishop", "bishopMove24", pos]
                arr.push(bishopMove24)
            }
            //move left 4 up 4
            var bishopMove25
            if(s == "white" && color == "white" && ((pos - 32) - 4) < 65 && ((pos - 32) - 4) > 0) {
                var npos = (pos - 32) - 4
                bishopMove25 = [npos, color, s, takec(), "bishop", "bishopMove25", pos]
                arr.push(bishopMove25)
            }
            //move left 5 up 5
            var bishopMove26
            if(s == "white" && color == "white" && ((pos - 40) - 5) < 65 && ((pos - 40) - 5) > 0) {
                var npos = (pos - 40) - 5
                bishopMove26 = [npos, color, s, takec(), "bishop", "bishopMove26", pos]
                arr.push(bishopMove26)
            } 
            //move left 6 up 6
            var bishopMove27
            if(s == "white" && color == "white" && ((pos - 48) - 6) < 65 && ((pos - 48) - 6) > 0) {
                var npos = (pos - 48) - 6
                bishopMove27 = [npos, color, s, takec(), "bishop", "bishopMove27", pos]
                arr.push(bishopMove27)
            }
            //move left 7 up 7
            var bishopMove28
            if(s == "white" && color == "white" && ((pos - 56) - 7) < 65 && ((pos - 56) - 7) > 0) {
                var npos = (pos - 56) - 7
                bishopMove28 = [npos, color, s, takec(), "bishop", "bishopMove28", pos]
                arr.push(bishopMove28)
            }
        break;
        case "queen":
            //Horizontal Left//
            //move 1 left
            var queenMove1 
            if(s == "white" && color == "white" && (pos - 1) < 65 && (pos - 1) > 0) {
                var npos = pos - 1
                queenMove1 = [npos, color, s, takec(), "queen", "queenMove1", pos]
                arr.push(queenMove1)
            } 
            //move 2 left
            var queenMove2 
            if(s == "white" && color == "white" && (pos - 2) < 65 && (pos - 2) > 0) {
                var npos = pos - 2
                queenMove2 = [npos, color, s, takec(), "queen", "queenMove2", pos]
                arr.push(queenMove2)
            }
            //move 3 left
            var queenMove3
            if(s == "white" && color == "white" && (pos - 3) < 65 && (pos - 3) > 0) {
                var npos = pos - 3
                queenMove3 = [npos, color, s, takec(), "queen", "queenMove3", pos]
            }
            //move 4 left 
            var move4
            //move 5 left 
            var move5
            //move 6 left
            var move6
            //move 7 left
            var move7
            //Horizontal Right//
            //move 1 right
            var move8
            //move 2 right
            var move9
            //move 3 right
            var move10
            //move 4 right
            var move11
            //move 5 right
            var move12
            //move 6 right
            var move13
            //move 7 right
            var move14
            //Vertical Down//
            //move 1 down
            var move15
            //move 2 down
            var move16
            //move 3 down
            var move17
            //move 4 down
            var move18
            //move 5 down
            var move19
            //move 6 down
            var move20
            //move 7 down
            var move21
            //Vertical Up//
            //move 1 up 
            var queenMove22
            if(s == "white" && color == "white" && (pos - 8) < 65 && (pos - 8) > 0) {
                var npos = pos - 8
                queenMove22 = [npos, color, s, takec(), "queen", "queenMove22", pos]
                arr.push(queenMove22)   
            }
            //move 2 up
            var move23
            //move 3 up
            var move24
            //move 4 up
            var move25
            //move 5 up
            var move26
            //move 6 up
            var move27
            //move 7 up
            var move28
            //Diagonal Up Right//
            //move right 1 up 1
            var move29
            //move right 2 up 2
            var move30
            //move right 3 up 3
            var move31
            //move right 4 up 4
            var move32
            //move right 5 up 5
            var move33
            //move right 6 up 6
            var move34
            //move right 7 up 7
            var move35
            //Diagonal Down Right//
            //move right 1 down 1
            var move36 
            //move right 2 down 2
            var move37
            //move right 3 down 3
            var move38
            //move right 4 down 4
            var move39
            //move right 5 down 5
            var move40
            //move right 6 down 6
            var move41
            //move right 7 down 7
            var move42
            //Diagonal Down Left//
            //move left 1 down 1
            var move43
            //move left 2 down 2
            var move44
            //move left 3 down 3 
            var move45
            //move left 4 down 4
            var move46
            //move left 5 down 5
            var move47
            //move left 6 down 6
            var move48
            //move left 7 down 7
            var move49
            //Diagonal Up Left//
            //move left 1 up 1
            var move50
            //move left 2 up 2
            var move51
            //move left 3 up 3
            var move52
            //move left 4 up 4
            var move53
            //move left 5 up 5
            var move54
            //move left 6 up 6
            var move55
            //move left 7 up 7
            var move56
        break;
    }
    //var arr2 = await validate(arr, pos) 
    console.log(arr)
    var arr3 = isValid(arr)
    console.log(arr3)
    draw(arr3, arr)
    window.sessionStorage.setItem("arr", JSON.stringify(arr3))
    return arr3
}

function isValid(arr) {
    //console.log(arr)
    var arr2 = []
    var arr3 = []
    for(var j = 0; j < arr.length; j++) {
        var pos = arr[j][6]
        var npos = arr[j][0]
        var move = arr[j][5]
        var type = arr[j][4]
        var color = arr[j][1]
        var sw = arr[j][2]
        //checks if move goes over piece of same color or is blocked by another piece of the same color or if other color piece blocks it
        var c1 = cmove(pos, npos, move, type, color, sw)
        console.log(c1)
        if(c1 == "") {

        } else {
            arr2.push(c1)
        }
        //checks if piece can take another piece
        var c2 = takec(pos, npos, type, color, sw)
        //checks if piece is pinned to king by another piece
        //arr3.push(pchck(pos, color, sw))
        //checks if piece can take another piece
    }
    for(var i = 0; i < arr2.length; i++) {
        arr3.push(arr2[i])
    }
    console.log(arr3)
    return arr3
}

function draw(arr, arr2) {
    for(var i = 0; i < arr.length; i++) {
        var take = arr2[i][3]
        if(take == "green") {
            var o = document.getElementById(arr[i])
            var img = document.createElement("img")
            var gd = document.getElementById("greenDot")
            img.src = gd.src
            img.classList.add("dot")
            img.style.width = "32px"
            o.appendChild(img)
            o.addEventListener("click", (e) => {
                move(e)
                var el = document.getElementsByClassName("dot")
                var len = el.length   
                for(var i = 0; i < len; i++) {
                    var ele = document.getElementById(i + "!")
                }
                for(var i = 0; i < len; i++) {
                    el[0].remove()
                }
                var e2 = document.getElementsByClassName("red")
                var len2 = e2.length
                for(var i = 0; i < len2; i++) {
                    var num = e2[i].id
                    var elem = document.getElementById(num)
                    elem.style.backgroundColor = sqc(num)   
                    elem.classList.remove("red")
                    console.log(elem)
                }     
            }, {once : true, capture : true})
            o.classList.add("mouse")
        } else if(take == "red") {
            var o = document.getElementById(arr2[i][0])
            //console.log(o)
            var color = o.style.backgroundColor
            o.classList.add("red")
            o.style.backgroundColor = "red"
            o.addEventListener("click", (e) => {
                move(e)
                var e = document.getElementsByClassName("red")
                var len2 = e.length
                for(var i = 0; i < len2; i++) {
                    var num = e[i].id
                    console.log(num)
                    var elem = document.getElementById(num)
                    elem.style.backgroundColor = sqc(num)
                    elem.classList.remove("red")
                }
                var el2 = document.getElementsByClassName("dot")
                var len2 = el2.length   
                for(var i = 0; i < len2; i++) {
                    var ele = document.getElementById(i + "!")
                }
                for(var i = 0; i < len2; i++) {
                    el2[0].remove()
                }
            }, {once : true, capture : true})
            o.classList.add("mouse")
        }   
    }
}

function del() {
    var el = document.getElementsByClassName("dot")
    var len = el.length
    //console.log(len)
    for(var i = 0; i < len; i++) {
        el[i].parentElement.classList.remove("mouse")
    }
    for(var i = 0; i < len; i++) {
        el[0].remove()
    }   
    var e = document.getElementsByClassName("red")
    var len2 = e.length
    for(var i = 0; i < len2; i++) {
        var num = e[i].id
        var elem = document.getElementById(num)
        elem.style.backgroundColor = sqc(num)
        elem.classList.remove("red")
    }
}

function  ptchckL(pos, color, s) {
    if(s == "white" && color == "white" && document.getElementById(pos - 7) != undefined) {
        var npos = pos - 7
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false    
            }
        } else {
            return false
        }
    } else if(s == "white" && color == "black" && document.getElementById(pos + 7) != undefined) {
        var npos = pos + 7
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else if(s == "black" && color == "white" && document.getElementById(pos + 7) != undefined) {
        var npos = pos + 7
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else if(s == "black" && color == "black" && document.getElementById(pos - 7) != undefined) {
        var npos = pos - 7
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

function  ptchckR(pos, color, s) {
    if(s == "white" && color == "white" && document.getElementById(pos - 9) != undefined) {
        var npos = pos - 9
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false    
            }
        } else {
            return false
        }
    } else if(s == "white" && color == "black" && document.getElementById(pos + 9) != undefined) {
        var npos = pos + 9
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else if(s == "black" && color == "white" && document.getElementById(pos + 9) != undefined) {
        var npos = pos + 9
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else if(s == "black" && color == "black" && document.getElementById(pos - 9) != undefined) {
        var npos = pos - 9
        var e = document.getElementById(npos)
        console.log(npos)
        if(e.children.length > 0) {
            var el = e.children[0].src
            var nc = cchck(el)
            if(color != nc) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

function tchck(pos, npos, type, color, sw) {
    if(sw == "white" && color == "white") {
        //piece type
        switch(type) {
            case "rook":
                
            break;
            case "bishop":

            break;
            case "knight":
                
            break;
            case "queen":

            break;
            case "king":

            break;
        }
    }
}

function cmove(pos, npos, move, type, color, sw) {
    //console.log(typeof(pos))
    var arr = []
    switch(type) {
        case "pawn":
            //pawnMove1 is move 1 foward
            if(move == "pawnMove1") {
                if(sw == "white" && color == "white") {
                    var sq = document.getElementById(pos - 8)
                    if(sq.children.length == 1) {
                        //piece is in the way dont push to arr becuase pawn cant take foward
                    } else {
                        //no piece is blocking 
                        if((pos - 8) == npos) {
                            //position - 8 is equal to new position push to arr
                            arr.push(npos)
                        }
                    }
                }
            } else if(move == "pawnMove2") {
                //pawnMove2 is move 2 foward
                if(sw == "white" && color == "white") {
                    //check square in front 
                    var sq1 = document.getElementById(npos + 8)
                    if(sq1.children.length == 1) {
                        //square in front has child
                    } else {
                        //square in front has no child so check target square
                        var sq2 = document.getElementById(npos)
                        if(sq2.children.length == 1) {
                            //target square has children dont push
                        } else {
                            //target square has no children push
                            arr.push(npos)
                        }
                    }
                }
            } else if(move == "pawnMove3") {

            } else if(move == "pawnMove4") {

            } else if(move == "pawnMove5") {

            } else if(move == "pawnMove6") {

            } 
        break;  
        case "rook":
            if(move == "rookMove1") {
                //rookMove1 is move up 1
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                }
            } else if(move == "rookMove2") {
                //rookMove2 is move up 2
                if(sw == "white" && color == "white") {
                    //check 1 square above for piece
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        //piece is in way dont push to arr
                    } else {
                        //no piece in way check for friendly piece 2 squares above
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            //piece is in 2nd square check if piece is freindly
                            if(cchck(sq2.children[0].src) == color) {
                                //piece is freindly dont push to arr
                            } else {
                                //piece is not friendly we can take so push to arr
                                arr.push(npos)
                            }
                        } else {
                            //no piece in second square push to arr
                            arr.push(npos)
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                }
            } else if(move == "rookMove3") {
                //rookMove3 is move up 3
                if(sw == "white" && color == "white") {
                    //check 1 square above for piece
                    var sq1 = document.getElementById(pos - 8) 
                    if(sq1.children.length == 1) {
                        //piece is in way dont push to arr
                    } else {
                        //no piece in way check for freinedly piece 2 sqrs above
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            //piece in way stop
                        } else {
                            //check for piece 3 sqrs above 
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {
                                //piece is in way check if it is freindly
                                if(cchck(sq3.children[0].src) == color) {
                                    //piece is friendly dont push to arr
                                } else {
                                    //piece is not friendly we can push to arr 
                                    arr.push(npos)
                                }
                            } else {
                                //no piece in way push to arr
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                }
            } else if(move == "rookMove4") {
                //rookMove4 is move up 4
                if(sw == "white" && color == "white") {
                    //check squares for piece
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        //piece is in way stop
                    } else {
                        //no piece continue
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            //piece in way stop
                        } else {
                            //no piece in way continue
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {
                                //piece in way stop
                            } else {
                                //no piece in way check if final square is empty or has enemy piece
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {
                                    //piece is there check color of piece
                                    if(cchck(sq4.children[0].src) == color) {
                                        //piece is same color cant move dont push
                                    } else {
                                        //enemy piece we can take push
                                        arr.push(npos)
                                    }
                                } else { 
                                    //no piece is there push to arr
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                }
            } else if(move == "rookMove5") {
                //rookMove5 is move up 5
                if(sw == "white" && color == "white") {
                    //check squares for piece
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        //piece is in way stop
                    } else {
                        //no piece continue
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            //piece in way stop
                        } else {
                            //no piece in way continue
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {
                                //piece in way stop
                            } else {
                                //no piece in way continue
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {
                                    //piece is in the way stop
                                } else {
                                    //no piece in way check final square for friendly piece
                                    var sq5 = document.getElementById(pos - 40) 
                                    if(sq5.children.length == 1) {
                                        //piece on final square check color
                                        if(cchck(sq5.children[0].src) == color) {
                                            //not enemy piece dont push
                                        } else {
                                            //enemy piece push to arr
                                            arr.push(npos)
                                        }
                                    } else {
                                        //no piece push to arr
                                        arr.push(npos)
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {
                                        if(cchck(sq5.children[0].src) == color) {} else {
                                            arr.push(npos)
                                        }
                                    } else {
                                        arr.push(npos)
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {
                                        if(cchck(sq5.children[0].src) == color) {} else {
                                            arr.push(npos)
                                        }
                                    } else {
                                        arr.push(npos)
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24) 
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos - 40)
                                    if(sq5.children.length == 1) {
                                        if(cchck(sq5.children[0].src) == color) {} else {
                                            arr.push(npos)
                                        }
                                    } else {
                                        arr.push(npos)
                                    }
                                }
                            }
                        }
                    }
                }
            } else if(move == "rookMove6") {
                //rookMove6 is move up 6
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos - 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos - 48)
                                        if(sq6.children.length == 1) {
                                            if(cchck(sq6.children[0].src) == color) {} else {
                                                arr.push(npos)
                                            }
                                        } else {
                                            arr.push(npos)
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos + 48)
                                        if(sq6.children.length == 1) {
                                            if(cchck(sq6.children[0].src) == color) {} else {
                                                arr.push(npos)
                                            }
                                        } else {
                                            arr.push(npos)
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos + 48)
                                        if(sq6.children.length == 1) {
                                            if(cchck(sq6.children[0].src) == color) {} else {
                                                arr.push(npos)
                                            }
                                        } else {
                                            arr.push(npos)
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos - 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos - 48)
                                        if(sq6.children.length == 1) {
                                            if(cchck(sq6.children[0].src) == color) {} else {
                                                arr.push(npos)
                                            }
                                        } else {
                                            arr.push(npos)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if(move == "rookMove7") {
                //rookMove7 is move up 7
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos - 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos - 48)
                                        if(sq6.children.length == 1) {} else {
                                            var sq7 = document.getElementById(pos - 56)
                                            if(sq7.children.length == 1) {
                                                if(cchck(sq7.children[0].src) == color) {} else {
                                                    arr.push(npos)
                                                }
                                            } else {
                                                arr.push(npos)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos + 48)
                                        if(sq6.children.length == 1) {} else {
                                            var sq7 = document.getElementById(pos + 56)
                                            if(sq7.children.length == 1) {
                                                if(cchck(sq7.children[0].src) == color) {} else {
                                                    arr.push(npos)
                                                }
                                            } else {
                                                arr.push(npos)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32)
                                if(sq4.children.length == 1) {} else {
                                    var sq5 = document.getElementById(pos + 40)
                                    if(sq5.children.length == 1) {} else {
                                        var sq6 = document.getElementById(pos + 48)
                                        if(sq6.children.length == 1) {} else {
                                            var sq7 = document.getElementById(pos + 56)
                                            if(sq7.children.length == 1) {
                                                if(cchck(sq7.children[0].src) == color) {} else {
                                                    arr.push(npos)
                                                }
                                            } else {
                                                arr.push(npos)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1 != null) {
                        if(sq1.children.length == 1) {} else {
                            var sq2 = document.getElementById(pos - 16)
                            if(sq2.children.length == 1) {} else {
                                var sq3 = document.getElementById(pos - 24)
                                if(sq3.children.length == 1) {} else {
                                    var sq4 = document.getElementById(pos - 32)
                                    if(sq4.children.length == 1) {} else {
                                        var sq5 = document.getElementById(pos - 40)
                                        if(sq5.children.length == 1) {} else {
                                            var sq6 = document.getElementById(pos - 48)
                                            if(sq6.children.length == 1) {} else {
                                                var sq7 = document.getElementById(pos - 56)
                                                if(sq7.children.length == 1) {
                                                    if(cchck(sq7.children[0].src) == color) {} else {
                                                        arr.push(npos)
                                                    }
                                                } else {
                                                    arr.push(npos)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }   
            } else if(move == "rookMove8") {
                //rookMove8 is move down 1
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                }
            } else if(move == "rookMove9") {
                //rookMove9 is move down 2
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }   
                }
            } else if(move == "rookMove10") {
                //rookMove 10 is move 3 down
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos + 8) 
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 8) 
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24) 
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 8) 
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24) 
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos + 8) 
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24) 
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                }
            } else if(move == "rookMove11") {
                //rookMove11 is move down 4
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32) 
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32) 
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 32) 
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos + 8)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos + 16)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos + 24)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos + 32) 
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {} else {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                }
            } else if(move == "rookMove12") {

            } else if(move == "rookMove13") {
                
            } else if(move == "rookMove14") {

            } else if(move == "rookMove15") {
                //rookMove15 is move 1 right
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos + 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos + 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)  
                    } 
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos + 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos + 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                }
            } else if(move == "rookMove16") {
                //rookMove16 is move 2 right
                if(sw == "white" && color == "white") {
                    
                }
            } else if(move == "rookMove17") {
                 
            } else if(move == "rookMove18") {
  
            } else if(move == "rookMove19") {
 
            } else if(move == "rookMove20") {

            } else if(move == "rookMove21") {

            } else if(move == "rookMove22") {
                //rookMove22 is move 1 left
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    console.log(sq1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    console.log(sq1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {
                        if(cchck(sq1.children[0].src) == color) {} else {
                            arr.push(npos)
                        }
                    } else {
                        arr.push(npos)
                    }
                }
            } else if(move == "rookMove23") {
                //rookMove23 is move 2 left
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {
                            if(cchck(sq2.children[0].src) == color) {} else {
                                arr.push(npos)
                            }
                        } else {
                            arr.push(npos)
                        }
                    }
                }
            } else if(move == "rookMove24") {
                //rookMove24 is move 3 left
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2) 
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {
                                if(cchck(sq3.children[0].src) == color) {} else {
                                    arr.push(npos)
                                }
                            } else {
                                arr.push(npos)
                            }
                        }
                    }
                }
            } else if(move == "rookMove25") {
                if(sw == "white" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 4)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "white" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 4)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "white") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 4)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                } else if(sw == "black" && color == "black") {
                    var sq1 = document.getElementById(pos - 1)
                    if(sq1.children.length == 1) {} else {
                        var sq2 = document.getElementById(pos - 2)
                        if(sq2.children.length == 1) {} else {
                            var sq3 = document.getElementById(pos - 3)
                            if(sq3.children.length == 1) {} else {
                                var sq4 = document.getElementById(pos - 4)
                                if(sq4.children.length == 1) {
                                    if(cchck(sq4.children[0].src) == color) {
                                        arr.push(npos)
                                    }
                                } else {
                                    arr.push(npos)
                                }
                            }
                        }
                    }
                }
            } else if(move == "rookMove26") {

            } else if(move == "rookMove27") {

            } else if(move == "rookMove28") {

            } else if(move == "rookMove29") { 

            }
        break;
        case "king":

        break;
        case "knight":
            
        break;
        case "bishop":

        break;
        case "queen":

        break;
    }
    //console.log(arr)
    return arr.toString()
}

function pchck(pos, color, sw) {

} 

function takec(npos, color) { 
    //check if there is a piece there
    var sq = document.getElementById(npos)
    if(sq.children.length == 1) {
        //check if piece is freindly
        if(cchck(sq.children[0].src) == color) {
            //freindly return green
            return "green"
        } else {
            //not freindly return red
            return "red"
        }
    } else {
        return "green"
    }
} 

function sqc(id) {
    if(typeof(id) == "number") {
        id = Number.toString(id)
    }
    switch(id) {
        case "1":
            return "white"
        break;  
        case "2":
            return "#43464a"
        break;
        case "3":
            return "white"
        break;
        case "4":
            return "#43464a"
        break;
        case "5":
            return "white"
        break;
        case "6":
            return "#43464a"
        break;
        case "7":
            return "white"
        break;
        case "8":
            return "#43464a"
        break;
        case "9":
            return "#43464a"
        break;
        case "10":
            return "white"
        break;
        case "11":
            return "#43464a"
        break;
        case "12":
            return "white"
        break;
        case "13":
            return "#43464a"
        break;
        case "14":
            return "white"
        break;
        case "15":
            return "#43464a"
        break;
        case "16":
            return "white"
        break;
        case "17":
            return "white"
        break
        case "18":
            return "#43464a"
        break;
        case "19":
            return "white"
        break;
        case "20":
            return "#43464a"
        break;
        case "21":
            return "white"
        break;
        case "22":
            return "#43464a"
        break;
        case "23":
            return "white"
        break;
        case "24":
            return "#43464a"
        break;
        case "25":
            return "#43464a"
        break;
        case "26":
            return "white"
        break;
        case "27":
            return "#43464a"
        break
        case "28":
            return "white"
        break
        case "29":
            return "#43464a"
        break
        case "30":
            return "white"
        break;
        case "31":
            return "#43464a"
        break;
        case "32":
            return "white"
        break;
        case "33":
            return "white"
        break;
        case '34':
            return "#43464a"
        break;
        case "35":
            return "white"
        break;
        case "36":
            return "#43464a"
        break;
        case "37":
            return "white"
        break;
        case "38":
            return "#43464a"
        break
        case "39":
            return "white"
        break;
        case "40":
            return "#43464a"
        break
        case "41":
            return "#43464a"
        break;
        case "42":
            return "white"
        break;
        case "43":
            return "#43464a"
        break;
        case "44":
            return "white"
        break;
        case "45":
            return "#43464a"
        break
        case "46":
            return "white"
        break;
        case "47":
            return "#43464a"
        break;
        case "48":
            return "white"
        break;
        case "49":
            return "white"
        break;
        case "50":
            return "#43464a"
        break;
        case "51":
            return "white"
        break;
        case "52":
            return "#43464a"
        break;
        case "53":
            return "white"
        break;
        case "54":
            return "#43464a"
        break;
        case "55":
            return "white"
        break;
        case "56":
            return "#43464a"
        break;
        case "57":
            return "#43464a"
        break;
        case "58":
            return "white"
        break;
        case "59":
            return "#43464a"
        break;
        case "60":
            return "white"
        break;
        case "61":
            return "#43464a"
        break;
        case "62":
            return "white"
        break
        case "63":
            return "#43464a"
        break;
        case "64":
            return "white"
        break;
    }       

}