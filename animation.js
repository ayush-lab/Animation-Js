var object=document.querySelector(".shuttle img");
var upward_movement=0;


var timer= setInterval(move,2);

var pos=1;
var pos_rotate=1;
var flag=0;

function move(){

    if(pos == screen.width){
      
        flag=1;
        object.style.left = screen.width + 'px';

    
    }

    if(pos == 0){
      
        flag=0;
        object.style.left = 0 + 'px';
    }

    if(flag==0)
        {
            object.style.left =  + pos + 'px';
            pos+=1;
            
            if(parseInt(object.style.left) >=screen.width/6){
                // pos_rotate+=5;
                upward_movement+=1/4;
                object.style.left =  + pos + 'px';
                object.style.bottom =  + upward_movement + 'px';
                //object.style.bottom =  upward_movement+ 'px';
    
            if(parseInt(object.style.left) >=screen.width/2){
                object.style.left =  + pos + 'px';
                upward_movement-=1;
                object.style.bottom =  upward_movement+ 'px';
                                                 }
        }
    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';}


        
        }
        
        if(flag==1)
        {
            
            pos-=1;
            object.style.left =  + pos + 'px';

            if(parseInt(object.style.left) <=screen.width/1.19){
                // pos_rotate+=5;
                upward_movement+=1/4;
                object.style.left =  + pos + 'px';
                object.style.bottom =  + upward_movement + 'px';
                //object.style.bottom =  upward_movement+ 'px';
    
            if(parseInt(object.style.left) <=screen.width/2){
                object.style.left =  + pos + 'px';
                upward_movement-=1;
                object.style.bottom =  upward_movement+ 'px';
                                                 }
        }
    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';}
        
        }
            
    
    object.style.transform = " rotate("+pos_rotate+"deg )";
    pos_rotate +=0.4;
    
    
    console.log(pos);
    console.log(parseInt(object.style.left));
    console.log(screen.width/6);



    
}