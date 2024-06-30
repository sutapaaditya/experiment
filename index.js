// ECMAScript
let pics = [
  {
    "pic": "/image/as101.jpg",
  },
  {
    "pic": "/image/astro.jpg",
  },
  {
    "pic": "/image/astro01.jpg",
  },
  {
    "pic": "/image/astro3.jpg",
  },
  {
    "pic": "/image/astro4.jpg",
  },
]

let i = document.getElementById("img")
let idx = 0;
i.src = pics[idx]["pic"];

function main () {
  idx = idx+1;
  
  if(idx==pics.length){
    idx = 0;
  }
  
  i.style.opacity = '0';
  
  setTimeout(() =>{
    i.src = pics[idx]["pic"];
    i.style.opacity = '1';
  },1000)
}
setInterval(main, 9000)
