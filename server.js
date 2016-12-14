var express = require("express");

var app = express();

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/assets"));

app.listen(3028 , function(){
  console.log("encendido");
});


// parte cortada de json

    // "results2":[
    //             {
    //         "img1":"http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
    //         "img2":"http://legacy.semantic-ui.com/images/demo/photo.jpg",
    //         "img3":"http://html.com/wp-content/uploads/very-large-flamingo.jpg",
    //         "price": "s/. 430",
    //         "owner":"img/airbnb5p.jpg",
    //         "title":"San Isidro Private Room",
    //         "datails":"Casa/apto. entero"
    //     },
    //     {
    //         "img1":"http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
    //         "img2":"http://legacy.semantic-ui.com/images/demo/photo.jpg",
    //         "img3":"http://html.com/wp-content/uploads/very-large-flamingo.jpg",
    //         "price": "s/. 240",
    //         "owner":"img/airbnb6p.jpg",
    //         "title":"Apartamento de diseño",
    //         "datails":"Casa/apto"
    //     },
    //     {
    //         "img1":"http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
    //         "img2":"http://legacy.semantic-ui.com/images/demo/photo.jpg",
    //         "img3":"http://html.com/wp-content/uploads/very-large-flamingo.jpg",
    //         "price": "s/. 190",
    //         "owner":"img/airbnb7p.jpg",
    //         "title":"Room in San Isidro",
    //         "datails":"Habitación privada"
    //     },
    //     {
    //         "img1":"http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
    //         "img2":"http://legacy.semantic-ui.com/images/demo/photo.jpg",
    //         "img3":"http://html.com/wp-content/uploads/very-large-flamingo.jpg",
    //         "price": "s/. 225",
    //         "owner":"img/airbnb8p.jpg",
    //         "title":"Habitación con vista al mar",
    //         "datails":"Habitación privada"
    //     } 
    // ]