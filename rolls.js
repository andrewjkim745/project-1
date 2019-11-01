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
        if (event.target.src === "https://i.imgur.com/NPqBbFE.png") {
            alert('Try our perfectly rolled Gimbap with marinated beef fillng!')
        }
        else if (event.target.src === "https://i.imgur.com/jQjYU3u.png") {
            alert('Try our perfectly rolled Gimbap with non marinated beef filling!')
        }
        else if (event.target.src === "https://i.imgur.com/bNQulyP.png") {
            alert('Try our perfectly rolled Gimbap with ham filling')
        }
    })
};