// =====================================================
// SECRETOYS - CATÁLOGO EDITABLE
// Para agregar o editar productos, modifica el arreglo
// PRODUCTS. Precio en pesos colombianos (COP).
// =====================================================
const WHATSAPP_NUMBER = "573228156224";

const PRODUCTS = [
  {
    "id": 1,
    "name": "Funda Liam",
    "category": "Juguetes",
    "price": 12000,
    "description": "Ayuda a estimular y tocar el punto G. Diseñada para disfrutar de una sensación cómoda.",
    "image": "assets/products/product-001.jpg"
  },
  {
    "id": 2,
    "name": "Anillo vibrador",
    "category": "Juguetes",
    "price": 15000,
    "description": "Anillo vibrador de pene con perlas. Silicona, 3 pilas.",
    "image": "assets/products/product-002.jpg"
  },
  {
    "id": 3,
    "name": "Acostumbrador anal",
    "category": "Juguetes",
    "price": 18000,
    "description": "Ideal para juegos previos. Busca acostumbrar y relajar los músculos.",
    "image": "assets/products/product-003.jpg"
  },
  {
    "id": 4,
    "name": "Ducha anal",
    "category": "Juguetes",
    "price": 0,
    "description": "Disponible en tallas M y L. Precio según talla.",
    "image": "assets/products/product-004.jpg"
  },
  {
    "id": 5,
    "name": "Esposas de felpa",
    "category": "Juguetes",
    "price": 35000,
    "description": "Pulsera de cuero y felpa. Metal hipoalergénico, cadena ajustable y desmontable.",
    "image": "assets/products/product-005.jpg"
  },
 /// {
//    "id": 6,
 //   "name": "Vibrador Lennon",
//    "category": "Juguetes",
//    "price": 49900,
 //   "description": "Anillo de estimulación clitorial de vibración intensa, fabricado en silicona.",
 //   "image": "assets/products/product-006.jpg"
 /// },
  {
    "id": 7,
    "name": "Consolador Miller",
    "category": "Juguetes",
    "price": 49900,
    "description": "Masturbador realista y venoso, con ventosa en la base.",
    "image": "assets/products/product-007.jpg"
  },
  {
    "id": 8,
    "name": "Cartas Verdad o se Atreve",
    "category": "Juguetes",
    "price": 29900,
    "description": "Juego de sinceridad o retos. Incluye pruebas para compartir con bebidas.",
    "image": "assets/products/product-008.jpg"
  },
  {
    "id": 9,
    "name": "Huevo EVE potente",
    "category": "Juguetes",
    "price": 15000,
    "description": "Largo 4 cm, diámetro 2 cm. Cable de 28,5 cm.",
    "image": "assets/products/product-009.jpg"
  },
//  {
//    "id": 10,
//    "name": "Vibrador Apolo",
//    "category": "Juguetes",
//    "price": 50000,
//    "description": "Silicona suave con textura venosa y perilla para regular intensidad. 2 pilas AA, largo 18 cm.",
//    "image": "assets/products/product-010.jpg"
//  },
  {
    "id": 11,
    "name": "Inmovilizador",
    "category": "Juguetes",
    "price": 44900,
    "description": "Diseñado para juegos de pareja y sujeción.",
    "image": "assets/products/product-011.jpg"
  },
  {
    "id": 12,
    "name": "Plug cola conejo",
    "category": "Juguetes",
    "price": 38000,
    "description": "Plug anal de acero inoxidable con detalle de cola de conejito.",
    "image": "assets/products/product-012.jpg"
  },
  {
    "id": 13,
    "name": "Succionador de pilas",
    "category": "Juguetes",
    "price": 15000,
    "description": "Estimulador clitorial con ondas de presión de aire sin contacto. Silencioso.",
    "image": "assets/products/product-013.jpg"
  },
  {
    "id": 14,
    "name": "Huevo flower",
    "category": "Juguetes",
    "price": 29900,
    "description": "Huevo vibrador. Material ABS-PVC, 2 pilas AA.",
    "image": "assets/products/product-014.jpg"
  },
  {
    "id": 15,
    "name": "Vagina linterna",
    "category": "Juguetes",
    "price": 74900,
    "description": "Textura suave y diseño discreto al cerrarse.",
    "image": "assets/products/product-015.jpg"
  },
  {
    "id": 16,
    "name": "Masturbador sweet",
    "category": "Juguetes",
    "price": 69900,
    "description": "Textura suave y realista, diseñado para una sensación auténtica.",
    "image": "assets/products/product-016.jpg"
  },
  {
    "id": 17,
    "name": "Masturbador mouth",
    "category": "Juguetes",
    "price": 99900,
    "description": "Diseño 3 en 1 con boca, vagina y ano. Fabricado en silicona TPE suave y flexible.",
    "image": "assets/products/product-017.jpg"
  },
  {
    "id": 18,
    "name": "Dildo doble",
    "category": "Juguetes",
    "price": 55900,
    "description": "Dos extremos: diámetros de 2 y 3 cm; largo total 29 cm.",
    "image": "assets/products/product-018.jpg"
  },
  {
    "id": 19,
    "name": "Vibrador labial",
    "category": "Juguetes",
    "price": 89900,
    "description": "10 modos, recargable, silicona médica y ABS, resistente a salpicaduras.",
    "image": "assets/products/product-019.jpg"
  },
  {
    "id": 20,
    "name": "Vibrador pilot puntos",
    "category": "Juguetes",
    "price": 39900,
    "description": "Velocidad graduable y funda siliconada con puntos.",
    "image": "assets/products/product-020.jpg"
  },
  {
    "id": 21,
    "name": "Huevo vibrador",
    "category": "Juguetes",
    "price": 99900,
    "description": "Silicona médica extra suave, control remoto, para uso en pareja o individual.",
    "image": "assets/products/product-021.jpg"
  },
  {
    "id": 22,
    "name": "Huevo inalámbrico Geny",
    "category": "Juguetes",
    "price": 59900,
    "description": "Estimulador inalámbrico con control remoto y varias velocidades.",
    "image": "assets/products/product-022.jpg"
  },
  {
    "id": 23,
    "name": "Huevo vibrador Egg",
    "category": "Juguetes",
    "price": 119900,
    "description": "Recargable, silicona médica, resistente al agua, control remoto hasta 10 m y 12 modos.",
    "image": "assets/products/product-023.jpg"
  },
  {
    "id": 24,
    "name": "Vibrador Anna",
    "category": "Juguetes",
    "price": 149900,
    "description": "Estimulador con 10 modos y 12 oleadas de vibración.",
    "image": "assets/products/product-024.jpg"
  },
  {
    "id": 25,
    "name": "Vibrador Anna USB",
    "category": "Juguetes",
    "price": 89900,
    "description": "Silicona biomédica, recargable, resistente al agua y 10 modos de vibración.",
    "image": "assets/products/product-025.jpg"
  },
  {
    "id": 26,
    "name": "Vibrador conejo pilas",
    "category": "Juguetes",
    "price": 69900,
    "description": "Estimulador de conejo fucsia con 3 puntos de estimulación.",
    "image": "assets/products/product-026.jpg"
  },
  {
    "id": 27,
    "name": "Vibrador triple Lilisse",
    "category": "Juguetes",
    "price": 169900,
    "description": "3 en 1, triple estimulación, 12 modos, recargable; 17 × 3,5 cm.",
    "image": "assets/products/product-027.jpg"
  },
  {
    "id": 28,
    "name": "Vibrador doble Titanix 360",
    "category": "Juguetes",
    "price": 249900,
    "description": "10 velocidades, empuje y giro. Silicona médica, 24 cm de largo y 4 cm de diámetro.",
    "image": "assets/products/product-028.jpg"
  },
  {
    "id": 29,
    "name": "Vibrador doble Issis",
    "category": "Juguetes",
    "price": 165900,
    "description": "10 modos, intensidad ajustable, recargable, silicona médica. 20 cm × 3 cm.",
    "image": "assets/products/product-029.jpg"
  },
  {
    "id": 30,
    "name": "Anillo vibrador Lace",
    "category": "Juguetes",
    "price": 39900,
    "description": "Silicona médica, un modo de vibración.",
    "image": "assets/products/product-030.jpg"
  },
  {
    "id": 31,
    "name": "Anillo vibrador Thor",
    "category": "Juguetes",
    "price": 11900,
    "description": "Anillo para pene que estimula con vibración.",
    "image": "assets/products/product-031.jpg"
  },
  {
    "id": 32,
    "name": "Anillo doble con bala vibradora",
    "category": "Juguetes",
    "price": 49900,
    "description": "Anillo doble con vibración integrada.",
    "image": "assets/products/product-032.jpg"
  },
  {
    "id": 33,
    "name": "Dildo eyaculador",
    "category": "Juguetes",
    "price": 99900,
    "description": "Dildo con bomba de presión para liberar chorros de semen sintético.",
    "image": "assets/products/product-033.jpg"
  },
  {
    "id": 34,
    "name": "Arnés doble ultra",
    "category": "Juguetes",
    "price": 99900,
    "description": "Dos dildos TPR; exterior 16,5 cm e interior 10 cm.",
    "image": "assets/products/product-034.jpg"
  },
  {
    "id": 35,
    "name": "Arnés sencillo",
    "category": "Juguetes",
    "price": 89900,
    "description": "Correas ajustables para adaptarse a diferentes tamaños y formas.",
    "image": "assets/products/product-035.jpg"
  },
  {
    "id": 36,
    "name": "Arnés doble con vibración",
    "category": "Juguetes",
    "price": 179900,
    "description": "Dos dildos TPE con vibración gradual para uso en pareja.",
    "image": "assets/products/product-036.jpg"
  },
  {
    "id": 37,
    "name": "Bala diamante",
    "category": "Juguetes",
    "price": 29900,
    "description": "Bala vibradora compacta de diseño punto diamante.",
    "image": "assets/products/product-037.jpg"
  },
  {
    "id": 38,
    "name": "Bala vibradora Orion",
    "category": "Juguetes",
    "price": 29900,
    "description": "10 modos, silicona suave, funciona con 1 pila AAA.",
    "image": "assets/products/product-038.jpg"
  },
  {
    "id": 39,
    "name": "Bala Afrodita recargable",
    "category": "Juguetes",
    "price": 60900,
    "description": "10 modos de vibración, motor ajustable y recargable.",
    "image": "assets/products/product-039.jpg"
  },
  {
    "id": 40,
    "name": "Vibrador con APP",
    "category": "Juguetes",
    "price": 99900,
    "description": "Vibrador en forma de U con control por aplicación.",
    "image": "assets/products/product-040.jpg"
  },
  {
    "id": 41,
    "name": "Bala vibradora con APP",
    "category": "Juguetes",
    "price": 59900,
    "description": "Dispositivo íntimo controlado mediante aplicación, con vibraciones y silicona médica.",
    "image": "assets/products/product-041.jpg"
  },
  {
    "id": 42,
    "name": "Plug anal vibrador",
    "category": "Juguetes",
    "price": 109900,
    "description": "Silicona médica, diseño ergonómico y carga USB.",
    "image": "assets/products/product-042.jpg"
  },
  {
    "id": 43,
    "name": "Plug anal joya corazón",
    "category": "Juguetes",
    "price": 0,
    "description": "Plug metálico tipo joya en forma de corazón. Tallas S, M y L; precio según talla.",
    "image": "assets/products/product-043.jpg"
  },
  {
    "id": 44,
    "name": "Plug anal cola zorro",
    "category": "Juguetes",
    "price": 39900,
    "description": "Diseño ergonómico con cola esponjosa disponible en colores.",
    "image": "assets/products/product-044.jpg"
  },
  {
    "id": 45,
    "name": "Sujetador con mordaza",
    "category": "Juguetes",
    "price": 39900,
    "description": "Accesorio de sujeción para juegos de pareja.",
    "image": "assets/products/product-045.jpg"
  },
  {
    "id": 46,
    "name": "Amarras Bed Restraint",
    "category": "Juguetes",
    "price": 39900,
    "description": "Sistema de amarras para manos y pies.",
    "image": "assets/products/product-046.jpg"
  },
  {
    "id": 47,
    "name": "Sujetador manos y tobillos",
    "category": "Juguetes",
    "price": 49900,
    "description": "Sistema ajustable y acolchado para muñecas y tobillos.",
    "image": "assets/products/product-047.jpg"
  },
  {
    "id": 48,
    "name": "Consolador Ansel",
    "category": "Juguetes",
    "price": 39900,
    "description": "Material TPE. Largo 16 cm, insertable 14 cm, diámetro 3 cm.",
    "image": "assets/products/product-048.jpg"
  },
  {
    "id": 49,
    "name": "Bolas vibradoras anales",
    "category": "Juguetes",
    "price": 39900,
    "description": "Silicona médica, textura ondulada y un modo de vibración.",
    "image": "assets/products/product-049.jpg"
  },
  {
    "id": 50,
    "name": "Bolas silicona médica",
    "category": "Juguetes",
    "price": 29900,
    "description": "Bolas chinas fabricadas en silicona médica, textura suave.",
    "image": "assets/products/product-050.jpg"
  },
  {
    "id": 51,
    "name": "Bolas anales ROT",
    "category": "Juguetes",
    "price": 21900,
    "description": "Bolas flexibles de tamaño gradual. PVC; largo 30 cm; diámetro 0,5 a 2,5 cm.",
    "image": "assets/products/product-051.jpg"
  },
  {
    "id": 52,
    "name": "Consolador amigo íntimo",
    "category": "Juguetes",
    "price": 49900,
    "description": "Masturbador de textura suave con ventosa en la base.",
    "image": "assets/products/product-052.jpg"
  },
  {
    "id": 53,
    "name": "Dildo realista con control David",
    "category": "Juguetes",
    "price": 79900,
    "description": "Dildo de silicona TPE + ABS.",
    "image": "assets/products/product-053.jpg"
  },
  {
    "id": 54,
    "name": "Dados x 3 unidades",
    "category": "Juguetes",
    "price": 12000,
    "description": "Juego de dados eróticos para pareja o grupo.",
    "image": "assets/products/product-054.jpg"
  },
  {
    "id": 55,
    "name": "Funda vibradora",
    "category": "Juguetes",
    "price": 69900,
    "description": "Funda vibradora en silicona médica con textura.",
    "image": "assets/products/product-055.jpg"
  },
  {
    "id": 56,
    "name": "Bomba penis men",
    "category": "Juguetes",
    "price": 71900,
    "description": "Bomba de succión con mecanismo de vacío controlado.",
    "image": "assets/products/product-056.jpg"
  },
  {
    "id": 57,
    "name": "Vibrador Ralph",
    "category": "Juguetes",
    "price": 64900,
    "description": "Vibrador realista con cuerpo venoso y perilla para regular velocidad.",
    "image": "assets/products/product-057.jpg"
  },
  {
    "id": 58,
    "name": "Masajeador Sarah",
    "category": "Juguetes",
    "price": 69900,
    "description": "Cabeza móvil, 10 velocidades y cabeza flexible; silicona médica.",
    "image": "assets/products/product-058.jpg"
  },
  {
    "id": 59,
    "name": "La ruleta",
    "category": "Juguetes",
    "price": 22000,
    "description": "Juego de ruleta: 3 juegos en 1.",
    "image": "assets/products/product-059.jpg"
  },
  {
    "id": 60,
    "name": "Jenga picante",
    "category": "Juguetes",
    "price": 59900,
    "description": "Torre de 54 fichas con retos y preguntas.",
    "image": "assets/products/product-060.jpg"
  },
  {
    "id": 61,
    "name": "Acostumbrador anal fino",
    "category": "Juguetes",
    "price": 19900,
    "description": "Plug anal cónico para principiantes, cuello estrecho y base acampanada.",
    "image": "assets/products/product-061.jpg"
  },
  {
    "id": 62,
    "name": "Funda Bethany",
    "category": "Juguetes",
    "price": 29900,
    "description": "Funda de silicona con nódulos. Largo 14 cm.",
    "image": "assets/products/product-062.jpg"
  },
  {
    "id": 63,
    "name": "Dados lanza y toma",
    "category": "Juguetes",
    "price": 15000,
    "description": "Dados para tomar licor y hacer retos con amigos.",
    "image": "assets/products/product-063.jpg"
  },
  {
    "id": 64,
    "name": "Dados lanza y toma picante",
    "category": "Juguetes",
    "price": 15000,
    "description": "Dados con pruebas y retos picantes.",
    "image": "assets/products/product-064.jpg"
  },
  {
    "id": 65,
    "name": "Poker Kamasutra lesbiana",
    "category": "Juguetes",
    "price": 27900,
    "description": "Incluye 58 cartas para jugar con novia o amigas.",
    "image": "assets/products/product-065.jpg"
  },
  {
    "id": 66,
    "name": "Poker Kamasutra gay",
    "category": "Juguetes",
    "price": 27900,
    "description": "Incluye 58 cartas para jugar con novio o amigos.",
    "image": "assets/products/product-066.jpg"
  },
  {
    "id": 67,
    "name": "Poker Kamasutra",
    "category": "Juguetes",
    "price": 27900,
    "description": "Juego de cartas con posiciones Kamasutra. Incluye 54 cartas y 4 penitencias.",
    "image": "assets/products/product-067.jpg"
  },
  {
    "id": 68,
    "name": "Juego Conectados",
    "category": "Juguetes",
    "price": 34000,
    "description": "60 cartas en 3 mazos: Conectemos, Íntimo y Retos.",
    "image": "assets/products/product-068.jpg"
  },
  {
    "id": 69,
    "name": "Parqués erótico",
    "category": "Juguetes",
    "price": 34900,
    "description": "Juego de preguntas calientes y penitencias para jugar entre amigos.",
    "image": "assets/products/product-069.jpg"
  },
  {
    "id": 70,
    "name": "Consolador mini small",
    "category": "Juguetes",
    "price": 20000,
    "description": "Silicona. Largo 14 cm, insertable 11,5 cm, diámetro 2,6 cm.",
    "image": "assets/products/product-070.jpg"
  },
  {
    "id": 71,
    "name": "Vibrador silicona",
    "category": "Juguetes",
    "price": 49900,
    "description": "Vibración graduable para ajustar la intensidad.",
    "image": "assets/products/product-071.jpg"
  },
  {
    "id": 72,
    "name": "Dildo doble punta",
    "category": "Juguetes",
    "price": 34000,
    "description": "Silicona TPE suave. Largo 23,5 cm; diámetros 4,4 y 4,2 cm.",
    "image": "assets/products/product-072.jpg"
  },
  {
    "id": 73,
    "name": "Retardante Rhino spray",
    "category": "Cosméticos",
    "price": 20900,
    "description": "Retardante Rhino Dorado en spray.",
    "image": "assets/products/product-073.jpg"
  },
  {
    "id": 74,
    "name": "Retardante cremoso",
    "category": "Cosméticos",
    "price": 11900,
    "description": "Lubricante retardante Sweet Love.",
    "image": "assets/products/product-074.jpg"
  },
  {
    "id": 75,
    "name": "Multiorgasmos 30 ml",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Presentación de 30 ml.",
    "image": "assets/products/product-075.jpg"
  },
  {
    "id": 76,
    "name": "Multiorgasmos 10 ml",
    "category": "Cosméticos",
    "price": 25000,
    "description": "Presentación de 10 ml.",
    "image": "assets/products/product-076.jpg"
  },
  {
    "id": 77,
    "name": "Frío-calor 30 ml",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Producto frío-calor, presentación 30 ml.",
    "image": "assets/products/product-077.jpg"
  },
  {
    "id": 78,
    "name": "Lub íntimo Euforia fuerte 30 ml",
    "category": "Cosméticos",
    "price": 38900,
    "description": "Lubricante íntimo Euforia fuerte, 30 ml.",
    "image": "assets/products/product-078.jpg"
  },
  {
    "id": 79,
    "name": "Lub íntimo estrechante 30 ml",
    "category": "Cosméticos",
    "price": 38900,
    "description": "Lubricante íntimo estrechante, 30 ml.",
    "image": "assets/products/product-079.jpg"
  },
  {
    "id": 80,
    "name": "Lub efecto vibrante 15 ml",
    "category": "Cosméticos",
    "price": 39900,
    "description": "Lubricante efecto vibrante, 15 ml.",
    "image": "assets/products/product-080.jpg"
  },
  {
    "id": 81,
    "name": "Crema voluminizante 30 ml",
    "category": "Cosméticos",
    "price": 58900,
    "description": "Crema voluminizante, 30 ml.",
    "image": "assets/products/product-081.jpg"
  },
  {
    "id": 82,
    "name": "Lub neutro Blix 30 ml",
    "category": "Cosméticos",
    "price": 39900,
    "description": "Lubricante neutro Blix, 30 ml.",
    "image": "assets/products/product-082.jpg"
  },
  {
    "id": 83,
    "name": "Aceite masajes sensual 60 ml",
    "category": "Cosméticos",
    "price": 28900,
    "description": "Aceite para masajes sensual, 60 ml.",
    "image": "assets/products/product-083.jpg"
  },
  {
    "id": 84,
    "name": "Aceite Euforia 30 ml",
    "category": "Cosméticos",
    "price": 17900,
    "description": "Aceite Euforia, 30 ml.",
    "image": "assets/products/product-084.jpg"
  },
  {
    "id": 85,
    "name": "Lub chicle 30 ml Elixir",
    "category": "Cosméticos",
    "price": 24900,
    "description": "Lubricante sabor chicle Elixir, 30 ml.",
    "image": "assets/products/product-085.jpg"
  },
  {
    "id": 86,
    "name": "Desensibilizante anal 30 ml",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Desensibilizante anal, 30 ml.",
    "image": "assets/products/product-086.jpg"
  },
  {
    "id": 87,
    "name": "Lub íntimo caramelo 30 ml",
    "category": "Cosméticos",
    "price": 28900,
    "description": "Lubricante íntimo caramelo, 30 ml.",
    "image": "assets/products/product-087.jpg"
  },
  {
    "id": 88,
    "name": "Desensibilizante anal 10 ml",
    "category": "Cosméticos",
    "price": 24900,
    "description": "Desensibilizante anal, 10 ml.",
    "image": "assets/products/product-088.jpg"
  },
  {
    "id": 89,
    "name": "Brillo labial cereza 20 ml",
    "category": "Cosméticos",
    "price": 26900,
    "description": "Brillo labial cereza, 20 ml.",
    "image": "assets/products/product-089.jpg"
  },
  {
    "id": 90,
    "name": "Brillo labial con feromonas 10 ml",
    "category": "Cosméticos",
    "price": 14900,
    "description": "Brillo labial con feromonas, 10 ml.",
    "image": "assets/products/product-090.jpg"
  },
  {
    "id": 91,
    "name": "Vela para masajes corporal",
    "category": "Cosméticos",
    "price": 39900,
    "description": "Vela para masajes corporal.",
    "image": "assets/products/product-091.jpg"
  },
  {
    "id": 92,
    "name": "Vela masajes Pheromonas",
    "category": "Cosméticos",
    "price": 29900,
    "description": "Vela para masajes Pheromonas.",
    "image": "assets/products/product-092.jpg"
  },
  {
    "id": 93,
    "name": "Feromonas Men 10 ml",
    "category": "Cosméticos",
    "price": 39900,
    "description": "Feromonas Men, 10 ml.",
    "image": "assets/products/product-093.jpg"
  },
  {
    "id": 94,
    "name": "Lub íntimo neutro 30 ml",
    "category": "Cosméticos",
    "price": 24900,
    "description": "Lubricante íntimo neutro, 30 ml.",
    "image": "assets/products/product-094.jpg"
  },
  {
    "id": 95,
    "name": "Lub íntimo caliente 30 ml",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Lubricante íntimo caliente, 30 ml.",
    "image": "assets/products/product-095.jpg"
  },
  {
    "id": 96,
    "name": "Estrechant 10 ml SEN",
    "category": "Cosméticos",
    "price": 24900,
    "description": "Producto estrechante, 10 ml.",
    "image": "assets/products/product-096.jpg"
  },
  {
    "id": 97,
    "name": "Splash con pheromonas 120 ml",
    "category": "Cosméticos",
    "price": 31900,
    "description": "Splash con feromonas, 120 ml.",
    "image": "assets/products/product-097.jpg"
  },
  {
    "id": 98,
    "name": "Lub multiorgasmos Pocket Pleasure 4 ml",
    "category": "Cosméticos",
    "price": 14900,
    "description": "Lubricante multiorgasmos base Pocket Pleasure, 4 ml.",
    "image": "assets/products/product-098.jpg"
  },
  {
    "id": 99,
    "name": "Garganta profunda desensibilizante",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Desensibilizante garganta profunda.",
    "image": "assets/products/product-099.jpg"
  },
  {
    "id": 100,
    "name": "Blow Pop Elixir dulces explosivos",
    "category": "Cosméticos",
    "price": 3900,
    "description": "Blow Pop Elixir, dulces explosivos.",
    "image": "assets/products/product-100.jpg"
  },
  {
    "id": 101,
    "name": "Splash con feromonas 120 ml",
    "category": "Cosméticos",
    "price": 31900,
    "description": "Splash con feromonas, 120 ml.",
    "image": "assets/products/product-101.jpg"
  },
  {
    "id": 102,
    "name": "Lubricante íntimo Milk 250 ml",
    "category": "Cosméticos",
    "price": 49900,
    "description": "Lubricante íntimo Milk, 250 ml.",
    "image": "assets/products/product-102.jpg"
  },
  {
    "id": 103,
    "name": "Lub menta fría 30 ml",
    "category": "Cosméticos",
    "price": 26900,
    "description": "Lubricante menta fría, 30 ml.",
    "image": "assets/products/product-103.jpg"
  },
  {
    "id": 104,
    "name": "Hidratante vaginal 30 ml",
    "category": "Cosméticos",
    "price": 29900,
    "description": "Hidratante vaginal, 30 ml.",
    "image": "assets/products/product-104.jpg"
  },
  {
    "id": 105,
    "name": "Lub anal electrizante 30 ml",
    "category": "Cosméticos",
    "price": 36900,
    "description": "Lubricante anal electrizante, 30 ml.",
    "image": "assets/products/product-105.jpg"
  },
  {
    "id": 106,
    "name": "Power Sex Women",
    "category": "Cosméticos",
    "price": 11900,
    "description": "Power Sex Women.",
    "image": "assets/products/product-106.jpg"
  },
  {
    "id": 107,
    "name": "Power Sex Men",
    "category": "Cosméticos",
    "price": 13900,
    "description": "Power Sex Men.",
    "image": "assets/products/product-107.jpg"
  },
  {
    "id": 108,
    "name": "Bull Energy x20 ml",
    "category": "Cosméticos",
    "price": 11900,
    "description": "Bull Energy, 20 ml.",
    "image": "assets/products/product-108.jpg"
  },
  {
    "id": 109,
    "name": "Bull Energy potenciador masculino 100 ml",
    "category": "Cosméticos",
    "price": 19900,
    "description": "Potenciador masculino Bull Energy, 100 ml.",
    "image": "assets/products/product-109.jpg"
  },
  {
    "id": 110,
    "name": "Potenciador Bull Energy 500 ml",
    "category": "Cosméticos",
    "price": 49900,
    "description": "Potenciador Bull Energy, 500 ml.",
    "image": "assets/products/product-110.jpg"
  },
  {
    "id": 111,
    "name": "Power Sex líquido 500 ml",
    "category": "Cosméticos",
    "price": 49900,
    "description": "Power Sex líquido, 500 ml.",
    "image": "assets/products/product-111.jpg"
  },
  {
    "id": 112,
    "name": "Limpiadores de juguetes",
    "category": "Cosméticos",
    "price": 19900,
    "description": "Limpiadores de juguetes. Precio desde $19.900.",
    "image": "assets/products/product-112.jpg"
  },
  {
    "id": 113,
    "name": "Copa menstrual UVA",
    "category": "Cosméticos",
    "price": 74900,
    "description": "Copa menstrual UVA.",
    "image": "assets/products/product-113.jpg"
  },
  {
    "id": 114,
    "name": "Body elegante seductor M",
    "category": "Lencería",
    "price": 29900,
    "description": "Body elegante seductor, talla M.",
    "image": "assets/products/product-114.jpg"
  },
  {
    "id": 115,
    "name": "Enfermera sexy con gorro U",
    "category": "Lencería",
    "price": 34900,
    "description": "Disfraz de enfermera, talla única.",
    "image": "assets/products/product-115.jpg"
  },
  {
    "id": 116,
    "name": "Disfraz empleada traviesa M-L",
    "category": "Lencería",
    "price": 49900,
    "description": "Disfraz empleada traviesa, tallas M-L. Precio desde.",
    "image": "assets/products/product-116.jpg"
  },
  {
    "id": 117,
    "name": "Body con patimedias U",
    "category": "Lencería",
    "price": 24900,
    "description": "Body con patimedias, talla única.",
    "image": "assets/products/product-117.jpg"
  },
  
  
];

