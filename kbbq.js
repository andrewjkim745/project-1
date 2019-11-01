



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
            if (event.target.src === "https://i.imgur.com/KDjktWW.png") {
                alert('Samgyeopsal is grilled pork belly and it means three layers of meat and fat in Korean. It is probably the most popular BBQ meat in South Korea. Samgyeopsal is recognized as the most delicious cut of pork amongst Koreans because the meat and fat combination makes an incredibly gorgeous taste.')
            }
            else if (event.target.src === "https://i.imgur.com/lFQTuLG.png") {
                alert('Chadol baegi, a staple of Korean BBQ, is thinly shaved beef brisket. Unlike other Korean meat favorites that hit the grill, the brisket is not marinated. Its cooked quickly on the grill and dipped in a sauce of sesame oil, salt, and pepper.')
            }
            else if (event.target.src === "https://i.imgur.com/aAPHtR2.png") {
                alert('Galbi, galbi-gui, or grilled ribs is a type of gui in Korean cuisine. "Galbi" is the Korean word for "rib", and the dish is usually made with beef short ribs. When pork spareribs or another meat is used instead, the dish is named accordingly.')
            }
            else if (event.target.src === "https://i.imgur.com/PyrKgMy.png") {
                alert(' Bulgogi (불고기) is one of classic Korean dishes where thinly shaved meat is marinated in a sweet and savory sauce made of soy sauce, sugar, and Korean pear juice, and grilled on a barbecue or on a stove-top griddle.')
            }
        })
    };