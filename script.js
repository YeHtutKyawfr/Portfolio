// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function ()
{
    scrollFunction();
};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        scrollToTopBtn.style.display = "block";
    } else
    {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('section');
//     console.log('Sections:', sections); // Debugging line

//     // Create an Intersection Observer
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 console.log('Animating:', entry.target); // Debugging line
//                 entry.target.classList.add('animate');
//                 observer.unobserve(entry.target); // Stop observing after animation is applied
//             }
//         });
//     }, {
//         root: null, // Observe within the whole viewport
//         rootMargin: '0px',
//         threshold: 0.2 // Trigger when 20% of the section is visible
//     });

//     // Observe each section
//     sections.forEach((section) => {
//         observer.observe(section);
//     });
// });
