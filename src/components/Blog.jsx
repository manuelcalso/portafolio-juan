import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../../src/index.css";
import plantillas from "../assets/Plantillas.png"
import QRcode from "../assets/webqr.png"

const posts = [
  {
    id: 0,
    title: "Ejercicio espejo de Spotify",
    href: "https://manuelcalso.github.io/JuanRetoSemana2.github.io/",
    description:
      "En este proyecto se ejercito el uso de HTML, CSS para el maquetado, tomando como ejemplo la pagina landing de spotify Mexico.*(No Responsivo)",
    imageUrl:
      "https://storage.googleapis.com/portafilo/spoty_vu6oeu.jpg",
    date: "Mayo 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/JuanRetoSemana2.github.io/tree/main",
  },
  {
    id: 1,
    title: "Proyecto Landing de ventas",
    href: "https://proyecto-landing-ventas-juan.netlify.app/",
    description:
      "En este proyecto realizamos una langin page para una libreria, se utiliza el maquetado con HTML5 y CSS, incluyendo responsive design.",
    imageUrl:
      "https://storage.googleapis.com/portafilo/libreria_yiuvw6.jpg",
    date: "Junio 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-landing-ventas-juan.github.io",
  },
  {
    id: 2,
    title: "Proyecto CRUD",
    href: "https://proyecto-crud-juan.netlify.app/",
    description:
      "En este proyecto realizamos una pagina CRUD(Create, Read, Update, Delete), se utiliza el maquetado con HTML5, CSS, javaScript, incluyendo responsive design, guardado la informacion en localStorage.",
    imageUrl:
      "https://storage.googleapis.com/portafilo/crud_pi7rtr.jpg",
    date: "Julio 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-dos-CRUD?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Proyecto Dashboard App",
    href: "https://globaly-news.netlify.app/#",
    description:
      "Se desarrollo una aplicacion web la cual tiene conexion a una API financiera y la generacion de una grafica utilizando Chart.js ",
    imageUrl:
      "https://storage.googleapis.com/portafilo/dashboard_zhu8yu.jpg",
    date: "Agosto-Septiembre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-dashbordapp/tree/master",
  },
  {
    id: 4,
    title: "Proyecto Restaurante App",
    href: "https://proyecto-restaurante-app.netlify.app/",
    description:
      "Desarrollo de una aplicación que cuente con la presentación de un restaurante, su menú, información de contacto. Así mismo, se integra un sistema para que los clientes puedan reservar una mesa",
    imageUrl:
      "https://storage.googleapis.com/portafilo/restaurante_r7hlkc.jpg",
    date: "Octubre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/fullstack-proyecto-restaurante",
  },
  {
    id: 5,
    title: "Proyecto Ecommerce",
    href: "https://plasticbeach.shop/",
    description:
      "Desarrollo de una pagina web de ecommerce fullstack, implementando el uso de Mongodb para la base de datos y Stripe para los metodos de pago",
    imageUrl:
      "https://storage.googleapis.com/portafilo/pb_s25bkl.jpg",
    date: "Noviembre-Diciembre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-ecommerce-fullstack/tree/master",
  },
  {
    id: 6,
    title: "Arquitectura",
    href: "https://arquitecturafotovoltaica.netlify.app/ ",
    description:
      "Desarrollo web para un cliente, enfocado en proyectos de Construccion y reparaciones para residencial o negocios. (sitio en constuccion)",
    imageUrl:
      "https://storage.googleapis.com/portafilo/construccionafpage.png",
    date: "2024 - current days",
    datetime: "2024-06-14",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg",
    },
    code: "",
  },
  
];
const projects = [
  {
    title: "Restaurant App",
    description: `
      En esta app desarrollamos una aplicacion movil para los clientes, donde pueden revisar el menu, generar ordenes, por otro lado tenemos una aplicacion web para la administracion del Menu,
      asi como otro apartado para las ordenes, las dos aplicaciones se comunican en tiempo real usando una base de datos de Firebase,
    `,
    extra: "App con actualizacion de dependencias y componentes del curso",
    link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=LEADERSALE24B",
    videoSrc:
      "https://storage.googleapis.com/portafilo/Grabacio%CC%81n%20de%20pantalla%202024-06-26%20a%20la(s)%202.00.28%E2%80%AFp.m..mp4",
  },
  {
    title: "Cotizador de criptomonedas",
    description: `
      Las criptomonedas han llegado para quedarse, con esta app podras cotizar su precio en tiempo real ya que es soportado con servicios API los cuales lo mantienen al dia. Proximamente en google play store
    `,
    extra: "App con actualizacion de dependencias y componentes del curso",
    link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=LEADERSALE24B",
    videoSrc:
      "https://storage.googleapis.com/portafilo/criptomonedas.mp4",
  },
  {
    title: "App de alojamiento",
    description: `
      Apps como Airbnb es trabajo de grandes equipos de desarrollo, sin embargo esta app funciona muy bien para generar reservaciones y promocionar tus habitaciones, Ademas que es totalmente personalizable y facil de usar, proximamente en google app store
    `,
    extra: "App con actualizacion de dependencias y componentes del curso",
    link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=LEADERSALE24B",
    videoSrc:
      "https://storage.googleapis.com/portafilo/Hospedajes.mp4",
  },
  {
    title: "Planificador de Gastos",
    description: `
      ¡Con esta App es posible generar un presupuesto y poder administrarlo!
      Una vez definido el presupuesto podemos asignar los gastos a diferentes categorias, al mismo tiempo la nos da informacion grafica de cuanto presupuesto nos queda como disponible, dentro de los gastos ya definidos podemos editarlos o eliminarlos si asi lo queremos y se haran los ajustes necesarios. En este proyecto utilizamos AsyncStorage para poder mantener la informacion almacenada localmente.
    `,
    extra: "App con actualizacion de dependencias y componentes del curso",
    link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=LEADERSALE24B",
    videoSrc:
      "https://storage.googleapis.com/portafilo/planificador%20gastos.mp4",
  },
  {
    title: "Citas Veterinaria",
    description: `
      App desarrollada para crear y organizar citas veterinarias.
      En esta app el usuario dueño del negocio puede agregar nuevas citas programadas y tener un control a traves del nombre de la mascota, nombre del propietario, email, telefono fecha de cita y sintomas, area donde puede colocar detalles sobre el paciente y la futura cita veterinaria.
    `,
    extra: "App con actualizacion de dependencias y componentes del curso",
    link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=LEADERSALE24B",
    videoSrc:
      "https://storage.googleapis.com/portafilo/Citas%20Veterinaria.mp4",
  },
];

