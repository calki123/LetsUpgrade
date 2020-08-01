var time;
function setTimer(){
    time=prompt("Please set time in timer (Format: HH:MM:SS)","00:01:00");
    timerdiv=document.getElementById("timerdiv");
    applyCSS(timerdiv);
    timerdiv.innerHTML=time;
    
}
function applyCSS(timer_div) {
    timerdiv.style.fontSize = "40px";
    timerdiv.style.color = "black";
    timerdiv.style.fontWeight = "bold";
    timerdiv.style.width = "200px";
    timerdiv.style.padding = "25px";
    timerdiv.style.textAlign = "center";
    timerdiv.style.border = "2px solid green";
}

function reset() {
    setTimeout(location.reload(true));
}

function pause(){
    clearInterval(mytimer);

}
function start(){
    
    mytimer=setInterval(function(){
        var h,m,s;
        h=m=s=0;
        
        var timeup=false;
        
        t=time.split(":");
        h=parseInt(t[0]);
        m=parseInt(t[1]);
        s=parseInt(t[2]);
        
        if(s==0){
            if(m>0){
                s=59;
                m--;
            }
            else if(h>0){
                m=59;
                s=59;
                h--;
            }
            else{
                timeup=true;
            }
        }
        else{
            s--;
        }
        if(h<10){
            h="0"+h;
        }
        if(m<10){
            m="0"+m;
        }
        if(s<10){
            s="0"+s;
        }
        time=h+":"+m+":"+s;
        
        if(timeup){
            time="Time Up!!!"
        }
        timerdiv=document.getElementById("timerdiv");
        timerdiv.innerHTML=time;
        if(timeup)
        clearInterval(mytimer)
    },1000);
}