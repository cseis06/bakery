// Importar imágenes locales
import Panettone from "../../../assets/img/panettone.jpg"

export interface Product {
  id: number
  category: string
  name: string
  description: string
  image: string
  price?: number
  isNew?: boolean
  isBestSeller?: boolean
  ingredients?: string[]
  weight?: string
  servings?: string
}

export interface Category {
  id: string
  name: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'all',
    name: 'Todos',
    description: 'Ver todos nuestros productos'
  },
  {
    id: 'panes-artesanales',
    name: 'Panes Artesanales',
    description: 'Panes elaborados con masa madre y técnicas tradicionales'
  },
  {
    id: 'pasteleria-fina',
    name: 'Pastelería Fina',
    description: 'Dulces y postres de la tradición italiana'
  },
  {
    id: 'especialidades',
    name: 'Especialidades',
    description: 'Productos únicos de temporada y edición limitada'
  },
  {
    id: 'panes-rusticos',
    name: 'Panes Rústicos',
    description: 'Panes de corteza crujiente y sabor intenso'
  },
  {
    id: 'galletas-biscotti',
    name: 'Galletas & Biscotti',
    description: 'Galletas artesanales perfectas para el café'
  }
]

export const products: Product[] = [
  // Panes Artesanales
  {
    id: 1,
    category: 'panes-artesanales',
    name: 'Focaccia Tradizionale',
    description: 'Nuestra focaccia clásica con romero fresco, aceite de oliva extra virgen y sal marina. Horneada diariamente siguiendo la receta de la nonna.',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800&q=80',
    price: 45000,
    isBestSeller: true,
    ingredients: ['Harina 00', 'Aceite de oliva', 'Romero', 'Sal marina'],
    weight: '500g',
    servings: '6-8 porciones'
  },
  {
    id: 2,
    category: 'panes-artesanales',
    name: 'Focaccia con Pomodorini',
    description: 'Focaccia genovesa coronada con tomates cherry frescos, ajo confitado y orégano siciliano.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    price: 52000,
    ingredients: ['Harina 00', 'Tomates cherry', 'Ajo', 'Orégano'],
    weight: '550g',
    servings: '6-8 porciones'
  },
  {
    id: 3,
    category: 'panes-artesanales',
    name: 'Grissini Torinesi',
    description: 'Palitos de pan crujientes originarios de Turín. Perfectos como aperitivo o acompañamiento.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    price: 28000,
    isNew: true,
    ingredients: ['Harina', 'Aceite de oliva', 'Semillas de sésamo'],
    weight: '200g',
    servings: '10-12 unidades'
  },
  {
    id: 4,
    category: 'panes-artesanales',
    name: 'Pane di Altamura',
    description: 'Pan tradicional de Puglia con denominación de origen. Corteza dorada y miga densa con sabor único.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&q=80',
    price: 38000,
    ingredients: ['Sémola de trigo duro', 'Masa madre', 'Sal'],
    weight: '750g',
    servings: '8-10 porciones'
  },

  // Pastelería Fina
  {
    id: 5,
    category: 'pasteleria-fina',
    name: 'Cannoli Siciliani',
    description: 'Crujientes tubos de masa rellenos de ricotta cremosa, chips de chocolate y pistachos sicilianos. Un clásico del sur de Italia.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
    price: 15000,
    isBestSeller: true,
    ingredients: ['Ricotta', 'Chocolate', 'Pistachos', 'Azúcar glass'],
    weight: '80g',
    servings: '1 unidad'
  },
  {
    id: 6,
    category: 'pasteleria-fina',
    name: 'Tiramisù Classico',
    description: 'El postre italiano por excelencia. Capas de savoiardi bañados en espresso, crema de mascarpone y cacao amargo.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    price: 85000,
    isBestSeller: true,
    ingredients: ['Mascarpone', 'Café espresso', 'Savoiardi', 'Cacao'],
    weight: '500g',
    servings: '4-6 porciones'
  },
  {
    id: 7,
    category: 'pasteleria-fina',
    name: 'Panna Cotta',
    description: 'Delicado postre piamontés de nata cocida con vainilla bourbon, servido con coulis de frutos rojos.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    price: 32000,
    ingredients: ['Nata', 'Vainilla', 'Frutos rojos'],
    weight: '150g',
    servings: '1 porción'
  },
  {
    id: 8,
    category: 'pasteleria-fina',
    name: 'Sfogliatella Napoletana',
    description: 'Hojaldre crujiente con forma de concha relleno de crema de ricotta, sémola y cítricos confitados.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    price: 18000,
    isNew: true,
    ingredients: ['Hojaldre', 'Ricotta', 'Sémola', 'Cítricos'],
    weight: '100g',
    servings: '1 unidad'
  },
  {
    id: 9,
    category: 'pasteleria-fina',
    name: 'Zeppole di San Giuseppe',
    description: 'Tradicionales rosquillas napolitanas fritas, rellenas de crema pastelera y coronadas con amarena.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80',
    price: 22000,
    ingredients: ['Masa choux', 'Crema pastelera', 'Cerezas amarena'],
    weight: '120g',
    servings: '1 unidad'
  },

  // Especialidades
  {
    id: 10,
    category: 'especialidades',
    name: 'Panettone Milanese',
    description: 'El rey de los panes dulces italianos. Elaborado con masa madre, frutas confitadas premium y un proceso de fermentación de 72 horas.',
    image: Panettone,
    price: 120000,
    isBestSeller: true,
    ingredients: ['Masa madre', 'Frutas confitadas', 'Pasas', 'Mantequilla'],
    weight: '1kg',
    servings: '10-12 porciones'
  },
  {
    id: 11,
    category: 'especialidades',
    name: 'Pandoro di Verona',
    description: 'Pan dulce veronés en forma de estrella de ocho puntas. Suave, mantecoso y espolvoreado con azúcar glass.',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80',
    price: 115000,
    ingredients: ['Mantequilla', 'Huevos', 'Vainilla', 'Azúcar glass'],
    weight: '1kg',
    servings: '10-12 porciones'
  },
  {
    id: 12,
    category: 'especialidades',
    name: 'Colomba Pasquale',
    description: 'Tradicional dulce de Pascua en forma de paloma. Similar al panettone pero con glaseado de almendras.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    price: 125000,
    isNew: true,
    ingredients: ['Masa madre', 'Almendras', 'Cítricos confitados', 'Glaseado'],
    weight: '1kg',
    servings: '10-12 porciones'
  },

  // Panes Rústicos
  {
    id: 13,
    category: 'panes-rusticos',
    name: 'Ciabatta Pugliese',
    description: 'Pan rústico de corteza crujiente y miga alveolada. Perfecto para bruschetta o acompañar tus platos favoritos con aceite de oliva.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    price: 32000,
    isBestSeller: true,
    ingredients: ['Harina', 'Masa madre', 'Aceite de oliva', 'Sal'],
    weight: '400g',
    servings: '4-6 porciones'
  },
  {
    id: 14,
    category: 'panes-rusticos',
    name: 'Pane Toscano',
    description: 'Pan tradicional sin sal de la Toscana. Corteza gruesa y miga compacta, ideal para sopas y guisos.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    price: 28000,
    ingredients: ['Harina', 'Masa madre', 'Agua'],
    weight: '500g',
    servings: '6-8 porciones'
  },
  {
    id: 15,
    category: 'panes-rusticos',
    name: 'Pane alle Olive',
    description: 'Pan rústico con aceitunas negras taggiasca. Sabor mediterráneo intenso en cada bocado.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
    price: 42000,
    ingredients: ['Harina', 'Aceitunas taggiasca', 'Aceite de oliva', 'Romero'],
    weight: '450g',
    servings: '6-8 porciones'
  },
  {
    id: 16,
    category: 'panes-rusticos',
    name: 'Pane ai Cereali',
    description: 'Pan multigrano con semillas de girasol, lino, sésamo y avena. Nutritivo y lleno de sabor.',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80',
    price: 38000,
    isNew: true,
    ingredients: ['Harina integral', 'Semillas mixtas', 'Avena', 'Miel'],
    weight: '550g',
    servings: '8-10 porciones'
  },

  // Galletas & Biscotti
  {
    id: 17,
    category: 'galletas-biscotti',
    name: 'Biscotti di Prato',
    description: 'Los famosos cantuccini toscanos con almendras enteras. Perfectos para mojar en Vin Santo o café.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    price: 35000,
    isBestSeller: true,
    ingredients: ['Almendras', 'Harina', 'Huevos', 'Azúcar'],
    weight: '250g',
    servings: '15-20 unidades'
  },
  {
    id: 18,
    category: 'galletas-biscotti',
    name: 'Amaretti di Saronno',
    description: 'Galletas de almendra suaves por dentro y crujientes por fuera. Receta original de Saronno.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    price: 42000,
    ingredients: ['Almendras', 'Clara de huevo', 'Azúcar', 'Amaretto'],
    weight: '200g',
    servings: '12-15 unidades'
  },
  {
    id: 19,
    category: 'galletas-biscotti',
    name: 'Brutti ma Buoni',
    description: '"Feos pero buenos" - Galletas de avellana piamontesas con textura única entre crujiente y masticable.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    price: 38000,
    ingredients: ['Avellanas', 'Clara de huevo', 'Azúcar', 'Vainilla'],
    weight: '180g',
    servings: '10-12 unidades'
  },
  {
    id: 20,
    category: 'galletas-biscotti',
    name: 'Savoiardi',
    description: 'Bizcochos ligeros y esponjosos, imprescindibles para el tiramisú o para disfrutar solos.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80',
    price: 28000,
    ingredients: ['Huevos', 'Harina', 'Azúcar', 'Vainilla'],
    weight: '200g',
    servings: '24 unidades'
  }
]

// Función helper para obtener productos por categoría
export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'all') return products
  return products.filter(product => product.category === categoryId)
}

// Función helper para obtener productos destacados
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isBestSeller)
}

// Función helper para obtener productos nuevos
export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew)
}

// Función helper para buscar productos
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  )
}

// Función para formatear precio en guaraníes
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}