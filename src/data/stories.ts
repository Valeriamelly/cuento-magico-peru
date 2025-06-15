
export interface Story {
  id: string;
  title: string;
  author: string;
  region: string;
  summary: string;
  moralLesson: string;
  pages: StoryPage[];
  coverImage: string;
  ageRange: string;
  culturalContext: string;
}

export interface StoryPage {
  id: number;
  text: string;
  image: string;
  imageAlt: string;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "El Cóndor y la Pastora",
    author: "Tradición Oral Andina",
    region: "Sierra Peruana",
    summary: "Una hermosa pastora es llevada por un cóndor a las montañas más altas de los Andes.",
    moralLesson: "La importancia de la libertad y el respeto hacia los demás.",
    ageRange: "6-10 años",
    culturalContext: "Este cuento refleja la conexión profunda entre los pueblos andinos y la naturaleza, especialmente con el cóndor, ave sagrada de los Andes.",
    coverImage: "🦅",
    pages: [
      {
        id: 1,
        text: "En lo alto de los Andes vivía una pastora muy hermosa que cuidaba sus llamas con gran amor. Cada día subía a las montañas más altas para encontrar los mejores pastos.",
        image: "👩‍🌾",
        imageAlt: "Pastora cuidando llamas en las montañas"
      },
      {
        id: 2,
        text: "Un día, mientras cantaba una melodía ancestral, un gran cóndor la escuchó desde las alturas. Quedó tan enamorado de su voz que decidió bajar a conocerla.",
        image: "🦅",
        imageAlt: "Cóndor volando y escuchando el canto"
      },
      {
        id: 3,
        text: "El cóndor se transformó en un apuesto joven y conquistó el corazón de la pastora. Pero después de casarse, reveló su verdadera forma y la llevó a vivir en su nido en las montañas más altas.",
        image: "🏔️",
        imageAlt: "Nido en las montañas altas"
      },
      {
        id: 4,
        text: "La pastora extrañaba su hogar y su familia. Con la ayuda de un colibrí, logró escapar y regresar a su pueblo, donde vivió libre y feliz para siempre.",
        image: "🐦",
        imageAlt: "Colibrí ayudando en el escape"
      }
    ]
  },
  {
    id: "2",
    title: "Paco Yunque",
    author: "César Vallejo",
    region: "La Libertad",
    summary: "La historia de un niño humilde que enfrenta las diferencias sociales en su primer día de escuela.",
    moralLesson: "La importancia de la igualdad y la justicia social.",
    ageRange: "8-12 años",
    culturalContext: "César Vallejo retrata las desigualdades sociales del Perú rural a través de los ojos de un niño.",
    coverImage: "👦",
    pages: [
      {
        id: 1,
        text: "Paco Yunque llegó a la escuela por primera vez, tímido y asustado. Su madre lo había dejado en la puerta con mucho cariño.",
        image: "🏫",
        imageAlt: "Niño llegando a la escuela"
      },
      {
        id: 2,
        text: "En el salón conoció a Humberto Grieve, el hijo del patrón de su madre, quien lo maltrataba y humillaba frente a todos.",
        image: "😢",
        imageAlt: "Niño triste siendo humillado"
      },
      {
        id: 3,
        text: "Paco encontró un amigo en Paco Fariña, quien lo defendía y le mostraba solidaridad en momentos difíciles.",
        image: "👬",
        imageAlt: "Dos niños siendo amigos"
      },
      {
        id: 4,
        text: "A pesar de las injusticias, Paco Yunque aprendió sobre la amistad verdadera y la importancia de defender lo que es justo.",
        image: "⚖️",
        imageAlt: "Símbolo de justicia"
      }
    ]
  },
  {
    id: "3",
    title: "El Origen del Lago Titicaca",
    author: "Tradición Oral Aymara",
    region: "Altiplano",
    summary: "La leyenda sobre cómo se formó el lago sagrado de los Andes y el nacimiento del sol.",
    moralLesson: "El poder de la perseverancia y la importancia de la armonía con la naturaleza.",
    ageRange: "7-12 años",
    culturalContext: "Este relato explica el origen mítico del lago Titicaca, considerado sagrado por las culturas andinas como lugar de nacimiento del sol.",
    coverImage: "🌊",
    pages: [
      {
        id: 1,
        text: "Hace mucho tiempo, cuando el mundo estaba en tinieblas, los dioses decidieron crear el sol para iluminar la Tierra. Buscaron el lugar perfecto entre las montañas más altas.",
        image: "🌑",
        imageAlt: "Mundo en tinieblas"
      },
      {
        id: 2,
        text: "Viracocha, el dios creador, hizo brotar de la tierra un gran lago de aguas cristalinas. En el centro del lago, creó una isla sagrada donde nacería el sol.",
        image: "🌊",
        imageAlt: "Lago cristalino con isla"
      },
      {
        id: 3,
        text: "De las profundidades del lago emergieron Manco Cápac y Mama Ocllo, los primeros incas, enviados por el sol para enseñar a los pueblos el arte de la civilización.",
        image: "👑",
        imageAlt: "Corona inca representando a los primeros gobernantes"
      },
      {
        id: 4,
        text: "Desde entonces, el lago Titicaca es considerado sagrado, y cada amanecer el sol emerge de sus aguas para iluminar el mundo con su luz dorada.",
        image: "☀️",
        imageAlt: "Sol dorado emergiendo"
      }
    ]
  },
  {
    id: "4",
    title: "La Yakana",
    author: "Tradición Oral Quechua",
    region: "Cusco",
    summary: "La leyenda de la llama celestial que protege a los rebaños desde las estrellas.",
    moralLesson: "La importancia de cuidar y proteger a los animales y la naturaleza.",
    ageRange: "5-9 años",
    culturalContext: "La Yakana representa la constelación de la llama en la astronomía andina, mostrando la conexión entre el cielo y la tierra.",
    coverImage: "🦙",
    pages: [
      {
        id: 1,
        text: "En las noches estrelladas de los Andes, se puede ver a la Yakana, una llama hecha de estrellas que cuida a todos los animales de la tierra.",
        image: "⭐",
        imageAlt: "Estrellas brillantes en el cielo"
      },
      {
        id: 2,
        text: "Hace mucho tiempo, la Yakana era una llama muy especial que vivía en la tierra. Era tan bondadosa que todos los animales venían a ella cuando necesitaban ayuda.",
        image: "🦙",
        imageAlt: "Llama bondadosa"
      },
      {
        id: 3,
        text: "Los dioses, al ver su gran corazón, decidieron llevarla al cielo para que pudiera proteger a todos los animales del mundo desde las alturas.",
        image: "✨",
        imageAlt: "Transformación celestial"
      },
      {
        id: 4,
        text: "Ahora, cada noche, la Yakana baja invisible a la tierra para beber agua y asegurarse de que todos los animales estén seguros y bien cuidados.",
        image: "🌙",
        imageAlt: "Luna nocturna protectora"
      }
    ]
  },
  {
    id: "5",
    title: "El Tunche de la Selva",
    author: "Tradición Oral Amazónica",
    region: "Selva Peruana",
    summary: "Un espíritu de la selva que protege la naturaleza de quienes la dañan.",
    moralLesson: "La importancia de respetar la naturaleza y vivir en armonía con ella.",
    ageRange: "8-12 años",
    culturalContext: "El Tunche es una figura mítica de la Amazonía peruana que representa la protección de la naturaleza y el respeto por el ecosistema.",
    coverImage: "🌿",
    pages: [
      {
        id: 1,
        text: "En la profunda selva amazónica, donde los árboles son tan altos que tocan las nubes, vive un espíritu guardián llamado Tunche.",
        image: "🌳",
        imageAlt: "Árboles gigantes de la selva"
      },
      {
        id: 2,
        text: "El Tunche silba melodías misteriosas que solo pueden escuchar aquellos que aman verdaderamente la naturaleza. Su silbido suena como el viento entre las hojas.",
        image: "🎵",
        imageAlt: "Melodía del viento"
      },
      {
        id: 3,
        text: "Cuando alguien daña la selva o lastima a sus animales, el Tunche se aparece para enseñarles a respetar la naturaleza. Su presencia se siente en el aire húmedo y los sonidos nocturnos.",
        image: "👻",
        imageAlt: "Espíritu protector"
      },
      {
        id: 4,
        text: "Los pueblos amazónicos enseñan a sus niños a escuchar el silbido del Tunche como una bendición, recordándoles que la selva es su hogar sagrado que deben proteger.",
        image: "🏡",
        imageAlt: "Hogar en armonía con la naturaleza"
      }
    ]
  },
  {
    id: "6",
    title: "Warma Kuyay",
    author: "José María Arguedas",
    region: "Apurímac",
    summary: "Un relato sobre el primer amor adolescente en el mundo andino, lleno de ternura y nostalgia.",
    moralLesson: "La belleza de los sentimientos puros y la importancia de la memoria.",
    ageRange: "10-14 años",
    culturalContext: "Arguedas retrata la vida andina con profunda sensibilidad, mostrando el mundo quechua desde adentro.",
    coverImage: "💝",
    pages: [
      {
        id: 1,
        text: "En un pueblo de los Andes, un joven recuerda su primer amor de la infancia, cuando conoció a Justina en la hacienda.",
        image: "🏘️",
        imageAlt: "Pueblo andino"
      },
      {
        id: 2,
        text: "Justina era una niña indígena de ojos brillantes que trabajaba en la cocina. Su risa llenaba de alegría los patios de la hacienda.",
        image: "😊",
        imageAlt: "Niña alegre y sonriente"
      },
      {
        id: 3,
        text: "Los días de la infancia pasaron como un sueño dorado, llenos de juegos y promesas que solo los niños pueden hacer con total sinceridad.",
        image: "🎮",
        imageAlt: "Niños jugando"
      },
      {
        id: 4,
        text: "Años después, el recuerdo de ese amor puro sigue vivo en su corazón, como una flor que nunca se marchita en la memoria.",
        image: "🌸",
        imageAlt: "Flor eterna del recuerdo"
      }
    ]
  },
  {
    id: "7",
    title: "Los Gallinazos Sin Plumas",
    author: "Julio Ramón Ribeyro",
    region: "Lima",
    summary: "Dos niños pobres de Lima luchan por sobrevivir recolectando desperdicios para alimentar al cerdo de su abuelo.",
    moralLesson: "La dura realidad de la pobreza y la importancia de la solidaridad familiar.",
    ageRange: "12-16 años",
    culturalContext: "Ribeyro retrata la marginalidad urbana limeña con realismo y profunda humanidad.",
    coverImage: "🏙️",
    pages: [
      {
        id: 1,
        text: "Efraín y Enrique vivían con su abuelo en una pequeña casa en los cerros de Lima, donde cada día era una lucha por conseguir comida.",
        image: "🏠",
        imageAlt: "Casa humilde en los cerros"
      },
      {
        id: 2,
        text: "Todas las mañanas salían temprano a buscar desperdicios en los basurales de la ciudad para alimentar a Pascual, el cerdo del abuelo.",
        image: "🗑️",
        imageAlt: "Recolectando desperdicios"
      },
      {
        id: 3,
        text: "Un día Efraín se lastimó el pie y no pudo trabajar, pero el abuelo no mostró compasión y siguió exigiendo que salieran a buscar comida.",
        image: "🦶",
        imageAlt: "Pie lastimado"
      },
      {
        id: 4,
        text: "Los hermanos aprendieron que en la adversidad, solo tenían el uno al otro, y que su unión era su única fortaleza en un mundo difícil.",
        image: "👫",
        imageAlt: "Hermanos unidos"
      }
    ]
  },
  {
    id: "8",
    title: "El Caballero Carmelo",
    author: "Abraham Valdelomar",
    region: "Ica",
    summary: "La historia de un gallo de pelea noble y valiente que representa el honor y la dignidad.",
    moralLesson: "El valor del honor, la dignidad y la importancia de dar lo mejor de uno mismo.",
    ageRange: "10-14 años",
    culturalContext: "Valdelomar retrata la vida de provincia peruana con nostalgia y lirismo, mostrando valores tradicionales.",
    coverImage: "🐓",
    pages: [
      {
        id: 1,
        text: "En la casa familiar llegó un gallo hermoso y altivo llamado Carmelo, que se convirtió en el orgullo de toda la familia.",
        image: "🐓",
        imageAlt: "Gallo altivo y hermoso"
      },
      {
        id: 2,
        text: "Carmelo era admirado por su elegancia y valentía. Todos en el pueblo conocían su fama como gallo de pelea invencible.",
        image: "🏆",
        imageAlt: "Trofeo de campeón"
      },
      {
        id: 3,
        text: "Llegó el día de la gran pelea contra el Ajiseco, un gallo temible. Carmelo luchó con honor hasta el final, mostrando su noble corazón.",
        image: "⚔️",
        imageAlt: "Batalla honorable"
      },
      {
        id: 4,
        text: "Aunque Carmelo no sobrevivió a la pelea, su memoria quedó grabada para siempre como símbolo de valentía y nobleza.",
        image: "🕊️",
        imageAlt: "Paloma de la memoria eterna"
      }
    ]
  },
  {
    id: "9",
    title: "Los Heraldos Negros",
    author: "César Vallejo",
    region: "La Libertad",
    summary: "Un poema que habla del dolor humano y las experiencias difíciles de la vida.",
    moralLesson: "La importancia de enfrentar las dificultades con fortaleza y comprensión.",
    ageRange: "14-18 años",
    culturalContext: "Vallejo expresa el dolor universal del ser humano con una sensibilidad profundamente peruana.",
    coverImage: "🖤",
    pages: [
      {
        id: 1,
        text: "Hay golpes en la vida, tan fuertes... ¡Yo no sé! Golpes como del odio de Dios; como si ante ellos, la resaca de todo lo sufrido se empozara en el alma...",
        image: "💢",
        imageAlt: "Golpes fuertes de la vida"
      },
      {
        id: 2,
        text: "Yo no sé... Pocos; pero son... Abren zanjas oscuras en el rostro más fiero y en el lomo más fuerte.",
        image: "😔",
        imageAlt: "Rostro marcado por el sufrimiento"
      },
      {
        id: 3,
        text: "Serán tal vez los potros de bárbaros atilas; o los heraldos negros que nos manda la Muerte.",
        image: "🐎",
        imageAlt: "Caballos del destino"
      },
      {
        id: 4,
        text: "Son las caídas hondas de los Cristos del alma, de alguna fe adorable que el Destino blasfema. Esos golpes sangrientos son las crepitaciones de algún pan que en la puerta del horno se nos quema.",
        image: "🍞",
        imageAlt: "Pan quemándose en el horno"
      }
    ]
  },
  {
    id: "10",
    title: "La Casa de Cartón",
    author: "Martín Adán",
    region: "Lima",
    summary: "Un relato vanguardista sobre la adolescencia y los veranos en Barranco.",
    moralLesson: "La importancia de valorar los momentos de juventud y la belleza de lo cotidiano.",
    ageRange: "14-18 años",
    culturalContext: "Martín Adán retrata el Barranco bohemio de los años 20 con un estilo poético innovador.",
    coverImage: "🏠",
    pages: [
      {
        id: 1,
        text: "En Barranco, durante un verano de juventud, los días transcurrían lentos y dulces como miel derramada sobre la vida.",
        image: "☀️",
        imageAlt: "Verano dorado"
      },
      {
        id: 2,
        text: "Las calles empedradas guardaban secretos de amor adolescente y promesas que solo el corazón joven puede hacer.",
        image: "💕",
        imageAlt: "Amor adolescente"
      },
      {
        id: 3,
        text: "Los atardeceres desde el malecón eran poemas sin palabras, donde el mar y el cielo se fundían en una sinfonía de colores.",
        image: "🌅",
        imageAlt: "Atardecer poético"
      },
      {
        id: 4,
        text: "Esos veranos quedaron grabados como fotografías del alma, momentos únicos e irrepetibles de la juventud eterna.",
        image: "📸",
        imageAlt: "Fotografía del recuerdo"
      }
    ]
  },
  {
    id: "11",
    title: "El Vuelo de los Cóndores",
    author: "Abraham Valdelomar",
    region: "Ica",
    summary: "Relato sobre la majestuosidad de los cóndores andinos y su significado espiritual.",
    moralLesson: "La importancia de la libertad y el respeto por la naturaleza.",
    ageRange: "8-12 años",
    culturalContext: "Los cóndores son aves sagradas en la cultura andina, símbolos de poder y libertad.",
    coverImage: "🦅",
    pages: [
      {
        id: 1,
        text: "En las alturas de los Andes, donde el aire es puro y el silencio es sagrado, vuelan los majestuosos cóndores.",
        image: "🦅",
        imageAlt: "Cóndor majestuoso volando"
      },
      {
        id: 2,
        text: "Sus alas enormes abrazan el viento y llevan mensajes entre las montañas, conectando el cielo con la tierra.",
        image: "🌬️",
        imageAlt: "Viento entre las montañas"
      },
      {
        id: 3,
        text: "Los antiguos peruanos veían en los cóndores a los mensajeros de los dioses, capaces de llevar las oraciones hasta el cielo.",
        image: "🙏",
        imageAlt: "Oración hacia el cielo"
      },
      {
        id: 4,
        text: "Hoy, como ayer, los cóndores siguen siendo símbolos de libertad, recordándonos que algunos seres nacieron para volar sin límites.",
        image: "🕊️",
        imageAlt: "Libertad sin límites"
      }
    ]
  },
  {
    id: "12",
    title: "La Achirana del Inca",
    author: "Tradición Oral Inca",
    region: "Ica",
    summary: "La historia de amor entre un príncipe inca y una hermosa doncella, y el canal que creó para conquistarla.",
    moralLesson: "El poder del amor verdadero y la perseverancia para lograr lo que se desea.",
    ageRange: "8-12 años",
    culturalContext: "Esta leyenda explica el origen del canal de irrigación de Achirana en Ica, mostrando la ingeniería inca.",
    coverImage: "💧",
    pages: [
      {
        id: 1,
        text: "En el valle de Ica vivía una hermosa doncella llamada Achirana, cuya belleza era como el amanecer en las montañas.",
        image: "👸",
        imageAlt: "Hermosa doncella"
      },
      {
        id: 2,
        text: "Un príncipe inca se enamoró perdidamente de ella, pero Achirana le pidió que trajera agua a su árido valle como prueba de amor.",
        image: "🤴",
        imageAlt: "Príncipe enamorado"
      },
      {
        id: 3,
        text: "El príncipe ordenó construir un gran canal que trajera las aguas desde las montañas hasta el valle seco de Ica.",
        image: "🚧",
        imageAlt: "Construcción del canal"
      },
      {
        id: 4,
        text: "Cuando las aguas llegaron al valle, Achirana aceptó el amor del príncipe, y el canal llevó su nombre para siempre.",
        image: "💧",
        imageAlt: "Agua fluyendo por el canal"
      }
    ]
  }
];

// Extraer todos los autores únicos para facilitar la búsqueda
export const authors = [...new Set(stories.map(story => story.author))].sort();

export const regions = [...new Set(stories.map(story => story.region))].sort();
