let temp_value=document.querySelector("#temp-value");
let conv_type=document.querySelector("#conv-type");
let result=document.querySelector("#result");
let convert=document.querySelector("#convert");
let reset=document.querySelector("#reset");
 convert.addEventListener("click",()=>{
    if(temp_value.value===""){
        return;
    }
    if(conv_type.value==="ctof"){
    result.innerText=((Number(temp_value.value)*9/5)+32).toFixed(2)+'°F';
    }
    else{
        result.innerText=((Number(temp_value.value)-32)*5/9).toFixed(2) +"°C";
    }

 })
 reset.addEventListener("click",()=>{
    temp_value.value="";
    result.innerText="-- °F";
    conv_type.value="ctof";
 })