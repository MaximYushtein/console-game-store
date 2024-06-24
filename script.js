  let rightButton=document.getElementById("button")
  let rightcomment=document.getElementById("rightcomment")
  let leftcomment=document.getElementById("leftcomment")
  let slider=document.getElementById("slider")
  let leftButton=document.getElementById("left")
  let clicks=0
console.log(rightButton);
rightButton.onclick=function() {
    console.log("nfs hello");
    clicks=clicks+1
    if(clicks==3){
      clicks=0
    }
    slider.style.transform="translateX(calc(-100% / 3 * "+clicks+"))"

}

leftButton.onclick=function(){
    console.log("fh4 hello");
    clicks=clicks-1
    if(clicks==-1){
clicks=2

    }
        slider.style.transform="translateX(calc(-100% / 3 * "+clicks+"))"
}
rightcomment.onclick=function(){
console.log("comment right");
let commentsActive=document.getElementsByClassName("commentsActive")[0]
let next=commentsActive.nextElementSibling
console.log(next);
if(!next.classList.contains("sliderButtons")){
  commentsActive.classList.remove("commentsActive")
next.classList.add("commentsActive")
}
}
leftcomment.onclick=function(){
  console.log("comment right");
  let commentsActive=document.getElementsByClassName("commentsActive")[0]
  let next=commentsActive.nextElementSibling
  console.log(next);
  if(!next.classList.contains("sliderButtons")){
    commentsActive.classList.remove("commentsActive")
  next.classList.add("commentsActive")
  }
  }