const items = [
    {
        id:1,
        title:"Bajo Jazz Bass",
        brand: "Fender",
        price: 12000,
        category:"basses",
        image:"https://eusica.mx/product/image/medium/0370451551_bass_2.jpg"
    },
    {
        id:2,
        title:"Guitarra Les Paul",
        brand: "Gibson",
        price: 11000,
        category:"guitars",
        image:"https://eusica.mx/product/image/large/lptr00sinh1_lp_tribute_lptr00sinh1_1.jpg"
    },
    {
        id:3,
        title:"Guitarra Telecaster",
        brand: "Fender",
        price: 9000,
        category:"guitars",
        image:"https://eusica.mx/product/image/large/0146230721_tele_1.jpg"
    },
    {
        id:4,
        title:"Guitarra RGA42FM-BLF",
        brand: "Ibanez",
        price: 11480,
        category:"guitars",
        image:"https://eusica.mx/product/image/medium/2401502806_gretsch_g6136t_2401502806_1.jpg"
    },
    {
        id:5,
        title:"Vox WAH V847-A",
        brand: "VOX",
        price: 2200,
        category:"pedals",
        image:"https://eusica.mx/product/image/large/wah%20v847-a_v847-wah-pedal-vox-1.jpg"

    },
    {
      id:6,
      title:"Fender Nate Mendel P Bass",
      brand: "Fender",
      price: 26467,
      category:"basses",
      image: "https://eusica.mx/product/image/large/0142500309_1.jpg"
  }
]

// Función que va a llamar al Backend
function getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 500)
    });
  }
  
  // Exportar las funciones que necesito
  export {
    getItems,
  }
  