let check = document.getElementById("check")
let checkbox = document.getElementById("checkbox")
let th = document.getElementById("th")
let th2 = document.getElementById("th2")
let th3 = document.getElementById("th3")
let pic = document.getElementById("thumb")
let pic2 = document.getElementById("rose")
let pic3 = document.getElementById("oo")
const audio = document.getElementById("myAudio");
const audio2 = document.getElementById("myAudio2");
function clicked(){
    check.style.opacity = 100;
    checkbox.style.backgroundColor = "#f0eed6";
    th.style.display = "flex";
    th2.style.display = "flex";
    th3.style.display = "flex";

    audio.play();
   
    setTimeout(()=>{audio2.play()},1300)
    const countPic = (f, item) => {
          if (f < 1) {
            console.log(f);
            f += 0.01;
            item.style.opacity = f;
            setTimeout(countPic, 1, f, item); // Pass arguments directly
          } else {
            return;
          }
        };
      
        setTimeout(countPic, 1, 0, pic); // Call countPic with initial values
        setTimeout(countPic, 2000, 0, pic2); // Call countPic with initial values for pic2
        setTimeout(countPic, 4000, 0, pic3); // Call countPic with initial values for pic2
        // ...
}


