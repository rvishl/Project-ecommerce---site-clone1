const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./Asset/air.png",
            }, {
                code: "darkblue",
                img: "./Asset/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 219,
        colors: [
            {
                code: "lightgray",
                img: "./Asset/jordan.png",
            }, {
                code: "green",
                img: "./Asset/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 159,
        colors: [
            {
                code: "lightgray",
                img: "./Asset/blazer.png",
            }, {
                code: "green",
                img: "./Asset/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 139,
        colors: [
            {
                code: "black",
                img: "./Asset/crater.png",
            }, {
                code: "lightgray",
                img: "./Asset/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./Asset/hippie2.png",
            },
        ],
    },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, idx) => {
    item.addEventListener("click", ()=> {
        // console.log("clicked", idx);
        
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * idx}vw)`;

        //change the choosen product
        choosenProduct = products[idx];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //for new colors
        currentProductColors.forEach((color, idx) => {
            color.style.backgroundColor = choosenProduct.colors[idx].code;
        });

    });
});


currentProductColors.forEach((color, idx) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[idx].img;
    });
});

currentProductSizes.forEach((size, idx) => {
    size.addEventListener("click", _ => {

        currentProductSizes.forEach(size => {
            size.style.color = "black";
            size.style.backgroundColor = "white";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});