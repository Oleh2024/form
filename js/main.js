const files = document.querySelectorAll('input[type="file"]');

files.forEach(file => file.addEventListener("change",function(e){
   const value = e.target.value;
   const file_wrap = e.target.closest(".file-wrap");
   const file_choise = file_wrap.querySelector(".file-hidden");

   if(value !==""){
      file_choise.classList.add("show")
      file_choise.innerHTML = value;
   }else{
      file_choise.classList.remove("show")
   }
 
}))
