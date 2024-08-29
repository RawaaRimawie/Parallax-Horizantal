// window.addEventListener('scroll', function() {
//     const scrollTop = window.pageYOffset;
//     console.log(scrollTop);
//     const horizontal1 = document.querySelector('.horizontal-1');
//     const horizontal2 = document.querySelector('.horizontal-2');
//     const horizontal3 = document.querySelector('.horizontal-3');

//     horizontal1.style.transform = 'translateY(' + (scrollTop * 0.2) + 'px)';
//     horizontal2.style.transform = 'translateX(' + (scrollTop * -0.01) + 'px)';
//     horizontal3.style.transform = 'translateX(' + (scrollTop * 2) + 'px)';

// });





window.addEventListener('wheel', function(event) {
    // Prevent default scroll behavior
    event.preventDefault();
    
    // Get the amount of vertical scroll
    const deltaY = event.deltaY;

    // Select the elements to apply the effect
    const horizontal1 = document.querySelector('.horizontal-1');
    const horizontal2 = document.querySelector('.horizontal-2');
    const horizontal3 = document.querySelector('.horizontal-3');

    // Apply horizontal transformations based on vertical scroll
    if (horizontal1) {
        horizontal1.style.transform = 'translateY(' + (deltaY * 0.2) + 'px)';
    }
    if (horizontal2) {
        horizontal2.style.transform = 'translateX(' + (deltaY * -0.01) + 'px)';
    }
    if (horizontal3) {
        horizontal3.style.transform = 'translateX(' + (deltaY * 0.7) + 'px)';
    
    }
});


