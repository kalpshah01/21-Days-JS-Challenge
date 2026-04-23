  
        let images=[
            "img/slider1.png",
            "img/slider2.png",
            "img/slider3.png",
            "img/slider4.png",
        ];
        let index=0;
        let img=document.getElementById("img");
        let prev=document.getElementById("prev");
        let next=document.getElementById("next");
        img.src=images[index];
        
        function showImage(){
             index++;
            if(index>=images.length){
                index=0;
            }
            img.src=images[index];
        }
        prev.addEventListener("click",function(){
            index--;
            if(index<0){
                index=images.length-1;
            }
            img.src=images[index];
        });
        next.addEventListener("click",function(){
           showImage();

        });
        setInterval(()=>{
            showImage();
        }, 1200);
        let btn = document.getElementById("btn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.remove("active");
});

    