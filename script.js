    // const homeData = [
    //     {
    //         ""
    //     },
    //     {

    //     }
    // ];

const navData = [
    {
        "href": "#",
        "content": "Home"
    },
    {
        "href": "#",
        "content": "About"
    },
    {
        "href": "#",
        "content": "Menu"
    },
    {
        "href": "#",
        "content": "Contact"
    },
    {
        "href": "tel:1800000000",
        "content": "Orders 1.800.000.000"
    }
];

const menuData = [
    {
        "product": "baked-cookies",
        "title": "baked cookies",
        "price": "3.00",
        "description": "Laudantium est excepturi magni vitae, odit, eaque voluptate error accusamus etodio aspernatur ea, ullam earum velit vel repellat nam quaerat totam labore molestias corruptiquidem. Voluptatibus.",
        "ingredients": ["ingr-milk", "ingr-flour", "ingr-nosugar"]
    },
    {
        "product": "chocolate-cookies",
        "title": "chocolate cookies",
        "price": "6.00",
        "description": "Repellendus molestias assumenda vero cumque natus quod reprehenderit expeditaid modi minima itaque non, dolorem aspernatur earum repellat doloribus ipsum iste distinctio culpasequi.",
        "ingredients": ["ingr-eggs", "ingr-flour"]
    },
    {
        "product": "lightbrown-baked-cookies",
        "title": "lightbrown cookies",
        "price": "4.50",
        "description": "Nam voluptatem suscipit assumenda dolorum sequi optio ut quaerat evenietmolestiae in esse sunt voluptatum impedit qui id omnis, eum voluptates culpa, reprehenderit minusnostrum iure a facilis.",
        "ingredients": ["ingr-flour", "ingr-nosugar"]
    },
    {
        "product": "cookies-with-milk",
        "title": "cookies + milk",
        "price": "11.00",
        "description": "Velit inventore quiest nulla error iusto laborum excepturi! Error et dolores quasi est, excepturi labore consequatur! Velit inventore quiest nulla error iusto laborum excepturi!",
        "ingredients": ["ingr-eggs", "ingr-milk", "ingr-flour", "ingr-nosugar"]
    }
];

// NAV
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'City Bakery';
const nav = document.createElement('nav');
const ul = document.createElement('ul');

navData.forEach((navItem) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', navItem.href);
    a.className += ` ${navItem.content.toLowerCase()}`;
    a.textContent = navItem.content;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
const header = document.querySelector('header');
header.appendChild(logo);
header.appendChild(nav);

// HOME

function renderIndex() {
    document.querySelectorAll('main>section').forEach((section) => section.remove());
    const leftCol = document.createElement('section');
    leftCol.classList.add('full-height');
    leftCol.appendChild(document.createElement('div')).classList.add('pastry');

    const middleCol = document.createElement('section');
    middleCol.classList.add('products');
    middleCol.appendChild(document.createElement('div')).classList.add('brownie');
    middleCol.appendChild(document.createElement('div')).classList.add('cookies');
    middleCol.appendChild(document.createElement('div')).classList.add('pastry-love')
    middleCol.querySelector(':last-child').textContent = 'Pastry love';

    const rightCol = document.createElement('section');
    rightCol.classList.add('content');
    rightCol.appendChild(document.createElement('h1')).textContent = 'Welcome';
    rightCol.appendChild(document.createElement('p')).textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eaque voluptatum placeat quis veniam eum minima ipsum doloremque reiciendis totam maxime beatae facilis harum! Ad eaque voluptatum placeat qu veniam.';
    rightCol.appendChild(document.createElement('div')).classList.add('author');
    rightCol.querySelector(':last-child').textContent = 'Nick Robinson';
    const divIcons = document.createElement('div');
    divIcons.classList.add('icons');
    divIcons.appendChild(document.createElement('span')).classList.add('icon', 'icon-fb');
    divIcons.appendChild(document.createElement('span')).classList.add('icon', 'icon-twitter');
    divIcons.appendChild(document.createElement('span')).classList.add('icon', 'icon-instagram');
    rightCol.appendChild(divIcons);

    document.querySelector('main').className = '';
    document.querySelector('main').classList.add('index-flex');
    document.querySelector('main').appendChild(leftCol);
    document.querySelector('main').appendChild(middleCol);
    document.querySelector('main').appendChild(rightCol);
}

window.addEventListener('load', renderIndex);
const home = document.querySelector('.home');
home.addEventListener('click', renderIndex);

// ABOUT
const about = document.querySelector('.about');
about.addEventListener('click', () => {
    document.querySelectorAll('main>section').forEach((section) => section.remove());

    const firstSection = document.createElement('section');
    firstSection.appendChild(document.createElement('div')).classList.add('baked-cookies', 'full-sized');
    const secondSection = document.createElement('section');
    secondSection.appendChild(document.createElement('div')).classList.add('chocolate-cookies', 'full-sized');
    const thirdSection = document.createElement('section');
    thirdSection.appendChild(document.createElement('div')).classList.add('lightbrown-baked-cookies', 'full-sized');
    const fourthSection = document.createElement('section');
    fourthSection.appendChild(document.createElement('div')).classList.add('cookies-with-milk', 'full-sized');


    document.querySelector('main').className = '';
    document.querySelector('main').classList.add('about-flex');
    document.querySelector('main').appendChild(firstSection);
    document.querySelector('main').appendChild(secondSection);
    document.querySelector('main').appendChild(thirdSection);
    document.querySelector('main').appendChild(fourthSection);
});


// MENU
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    document.querySelectorAll('main>section').forEach((section) => section.remove());
    menuData.forEach((item) => {
        const sectionCard = document.createElement('section');
        sectionCard.classList.add('card');
    
        const leftSide = document.createElement('div');
        sectionCard.appendChild(leftSide);
        leftSide.appendChild(document.createElement('div')).classList.add('card-image', item.product);
        leftSide.appendChild(document.createElement('div')).classList.add('price');
    
        
        const rightSide = document.createElement('div');
        sectionCard.appendChild(rightSide);
        rightSide.appendChild(document.createElement('div')).classList.add('product-name');
        rightSide.appendChild(document.createElement('div')).classList.add('description');
        rightSide.appendChild(document.createElement('div')).classList.add('ingredients');
        
        sectionCard.querySelector('.price').textContent = `$${item.price}`;
        sectionCard.querySelector('.product-name').textContent = item.title.toUpperCase();
        sectionCard.querySelector('.description').textContent = item.description;
        item.ingredients.forEach((ingr) => {
            const addIngrIcon = document.createElement('div');
            addIngrIcon.classList.add('ingr-icon', `${ingr}`);
            sectionCard.querySelector('.ingredients').appendChild(addIngrIcon);
        });
        
        document.querySelector('main').className = '';
        document.querySelector('main').classList.add('menu-flex');
        document.querySelector('main').appendChild(sectionCard);
    });
});


// FOOTER

