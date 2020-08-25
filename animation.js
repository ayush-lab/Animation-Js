var object=document.querySelector(".shuttle img");
var button=document.querySelector('.start-btn'); 
var racket=document.querySelector('.racket');
var racket2=document.querySelector('.racket-2');
var pos=1,pos_rotate=1,flag=0,left_side=1, upward_movement=0,timer;



button.addEventListener('click', function(){
    if(button.innerHTML== "START")

    {   button.innerHTML="STOP";
        timer= setInterval(move,1);
        
    }

    else{
        clearInterval(timer);
        button.innerHTML="START";
     
        
        
    }
});




function move(){    // to move the shuttle across the net
  
    if(parseInt(object.style.bottom)== 0) flag=1;  // when shuttle comes from right to left


    if(parseInt(object.style.bottom)==0  && left_side ==1 ){  // when shuttle comes from left to right
        flag=0;
        pos=1;
    }

    if(flag==0)         //left to right
        {   
            racket.style.transform ="rotate(30deg)";  

            left_side=0;
            object.style.left =  + pos + 'px';
            pos+=1;

            if( parseInt(object.style.left) >=screen.width/6  && parseInt(object.style.left) <=screen.width/4) {
                upward_movement+=1/4; // upward movement of shuttle

                object.style.bottom =  + upward_movement + 'px';
            }
             
            else if( parseInt(object.style.left) >=screen.width/4  && parseInt(object.style.left) <=screen.width/2) {
                upward_movement+=0.2;
                object.style.bottom =  + upward_movement + 'px';
            }

            else if(parseInt(object.style.left) >=screen.width/2 && parseInt(object.style.left)<screen.width/1.5){
                        object.style.bottom =  upward_movement+ 'px';

            }

            else if(parseInt(object.style.left) >=screen.width/1.5){
                object.style.left =  + pos + 'px';
                upward_movement-=0.7;                       // downward movement of shuttle
                object.style.bottom =  upward_movement+ 'px';
                racket2.style.transform="rotate(-30deg)"; 

                                                                    }

    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';} 
        
        
        }
        
        if(flag==1)                 // right to left
        {  racket2.style.transform="rotate(30deg)"; 
             left_side=1;
            
            pos-=1;
            object.style.left =  + pos + 'px';

            if(parseInt(object.style.left) <=screen.width/1.1 && parseInt(object.style.left) >screen.width/1.5){
                upward_movement+=0.7;   // upward movement

                object.style.bottom =  upward_movement+ 'px';
            }
    
            else if(parseInt(object.style.left) <=screen.width/1.5 && parseInt(object.style.left) >screen.width/1.8){

                object.style.left =  + pos + 'px';
                upward_movement-=0;
                object.style.bottom =  upward_movement+ 'px';
                racket.style.transform ="rotate(-30deg )"; 
            }
        


            else if(parseInt(object.style.left) <=screen.width/1.8){
            object.style.left =  + pos + 'px';
            upward_movement-=0.5; // downward movement of shuttle
            object.style.bottom =  upward_movement+ 'px';
                                        
             }
    
    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';
           
           }
        
        }
    object.style.transform = " rotate("+pos_rotate+"deg )";             // rotating shuttle 
    pos_rotate +=0.4;
    
}

