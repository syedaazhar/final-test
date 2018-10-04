// Write all your Javascript here!

function show() {

    // var d = new Date();
    // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // document.querySelector(".date-time .1").innerHTML = months[d.getMonth()];

    


    $.ajax({
        url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en',

        success: function (data) {
            document.querySelector('.main-img').style = `background-image:url(${data.imageURL})`;
            document.querySelector('.flower-detail h4').innerHTML = data.info.heading;
            document.querySelector('.flower-detail p').innerHTML = data.info.description;
            document.querySelector('.sale-contain h4').innerHTML = data.sale.heading;
            document.querySelector('.sale-contain p').innerHTML = data.sale.description;
           
        }
    })
};

function showEng() {
    show();
}

function showPak() {
    $.ajax({
        url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur',

        success: function (data) {
            document.querySelector('.main-img').style = `background-image:url(${data.imageURL})`;
            document.querySelector('.flower-detail h4').innerHTML = data.info.heading;
            document.querySelector('.flower-detail p').innerHTML = data.info.description;
            document.querySelector('.sale-contain h4').innerHTML = data.sale.heading;
            document.querySelector('.sale-contain p').innerHTML = data.sale.description;
        }
    })
};

function showChin() {
    $.ajax({
        url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh',

        success: function (data) {
            document.querySelector('.main-img').style = `background-image:url(${data.imageURL})`;
            document.querySelector('.flower-detail h4').innerHTML = data.info.heading;
            document.querySelector('.flower-detail p').innerHTML = data.info.description;
            document.querySelector('.sale-contain h4').innerHTML = data.sale.heading;
            document.querySelector('.sale-contain p').innerHTML = data.sale.description;
        }
    })
}




