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
    coverImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En lo alto de los Andes vivía una pastora muy hermosa que cuidaba sus llamas con gran amor. Cada día subía a las montañas más altas para encontrar los mejores pastos.",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Pastora andina joven con llamas blancas en paisaje montañoso colorido"
      },
      {
        id: 2,
        text: "Un día, mientras cantaba una melodía ancestral, un gran cóndor la escuchó desde las alturas. Quedó tan enamorado de su voz que decidió bajar a conocerla.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cóndor majestuoso volando sobre montañas andinas con cielo azul brillante"
      },
      {
        id: 3,
        text: "El cóndor se transformó en un apuesto joven y conquistó el corazón de la pastora. Pero después de casarse, reveló su verdadera forma y la llevó a vivir en su nido en las montañas más altas.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Picos nevados de los Andes con nubes blancas y cielo despejado"
      },
      {
        id: 4,
        text: "La pastora extrañaba su hogar y su familia. Con la ayuda de un colibrí, logró escapar y regresar a su pueblo, donde vivió libre y feliz para siempre.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Colibrí colorido volando cerca de flores andinas"
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
    coverImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "Paco Yunque llegó a la escuela por primera vez, tímido y asustado. Su madre lo había dejado en la puerta con mucho cariño.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niño peruano sonriente con uniforme escolar en entrada de escuela colorida"
      },
      {
        id: 2,
        text: "En el salón conoció a Humberto Grieve, el hijo del patrón de su madre, quien lo maltrataba y humillaba frente a todos.",
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Salón de clases tradicional con pupitres de madera y pizarra antigua"
      },
      {
        id: 3,
        text: "Paco encontró un amigo en Paco Fariña, quien lo defendía y le mostraba solidaridad en momentos difíciles.",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Dos niños abrazándose en señal de amistad y apoyo"
      },
      {
        id: 4,
        text: "A pesar de las injusticias, Paco Yunque aprendió sobre la amistad verdadera y la importancia de defender lo que es justo.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niños jugando felices en patio de recreo con cielo azul"
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
    coverImage: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "Hace mucho tiempo, cuando el mundo estaba en tinieblas, los dioses decidieron crear el sol para iluminar la Tierra. Buscaron el lugar perfecto entre las montañas más altas.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Amanecer dorado sobre lago Titicaca con montañas al fondo"
      },
      {
        id: 2,
        text: "Viracocha, el dios creador, hizo brotar de la tierra un gran lago de aguas cristalinas. En el centro del lago, creó una isla sagrada donde nacería el sol.",
        image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Lago Titicaca con aguas cristalinas azules y cielo despejado"
      },
      {
        id: 3,
        text: "De las profundidades del lago emergieron Manco Cápac y Mama Ocllo, los primeros incas, enviados por el sol para enseñar a los pueblos el arte de la civilización.",
        image: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Ruinas incas de piedra con vista al lago Titicaca"
      },
      {
        id: 4,
        text: "Desde entonces, el lago Titicaca es considerado sagrado, y cada amanecer el sol emerge de sus aguas para iluminar el mundo con su luz dorada.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Isla del Sol en lago Titicaca con sol brillante y reflejos dorados"
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
    coverImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En las noches estrelladas de los Andes, se puede ver a la Yakana, una llama hecha de estrellas que cuida a todos los animales de la tierra.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cielo nocturno estrellado sobre montañas andinas con Vía Láctea visible"
      },
      {
        id: 2,
        text: "Hace mucho tiempo, la Yakana era una llama muy especial que vivía en la tierra. Era tan bondadosa que todos los animales venían a ella cuando necesitaban ayuda.",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Llama blanca y esponjosa en paisaje andino verde y colorido"
      },
      {
        id: 3,
        text: "Los dioses, al ver su gran corazón, decidieron llevarla al cielo para que pudiera proteger a todos los animales del mundo desde las alturas.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Rebaño de llamas caminando por campo verde con cielo azul"
      },
      {
        id: 4,
        text: "Ahora, cada noche, la Yakana baja invisible a la tierra para beber agua y asegurarse de que todos los animales estén seguros y bien cuidados.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Animales diversos pastando en pradera andina al atardecer"
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
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En la profunda selva amazónica, donde los árboles son tan altos que tocan las nubes, vive un espíritu guardián llamado Tunche.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Selva amazónica exuberante con árboles gigantes y vegetación verde brillante"
      },
      {
        id: 2,
        text: "El Tunche silba melodías misteriosas que solo pueden escuchar aquellos que aman verdaderamente la naturaleza. Su silbido suena como el viento entre las hojas.",
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Río cristalino serpenteando por la selva tropical con rayos de sol"
      },
      {
        id: 3,
        text: "Cuando alguien daña la selva o lastima a sus animales, el Tunche se aparece para enseñarles a respetar la naturaleza. Su presencia se siente en el aire húmedo y los sonidos nocturnos.",
        image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Jaguar joven en la selva amazónica entre hojas verdes"
      },
      {
        id: 4,
        text: "Los pueblos amazónicos enseñan a sus niños a escuchar el silbido del Tunche como una bendición, recordándoles que la selva es su hogar sagrado que deben proteger.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Familia indígena amazónica en su comunidad rodeada de naturaleza"
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
    coverImage: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En un pueblo de los Andes, un joven recuerda su primer amor de la infancia, cuando conoció a Justina en la hacienda.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Pueblo andino tradicional con casas de adobe y montañas de fondo"
      },
      {
        id: 2,
        text: "Justina era una niña indígena de ojos brillantes que trabajaba en la cocina. Su risa llenaba de alegría los patios de la hacienda.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niña andina sonriente con vestimenta tradicional colorida"
      },
      {
        id: 3,
        text: "Los días de la infancia pasaron como un sueño dorado, llenos de juegos y promesas que solo los niños pueden hacer con total sinceridad.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niños jugando alegremente en campo andino con flores silvestres"
      },
      {
        id: 4,
        text: "Años después, el recuerdo de ese amor puro sigue vivo en su corazón, como una flor que nunca se marchita en la memoria.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Flores andinas coloridas floreciendo en campo dorado"
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
    coverImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "Efraín y Enrique vivían con su abuelo en una pequeña casa en los cerros de Lima, donde cada día era una lucha por conseguir comida.",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cerros de Lima con casas coloridas escalonadas en las laderas"
      },
      {
        id: 2,
        text: "Todas las mañanas salían temprano a buscar desperdicios en los basurales de la ciudad para alimentar a Pascual, el cerdo del abuelo.",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Dos hermanos caminando juntos por las calles de Lima al amanecer"
      },
      {
        id: 3,
        text: "Un día Efraín se lastimó el pie y no pudo trabajar, pero el abuelo no mostró compasión y siguió exigiendo que salieran a buscar comida.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niño sentado con expresión triste pero esperanzadora"
      },
      {
        id: 4,
        text: "Los hermanos aprendieron que en la adversidad, solo tenían el uno al otro, y que su unión era su única fortaleza en un mundo difícil.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Hermanos abrazándose con el cielo de Lima de fondo"
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
    coverImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En la casa familiar llegó un gallo hermoso y altivo llamado Carmelo, que se convirtió en el orgullo de toda la familia.",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Gallo majestuoso con plumaje colorido en patio de casa tradicional"
      },
      {
        id: 2,
        text: "Carmelo era admirado por su elegancia y valentía. Todos en el pueblo conocían su fama como gallo de pelea invencible.",
        image: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Plaza de pueblo peruano tradicional con casas coloniales coloridas"
      },
      {
        id: 3,
        text: "Llegó el día de la gran pelea contra el Ajiseco, un gallo temible. Carmelo luchó con honor hasta el final, mostrando su noble corazón.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Pueblo reunido mirando expectante con cielo dramático"
      },
      {
        id: 4,
        text: "Aunque Carmelo no sobrevivió a la pelea, su memoria quedó grabada para siempre como símbolo de valentía y nobleza.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Atardecer dorado y nostálgico sobre campos de Ica"
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
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "Hay golpes en la vida, tan fuertes... ¡Yo no sé! Golpes como del odio de Dios; como si ante ellos, la resaca de todo lo sufrido se empozara en el alma...",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cielo dramático con nubes oscuras pero con rayos de esperanza"
      },
      {
        id: 2,
        text: "Yo no sé... Pocos; pero son... Abren zanjas oscuras en el rostro más fiero y en el lomo más fuerte.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Persona contemplativa mirando paisaje andino con fortaleza"
      },
      {
        id: 3,
        text: "Serán tal vez los potros de bárbaros atilas; o los heraldos negros que nos manda la Muerte.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Caballos libres corriendo por campo abierto con determinación"
      },
      {
        id: 4,
        text: "Son las caídas hondas de los Cristos del alma, de alguna fe adorable que el Destino blasfema. Esos golpes sangrientos son las crepitaciones de algún pan que en la puerta del horno se nos quema.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Amanecer esperanzador sobre montañas peruanas con luz dorada"
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
    coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En Barranco, durante un verano de juventud, los días transcurrían lentos y dulces como miel derramada sobre la vida.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Barranco con casas republicanas coloridas y balcones de madera"
      },
      {
        id: 2,
        text: "Las calles empedradas guardaban secretos de amor adolescente y promesas que solo el corazón joven puede hacer.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Jóvenes caminando por calles empedradas de Barranco al atardecer"
      },
      {
        id: 3,
        text: "Los atardeceres desde el malecón eran poemas sin palabras, donde el mar y el cielo se fundían en una sinfonía de colores.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Atardecer colorido sobre el océano Pacífico desde el malecón"
      },
      {
        id: 4,
        text: "Esos veranos quedaron grabados como fotografías del alma, momentos únicos e irrepetibles de la juventud eterna.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Fotografía nostálgica de verano con colores cálidos y suaves"
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
    coverImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En las alturas de los Andes, donde el aire es puro y el silencio es sagrado, vuelan los majestuosos cóndores.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cóndor majestuoso volando con alas extendidas sobre paisaje andino"
      },
      {
        id: 2,
        text: "Sus alas enormes abrazan el viento y llevan mensajes entre las montañas, conectando el cielo con la tierra.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Montañas andinas con viento visible y cielo azul brillante"
      },
      {
        id: 3,
        text: "Los antiguos peruanos veían en los cóndores a los mensajeros de los dioses, capaces de llevar las oraciones hasta el cielo.",
        image: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Ruinas incas antiguas con vista panorámica de montañas sagradas"
      },
      {
        id: 4,
        text: "Hoy, como ayer, los cóndores siguen siendo símbolos de libertad, recordándonos que algunos seres nacieron para volar sin límites.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cielo infinito y libre sobre las montañas andinas con nubes blancas"
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
    coverImage: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En el valle de Ica vivía una hermosa doncella llamada Achirana, cuya belleza era como el amanecer en las montañas.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Joven doncella inca hermosa con vestimenta tradicional colorida"
      },
      {
        id: 2,
        text: "Un príncipe inca se enamoró perdidamente de ella, pero Achirana le pidió que trajera agua a su árido valle como prueba de amor.",
        image: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Príncipe inca noble contemplando el valle seco con determinación"
      },
      {
        id: 3,
        text: "El príncipe ordenó construir un gran canal que trajera las aguas desde las montañas hasta el valle seco de Ica.",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec93c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Canal de agua cristalina serpenteando por montañas hacia el valle"
      },
      {
        id: 4,
        text: "Cuando las aguas llegaron al valle, Achirana aceptó el amor del príncipe, y el canal llevó su nombre para siempre.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Valle verde y floreciente con agua corriendo y pareja feliz"
      }
    ]
  }
];

// Extraer todos los autores únicos para facilitar la búsqueda
export const authors = [...new Set(stories.map(story => story.author))].sort();

// Extraer todas las regiones únicas
export const regions = [...new Set(stories.map(story => story.region))].sort();
