export const products = [
    {
        id: '1',
        name: 'Nike Airforce One',
        description: 'Nike airforce ones zapatillas blancas con mucho estilo',
        price: 15000,
        stock: 4,
        marca: 'Nike',
        modelo: 'AirMax One',
        img: './assets/img/airforce1.png',
    },
    {
        id: '2',
        name: 'Nike AirMax 720 ghost',
        description: 'Nike AirMax 720 blancas',
        price: 27000,
        stock: 2,
        marca: 'Nike',
        modelo: 'AirMax 720 ghost',
        img: "./assets/img/720.jpg",
    },
    {
        id: '3',
        name: 'Adidas Forum Low',
        description: 'Adidas Forum Low blancas con azules',
        price: 12000,
        stock: 7,
        marca: 'Adidas',
        modelo: 'Forum Low',
        img: '/./assets/img/forum-low.jpg',
    },
    {
        id: '4',
        name: 'Adidas Lego Sport',
        description: 'Adidas Lego Sport amarillas',
        price: 24000,
        stock: 10,
        marca: 'Adidas',
        modelo: 'Lego Sport',
        img: '/./assets/img/lego-sport.jpg',
    },
    {
        id: '5',
        name: 'Adidas Stan Smith',
        description: 'Adidas Stan Smith Verdes Con Blancas',
        price: 13000,
        stock: 4,
        marca: 'Adidas',
        modelo: 'Stan Smith',
        img: '././assets/img/stan-smith.jpg',
    },
    {
        id: '6',
        name: 'Adidas Superstar',
        description: 'Adidas SuperStar Originales',
        price: 10000,
        stock: 15,
        marca: 'Adidas',
        modelo: 'Superstar',
        img: '././assets/img/superstar.jpg',
    },
]

export const traerProductos = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            resolve(products) 
        }, 2000);
    }
    else {
        reject ('error')
    }
})

//exporta a ItemListContainer y a app.js