export default function Blog() {
  //incluir paginacion PENDIENTE
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const project = projects[page - 1];

  return (
    <>
      <div className=" max-w-7xl px-6 pb-24 pt-20 sm:pt-40 lg:px-8 lg:pt-32 blog-bg rounded-border-about02">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center ">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl kalnia-medium text-shadow texto-animado">
              <span>¡</span>
              <span>H</span>
              <span>o</span>
              <span>l</span>
              <span>a</span>
              <span>!</span> <span>soy</span>
              <br />
              <span>Juan </span>
              <br />
              <span>M</span>
              <span>a</span>
              <span>n</span>
              <span>u</span>
              <span>e</span>
              <span>l</span> <span>Calleros</span>
            </h1>
            <div className="relative mt-6 text-2xl leading-8 text-white sm:max-w-md lg:max-w-none italic kalnia-light text-shadow-p">
              <p className="texto-animado">
                ¡Bienvenido a mi portafolio!
                <br />
                <br />
                Soy un licenciado en administrador de empresas
                quien encontró su pasión en el
                <span className="text-yellow-300">
                  desarrollo de aplicaciones web y móviles
                </span>{" "}
                nivel fullstack {"(backend y frontend)"}.
                <br />
                <br />
                En 2023 curse mi estudios en Ucamp, el cual se basa en proyectos con React, Node.js,
                Express.js, MongoDB, también en Next.js todo con librerías
                como, Tailwind, Bootstrap, MaterialUI, Bulma, entre otros, sin
                embargo, desde la pandemia de 2020 incluso antes había generado
                mis primeras maquetas en HTML, CSS y JavaScript.
                <br />
                <br />
                <picture>
                  <img
                    src={QRcode}
                    alt="aptitudes curso udemy"
                    className="rounded-lg shadow-lg w-1/2 h-1/2"
                  />
                </picture>

                <br />
                Mi enfoque se caracteriza por una actitud positiva, creatividad
                y habilidades técnicas, basado en la búsqueda de soluciones y
                análisis de problemas con metodologías agiles como ITIL, PMBOK y
                Scrum. Conocimientos adquiridos en el Master en Gestion de
                Tecnologias de la Informaicon en la Universidad TecMilenio previo
                al bootcamp.
                <br />
                <br />
                En este 2024, continuo con mi preparación en el área móvil,
                terminando el curso de en{" "}
                <span className="text-yellow-300">Udemy</span> de Juan Pablo De
                la torre Valdez, basado en React Native adaptándose para Android
                o iOS como sistemas operativos, en este curso abarcamos
                diferentes dependencias y librerías las cuales busque
                alternativas de solución a errores en actualizaciones y
                adaptaciones de arranque que se ajustaran a diferentes
                emuladores para iOS y para Android Studio.
                <br />
                <br />
                <picture>
                  <img
                    src="https://storage.googleapis.com/portafilo/UdemyCertificate.jpg"
                    alt="aptitudes curso udemy"
                    className="rounded-lg shadow-lg w-1/2 h-1/2"
                  />
                </picture>
                <br />
                Busco poder trabajar en proyectos colaborativos y
                poder desarrollar productos utiles al cliente final,
                por lo que, si eres{" "}
                <span className="text-yellow-300 text-3xl">reclutador</span> bueno,
                comentar que soy comprometido, responsable, enfocado; por lo que
                te pido me contactes si crees que pueda colaborar con un perfil
                disponible.
                <br />
                <br />
                Y si entraste para conocer mis proyectos, buscas algún
                proyecto específico que te gustaría
                <span className="text-yellow-300 text-3xl">
                  desarrollar para tu negocio
                </span>
                , no dudes en contactarme y explorar las opciones para
                posicionar e impulsar tus ideas de negocio.
                <br />
                <br />
                En este sitio utilizamos solo algunas áreas con secciones
                comerciales, si te gustaría implementar anuncios publicitarios
                en
                <span className="text-yellow-300 text-3xl">
                  tu sitio web y monetizarlo
                </span>{" "}
                o poder generar campañas publicitarias para conocer tu nicho de
                mercado, ¡de igual forma contáctame y empecemos!
                <br />
                <br />
                Se aceptan aportaciones voluntarias{" "}
                <a
                  href="https://buy.stripe.com/4gwcOy6TXfnc7jG4gg"
                  className="text-yellow-300"
                >
                  <span>a</span>
                  <span>q</span>
                  <span>u</span>
                  <span>i</span>
                </a>{" "}
                o al final, ¡gracias y por tu visita!
              </p>
            </div>
          </div>
          <div className="mt-14 flex justify-end gap-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
            <div className="ml-auto w-32 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80  ">
              <div className="relative slide01 ">
                <img
                  src="https://storage.googleapis.com/portafilo/Foto_flfttc.jpg"
                  alt="foto de frente"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float01"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative slide01">
                <img
                  src="https://storage.googleapis.com/portafilo/volaris_yjxpgu.jpg"
                  alt="foto volaris"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float01"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative pulse01">
                <img
                  src="https://storage.googleapis.com/portafilo/tec_arlqda.jpg"
                  alt="titulo maestria"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float01"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative bounce01">
                <img
                  src="https://storage.googleapis.com/portafilo/office_s9qnt5.jpg"
                  alt="cumple office depot"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float01"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative wobble01">
                <img
                  src="https://storage.googleapis.com/portafilo/softek_l2lbx1.jpg"
                  alt="foto sofftek"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float01"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-gradient-to-t from-gray-200 to-white mx-auto max-w-7xl rounded-border-proyect py-24 sm:py-32 ">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className=" text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl kalnia-medium vibrate-01">
              Proyectos
            </h1>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-focus-in">
            {posts.map((post) => (
              <>
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 float"
                >
                  <img
                    src={post.imageUrl}
                    alt="imagen-de-proyecto"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.datetime} className="mr-8">
                      {post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        <img
                          src={post.author.imageUrl}
                          alt="imagen-de-autor"
                          className="h-6 w-6 flex-none rounded-full bg-white/10"
                        />
                        {post.author.name}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a
                      href={post.href}
                      className="text-white hover:text-green-500 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title === "Arquitectura Fotovoltaica" ? (
                        <h1 className="text-yellow-500 underline ">
                          Arquitectura Fotovoltaica S.A. de C.V.
                        </h1>
                      ) : (
                        <span>{post.title}</span>
                      )}
                    </a>
                  </h3>
                  <a
                    className="texto-animado"
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.description}
                  </a>
                  <br />

                  {post.title === "Arquitectura Fotovoltaica" ? (
                    <p
                      className="border-dotted border-2 border-yellow-500 flex justify-center rounded-full elevation-4 font-bold
                    "
                    >
                      En Construccion{" "}
                    </p>
                  ) : (
                    <a
                      className="text-white hover:text-green-500 border border-white  hover:border-green-900 rounded flex flex-row justify-center transition"
                      href={post.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aqui el codigo!
                    </a>
                  )}
                </article>
              </>
            ))}
          </div>
          <div className="text-center my-10">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl kalnia-medium vibrate-01">
              Plantillas
            </h1>
            <p className="text-black kalnia-regular text-2xl my-10">
              ¡Desarrolla tu negocio más rápido con nuestras plantillas! Dando click en la imagen
              encontrarás una selección de plantillas diseñadas para acelerar el proceso de creación
              de sitios web profesionales y atractivos. Ya sea que estés iniciando un nuevo proyecto
              o renovando tu presencia en línea, nuestras plantillas te permiten enfocarte en lo que realmente importa: hacer crecer tu negocio.
              ¡Elige la plantilla perfecta, personalízala a tu gusto, y lanza tu sitio en tiempo récord! </p>
            <picture className="borde border-black">
              <a href="https://preview.themeforest.net/item/betheme-html-responsive-multipurpose-template/full_screen_preview/13925633?_ga=2.163095868.1069896872.1723849257-665215538.1723849257&_gac=1.48293844.1723851301.CjwKCAjw8fu1BhBsEiwAwDrsjI3NLum8MdEvrt2fsCswobZNbneHwNqRtwSc4ff1VLaojFx_rQTdjBoC6fgQAvD_BwE">
                <img
                  src={plantillas} alt="imagen de las plantillas" />
              </a>
            </picture>
          </div>
          <br />
          <div className=" mb-5 mt-5 bg-orange-100">
            <h1 className="text-2xl font-bold tracking-tight text-black sm:text-2xl kalnia-medium vibrate-01">
              Nuestros productos
            </h1>
            <a
              href="https://plasticbeach.shop/"
              rel="noopener noreferrer"
              className="text-2xl italic title flex flex-row justify-center items-center gap-x-4"
            >
              <img
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/greenastronaut_s7hhzh.webp"
                alt="plastic beach ad"
                className="w-1/6 rounded-md border border-purple-200 shadow float "
              />
              <br />
              <img
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/mtv_yy0dbg.webp"
                alt="plastic beach ad"
                className="w-1/5 rounded-md border border-purple-200 shadow float "
              />
              <img
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/radiohead_t2tewf.webp"
                alt="plastic beach ad"
                className="w-1/6 rounded-md border border-purple-200 shadow float "
              />
              <img
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/girasolardiente_hai9pa.webp"
                alt="plastic beach ad"
                className="w-1/6 rounded-md border border-purple-200 shadow float "
              />
              <img
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/gatomorado_ryy6dh.webp"
                alt="plastic beach ad"
                className="w-1/6 rounded-md border border-purple-200 shadow float "
              />
            </a>
            <br />
          </div>
          <br />
          <br />
          <Stack spacing={2}>
            <div className="flex-col">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl kalnia-medium flex justify-center pulse">
                <span className="texto-animado">Apps Moviles</span>
              </h1>
              <br />
              <div className="flex flex-col border border-gray-500 bg-[#c9c9c9] rounded-md shadow-xl app-container">
                <div>
                  <h1 className="text-black kalnia-medium text-3xl text-shadow-white text-center">
                    {project.title}
                  </h1>
                  <div className="m-5 mr-10 border border-gray-300 rounded-md shadow-md">
                    <p className="text-app text-shadow-p">
                      {project.description}
                    </p>
                    <br />
                    <p className="text-app">
                      {project.extra} <br />
                    </p>
                    <br />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="curso-section"
                    >
                      <span>
                        Crea aplicaciones para Android y iOS con React
                      </span>
                      <img
                        src={
                          "https://storage.googleapis.com/portafilo/cursoRn_utsrqf.jpg"
                        }
                        alt="curso udemy"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-row justify-center items-center">
                  <video
                    key={project.videoSrc}
                    autoPlay
                    muted
                    loop
                    controls
                    className="video shadow"
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Pagination
                count={projects.length}
                page={page}
                onChange={handleChange}
                style={{ fontWeight: 900, fontSize: "large" }}
              />
            </div>
          </Stack>
          <br />
        </div>
        <br />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <br />
          <h1 className="text-center text-4xl font-semibold leading-8 text-black kalnia-medium vibrate-01 ">
            Tecnologias
          </h1>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 focus ">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide01"
              src="https://storage.googleapis.com/portafilo/html-5-logo.219x256_kqmcuh.png"
              alt="html"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bounce01"
              src="https://storage.googleapis.com/portafilo/css3.224x256_nnijyp.png"
              alt="css"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide01"
              src="https://storage.googleapis.com/portafilo/javascript-js-square.256x256_njlvjw.png"
              alt="js"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 pulse01"
              src="https://storage.googleapis.com/portafilo/git_xlcgvs.png"
              alt="github"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 bounce01"
              src="https://storage.googleapis.com/portafilo/react.256x228_glbkik.png"
              alt="react"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide01"
              src="https://storage.googleapis.com/portafilo/database-mongo-db.245x256_agk32s.png"
              alt="mongodb"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 pulse01"
              src="https://storage.googleapis.com/portafilo/node-js.256x158_ybovdk.png"
              alt="node"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 bounce01"
              src="https://storage.googleapis.com/portafilo/tailwindcss.256x154_vzjono.png"
              alt="tailwind"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide01"
              src="https://storage.googleapis.com/portafilo/chartjs.222x256_njmg0r.png"
              alt="chartjs"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 pulse01"
              src="https://storage.googleapis.com/portafilo/express-original-wordmark.256x58_bhywjm.png"
              alt="expresss"
              width={158}
              height={48}
            />
            <div className=" flex items-center justify-center bounce01">
              <svg
                fill="none"
                height="100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="670.088 32.46226489559854 2224.1720000000005 2666.4877351044024"
              >
                <g fill="black">
                  <path d="M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z" />
                  <path d="M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z" />
                </g>
              </svg>
            </div>
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide01"
              src="https://storage.googleapis.com/portafilo/brand-vscode.243x256_zayqkk.png"
              alt="vscode"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      {/* Nueva sección */}
      <div className="bg-gray-50 py-12 mt-5 mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explora más herramientas útiles</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Reflexiones y Creaciones en "El Escritorio"</h3>
              <p className="mt-2 text-gray-600">
                Visita mi espacio personal, donde comparto reflexiones, investigaciones, teorías y novedades.
              </p>
              <a href="/blog" className="mt-4 inline-block rounded bg-green-100 px-4 py-2 text-black text-lg  hover:bg-orange-700 hover:text-white">
                Leer Ahora
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Generador de Voz con IA</h3>
              <p className="mt-2 text-gray-600">
                Convierte texto en audio de alta calidad con nuestro generador de voz impulsado por inteligencia artificial.
              </p>
              <a href="/voz-de-inteligencia-artificial" className="mt-4 inline-block rounded bg-green-100 px-4 py-2 text-black hover:bg-orange-700 hover:text-white">
                Probar Generador
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Herramientas de Delivery CSS</h3>
              <p className="mt-2 text-gray-600">
                Descubre nuestras herramientas de CSS diseñadas específicamente para mejorar la experiencia de entrega en tu aplicación.
              </p>
              <a href="/developer-tools" className="mt-4 inline-block rounded bg-green-100 px-4 py-2 text-black hover:bg-orange-700 hover:text-white">
                Ver Herramientas
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Calculadora de Interés Compuesto</h3>
              <p className="mt-2 text-gray-600">
                Utiliza nuestra calculadora de interés compuesto para planificar tu futuro financiero y maximizar tus ahorros.
              </p>
              <a href="/calculadora-de-interes-compuesto-online" className="mt-4 inline-block rounded bg-green-100 px-4 py-2 text-black hover:bg-orange-700 hover:text-white">
                Calcular Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
