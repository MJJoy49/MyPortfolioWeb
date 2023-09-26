
const line=document.getElementById("line");

const write=document.getElementById("write");

document.getElementById("add").addEventListener("click",function()
    
    {

      if(write.value=== "")
      {
        alert("write something");
      }  

      else
      {
        let li=document.createElement("li");
        li.innerHTML=write.value;
        line.appendChild(li);

        let button=document.createElement("button");
         button.innerHTML="";
        li.appendChild(button);
      }
        
      document.getElementById("write").value=""; 

    })

    line.addEventListener("click",function(f){



        f.target.parentElement.remove();
    })


