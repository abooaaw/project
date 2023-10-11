let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let abode = document.querySelector('.abode');


window.onscroll = function()
{
    let value = scrollY;
    star.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value + 'px';
    mountains4.style.top = value *0.7 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value*3 + 'px';
    abode.style.fontsize = value*2 + 'px';
    if(scrollY>=60){
        abode.style.fontSize = 60 + 'px';
        abode.style.position = 'fixed';
        if(scrollY>=475 || scrollY<=80){
            abode.style.display = 'none';
        }else{
            abode.style.display = 'block';
        }
        if(scrollY>=127){
            document.querySelector('.main').style.background = `linear-gradient((#376281), (10001f))`
        }else{
            document.querySelector('.main').style.background = `linear-gradient(rgb(36, 5, 30), rgb(87, 5, 77))`
        }



    }else{
        abode.style.fontSize = 20 + 'px';
    }


}
