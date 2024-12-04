
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
    //START SCREEN BOX TOP
    wall[0]=new GameObject();
    wall[0].h = 24;
    wall[0].w = 375;
    wall[0].color = `purple`
    wall[0].x = c.width/2.1
    wall[0].y = 60
    wall[0].world = level
    //START SCREEN BOX RIGHT
    wall[1]=new GameObject();
    wall[1].h = 628;
    wall[1].w = 24;
    wall[1].color = `purple`
    wall[1].x = 700;
    wall[1].y = c.height/1.4
    wall[1].world = level
    //START SCREEN BOX LEFT
    wall[2]=new GameObject();
    wall[2].h = 525;
    wall[2].w = 24;
    wall[2].color = `purple`
    wall[2].x = 200;
    wall[2].y = c.height/2.67
    wall[2].world = level
    //START SCREEN BOX BOTTOM
    wall[3]=new GameObject();
    wall[3].h = 24;
    wall[3].w = 375;
    wall[3].color = `purple`
    wall[3].x = c.width/2.1
    wall[3].y = c.height-62
    wall[3].world = level

    /*-----------------WALLS OUTSIDE STARTING SCREEN-----------------------*/
    // Bottom Passage Left - (Connected to "START SCREEN BOX BOTTOM")
    wall[4]=new GameObject();
    wall[4].h = 132
    wall[4].w = 24
    wall[4].color = `purple`
    wall[4].x = 565
    wall[4].y = 493
    wall[4].world = level
   
    //1st Below of Starting Box (Connected to "Bottom Passage - Left")
    wall[5]=new GameObject();
    wall[5].h = 24;
    wall[5].w = 500;
    wall[5].color = `purple`
    wall[5].x = 325
    wall[5].y = 550
    wall[5].world = level

    // 1st Left of Starting Box - Bottom Segment (Connected to "1st Below of Starting Box")
    wall[6]=new GameObject();
    wall[6].h = 375
    wall[6].w = 24
    wall[6].color = `purple`
    wall[6].x = c.width-715
    wall[6].y = c.height-125
    wall[6].world = level
    
    // 1st Left of Starting Box - Top Segment
    wall[7]=new GameObject();
    wall[7].h = 290
    wall[7].w = 24
    wall[7].color = `purple`
    wall[7].x = c.width-715
    wall[7].y = c.height-570
    wall[7].world = level

    // 1st Top of Starting Box - (Connected to "1st Left of Starting Box - Top Segment")
    wall[8]=new GameObject();
    wall[8].h = 24;
    wall[8].w = 260;
    wall[8].color = `purple`
    wall[8].x = c.width/3.55
    wall[8].y = -203
    wall[8].world = level

    // V-bar Top Left of Starting Box - (Connected to "1st Top of Starting Box")
    wall[9]=new GameObject();
    wall[9].h = 502
    wall[9].w = 24
    wall[9].color = `purple`
    wall[9].x = c.width/2.3
    wall[9].y = -290
    wall[9].world = level

    //Top Dead End Left - (Connected to " V-bar Top Left of Starting Box" & "Top Passage Left")
    wall[10]=new GameObject();
    wall[10].h = 24
    wall[10].w = 200
    wall[10].color = `purple`
    wall[10].x = 452
    wall[10].y = -529
    wall[10].world = level

    // Top Passage Left - (Connected to "START SCREEN BOX TOP" & "Top Dead End Left")
    wall[11]=new GameObject();
    wall[11].h = 610
    wall[11].w = 24
    wall[11].color = `purple`
    wall[11].x = c.width/1.436
    wall[11].y = -236
    wall[11].world = level

    //
    wall[12]=new GameObject();
    wall[12].h = 24
    wall[12].w = 175
    wall[12].color = `purple`
    wall[12].x = 775
    wall[12].y = 40

    wall[12].world = level


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



