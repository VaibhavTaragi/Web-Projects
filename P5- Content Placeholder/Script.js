const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const auth = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData(){
    header.innerHTML = '<img src="https://i1.sndcdn.com/artworks-QybTYM4Gvos9isVR-M8BiQQ-t500x500.jpg"></img>';
    title.innerHTML ='Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a?';
    profile_img.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvMmoPL08PW0vGP0GPvgHDmO2PqUHZU3dvQ&usqp=CAU"></img>';
    auth.innerHTML = 'Itachi Uchiha';
    date.innerHTML = 'June 26, 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}