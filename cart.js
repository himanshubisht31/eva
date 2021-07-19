var itemPrice = 0;

function appendCart(obj) {
    var mainCart = document.getElementById('mainCart');



    var innerDiv = document.createElement('div');

    var name = document.createElement('p');
    var price = document.createElement('p');
    var img = document.createElement('img');


    name.innerHTML = obj.name;
    price.innerHTML = obj.price;
    img.src = obj.image;

    itemPrice += +obj.price;
    var total = document.getElementById('total');
    // total.innerHTML = null;
    total.innerHTML = +itemPrice;

    innerDiv.append(name, price, img);
    innerDiv.setAttribute('class', 'box')

    mainCart.append(innerDiv);

}




function showProducts() {

    var cart = JSON.parse(localStorage.getItem('newCart'));

    var mainCart = document.getElementById('mainCart');
    mainCart.innerHTML = null;

    cart.forEach(function (obj) {
        appendCart(obj);
    })

}

showProducts();

function promo() {
    var total = document.getElementById('total');

    code = document.getElementById('promo').value;

    if (code === 'masai30') {
        
        itemPrice = itemPrice * 0.7;
        var total = document.getElementById('total');
        // total.innerHTML = null;
        total.innerHTML = itemPrice;
    }
}

function checkout() {
    
    window.location.href = 'checkout.html';
}