let activeCategory = "Todos";
let cart = [];

const money = value => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
const grid = document.getElementById("productGrid");

function renderProducts() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const visible = PRODUCTS.filter(product => {
    const categoryMatch = activeCategory === "Todos" || product.category === activeCategory;
    const queryMatch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
  grid.innerHTML = visible.length ? visible.map(product => `
    <article class="product-card">
      <div class="product-image" data-preview="${product.id}" role="button" tabindex="0" aria-label="Ver detalles de ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-category">${product.category}</span>
        <span class="preview-hint">Ver producto ↗</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="preview-button" data-preview="${product.id}">Vista previa</button>
          <button class="add-button" data-add="${product.id}">Agregar +</button>
        </div>
      </div>
    </article>`).join("") : `<p class="empty-cart">No encontramos productos con esa búsqueda.</p>`;
}
const productModalBackdrop = document.getElementById("productModalBackdrop");
let previewProductId = null;
function openProductPreview(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;
  previewProductId = id;
  document.getElementById("productModalImage").src = product.image;
  document.getElementById("productModalImage").alt = product.name;
  document.getElementById("productModalCategory").textContent = product.category;
  document.getElementById("productModalTitle").textContent = product.name;
  document.getElementById("productModalDescription").textContent = product.description;
  document.getElementById("productModalPrice").textContent = money(product.price);
  productModalBackdrop.classList.add("show");
  productModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeProductPreview() {
  productModalBackdrop.classList.remove("show");
  productModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  previewProductId = null;
}


function addToCart(id) {
  const product = PRODUCTS.find(item => item.id === id);
  const found = cart.find(item => item.id === id);
  if (found) found.quantity++;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
}
function removeFromCart(id) { cart = cart.filter(item => item.id !== id); renderCart(); }
function renderCart() {
  document.getElementById("cartCount").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartTotal").textContent = money(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map(item => `
    <div class="cart-row"><div><strong>${item.name}</strong><small>${item.quantity} × ${money(item.price)}</small></div><button data-remove="${item.id}">Quitar</button></div>`).join("") : `<div class="empty-cart">Tu bolsa está vacía.<br>Explora el catálogo y agrega tus favoritos.</div>`;
}
function toggleCart(open) {
  document.getElementById("cartPanel").classList.toggle("open", open);
  document.getElementById("cartBackdrop").classList.toggle("show", open);
  document.getElementById("cartPanel").setAttribute("aria-hidden", String(!open));
}
function checkout() {
  if (!cart.length) { alert("Agrega al menos un producto a tu bolsa."); return; }
  const lines = cart.map(item => `• ${item.name} x${item.quantity} — ${money(item.price * item.quantity)}`);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = `Hola Secretoys, quiero realizar este pedido:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(total)}\n\n¿Me confirman disponibilidad y entrega?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

document.getElementById("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]"); if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
  renderProducts();
});
document.getElementById("searchInput").addEventListener("input", renderProducts);
grid.addEventListener("click", event => {
  const preview = event.target.closest("[data-preview]");
  if (preview) { openProductPreview(Number(preview.dataset.preview)); return; }
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});
grid.addEventListener("keydown", event => {
  const preview = event.target.closest("[data-preview]");
  if (preview && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault(); openProductPreview(Number(preview.dataset.preview));
  }
});
document.getElementById("closeProductModal").addEventListener("click", closeProductPreview);
productModalBackdrop.addEventListener("click", event => { if (event.target === productModalBackdrop) closeProductPreview(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && productModalBackdrop.classList.contains("show")) closeProductPreview(); });
document.getElementById("productModalAdd").addEventListener("click", () => {
  if (previewProductId !== null) addToCart(previewProductId);
  closeProductPreview();
  toggleCart(true);
});
document.getElementById("cartItems").addEventListener("click", event => { const button = event.target.closest("[data-remove]"); if (button) removeFromCart(Number(button.dataset.remove)); });
document.getElementById("openCart").addEventListener("click", () => toggleCart(true));
document.getElementById("closeCart").addEventListener("click", () => toggleCart(false));
document.getElementById("cartBackdrop").addEventListener("click", () => toggleCart(false));
document.getElementById("checkoutButton").addEventListener("click", checkout);
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open")));
document.getElementById("enterSite").addEventListener("click", () => document.getElementById("ageOverlay").classList.add("hidden"));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts(); renderCart();











// CONFIGURACIÓN DEL BOTÓN DE WHATSAPP
document.addEventListener("DOMContentLoaded", function () {

    const whatsappButton = document.getElementById("whatsappButton");

    if (whatsappButton) {
        const telefono = "573228156224";
        const mensaje = "Hola, estoy interesado/a en los productos de Secretoys. ¿Me pueden brindar información?";

        const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        whatsappButton.href = enlace;
    }

});
