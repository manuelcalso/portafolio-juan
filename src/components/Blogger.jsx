//BLOG
import libro from "../assets/lacatedral.jpg"
import Footer from "./Footer"
import Header from "./Header"


const posts = [
  {
    id: 1,
    title: 'Creando "Yo Voy": Tecnología, Negocios y Delivery a la Mexicana',
    href: '/blog-app-delivery',
    description:
      'Sigue mi aventura en la creación de "Yo Voy", una app de delivery diseñada para adaptarse a las necesidades locales. Aquí comparto el proceso de desarrollo, los desafíos tecnológicos y las oportunidades de negocio, todo con un toque único mexicano. Un espacio donde la innovación se une con la experiencia del emprendimiento.',
    imageUrl: "https://storage.googleapis.com/portafilo/yovoylogo.jpg",
    date: 'Octubre 14 , 2024',
    datetime: '2020-03-16',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Juan Manuel Calleros',
      role: 'CTO',
      href: 'https://juancalleros.com/',
      imageUrl:
        'https://storage.googleapis.com/portafilo/Foto_flfttc.jpg',
    },
  },
  {
    id: 2,
    title: 'La catedral de Turing: Reflexiones sobre Tecnología y Espiritualidad',
    href: '/blog-analisis-libro-catedral-de-turin',
    description:
      'Explora la obra "La catedral de Turing" de George Dyson, que analiza la historia de la computación y su impacto en la sociedad. A través de la vida de pioneros como Alan Turing, se examinan los enfoques de desarrollo en tecnología y su intersección con la espiritualidad. Este libro invita a reflexionar sobre las implicaciones éticas y sociales de nuestras creaciones tecnológicas y cómo estas pueden moldear el futuro.',
    imageUrl: libro,  // Usando el enlace de imagen importado
    date: 'Octubre 31, 2024',
    datetime: '2024-10-31',
    category: { title: 'Literature', href: '#' },
    author: {
      name: 'Juan Manuel Calleros',
      role: 'CTO',
      href: 'https://juancalleros.com/',
      imageUrl:
        'https://storage.googleapis.com/portafilo/Foto_flfttc.jpg',
    },
  }
]

export default function Blogger() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reflexiones y Creaciones en "El Escritorio"</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Bienvenido a mi espacio personal, donde comparto reflexiones, investigaciones, teorías y novedades, principalmente enfocadas en el fascinante mundo de la tecnología.
              Aquí encontrarás una mezcla de ideas, aprendizajes y experiencias que espero te inspiren y aporten valor.
            </p>
            <a className="text-xl font-semibold leading-7 text-orange-600" href='/'>Regresar al inicio</a>

          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt={`Imagen de la app "Yo Voy": ${post.title}`}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-12 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    {/**
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  */}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Nueva sección */}
      <div className="bg-gray-50 py-12 mt-5 mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explora más herramientas útiles</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Calculadora de Interés Compuesto</h3>
              <p className="mt-2 text-gray-600">
                Utiliza nuestra calculadora de interés compuesto para planificar tu futuro financiero y maximizar tus ahorros.
              </p>
              <a href="/calculadora-de-interes-compuesto-online" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Calcular Ahora
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Generador de Voz con IA</h3>
              <p className="mt-2 text-gray-600">
                Convierte texto en audio de alta calidad con nuestro generador de voz impulsado por inteligencia artificial.
              </p>
              <a href="/voz-de-inteligencia-artificial" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Probar Generador
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Herramientas de Delivery CSS</h3>
              <p className="mt-2 text-gray-600">
                Descubre nuestras herramientas de CSS diseñadas específicamente para mejorar la experiencia de entrega en tu aplicación.
              </p>
              <a href="/developer-tools" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Ver Herramientas
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}