
var object=document.querySelector(".shuttle img");
var upward_movement=0;


var timer= setInterval(move,.0001);

var pos=1;
var pos_rotate=1;
var flag=0,left_side=1;


function move(){
  
    if(parseInt(object.style.bottom)== 0){
      
        flag=1;

    }

    if(parseInt(object.style.bottom)==0  && left_side ==1 ){
      
        flag=0;
        pos=1;
    }



    if(flag==0)
        {   left_side=0;
            object.style.left =  + pos + 'px';
            pos+=1;
            if( parseInt(object.style.left) >=screen.width/6  && parseInt(object.style.left) <=screen.width/4) {
                // pos_rotate+=5;
                upward_movement+=1/4;
               // object.style.left =  + pos + 'px';
                object.style.bottom =  + upward_movement + 'px';
                //object.stsyle.bottom =  upward_movement+ 'px';
            }
             
            else if( parseInt(object.style.left) >=screen.width/4  && parseInt(object.style.left) <=screen.width/2) {
                // pos_rotate+=5;
                upward_movement+=0.2;
               // object.style.left =  + pos + 'px';
                object.style.bottom =  + upward_movement + 'px';
                //object.style.bottom =  upward_movement+ 'px';
            }

            else if(parseInt(object.style.left) >=screen.width/2 && parseInt(object.style.left)<screen.width/1.5){
                    
                        // object.style.left =  + pos + 'px';
                        // upward_movement=0;
                        object.style.bottom =  upward_movement+ 'px';

            }

            else if(parseInt(object.style.left) >=screen.width/1.5){
                        
                object.style.left =  + pos + 'px';
                upward_movement-=0.7;
                object.style.bottom =  upward_movement+ 'px';

    }

    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';}


        
        }
        
        if(flag==1)
        {  
             left_side=1;
            
            pos-=1;
            object.style.left =  + pos + 'px';

            if(parseInt(object.style.left) <=screen.width/1.1 && parseInt(object.style.left) >screen.width/1.5){
                // pos_rotate+=5;
               //alert("we");
                upward_movement+=0.7;
              //  object.style.left =  + pos + 'px';
                //object.style.bottom =  + upward_movement + 'px';
                object.style.bottom =  upward_movement+ 'px';
            }
    
            else if(parseInt(object.style.left) <=screen.width/1.5 && parseInt(object.style.left) >screen.width/1.8){

                object.style.left =  + pos + 'px';
                upward_movement-=0;
                object.style.bottom =  upward_movement+ 'px';
        
            }
        


            else if(parseInt(object.style.left) <=screen.width/1.8){
           // alert('asd');
            object.style.left =  + pos + 'px';
            upward_movement-=0.5;
            object.style.bottom =  upward_movement+ 'px';
                                        
             }
    
    
        else{
            upward_movement+=1;
            object.style.bottom =  + upward_movement + 'px';
           
           }
        
        }



    object.style.transform = " rotate("+pos_rotate+"deg )";
    pos_rotate +=0.4;
    
    
    console.log(pos);
    console.log(parseInt(object.style.left));
    console.log(screen.width/6);







    
}