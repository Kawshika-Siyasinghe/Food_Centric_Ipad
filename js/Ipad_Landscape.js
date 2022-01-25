var collector = 0;
var firstBuy = document.getElementById("deals-card-btn-1");
var secondBuy = document.getElementById("deals-card-btn-2");
var thirdBuy = document.getElementById("deals-card-btn-3");

var toGoal = document.getElementById("toGoal");
const maxGoal = 100;

localStorage.setItem("maxGoal",maxGoal)

firstBuy.onclick = function (){
    collector = collector + 50;
    if (collector <= 100){
        localStorage.setItem("collector",collector);
        document.getElementById("val").innerHTML = localStorage.getItem("collector");
        // document.getElementById("myBar").innerHTML = localStorage.setItem("collector")
        // localStorage.setItem('collector', $("#myBar").css('width'))
        // localStorage.getItem('collector', $("#myBar").css('width'))
        var height = document.getElementById("myBar");
        //     localStorage.getItem("collector");
        var pixelVal = localStorage.getItem("collector");
        var percentage = 500*pixelVal/100
        $(height).css('width',percentage);
    }
};
secondBuy.onclick = function (){
    collector = collector + 33;
    if (collector <= 100){
        localStorage.setItem("collector",collector);
        document.getElementById("val").innerHTML = localStorage.getItem("collector");
        // document.getElementById("myBar").innerHTML = localStorage.setItem("collector")
        // localStorage.setItem('collector', $("#myBar").css('width'))
        // localStorage.getItem('collector', $("#myBar").css('width'))
        var height = document.getElementById("myBar");
        //     localStorage.getItem("collector");
        var pixelVal = localStorage.getItem("collector");
        var percentage = 500*pixelVal/100
        $(height).css('width',percentage);
    }
};
thirdBuy.onclick = function (){
    collector = collector + 17;
    if (collector <= 100){
        localStorage.setItem("collector",collector);
        document.getElementById("val").innerHTML = localStorage.getItem("collector");
        // document.getElementById("myBar").innerHTML = localStorage.setItem("collector")
        // localStorage.setItem('collector', $("#myBar").css('width'))
        // localStorage.getItem('collector', $("#myBar").css('width'))
        var height = document.getElementById("myBar");
        //     localStorage.getItem("collector");
        var pixelVal = localStorage.getItem("collector");
        var percentage = 500*pixelVal/100
        $(height).css('width',percentage);
    }
};


$(firstBuy).click(function () {
    $('.overlay').show();
})
$(secondBuy).click(function () {
    $('.overlay').show();
})
$(thirdBuy).click(function () {
    $('.overlay').show();
})
$('.close').click(function () {
    $('.overlay').hide();
})

toGoal.onclick = function (){
    var btn = document.getElementById("coupon-btn");
    if (collector === 100){
        $(btn).css('visibility',"visible");
    }else{
        $(btn).css('visibility',"hidden");
    }
};

// function addPoints(){
//     let point = 50;
//     let firstCard = document.getElementById("deals-card-1");
//     localStorage.setItem("pointCollector",point.toString());
//
//     add();
// }

// function add(){
//     if()
//
// }

const foodItem = [
    {
        id: 1,
        imgSrc: "images/food-images/pizza.png",
        name: " Small Pizza ",
        description: " Dictum tortor nunc nibh egestas",
        price: 250.00
    },
    {
        id: 2,
        imgSrc: "images/food-images/kottu.png",
        name: "Koththu",
        description: " Dictum tortor nunc nibh egestas",
        price: 600.00
    },
    {
        id: 3,
        imgSrc: "images/food-images/rice.png",
        name: "Mixed Rice",
        description: " Dictum tortor nunc nibh egestas",
        price: 100.00
    },
    {
        id: 4,
        imgSrc: "images/food-images/pizza.png",
        name: "Pizza Large",
        description: " Dictum tortor nunc nibh egestas",
        price: 450.00
    }
]


var foodItemsHtml = '';

