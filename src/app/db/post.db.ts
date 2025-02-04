import { ICategory } from './../interfaces/icategory.interface';
import { IPost } from "../interfaces/ipost.interface"


export let POSTS: IPost[] = [
  {
    id: 1,
    title: 'Paraíso en Maldivas',
    text: 'Descubre las aguas cristalinas y la arena blanca de Maldivas. Recomendado visitar en temporada seca.',
    author: 'Carlos Mendoza',
    image: 'https://s.libertaddigital.com/fotos/noticias/maldivas1.jpg',
    date: '2024-01-10',
    category: ICategory.Playa
  },
  {
    id: 2,
    title: 'Senderismo en los Alpes Suizos',
    text: 'Una de las mejores rutas de senderismo con vistas impresionantes y refugios acogedores.',
    author: 'Ana Rodríguez',
    image: 'https://d2exd72xrrp1s7.cloudfront.net/www/guide/525/1QgXYo?width=3840&crop=false&q=80',
    date: '2024-01-15',
    category: ICategory.Montaña
  },
  {
    id: 3,
    title: 'Tour por Nueva York',
    text: 'Explora la ciudad que nunca duerme: Times Square, Central Park y Broadway son imperdibles.',
    author: 'Luis Fernández',
    image: 'https://www.vacacionesnuevayork.com/wp-content/uploads/2024/06/tour-manhattan.webp',
    date: '2024-02-05',
    category: ICategory.Ciudad
  },
  {
    id: 4,
    title: 'Escapada rural en la Toscana',
    text: 'Disfruta del vino, la comida y los paisajes de la hermosa Toscana italiana.',
    author: 'María Gómez',
    image: 'https://static.cozycozy.com/images/catalog/bg2/horizontal-toscana.jpg',
    date: '2024-02-20',
    category: ICategory.Rural
  },
  {
    id: 5,
    title: 'Carnaval de Río de Janeiro',
    text: 'El carnaval más grande y colorido del mundo. Música, baile y cultura en su máxima expresión.',
    author: 'Pedro Santos',
    image: 'https://bookers.s3.amazonaws.com/pages/rio-carnaval-carro-alegorico-sambodromo-1.jpg',
    date: '2024-03-10',
    category: ICategory.Festivales
  },
  {
    id: 10,
    title: 'Oktoberfest en Múnich',
    text: 'El festival de la cerveza más famoso del mundo, con música, tradición y mucha diversión.',
    author: 'Lucía Fernández',
    image: 'https://viajes.nationalgeographic.com.es/medio/2022/09/19/oktoberfest_156e8dac_1000x667.jpg',
    date: '2024-10-01',
    category: ICategory.Festivales
  },
  {
    id: 11,
    title: 'Playas de Tailandia',
    text: 'Explora las playas paradisíacas de Phuket y Krabi, con aguas turquesas y naturaleza exuberante.',
    author: 'Fernando García',
    image: 'https://www.molaviajar.com/wp-content/uploads/2014/01/playas-tailandia.jpg',
    date: '2024-11-12',
    category: ICategory.Playa
  },
  {
    id: 12,
    title: 'Aventura en los Andes peruanos',
    text: 'Trekking en la impresionante Cordillera Blanca, con vistas panorámicas y glaciares.',
    author: 'Sofía Morales',
    image: 'https://image-tc.galaxy.tf/wijpeg-1vettsm4r2mvv1w53v8sx586h/rutas-de-trekking-en-los-andes_wide.jpg?crop=0%2C63%2C1200%2C675',
    date: '2024-09-05',
    category: ICategory.Montaña
  },
  {
    id: 13,
    title: 'Tour por París',
    text: 'Desde la Torre Eiffel hasta el Louvre, la capital francesa está llena de historia y arte.',
    author: 'Miguel Herrera',
    image: 'https://www.francetourisme.fr/media/Paris_generique/Paris_tour_eiffel_2.jpg',
    date: '2024-08-25',
    category: ICategory.Ciudad
  },
  {
    id: 14,
    title: 'Vida rural en la Patagonia',
    text: 'Vive la experiencia de una estancia en la Patagonia, rodeado de naturaleza y animales.',
    author: 'Valeria Ríos',
    image: 'https://www.nationalgeographic.com.es/medio/2014/11/20/x3h-1670262_1000x721.jpg',
    date: '2024-11-30',
    category: ICategory.Rural
  },
  {
    id: 15,
    title: 'Carnaval de Venecia',
    text: 'Disfruta de la elegancia y el misterio de uno de los carnavales más icónicos del mundo.',
    author: 'David Suárez',
    image: 'https://www.guiajando.com/wp-content/uploads/2024/01/trajes-carnaval-de-venecia-1024x683.jpg',
    date: '2024-02-10',
    category: ICategory.Festivales
  },
  {
    id: 16,
    title: 'Descanso en Bora Bora',
    text: 'Un paraíso en la Polinesia Francesa con playas de arena blanca y aguas cristalinas.',
    author: 'Elena Martínez',
    image: 'https://arenatours.com/wp-content/uploads/2022/03/smile-bridge-woman-resort-bungalow-1.jpg',
    date: '2024-03-15',
    category: ICategory.Playa
  },
  {
    id: 17,
    title: 'Aventura en el Kilimanjaro',
    text: 'Escala la montaña más alta de África y disfruta de vistas impresionantes.',
    author: 'Roberto Gómez',
    image: 'https://www.manasluadventures.com/wp-content/uploads/2023/07/preparing-to-climb-mount-kilimanjaro-main-banner.jpg',
    date: '2024-07-22',
    category: ICategory.Montaña
  },
  {
    id: 18,
    title: 'Explorando Tokio',
    text: 'Descubre la modernidad y la tradición en la vibrante capital de Japón.',
    author: 'Laura Sánchez',
    image: 'https://i0.wp.com/sivarita.es/wp-content/uploads/2018/12/fushimi-inari-2_kioto_sivarita.png?fit=600%2C337&ssl=1',
    date: '2024-06-18',
    category: ICategory.Ciudad
  },
  {
    id: 19,
    title: 'Vida rural en los campos de Provenza',
    text: 'Campos de lavanda, pueblos encantadores y una experiencia de tranquilidad total.',
    author: 'Pedro Ramírez',
    image: 'https://www.fijet.es/wp-content/uploads/2020/11/bici-provenza-bicicleta-768x507.jpg',
    date: '2024-08-05',
    category: ICategory.Rural
  },
  {
    id: 20,
    title: 'Día de los Muertos en México',
    text: 'Un festival lleno de color, cultura y tradición para honrar a los seres queridos.',
    author: 'Mariana Pérez',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/dia-de-muertos-mexico-digi-00-00-25-07-still002.jpg?c=original',
    date: '2024-11-02',
    category: ICategory.Festivales
  }
];
