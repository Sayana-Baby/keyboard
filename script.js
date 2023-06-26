function buttonClick(val)
{
    if(temp==1 || a==1){
        document.getElementById("screen").value+=val.toUpperCase();
        a=0
    }
    else{
        document.getElementById("screen").value+=val.toLowerCase(); 
    }
    
    
}
a=0;             
function shiift(){
    if(a==0){
        a=1; 
    

    }
    else{
        a=0; 
    }
}
function delet()
{
    document.getElementById("screen").value=""
}
function bspace(){
    spacee= document.getElementById("screen").value;            
    spaceee=spacee.length-1;                            
    bckspace=spacee.slice(0,spaceee)                              
    document.getElementById("screen").value = bckspace;          
   
}

temp=0
function caps(){
    
    if(temp==0){
           temp=1;

    }
    else{
        temp=0;
    }
}
function numlck(){
    
       if(temp==0){
        temp=1;

    }
    else{
        temp=0;
    }
}
function buttonclick(val)
{
    if (temp==0){
        document.getElementById("screen").value.disabled;
       
    }
   else{
    document.getElementById("screen").value= document.getElementById("screen").value+val
   
   }

}
function operClick(val)
{

    num1=document.getElementById("screen").value;
   
    document.getElementById("screen").value=""
     op=val;
}
function equalclick(val){
    
    num2=document.getElementById("screen").value;
   
   if(op=='+'){
       var result=eval(num1)+eval(num2)
   }
   else if(op=='-')
   {
       var result=eval(num1)-(num2)

   }
   else if(op=='/')
   {
       var result=eval(num1)/(num2)
       
   }
   else 
   {
       var result=eval(num1)*(num2)
       
   }
   document.getElementById("screen").value=result;
}
