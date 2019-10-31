

navElements = document.querySelectorAll('a')

for (i = 0; i < navElements.length; i++) {
    console.log(i)
    navElements[i].addEventListener('mouseover' , function(event) {
        event.target.style.color = "#8c1c13"
    })
    navElements[i].addEventListener('mouseout' , function(event) {
        event.target.style.color = "#735751" 
    });
}
// for (i = 0; i < navElements.length; i++) {
//     console.log(i)
//     navElements[i].addEventListener('mouseout' , function(event) {
//         event.target.style.color = "#e7d7c1"

//     })
// }

// function changeColor() {
//     navElements.style.color = "#8c1c13"
    
// }

