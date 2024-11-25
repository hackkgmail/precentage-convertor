let clear=document.querySelector("#clear");
let generate=document.querySelector("#gen");
let mark1=document.querySelector("#marks1")
let mark2=document.querySelector("#marks2")
let result=document.querySelector("#result")

function focuss(){

   mark1.value='';
   mark2.value='';
   result.value='';
   mark1.focus()

}

clear.addEventListener("click",()=>{
    
   mark1.value="";
   mark2.value="";
   result.value="";
   console.log("Clear Button Working Sucess");

})

generate.addEventListener("click",()=>{
   let markss1=parseFloat(mark1.value);
   let markss2=parseFloat(mark2.value);

   if(typeof(markss1)=='number'&& !markss1==0 &&typeof(markss2)=='number' && !markss2==0){
      if(markss1<markss2)
         {

          let results=(markss1/markss2)*100;
         if(results !=='infinty' || results !=='NaN'){
            result.value=`${results.toFixed(2)}%`;
           console.log(results);
         }
         else{
            result.value="error";
         }
         }
       
   else if(markss1=='NaN' || markss1==0){
      alert("check your marks please");
   }
   else if(markss2=='NaN' || markss2==0){
      alert("Check Your Outoff input")
   }
   else{
      alert("please check you inputs and outtoff marks");
   }
      }
      else{
         alert("check your given values");
      }
   
      
      
})