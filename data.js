let url="https://script.google.com/macros/s/AKfycbw4nIq79MFGgZFjuwKUTy9TNBPZCylfSYKOp6Q_bn339LiJ-5HA41QulMBdOjuy7Tbwxg/exec"


let form=document.getElementById("dataForm");
form.addEventListener("submit", function(x){
    x.target.btn.innerHTML="Wait...";

    let d=new FormData(form);
    fetch(url,{
        method:"POST",
        body:d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        
        x.target.btn.innerHTML="Send";
        document.getElementById("done").innerText=finalRes;
        form.reset();
        setTimeout(()=>{
            document.getElementById("done").innerHTML='';
        },5000)
        
    
    })
    x.preventDefault();
})