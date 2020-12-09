canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Koenigsegg_Agera_RS_width=100;
Koenigsegg_Agera_RS_height=100;
Devel_Sixteen_width=100;
Devel_Sixteen_height=100;
background_image="th (1).jpg";
Koenigsegg_Agera_RS_image="th.jpg";
Koenigsegg_Agera_RS_x=10;
Koenigsegg_Agera_RS_y=10;
Devel_Sixteen_image="th (85).jpg";  
Devel_Sixteen_x=20;
Devel_Sixteen_y=20;

function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadKoenigsegg_Agera_RS;
    background_image2.src=Koenigsegg_Agera_RS_image;
    background_image3=new Image();
    background_image3.onload=uploadDevel_Sixteen;
    background_image3.src=Devel_Sixteen;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}
function uploadKoenigsegg_Agera_RS(){
    ctx.drawimage(background_image2,Koenigsegg_Agera_RS_x,Koenigsegg_Agera_RS_y,Koenigsegg_Agera_RS_width,Koenigsegg_Agera_RS_height)
}
function uploadDevel_Sixteen(){
    ctx.drawImage(background_image3,Devel_Sixteen_x,Devel_Sixteen_y,Devel_Sixteen_width,Devel_Sixteen_height)
}
window.addEventListener("keydown",Koenigsegg_Agera_RSkeydown);
function Koenigsegg_Agera_RSkeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up1();
        console.log("up");
    }
    if(keyPressed=='40'){
       down1();
        console.log("down");
    }
    if(keyPressed=='39'){
        right1();
        console.log("right");
    }
    if(keyPressed=='37'){
        left1();
        console.log("left");
    }
}
function up1(){
if (rover_y>=0){
    rover_y=rover_y-10;
    console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    uploadbackground();
    uploadrover();
}
}
function down1(){
    if (rover_y<=350){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
    }
    function right1(){
        if (rover_x<=500){
            rover_x=rover_x+10;
            console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            uploadbackground();
            uploadrover();
        }
        }
        function left1(){
            if (rover_x>=0){
                rover_x=rover_x-10;
                console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                uploadbackground();
                uploadrover();
            }
            }
            window.addEventListener("keydown",Devel_Sixteenkeydown);
            function Devel_Sixteenkeydown(e){
                keyPressed=e.keyCode;
                console.log(keyPressed);
                if(keyPressed=='38'){
                    up2();
                    console.log("up");
                }
                if(keyPressed=='40'){
                   down2();
                    console.log("down");
                }
                if(keyPressed=='39'){
                    right2();
                    console.log("right");
                }
                if(keyPressed=='37'){
                    left2();
                    console.log("left");
                }
            }
            function up2(){
            if (rover_y>=0){
                rover_y=rover_y-10;
                console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                uploadbackground();
                uploadrover();
            }
            }
            function down2(){
                if (rover_y<=350){
                    rover_y=rover_y+10;
                    console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                    uploadbackground();
                    uploadrover();
                }
                }
                function right2(){
                    if (rover_x<=500){
                        rover_x=rover_x+10;
                        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                        uploadbackground();
                        uploadrover();
                    }
                    }
                    function left2(){
                        if (rover_x>=0){
                            rover_x=rover_x-10;
                            console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                            uploadbackground();
                            uploadrover();
                        }
                        }
            
            
