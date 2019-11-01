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
        if (event.target.src === "https://i.imgur.com/QWAHBfz.png") {
            alert('Black bean noodles are a healthy, gluten-free alternative to regular noodles. Black bean pasta is great for digestion, heart health, and lowering cholesterol levels because it is a natural source of fiber. This pasta has almost eight times the amount of protein and iron as regular pasta.')
        }
        else if (event.target.src === "https://i.imgur.com/QunlDYG.png") {
            alert('The word jjampong comes from the Japanese word for mix, and the dish itself was supposedly created by Chinese immigrants living in Nagasaki, Japan. Its a soothing mix of noodles, seafood, vegetables, and meat in a spicy, savory soup.')
        }
        else if (event.target.src === "https://i.imgur.com/RQlLfdd.png") {
            alert('Made from sweet potato starch, Korean dangmyeon noodles are naturally fat free and low in calories, making them a healthy choice for noodle lovers.')
        }
        else if (event.target.src === "https://i.imgur.com/ExSFjqg.png") {
            alert('Naengmyeon is a cold noodle dish of thin, chewy noodles that are made with buckwheat and potato or sweet potato starch. There are two main types of naengmyeon dishes depending on how its prepared – mul naengmyeon (물냉면) and bibim naengmyeon (비빔냉면).')
        }
    })
};
