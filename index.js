const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, idx) => {
    item.addEventListener("click", ()=> {
        // console.log("clicked", idx);
        wrapper.style.transform = `translateX(${-100 * idx}vw)`;
    })
})