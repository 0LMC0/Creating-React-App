export const products = [
    {
        id: '1',
        name: 'Nike Airforce One',
        description: 'Nike airforce ones zapatillas blancas con mucho estilo',
        price: 15000,
        stock: 4,
        img: './assets/img/airforce1.png',
    },
    {
        id: '2',
        name: 'Nike AirMax 720 ghost',
        description: 'Nike AirMax 720 blancas',
        price: 27000,
        stock: 2,
        img: "./assets/img/720.jpg",
    },
    {
        id: '3',
        name: 'Adidas Forum Low',
        description: 'Adidas Forum Low blancas con azules',
        price: 12000,
        stock: 7,
        img: './assets/img/forum-low.png',
    },
    {
        id: '4',
        name: 'Adidas Lego Sport',
        description: 'Adidas Lego Sport amarillas',
        price: 24000,
        stock: 10,
        img: './assets/img/airforce1.png',
    },
    {
        id: '5',
        name: 'Adidas Stan Smith',
        description: 'Adidas Stan Smith Verdes Con Blancas',
        price: 13000,
        stock: 4,
        img: './assets',
    },
    {
        id: '6',
        name: 'Adidas Superstar',
        description: 'Adidas SuperStar Originales',
        price: 10000,
        stock: 15,
        img: './img/superstar.jpg',
    },
]

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products) 
    }, 2000);
})