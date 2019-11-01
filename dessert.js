







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
        if (event.target.src === "https://i.imgur.com/ZmNPTDG.png") {
            alert('Patbingsu (팥빙수, sometimes anglicized as patbingsoo, literally "red beans shaved ice") is a popular Korean shaved ice dessert with sweet toppings that may include chopped fruit, condensed milk, fruit syrup, and red beans. Varieties with ingredients other than red beans are called bingsu (or bingsoo).')
        }
        else if (event.target.src === "https://i.imgur.com/UC2NpkF.png") {
            alert('Bungeo-ppang or Fish-shaped bread filled with sweet red beans is a popular Korean street food. Also called Bungeoppang or Taiyaki in Japanese.')
        }
        else if (event.target.src === "https://i.imgur.com/mrN9yx5.png") {
            alert('Tteok (Korean: 떡) is a class of Korean rice cakes made with steamed flour made of various ... Tteok is enjoyed not only as a dessert or seasonal delicacy, but also as a meal. It can range from elaborate versions made of various colors.')
        }
    })
};