foodItem.forEach(element => {
    foodItemsHtml = foodItemsHtml + `
            <div class="food-item-card">
<!--                <div class="favorite-div" id="addToFavorite${element.id}" onclick="handleFavorite(${element.id})" ></div>-->
                <div>
                    <img style="max-width: 250px;" src=${element.imgSrc} />
                    <div style="padding-top: -50px;
                                margin-left: 300px;
                                margin-top: -200px;">
                    <h2>${element.name}</h2>
                    <p>
                        ${element.description}
                    </p>
                    <h2>
                        LKR ${element.price}
                    </h2>
                </div>
                    
                </div>
            </div>
        `;
});

document.getElementById('food-item-list').innerHTML = foodItemsHtml;


var cmdSort = document.getElementById("sort");

cmdSort.onclick = function (){
    foodItem.sort(function (a,b){
        return a.price-b.price;
    });
    // document.getElementById('food-item-list').innerHTML = sorted;
    // document.getElementById('food-item-list').innerHTML = foodItemsHtml;
    var foodItemsHtml = '';

    foodItem.forEach(element => {
        foodItemsHtml = foodItemsHtml + `
            <div class="food-item-card">
<!--                <div class="favorite-div" id="addToFavorite${element.id}" onclick="handleFavorite(${element.id})" ></div>-->
               <div>
                    <img style="max-width: 250px;" src=${element.imgSrc} />
                    <div style="padding-top: -50px;
                                margin-left: 300px;
                                margin-top: -200px;">
                    <h2>${element.name}</h2>
                    <p>
                        ${element.description}
                    </p>
                    <h2>
                        LKR ${element.price}
                    </h2>
                </div>
                    
                </div>
            </div>
        `;
    });

    document.getElementById('food-item-list').innerHTML = foodItemsHtml;

}

var sort = document.getElementById("sort")
$(sort).click(function () {
    $('.overlay').show();
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {
    const resetAllRating = () => {
        console.log("this is swesome")
        $('#star1').removeClass('checked');
        $('#star2').removeClass('checked');
        $('#star3').removeClass('checked');
        $('#star4').removeClass('checked');
        $('#star5').removeClass('checked');
    }

    $('#star3').on('click', function () {

        resetAllRating();
        if ($(this).attr('class') === 'fa fa-star-o') {
            $('#star1').addClass('checked')
            $('#star2').addClass('checked')
            $(this).addClass('checked')
        } else {
            $('#star1').removeClass('checked')
            $('#star2').removeClass('checked')
            $(this).removeClass('checked')
        }
        handleRatingMessage();
    })

    $('#star1').on('click', function () {
        resetAllRating();
        if ($(this).attr('class') === 'fa fa-star-o') {
            $(this).addClass('checked')
        } else {
            $(this).removeClass('checked')
        }
        handleRatingMessage();
    })

    $('#star2').on('click', function () {
        resetAllRating();
        if ($(this).attr('class') === 'fa fa-star-o') {
            $('#star1').addClass('checked')
            $(this).addClass('checked')
        } else {
            $('#star1').removeClass('checked')
            $(this).removeClass('checked')
        }
        handleRatingMessage();
    })

    $('#star4').on('click', function () {
        resetAllRating();
        if ($(this).attr('class') === 'fa fa-star-o') {
            $('#star1').addClass('checked')
            $('#star2').addClass('checked')
            $('#star3').addClass('checked')
            $(this).addClass('checked')
        } else {
            $('#star1').removeClass('checked')
            $('#star2').removeClass('checked')
            $('#star3').removeClass('checked')
            $(this).removeClass('checked')
        }
        handleRatingMessage();
    })

    $('#star5').on('click', function () {
        resetAllRating();
        if ($(this).attr('class') === 'fa fa-star-o') {
            $('#star1').addClass('checked')
            $('#star2').addClass('checked')
            $('#star3').addClass('checked')
            $('#star4').addClass('checked')
            $(this).addClass('checked')
        } else {
            $('#star1').removeClass('checked')
            $('#star2').removeClass('checked')
            $('#star3').removeClass('checked')
            $('#star4').removeClass('checked')
            $(this).removeClass('checked')
        }
        handleRatingMessage();
    })
})





