
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
var button = new GameObject();
var avatar = new GameObject();
var wall = new GameObject();
var level = new GameObject();
var sword = new GameObject();
var bad = new GameObject();
var wall = [];

function init()
{
    state = menu

    avatar.color = `green`;

    level.x = 0; 
    level.y = 0;

    for(let i=0; i<52; i++) 
    {
        if(i<25) //Vertical (v)
        {
            wall[i] = new GameObject();
            wall[i].w = 24
            wall[i].color = `purple`
            wall[i].world = level
        }
        else //Horizontail (h)
        {
            wall[i] = new GameObject();
            wall[i].h = 24
            wall[i].color = `purple`
            wall[i].world = level
        }
    }
    //START SCREEN BOX TOP = h
    
    wall[27].w = 375;
    wall[27].x = c.width/2.1
    wall[27].y = 60

    //START SCREEN BOX RIGHT = v
    //wall[1].h = 628;
    wall[1].x = 700;
    wall[1].y = c.height/1.4

    //START SCREEN BOX LEFT = v
    wall[2].h = 525;
    wall[2].x = 200;
    wall[2].y = c.height/2.67

    //START SCREEN BOX BOTTOM = h
    wall[28].w = 375;
    wall[28].x = c.width/2.1
    wall[28].y = c.height-62
    

    /*-----------------WALLS OUTSIDE STARTING SCREEN-----------------------*/
    // Bottom Passage Left - (Connected to "START SCREEN BOX BOTTOM") = v
    wall[3].h = 132
    wall[3].x = 565
    wall[3].y = 493
    
    //1st Below of Starting Box (Connected to "Bottom Passage - Left") = h
    wall[29].w = 500;
    wall[29].x = 325
    wall[29].y = 550

    // 1st Left of Starting Box - Bottom Segment (Connected to "1st Below of Starting Box") = v
    wall[4].h = 375
    wall[4].x = c.width-715
    wall[4].y = c.height-125
    
    // 1st Left of Starting Box - Top Segment = v
    wall[5].h = 290
    wall[5].x = c.width-715
    wall[5].y = c.height-570
    
    // 1st Top of Starting Box - (Connected to "1st Left of Starting Box - Top Segment") = h
    wall[30].w = 260;
    wall[30].x = c.width/3.55
    wall[30].y = -203
    
    // V-bar 1st Top Left of Starting Box - (Connected to "1st Top of Starting Box") = v
    wall[6].h = 502
    wall[6].x = c.width/2.3
    wall[6].y = -290
    
    //Top Dead End Left - (Connected to " V-bar 1st Top Left of Starting Box" & "Top Passage Left") = h
    wall[31].w = 200
    wall[31].x = 452
    wall[31].y = -529
    
    // Top Passage Left - (Connected to "START SCREEN BOX TOP" & "Top Dead End Left") = v
    wall[7].h = 610
    wall[7].x = c.width/1.436
    wall[7].y = -236
    
    // Top Passage Right - (Connected to "START SCREEN BOX RIGHT") = h
    wall[32].w = 350
    wall[32].x = 863
    wall[32].y = 40

    // V-Bar 1st Top Right of Starting Box (Connected To "Top Passage Right") = v
    wall[8].h = 582
    wall[8].x = 1026
    wall[8].y = -250
    
    //Top Passage Jutout (Connected to "Top Passage Left") = h
    wall[33].h = 24
    wall[33].w = 350
    wall[33].x = 725
    wall[33].y = -110

    // V-bar on jutout (Connected to "Top Passage Jutout") = v
    wall[9].h = 435
    wall[9].x = 775
    wall[9].y = -323
    
    //Top Dead End Right (Connected to "V-bar on jutout" & "V-Bar 1st Top Right of Starting Box") = h
    wall[34].w = 250
    wall[34].x = 890
    wall[34].y = -529

    //2nd Below Starting Box (Connected to "START SCREEN BOX RIGHT") = h
    wall[35].w = 750
    wall[35].x = 335
    wall[35].y = 660

    //2nd Left of Starting Box (Connected to "2nd Below Starting Box") = v
    wall[10].h = 975
    wall[10].x = -28
    wall[10].y = 162

    //2nd Top of Starting box (Connected to "2nd Left of Starting Box") = h
    wall[36].w = 260
    wall[36].x = 90
    wall[36].y = -317

    //V-bar 2nd Top Left of Starting Box (Connected to "2nd Top of Starting box") = v
    wall[11].h = 325
    wall[11].x = 208
    wall[11].y = -468

    //3rd Top of Starting Box (Connected to "V-bar 2nd Top Left of Starting Box") = h
    wall[37].w = 991
    wall[37].x = 690
    wall[37].y = -640

    //V-bar 2nd Top Right of Starting Box (Connected to "3rd Top of Starting Box") = v
    wall[12].h = 1800
    wall[12].x = 1174
    wall[12].y = 250

    //Seperate V-Bar Right of Starting Box = v
    wall[13].h = 860
    wall[13].x = 1026
    wall[13].y = 585

    //Right Side Jutout (Connected to "Seperate V-Bar Right of Starting Box") = h
    wall[38].w = 200
    wall[38].x = 925
    wall[38].y = 300

    //Left Side Jutout (Connected to "START SCREEN BOX RIGHT") = h
    wall[39].w = 180
    wall[39].x = 800
    wall[39].y = 575

    //V-bar Jutout Top-to-Bottom - Top Segment (Connected to "Left Side Jutout") = v
    wall[14].h = 315
    wall[14].x = 878
    wall[14].y = 740

    //3rd Below of Starting Box - Right Segement (Connected to "Seperate V-Bar Right of Starting Box") = h
    wall[40].w = 150
    wall[40].x = 955
    wall[40].y = 1003

    //V-bar Jutout Top-to-Bottom - Bottom Segment (Connected to "3rd Below of Starting Box - Right Segement") = v
    wall[15].h = 325
    wall[15].x = 878
    wall[15].y = 1154

    //5th Below of Starting Box (Connected to "V-bar Jutout Top-to-Bottom - Bottom Segment") = h
    wall[41].w = 500
    wall[41].x = 635
    wall[41].y = 1305

    //Bottom Dead End (Connected to "5th Below of Starting Box") = v
    wall[16].h = 175
    wall[16].x = 380
    wall[16].y = 1229

    //4th Below of Starting Box (Connected to "Bottom Dead End") = h
    wall[42].w = 325
    wall[42].x = 531
    wall[42].y = 1140

    //Final Below Starting Box (Connected to "V-bar 2nd Top Right of Starting Box") = h
    wall[43].w = 150
    wall[43].x = 1110
    wall[43].y = 1139

    //V-Bar uhhhhhhh = v
    wall[17].h = 325
    wall[17].x = 1047
    wall[17].y = 1300
1

    sword.color = `#000000`;

}

init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    if(clicked(button))
    {
        state = game;
    }
    button.render()
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
    wall[i].render();
   }

    sword.render();
    avatar.render();
    
}



