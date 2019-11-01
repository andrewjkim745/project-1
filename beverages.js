



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
            if (event.target.src === "https://i.imgur.com/cSEXZ4x.jpg") {
                alert('Milkis (Korean: 밀키스) is a soft drink produced by Lotte Chilsung, a South Korean beverage company. It combines many of the common elements of traditional carbonated beverages such as corn syrup, sugar, and carbonated water with milk to create a creamy taste; its label proclaims "New feeling of soda beverage".')
            }
            else if (event.target.src === "https://i.imgur.com/GI8RrTt.jpg") {
                alert('Soju is a clear, low-alcohol, distilled spirit that is the most popular liquor in Korea. ... Perhaps that shouldnt come as a surprise considering South Koreans drink an average of 13.7 shots of liquor per week, more than anywhere else worldwide.')
            }
            else if (event.target.src === "https://i.imgur.com/SEmdNO9.png") {
                alert('Sikhye is a chilled rice punch decorated with rice grains. It is one of the most beloved traditional beverages')
            }
        })
    };