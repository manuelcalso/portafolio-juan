const posts = [
  {
    id: 0,
    title: "Ejercicio espejo de Spotify",
    href: "https://manuelcalso.github.io/JuanRetoSemana2.github.io/",
    description:
      "En este proyecto se ejercito el uso de HTML, CSS para el maquetado, tomando como ejemplo la pagina landing de spotify Mexico.",
    imageUrl:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702681729/portafolio/spoty_vu6oeu.jpg",
    date: "Mayo 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
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
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702682205/portafolio/libreria_yiuvw6.jpg",
    date: "Junio 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
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
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702683091/portafolio/crud_pi7rtr.jpg",
    date: "Julio 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-dos-CRUD?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Proyecto Dashboard App",
    href: "https://proyecto-tres-dashbord.netlify.app/#",
    description:
      "Se desarrollo una aplicacion web la cual tiene conexion a una API financiera y la generacion de una grafica utilizando Chart.js ",
    imageUrl:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702684064/portafolio/dashboard_zhu8yu.jpg",
    date: "Agosto-Septiembre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
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
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702687496/portafolio/restaurante_r7hlkc.jpg",
    date: "Octubre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
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
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689077/portafolio/pb_s25bkl.jpg",
    date: "Noviembre-Diciembre 2023",
    datetime: "2020-03-16",
    author: {
      name: "Juan Calleros",
      imageUrl:
        "https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg",
    },
    code: "https://github.com/manuelcalso/proyecto-ecommerce-fullstack/tree/master",
  },
  // More posts...
];

export default function Blog() {
  return (
    <>
      <div className=" max-w-7xl px-6 pb-24 pt-20 sm:pt-40 lg:px-8 lg:pt-32 blog-bg rounded-border-about texto-animado ">
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
              <span>M</span>
              <span>a</span>
              <span>n</span>
              <span>u</span>
              <span>e</span>
              <span>l</span> <span>Calleros...</span>
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none italic kalnia-light text-shadow-p">
              <span>
                ¡Bienvenido a mi portafolio! Soy un administrador de empresas
                con una apasionante dedicación al desarrollo web full stack. Mi
                enfoque se caracteriza por una actitud positiva, creatividad y
                habilidades técnicas.
                <br />
                <br />
                En lo que va del 2024, estoy terminando el desarrollo de mis
                primeros proyectos en Android y iOS utilizando React Native.
                Esta tecnología me brinda la capacidad de crear aplicaciones
                móviles de alta calidad de manera eficiente, aprovechando mi
                experiencia en desarrollo web y llevándola al mundo de las
                aplicaciones nativas. Estoy explorando las posibilidades que
                ofrece React Native y creando experiencias móviles innovadoras
                que cautiven a los usuarios.
                <br />
                <br />
                Creo firmemente en la capacidad del desarrollo web y móvil para
                transformar ideas en soluciones tangibles y experiencias
                memorables. Mi portafolio es un reflejo de mi pasión por
                fusionar los principios empresariales con las últimas
                tecnologías web.
                <br />
                <br />
                Gracias por visitar mi espacio virtual.
              </span>
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
            <div className="ml-auto w-32 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80  ">
              <div className="relative slide ">
                <img
                  src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702674956/portafolio/sisco_yu1opx.jpg"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative slide">
                <img
                  src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702675158/portafolio/volaris_aaonio.jpg"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative pulse">
                <img
                  src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702675336/portafolio/tec_arlqda.jpg"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative bounce">
                <img
                  src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702675810/portafolio/office_s9qnt5.jpg"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative wobble">
                <img
                  src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702677245/portafolio/softek_l2lbx1.jpg"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg float"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 mx-auto max-w-7xl rounded-border-proyect py-24 sm:py-32 ">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className=" text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl kalnia-medium">
              <span className="texto-animado">Proyectos</span>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 kalnia-medium">
              Proyectos desarrollados en Ucamp
            </p>
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
                      {post.title}
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
                  <br></br>
                  <a
                    className="text-white hover:text-green-500 border border-white border-2 hover:border-green-900 rounded flex flex-row justify-center transition"
                    href={post.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aqui el codigo!
                  </a>
                </article>
              </>
            ))}
          </div>
        </div>
        <br />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <br />
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 texto-animado kalnia-medium ">
            Tecnologias
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-focus-in">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689857/portafolio/html-5-logo.219x256_kqmcuh.png"
              alt="html"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689905/portafolio/css3.224x256_nnijyp.png"
              alt="css"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689992/portafolio/javascript-js-square.256x256_njlvjw.png"
              alt="js"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689725/portafolio/git_xlcgvs.png"
              alt="github"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702689802/portafolio/react.256x228_glbkik.png"
              alt="react"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702690110/portafolio/database-mongo-db.245x256_by2fw7.png"
              alt="mongodb"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702690706/portafolio/node-js.256x158_utu2j4.png"
              alt="node"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702690810/portafolio/tailwindcss.256x154_vzjono.png"
              alt="tailwind"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702690985/portafolio/chartjs.222x256_njmg0r.png"
              alt="chartjs"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702691353/portafolio/express-original-wordmark.256x58_bhywjm.png"
              alt="expresss"
              width={158}
              height={48}
            />
          </div>
          <div className="flex flex-row mt-12">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702691462/portafolio/brand-vscode.243x256_zayqkk.png"
              alt="vscode"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
}
