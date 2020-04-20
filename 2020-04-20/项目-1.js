var sec3_box2 = document.getElementById("sec3_box2");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var x = 0;
var flag = true;
prev.onclick = function () {
    if (flag) {
        flag = false;
        x--;

        if (x < 0) {
            sec3_box2.style.transition = "all 0s";
            sec3_box2.style.marginLeft = -1170 * 3 + "px";
            setTimeout(function(){
                sec3_box2.style.transition="all .5s";
                sec3_box2.style.marginLeft=-1170 *2 +"px";
                x=2
            },16.7)
        }else{
            sec3_box2.style.marginLeft=-1170*x + "px";
        }
    }
}
next.onclick=function(){
    if(flag){
        flag=false;
        x++;
        sec3_box2.style.marginLeft=-1170*x +"px";
    }
}
sec3_box2.addEventListener("transitionend",function(){
        if(x==3){
            sec3_box2.style.transition="all 0s";
            sec3_box2.style.marginLeft=0;
            x=0;
            setTimeout(function(){
                sec3_box2.style.transition="all .5s"
            },16.7)
        }
        flag=true;
})