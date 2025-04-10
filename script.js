let cl=document.querySelector(".check");
let original=document.querySelector(".one").innerHTML

cl.addEventListener("click",() =>{
    
    let per = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    if (document.querySelector(".names1").value=="" || document.querySelector(".names2").value=="")
        {
            document.querySelector(".alert").style.display="block";
            document.querySelector(".one").innerHTML="Please enter the name";
            document.querySelector(".per").style.display="none";
        }
        else
        {
            document.querySelector(".alert").style.display="block";
            document.querySelector(".one").innerHTML =original;
            document.querySelector(".per").style.display="block";
            document.querySelector(".per").innerHTML=per + "%";
        
    }
})

let c2=document.querySelector(".close")

c2.addEventListener("click",()=>{
    if(document.querySelector(".alert").style.display="block")
    {
        document.querySelector(".alert").style.display="none";
    }
    else
    {}
})