let cl=document.querySelector(".check");

cl.addEventListener("click",() =>{
    let per = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    
    if (document.querySelector(".names1").value=="" || document.querySelector(".names2").value=="")
        {
            document.querySelector(".alert").style.display="block";
            document.querySelector(".one").innerHTML="Please enter the name";
        }
        else
        {
            document.querySelector(".alert").style.display="block";
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