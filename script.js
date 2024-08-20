window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    const horizontal1 = document.querySelector('.horizontal-1');
    const horizontal2 = document.querySelector('.horizontal-2');
    const horizontal3 = document.querySelector('.horizontal-3');

    horizontal1.style.transform = 'translateY(' + (scrollTop * 0.2) + 'px)';
    horizontal2.style.transform = 'translateX(' + (scrollTop * -0.01) + 'px)';
    horizontal3.style.transform = 'translateX(' + (scrollTop * 2) + 'px)';

});