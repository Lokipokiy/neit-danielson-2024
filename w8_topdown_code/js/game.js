
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)



    function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()
}

//setup
var state;
var button = new GameObject('#start');
var avatar = new GameObject('#helmet');
var wall = new GameObject();
var level = new GameObject();
var sword = new GameObject();
var enemy = new GameObject();
var wall = [];


function init()
{
    state = menu

    avatar.color = `#00000000`;
    button.color = `#00000000`

    level.x = 0; 
    level.y = 0;

    for(let i=0; i<50; i++) 
    {
        if(i<26) //Vertical (v)
        {
            wall[i] = new GameObject('#wallBushesVertical');
            wall[i].w = 24
            wall[i].color = `#00000000`
            wall[i].world = level
            
        }
        else //Horizontail (h)
        {
            wall[i] = new GameObject('#wallBushesHorizontal');
            wall[i].h = 24
            wall[i].color = `#00000000`
            wall[i].world = level
        }
    }
    //START SCREEN BOX TOP = h
    wall[26].w = 375;
    wall[26].x = c.width/2.1
    wall[26].y = 60

    //START SCREEN BOX RIGHT = v
    wall[1].h = 628;
    wall[1].x = 700;
    wall[1].y = c.height/1.4

    //START SCREEN BOX LEFT = v
    wall[2].h = 525;
    wall[2].x = 200;
    wall[2].y = c.height/2.67

    //START SCREEN BOX BOTTOM = h
    wall[27].w = 375;
    wall[27].x = c.width/2.1
    wall[27].y = c.height-62
    

    /*-----------------WALLS OUTSIDE STARTING SCREEN-----------------------*/
    // Bottom Passage Left - (Connected to "START SCREEN BOX BOTTOM") = v
    wall[3].h = 132
    wall[3].x = 565
    wall[3].y = 493
    
    //1st Below of Starting Box (Connected to "Bottom Passage - Left") = h
    wall[28].w = 500;
    wall[28].x = 325
    wall[28].y = 550

    // 1st Left of Starting Box - Bottom Segment (Connected to "1st Below of Starting Box") = v
    wall[4].h = 375
    wall[4].x = c.width-715
    wall[4].y = c.height-125
    
    // 1st Left of Starting Box - Top Segment = v
    wall[5].h = 290
    wall[5].x = c.width-715
    wall[5].y = c.height-570
    
    // 1st Top of Starting Box - (Connected to "1st Left of Starting Box - Top Segment") = h
    wall[29].w = 260;
    wall[29].x = c.width/3.55
    wall[29].y = -203
    
    // V-bar 1st Top Left of Starting Box - (Connected to "1st Top of Starting Box") = v
    wall[6].h = 502
    wall[6].x = c.width/2.3
    wall[6].y = -290
    
    //Top Dead End Left - (Connected to " V-bar 1st Top Left of Starting Box" & "Top Passage Left") = h
    wall[30].w = 200
    wall[30].x = 452
    wall[30].y = -529
    
    // Top Passage Left - (Connected to "START SCREEN BOX TOP" & "Top Dead End Left") = v
    wall[7].h = 610
    wall[7].x = c.width/1.436
    wall[7].y = -236
    
    // Top Passage Right - (Connected to "START SCREEN BOX RIGHT") = h
    wall[31].w = 350
    wall[31].x = 863
    wall[31].y = 40

    // V-Bar 1st Top Right of Starting Box (Connected To "Top Passage Right") = v
    wall[8].h = 582
    wall[8].x = 1026
    wall[8].y = -250
    
    //Top Passage Jutout (Connected to "Top Passage Left") = h
    wall[32].w = 350
    wall[32].x = 725
    wall[32].y = -110

    // V-bar on jutout (Connected to "Top Passage Jutout") = v
    wall[9].h = 435
    wall[9].x = 775
    wall[9].y = -323
    
    //Top Dead End Right (Connected to "V-bar on jutout" & "V-Bar 1st Top Right of Starting Box") = h
    wall[33].w = 250
    wall[33].x = 890
    wall[33].y = -529

    //2nd Below Starting Box (Connected to "START SCREEN BOX RIGHT") = h
    wall[34].w = 750
    wall[34].x = 335
    wall[34].y = 660

    //2nd Left of Starting Box (Connected to "2nd Below Starting Box") = v
    wall[10].h = 975
    wall[10].x = -28
    wall[10].y = 162

    //2nd Top of Starting box (Connected to "2nd Left of Starting Box") = h
    wall[35].w = 260
    wall[35].x = 90
    wall[35].y = -317

    //V-bar 2nd Top Left of Starting Box (Connected to "2nd Top of Starting box") = v
    wall[11].h = 325
    wall[11].x = 208
    wall[11].y = -468

    //3rd Top of Starting Box (Connected to "V-bar 2nd Top Left of Starting Box") = h
    wall[36].w = 991
    wall[36].x = 690
    wall[36].y = -640

    //V-bar 2nd Top Right of Starting Box (Connected to "3rd Top of Starting Box") = v
    wall[12].h = 1800
    wall[12].x = 1174
    wall[12].y = 250

    //Seperate V-Bar Right of Starting Box = v
    wall[13].h = 860
    wall[13].x = 1026
    wall[13].y = 585

    //Right Side Jutout (Connected to "Seperate V-Bar Right of Starting Box") = h
    wall[37].w = 200
    wall[37].x = 925
    wall[37].y = 300

    //Left Side Jutout (Connected to "START SCREEN BOX RIGHT") = h
    wall[38].w = 180
    wall[38].x = 800
    wall[38].y = 575

    //V-bar Jutout Top-to-Bottom - Top Segment (Connected to "Left Side Jutout") = v
    wall[14].h = 315
    wall[14].x = 878
    wall[14].y = 740

    //3rd Below of Starting Box - Right Segement (Connected to "Seperate V-Bar Right of Starting Box") = h
    wall[39].w = 150
    wall[39].x = 955
    wall[39].y = 1003

    //V-bar Jutout Top-to-Bottom - Bottom Segment (Connected to "3rd Below of Starting Box - Right Segement") = v
    wall[15].h = 325
    wall[15].x = 878
    wall[15].y = 1154

    //5th Below of Starting Box (Connected to "V-bar Jutout Top-to-Bottom - Bottom Segment") = h
    wall[40].w = 500
    wall[40].x = 635
    wall[40].y = 1305

    //Bottom Dead End (Connected to "5th Below of Starting Box") = v
    wall[16].h = 175
    wall[16].x = 380
    wall[16].y = 1229

    //4th Below of Starting Box (Connected to "Bottom Dead End") = h
    wall[41].w = 325
    wall[41].x = 531
    wall[41].y = 1140

    //Final Below Starting Box (Connected to "V-bar 2nd Top Right of Starting Box") = h
    wall[42].w = 150
    wall[42].x = 1110
    wall[42].y = 1139

    //4th Below of Starting Box Right (Connected to "Final Below Starting Box") = v 
    wall[17].h = 325
    wall[17].x = 1047
    wall[17].y = 1300

    //Furthest Bottom H-Bar (Connected to "4th Below of Starting Box Right") = h
    wall[43].w = 850
    wall[43].x = 625
    wall[43].y = 1450

    //V-bar for dead end (Connected to "4th Below of Starting Box") = v
    wall[18].h = 280
    wall[18].x = 681
    wall[18].y = 992

    //H-Bar dead end (connected to "V-bar for dead end") = h
    wall[44].w = 1100
    wall[44].x = 120
    wall[44].y = 864

    //End H-Bar Top (Connected to "2nd Left of Starting Box") = h
    wall[45].w = 900
    wall[45].x = -467
    wall[45].y = 100

    //Dead End V-Bar Right (Connected to "H-Bar dead end") = v
    wall[19].h = 760
    wall[19].x = -418
    wall[19].y = 490

    //V-Bar Jutout Dead End (Connected To "H-Bar dead end") = v
    wall[20].h = 670
    wall[20].x = -240
    wall[20].y = 540

    //V-Bar Below in Final Path (Connected to "Furthest Bottom H-Bar") = v
    wall[21].h = 438
    wall[21].x = 212
    wall[21].y = 1241

    //4th Below of Starting Box Left (Connected to "V-Bar Below in Final Path") = h
    wall[46].w = 1200
    wall[46].x = -80
    wall[46].y = 1034

    //V-bar Left in Final Path (Connected to "4th Below of Starting Box Left") = v
    wall[22].h = 745
    wall[22].x = -668
    wall[22].y = 650

    //End H-Bar Bottom (Connected to "V-bar Left in Final Path") = h
    wall[47].w = 260
    wall[47].x = -786
    wall[47].y = 275

    //Final Box Right Top = v
    wall[23].h = 150
    wall[23].x = -905
    wall[23].y = 25

    //Final Box Right Bottom = v 
    wall[24].h = 150
    wall[24].x = -905
    wall[24].y = 340

    //Final Box Top = h
    wall[48].w = 250
    wall[48].x = -1025
    wall[48].y = -38

    //Final Box Bottom = h
    wall[49].w = 250
    wall[49].x = -1025
    wall[49].y = 403

    //Final Box Left = v
    wall[25].h = 425
    wall[25].x = -1138
    wall[25].y = 183

    sword.color = `#000000`;

}

