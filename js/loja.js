const heart = document.querySelector('.nav .icons .fa-heart');
const toUser = document.querySelector('.nav .icons .fa-user');
const toHome = document.querySelector('.nav .icons .fa-home');

const menu = document.querySelector('.nav ul');
const showmenu = document.querySelector('.nav .fa-bars');
const hidemenu = document.querySelector('.nav .fa-xmark');

heart.addEventListener('click', () => {
    heart.style.color = heart.style.color === 'rgb(241, 45, 104)' ? 'rgba(194, 201, 201, 1)' : 'rgb(241, 45, 104)';
});
toHome.addEventListener('click', () => {
    window.location.href = './index.html';
});
toUser.addEventListener('click', () => {
    window.location.href = './login.html';
});

showmenu.addEventListener('click', () => {
    showmenufunciton()
});
hidemenu.addEventListener('click', () => {
    hidemenu.style.display = 'none';
    showmenu.style.display = 'block';
    menu.style.display = 'none';
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 695){
        hidemenu.style.display = 'block';
        showmenu.style.display = 'none';
        menu.style.display = 'flex';
        console.log('maior')
    }
});
function showmenufunciton(){
    hidemenu.style.display = 'flex';
    showmenu.style.display = 'none';
    menu.style.display = 'flex';

}

const allSection = document.querySelectorAll('section');
const paragrafos = document.querySelectorAll('p');
const observation = new IntersectionObserver(item=>{
    item.forEach(esmer=>{
        if(esmer.isIntersecting){
            esmer.target.classList.add('show')
        }
    })
})
paragrafos.forEach(e => observation.observe(e))
allSection.forEach(e => observation.observe(e))