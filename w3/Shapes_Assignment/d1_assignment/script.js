var canvas = document.querySelector("canvas")

//RECTANGLE-------------------------------
    var rectangle = canvas.getContext("2d")
        rectangle.beginPath()
        rectangle.rect(85,300,100,100)
        rectangle.strokeStyle = "black"     //stroke color
        rectangle.fillStyle = "yellow"      //fill color
        rectangle.lineWidth = 5             //stroke width
        rectangle.stroke()
        rectangle.fill()
        rectangle.closePath()

//LINE------------------------------------
    var line = canvas.getContext("2d")
        line.beginPath()
        line.moveTo(86,682)
        line.lineTo(279,549)
        line.strokeStyle = "rgb(255,0,0)"
        line.lineWidth = 5
        line.stroke()
        line.closePath()
//CIRCLE----------------------------------
    var ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.arc(385,441,66,0,2*Math.PI)
        //(x-origin, y-origin, radius, start angle --> always 0, end angle --> always 2 * Math.PI)
        ctx.strokeStyle = "red"
        ctx.lineWidth = 5
        ctx.fillStyle = "#ffff00"
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
//PENTAGON--------------------------------
    var pentagon = canvas.getContext("2d")
        pentagon.beginPath()
        //origin
        pentagon.moveTo(558,309)
        //line 1
        pentagon.lineTo(668,284)
        //line 2
        pentagon.lineTo(725,380)
        //line 3
        pentagon.lineTo(650,465)
        //line 4
        pentagon.lineTo(548,421)
        //line 5
        pentagon.lineTo(558,309)
        pentagon.fillStyle = "#ff00ff"
        pentagon.strokeStyle = "#00ffff"
        pentagon.lineWidth = 5
        pentagon.stroke()
        pentagon.fill()
        pentagon.closePath()
//STAR------------------------------------
    var star = canvas.getContext("2d")
        star.beginPath()
        //origin
        star.moveTo(636,497)
        //line 1
        star.lineTo(669,555)
        //line 2
        star.lineTo(734,567)
        //line 3
        star.lineTo(688,616)
        //line 4
        star.lineTo(697,682)
        //line 5
        star.lineTo(636,654)
        //line 6 (tiny)
        star.lineTo(635,654)
        //line 7
        star.lineTo(576,682)
        //line 8
        star.lineTo(584,616)
        //line 9
        star.lineTo(538,568)
        //line 10
        star.lineTo(604,555)
        //line 11
        star.lineTo(636,497)
        star.strokeStyle = "rgb(32,32,32)"
        star.lineWidth = 5
        star.fillStyle = "#ffff00"
        star.stroke()
        star.fill()
        star.closePath
