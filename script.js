const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('mousemove' , (e) => {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
});

Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseover' , (e) => {
        mouseCursor.classList.add('cursor-hovered');
        link.classList.add('hovered');
    });
    
    link.addEventListener('mouseleave' , (e) => {
        mouseCursor.classList.remove('cursor-hovered');
        link.classList.remove('hovered');
    });
});