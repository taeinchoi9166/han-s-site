var topBtn;

function init(){
  console.log(window.scrollY);
  topBtn = document.getElementsByClassName("top_btn")[0];

  topBtn.addEventListener("click",function(e){
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

window.addEventListener("wheel",function(e){
  console.log();
  if(e.deltaY>0){
    if(window.scrollY>=100){
      document.getElementsByClassName("gall_line")[0].classList.add("visible");
    }
    if(window.scrollY>=900){
      document.getElementsByClassName("intro_area")[0].classList.add("visible");
    }
    if(window.scrollY>=2300){
      document.getElementsByClassName("case")[0].classList.add("visible");
    }
  }

});
