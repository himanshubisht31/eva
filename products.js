const arr = [


    { name: "Laptop", price: "70000", brand: 'dell', image: 'data:image/jpeg;base64,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' },

    { name: "TV", price: "50000", brand: 'samsung', image: 'data:image/jpeg;base64,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' },

    { name: "speaker", price: "10000", brand: 'sony', image: 'data:image/jpeg;base64,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' },


    { name: "Tablet", price: "100000", brand: 'Apple', image: 'data:image/jpeg;base64,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' },


]




if (localStorage.getItem('shopping') == null) localStorage.setItem('shopping', JSON.stringify(arr));


console.log(JSON.parse(localStorage.getItem('shopping')));

function displayProducts(arr) {
    var productList = document.getElementById('mainDiv');
    productList.innerHTML = null;
    console.log(arr);
    console.log('Hi');
    arr.forEach(function (obj) {

        var innerDiv = document.createElement('div');

        var name = document.createElement('p');
        var price = document.createElement('p');
        var img = document.createElement('img');
        var brand = document.createElement('p');
        var button = document.createElement('button');
        button.innerHTML = 'Add to cart'
        button.addEventListener('click', function () {
            appendCart(obj);
        });

        name.innerHTML = obj.name;
        price.innerHTML = obj.price;
        brand.innerHTML = obj.brand;
        img.src = obj.image;

        innerDiv.append(name, brand, price, img, button);
        innerDiv.setAttribute('class', 'box')

        productList.append(innerDiv);


    });

}

displayProducts(JSON.parse(localStorage.getItem('shopping')))

function LH() {

    var arr = JSON.parse(localStorage.getItem('shopping'));
    arr.sort(function (a, b) {
        return a.price - b.price;
    })
    displayProducts(arr);
}

function HL() {

    var arr = JSON.parse(localStorage.getItem('shopping'));
    arr.sort(function (a, b) {
        return b.price - a.price;
    })
    displayProducts(arr);
}

function show() {
    window.location.href = 'cart.html'
}

function appendCart(obj) {

    var cartArr;
    cartArr = localStorage.getItem('newCart');
    if (cartArr == null) cartArr = [];

    else cartArr = JSON.parse(localStorage.getItem('newCart'));

    cartArr.push(obj);

    localStorage.setItem('newCart', JSON.stringify(cartArr));

    // console.log(cartArr);
}


// function brand(i) {
//     var arr = JSON.parse(localStorage.getItem('shopping'));

//     var productList = document.getElementById('mainDiv');
//     productList.innerHTML = null;
//     var ele = document.getElementById('i')
//     console.log(ele);

    // for (var i = 0; i < arr.ele; i++){
    //     if()
    // }

    // arr.filter(function (obj) {

    //     if (obj.brand === ele) {
    //         var innerDiv = document.createElement('div');

    //         var name = document.createElement('p');
    //         var price = document.createElement('p');
    //         var img = document.createElement('img');
    //         var brand = document.createElement('p');
    //         var button = document.createElement('button');
    //         button.innerHTML = 'Add to cart'
    //         button.addEventListener('click', function () {
    //             appendCart(obj);
    //         });

    //         name.innerHTML = obj.name;
    //         price.innerHTML = obj.price;
    //         brand.innerHTML = obj.brand;
    //         img.src = obj.image;

    //         innerDiv.append(name, brand, price, img, button);
    //         innerDiv.setAttribute('class', 'box')

    //         productList.append(innerDiv);
    //     }


    // });


// }


