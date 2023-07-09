const gift_section_img_1 = document.querySelector(".gift_section_img_1"),
    gift_section_img_2 = document.querySelector(".gift_section_img_2"),
    gift_section_img_3 = document.querySelector(".gift_section_img_3"),
    gift_section_img_4 = document.querySelector(".gift_section_img_4"),
    gift_section_img_5 = document.querySelector(".gift_section_img_5"),
    gift_section_img_6 = document.querySelector(".gift_section_img_6");

function mouse_over(id, url) {
    id.addEventListener("mouseover", () => {
        id.setAttribute("src", url);
    });
}

function mouse_out(id, url) {
    id.addEventListener("mouseout", () => {
        id.setAttribute("src", url);
    });
}

mouse_over(gift_section_img_1, "https://www.davidjones.com/productimages/thumb/2/2484045_22028975_8673826.jpg");
mouse_over(gift_section_img_2, "https://www.davidjones.com/productimages/thumb/2/2441716_21841315_7685779.jpg");
mouse_over(gift_section_img_3, "https://www.davidjones.com/productimages/thumb/2/2534700_22262224_10335673.jpg");
mouse_over(gift_section_img_4, "https://www.davidjones.com/productimages/thumb/2/2425112_21763511_7267535.jpg");
mouse_over(gift_section_img_5, "https://www.davidjones.com/productimages/thumb/2/2475236_21988961_8402695.jpg");
mouse_over(gift_section_img_6, "https://www.davidjones.com/productimages/thumb/2/2467251_21959356_8278366.jpg");

mouse_out(gift_section_img_1, "https://www.davidjones.com/productimages/thumb/1/2484045_22028975_8673825.jpg");
mouse_out(gift_section_img_2, "https://www.davidjones.com/productimages/thumb/1/2441716_21841315_7685778.jpg");
mouse_out(gift_section_img_3, "https://www.davidjones.com/productimages/thumb/1/2534700_22262224_10335672.jpg");
mouse_out(gift_section_img_4, "https://www.davidjones.com/productimages/thumb/1/2425112_21763511_7267534.jpg");
mouse_out(gift_section_img_5, "https://www.davidjones.com/productimages/thumb/1/2475236_21988961_8402694.jpg");
mouse_out(gift_section_img_6, "https://www.davidjones.com/productimages/thumb/1/2467251_21959356_8278365.jpg");
