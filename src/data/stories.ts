
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
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    pages: [
      {
        id: 1,
        text: "En lo alto de los Andes vivía una pastora muy hermosa que cuidaba sus llamas con gran amor. Cada día subía a las montañas más altas para encontrar los mejores pastos.",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Pastora andina con llamas en las montañas"
      },
      {
        id: 2,
        text: "Un día, mientras cantaba una melodía ancestral, un gran cóndor la escuchó desde las alturas. Quedó tan enamorado de su voz que decidió bajar a conocerla.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Cóndor volando sobre los Andes"
      },
      {
        id: 3,
        text: "El cóndor se transformó en un apuesto joven y conquistó el corazón de la pastora. Pero después de casarse, reveló su verdadera forma y la llevó a vivir en su nido en las montañas más altas.",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec93c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Montañas altas de los Andes"
      },
      {
        id: 4,
        text: "La pastora extrañaba su hogar y su familia. Con la ayuda de un colibrí, logró escapar y regresar a su pueblo, donde vivió libre y feliz para siempre.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Colibrí en vuelo"
      }
    ]
  },
  {
    id: "2",
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
        image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Lago Titicaca al amanecer"
      },
      {
        id: 2,
        text: "Viracocha, el dios creador, hizo brotar de la tierra un gran lago de aguas cristalinas. En el centro del lago, creó una isla sagrada donde nacería el sol.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Isla en el lago Titicaca"
      },
      {
        id: 3,
        text: "De las profundidades del lago emergieron Manco Cápac y Mama Ocllo, los primeros incas, enviados por el sol para enseñar a los pueblos el arte de la civilización.",
        image: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Ruinas incas cerca del lago"
      },
      {
        id: 4,
        text: "Desde entonces, el lago Titicaca es considerado sagrado, y cada amanecer el sol emerge de sus aguas para iluminar el mundo con su luz dorada.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Amanecer dorado sobre el lago Titicaca"
      }
    ]
  },
  {
    id: "3",
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
        imageAlt: "Cielo estrellado sobre los Andes"
      },
      {
        id: 2,
        text: "Hace mucho tiempo, la Yakana era una llama muy especial que vivía en la tierra. Era tan bondadosa que todos los animales venían a ella cuando necesitaban ayuda.",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Llama blanca en los Andes"
      },
      {
        id: 3,
        text: "Los dioses, al ver su gran corazón, decidieron llevarla al cielo para que pudiera proteger a todos los animales del mundo desde las alturas.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Montañas andinas bajo el cielo"
      },
      {
        id: 4,
        text: "Ahora, cada noche, la Yakana baja invisible a la tierra para beber agua y asegurarse de que todos los animales estén seguros y bien cuidados.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Rebaño de llamas en los Andes"
      }
    ]
  },
  {
    id: "4",
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
        imageAlt: "Selva amazónica densa y verde"
      },
      {
        id: 2,
        text: "El Tunche silba melodías misteriosas que solo pueden escuchar aquellos que aman verdaderamente la naturaleza. Su silbido suena como el viento entre las hojas.",
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Río en la selva amazónica"
      },
      {
        id: 3,
        text: "Cuando alguien daña la selva o lastima a sus animales, el Tunche se aparece para enseñarles a respetar la naturaleza. Su presencia se siente en el aire húmedo y los sonidos nocturnos.",
        image: "https://images.unsplash.com/photo-1574263867128-b8a9b03e7b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Animales de la selva amazónica"
      },
      {
        id: 4,
        text: "Los pueblos amazónicos enseñan a sus niños a escuchar el silbido del Tunche como una bendición, recordándoles que la selva es su hogar sagrado que deben proteger.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Niños indígenas en la selva"
      }
    ]
  }
];
