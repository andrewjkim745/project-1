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

bigNoodles = document.getElementsByClassName('kNoodles');

for (i=0; i < bigNoodles.length; i++) {
    bigNoodles[i].addEventListener('click', function(event) {
        if (event.target.src === "https://i.imgur.com/9P6fUF2.png") {
            alert('Mixed Seasoning Double Fried Korean Chicken!')
        }
        else if (event.target.src === "https://i.imgur.com/RuOexdt.png") {
            alert('Glazed Double Fried Korean Chicken!')
        }
        else if (event.target.src === "https://i.imgur.com/uMrd7bn.png") {
            alert('Its a Specialty Surprise')
        }
    })
};