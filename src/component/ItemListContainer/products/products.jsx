export const products = [
    {
        id: 1,
        name: 'Nike Airforce One',
        description: 'El zapato deportivo Air Force 1, lanzado al mercado en 1982, es un producto de Nike Inc. Fue creado por el diseñador Bruce Kilgore, fue el primer calzado deportivo de Baloncesto lanzado por Nike que usa la Nike Air.',
        price: 15000,
        stock: 4,
        marca: 'Nike',
        modelo: 'AirForce One',
        category:'mas_vendidas',
        img: '/./assets/img/airforce1.png',
    },
    {
        id: 2,
        name: 'Nike AirMax 720 ghost',
        description: 'La unidad de talón más alta en la historia de Air también proporciona el mayor desplazamiento de volumen del talón. Esto maximiza el rebote y la comodidad del 720, y con su forma de 360 ​​grados, la unidad actúa como una cuna para el pie.',
        price: 27000,
        stock: 2,
        marca: 'Nike',
        modelo: 'AirMax 720 ghost',
        category:'mas_vendidas',
        img: "/./assets/img/720.jpg",
    },
    {
        id: 3,
        name: 'Adidas Forum Low',
        description: 'Las adidas Forum 84 Low Blue Thread son la versión en zapatilla baja del par que aspira a reinar este año. Estas zapatillas de skate aspiran a reinar en las calles este año que acabamos de estrenar.  Pero a pesar de su propósito de dominar el futuro, sus orígenes se remontan a 1984.',
        price: 12000,
        stock: 7,
        marca: 'Adidas',
        modelo: 'Forum Low',
        category:'nuevos_modelos',
        img: '/./assets/img/forum-low.jpg',
    },
    {
        id: 4,
        name: 'Adidas Lego Sport',
        description: 'Tu futuro atleta también será ingeniero. Estas zapatillas de running para niños fueron creadas por adidas en colaboración con LEGO® Group para apoyar la creatividad y el juego activo. Una barra Torsion en forma de un bloque de LEGO® le agrega estabilidad a cada paso.',
        price: 24000,
        stock: 10,
        marca: 'Adidas',
        modelo: 'Lego Sport',
        category:'nuevos_modelos',
        img: '/./assets/img/lego-sport.jpg',
    },
    {
        id: 5,
        name: 'Adidas Stan Smith',
        description: 'Si hay una zapatilla mítica e icónica es la Adidas Stan Smith, un modelo diseñado en el año 1971 para el popular ex tenista norteamericano Stanley Roger Smith, más conocido como Stan Smith. El estilo clásico de esta zapatilla ya cuenta con un lugar privilegiado dentro la historia de la moda.',
        price: 13000,
        stock: 4,
        marca: 'Adidas',
        modelo: 'Stan Smith',
        category:'mas_vendidas',
        img: '/./assets/img/stan-smith.jpg',
    },
    {
        id: 6,
        name: 'Adidas Superstar',
        description: 'Los tenis Superstar se han convertido en una parte esencial de la moda juvenil y ahora son usados regularmente como calzado casual, en lugar de calzado para practicar algún deporte. Los Superstars, junto con los Chuck Taylor All-Stars de Converse, lograron una transición fácil de las canchas de basquetbol hacia las calles debido a su uso por aficionados al hip-hop. Al principio de los años 80, los b-boys usaban tenis con cordones extra gruesas llamadas "cordones gordos", normalmente combinaban el color de los cordones con el color de las tres franjas del tenis.',
        price: 10000,
        stock: 15,
        marca: 'Adidas',
        modelo: 'Superstar',
        category:'clasicas',
        img: '/./assets/img/superstar.jpg',
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