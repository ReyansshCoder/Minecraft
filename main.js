var canvas=new fabric.Canvas("myCanvas")
bw=30;
bh=30;
var bi=""
px=10;
py=10;
var pi=""
function pu(){
fabric.Image.fromURL("player.png",function(Img){
pi=Img;
pi.scaleToWidth(150);
pi.scaleToHeight(150);
pi.set({
top:py,left:px});
canvas.add(pi);});
}
function newImage(get_image){
fabric.Image.fromURL(get_image,function(Img){
bi=Img;
bi.scaleToWidth(bw);
bi.scaleToHeight(bh);
bi.set({top:py,left:px
});canvas.add(bi);});}
window.addEventListener("keydown" ,myKeydown )
 function myKeydown(e){
kp = e.keyCode;
if (kp=='38'){
    Up ();
    console.log("up") 
}
if (kp=='40'){
    Down ();
    console.log("down") 
}
if (kp=='37'){
    left ();
    console.log("left") 
}
if (kp=='39'){
    Right ();
    console.log("right") 
}
if (kp=='87'){
    newImage ('wall.jpg');
    console.log("W") 
}
if (kp=='71'){
    newImage ('ground.png');
    console.log("G") 
}
if (kp=='76'){
    newImage ('light_green.png');
    console.log("l") 
}
if (kp=='84'){
    newImage ('trunk.jpg');
    console.log("t") 
}
if (kp=='82'){
    newImage ('roof.jpg');
    console.log("r") 
}
if (kp=='89'){
    newImage ('yellow_wall.png');
    console.log("y") 
}
if (kp=='68'){
    newImage ('dark_green.png');
    console.log("d") 
}
if (kp=='85'){
    newImage ('unique.png');
    console.log("u") 
}
if (kp=='67'){
    newImage ('cloud.jpg');
    console.log("c") 
}}

function Up(){
if(py>=0) {
    py=py-10;
    canvas.remove(pi);
    pu()
}
}

function Down(){
if(py<=500){
py=py+10;
canvas.remove(pi);
pu()
}}


function left(){
if(px>=0){
px=px-10;
canvas.remove(pi);
pu();
}}

function Right(){
if(px<=850){
px=px+10;
canvas.remove(pi);
pu();
}}