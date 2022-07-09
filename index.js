const blockFeaturedImages = document.querySelector(".featured_images");
const blockLastImages = document.querySelector(".last_images");

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        renderFeatureImages(data)
        renderLastImages(data)
    })


const renderFeatureImages = (data) => {
    data.map((item) => {
        if (document.querySelectorAll(".featured_image").length == 5) {
            return
        } else if (item.rating >= 4) {

            const featuredImage = document.createElement("div");
            featuredImage.classList.add("featured_image");
            blockFeaturedImages.appendChild(featuredImage);
            const featuredImg = document.createElement("img");
            featuredImg.classList.add("featured_img");
            featuredImg.src = item.image;
            featuredImage.appendChild(featuredImg);

            const title = document.createElement("h2");
            title.classList.add("featured_img_title");
            title.textContent = item.title;
            featuredImage.appendChild(title);

            const tags = document.createElement("p");
            tags.classList.add("featured_img_tags");
            tags.textContent = item.tags.map((item) => ` #${item}`);
            title.appendChild(tags);
        }
    })
}


const renderLastImages = (data) => {
    const arrayLastImage = []
    data.map((item) => {
        arrayLastImage.push(item.age);
        arrayLastImage.sort((a, b) => b - a);
    })
    data.map((item) => {
        if (item.age === arrayLastImage[0] || item.age === arrayLastImage[1]) {

            const lastImage = document.createElement("div");
            lastImage.classList.add("last_image");
            blockLastImages.appendChild(lastImage);

            const lastImg = document.createElement("img");
            lastImg.classList.add("last_img");
            lastImg.src = item.image;
            lastImage.appendChild(lastImg);

            const title = document.createElement("h2");
            title.classList.add("last_img_title");
            title.textContent = item.title;
            lastImage.appendChild(title);

            const tags = document.createElement("p");
            tags.classList.add("last_img_tags");
            tags.textContent = item.tags.map((item) => ` #${item}`);
            title.appendChild(tags);
        }
    })
}


setTimeout(() => {
    const numElements = document.getElementsByTagName('*').length;
    console.log('1. Загальна кількість елементів у DOM-дереві: ', numElements);

    console.log('---------------------------------------------------------');

    const numElementsDiv = document.getElementsByTagName('div').length;
    console.log('2. Загальна кількість елементів "DIV" у DOM-дереві: ', numElementsDiv);

    const numElementsH2 = document.getElementsByTagName('h2').length;
    console.log('2. Загальна кількість елементів "H2" у DOM-дереві: ', numElementsH2);

    const numElementsImg = document.getElementsByTagName('img').length;
    console.log('2. Загальна кількість елементів "IMG" у DOM-дереві: ', numElementsImg);

    const numElementsP = document.getElementsByTagName('p').length;
    console.log('2. Загальна кількість елементів "P" у DOM-дереві: ', numElementsP);

    const numElementsScript = document.getElementsByTagName('script').length;
    console.log('2. Загальна кількість елементів "script" у DOM-дереві: ', numElementsScript);

    console.log('---------------------------------------------------------');

    const elem = ["div", "h2", "img", "p", "script"];
    amountSymbols(elem.sort((b, a) => b.length - a.length));
}, 1000)



const amountSymbols = (elem) => {
    elem.map((item) => {
        if (item.length == 1) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        } else if (item.length == 2) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        }
        else if (item.length == 3) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        }
        else if (item.length == 4) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        }
        else if (item.length == 5) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        }
        else if (item.length == 6) {
            console.log(`3. Елемент "${item}" має символів: ${item.length}`);
        }
    })

}