init();

/*---------------Game Screens (states)----------------*/
function menu()
{

    button.w = 275
    button.h = 250

    if(clicked(button))
    {
        state = game;
    }
    button.render();
    button.graphic(button.x,button.y);
    button.img.h = button.h+100
    button.img.w = button.w+100
}

function win()
{

}
function lose()
{

}

function game()
{
    
    sword.x = 10000;
    if(a == true)
    {
        avatar.vx += -1;
    }
    if(d == true)
    {
        avatar.vx += 1;
    }
    if(w == true)
    {
        avatar.vy += -1;
    }
    if(s == true)
    {
        avatar.vy += 1;
    }
    if(up == true)
    {
        sword.x = avatar.top().x;
        sword.y = avatar.top().y;
        sword.w = 12;
        sword.h = 100;
    }
    if(down == true)
    {
        sword.x = avatar.bottom().x;
        sword.y = avatar.bottom().y;
        sword.w = 12;
        sword.h = 100;
    }
    if(left == true)
    {
        sword.x = avatar.left().x;
        sword.y = avatar.left().y;
        sword.h = 12;
        sword.w = 100;
    }
    if(right == true)
    {
        sword.x = avatar.right().x;
        sword.y = avatar.right().y;
        sword.h = 12;
        sword.w = 100;
    }
    avatar.vx *= .85;
    avatar.vy *= .85;
    avatar.move();

    //used to move the level. 
    var offset = {x:avatar.vx, y:avatar.vy}

    for(let i=0; i<wall.length; i++)
    {
        while(wall[i].isOverPoint(avatar.bottom()))
        {
            avatar.vy = 0;
            avatar.y--;
            offset.y--;
        }
        while(wall[i].isOverPoint(avatar.top()))
        {
            avatar.vy = 0;
            avatar.y++;
            offset.y++;
        }
        while(wall[i].isOverPoint(avatar.left()))
        {
            avatar.vx = 0;
            avatar.x++;
            offset.x++;
        }
        while(wall[i].isOverPoint(avatar.right()))
        {
            avatar.vx = 0;
            avatar.x--;
            offset.x--;
        }
      
    }
    
   

    /*-------Level movement threshold----*/
    //if(avatar.x > 500 || avatar.x < 300)
    {
        //Level movement code
        level.x -= offset.x;
        avatar.x -= offset.x;
        level.y -= offset.y;
        avatar.y -= offset.y;
    }

    /*----- Camera Code -----------
        var dx = c.width/2 - avatar.x
        var dy = c.height/2 - avatar.y
        
        level.x += dx*.05; 
        avatar.x += dx*.05; 
        level.y += dy*.15; 
        avatar.y += dy*.15; 
    ----------------------------*/
    
   for(let i=0;i<wall.length; i++)
   {
    if(i<26) //Vertical 
    {
        wall[i].render();
        wall[i].graphic(wall[i].x,wall[i].y);
        wall[i].img.h = wall[i].h*1.1
        wall[i].img.w = wall[i].w*3.8
    }
    else  //Horizontal
    {
        wall[i].render();
        wall[i].graphic(wall[i].x,wall[i].y);
        wall[i].img.h = wall[i].h*3.8
        wall[i].img.w = wall[i].w*1.1
    }
    
   }

    //enemy.render();
    sword.render();
    avatar.render();
    avatar.graphic(avatar.x,avatar.y);
    
}



