
import RecommendBtn from '../components/RecommendBtn/recommendBtn.jsx';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-100">
      {/* Main section */}
      <div className="sm:flex sm:justify-between mb-12">
        {/* Main header */}
        <div className="sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-indigo-800">
            Acumula puntos
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-indigo-800">
            Manizales
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
            Explora toda la oferta gastronómica y experiencial de Manizales
          </p>
          <p className="mt-4 text-gray-700">
            La mejor forma de disfrutar nuevas experiencias y acumular puntos
          </p>
        </div>
        {/* Pizza Image */}
        <div className="sm:w-1/2 flex items-center justify-center"> {/* Center the image */}
          <img
            src="/pizza-pixel.jpg"
            alt="Pixel Pizza Image"
            className="rounded-lg w-72 h-72"
          />
        </div>
      </div>

      {/* Services section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Clientes cupoints</h3>
          <ul>
            <li>* Paga en tus comercios locales y acumula puntos.</li>
            <li>* Conoce nuevas experiencias y sabores en nuestro directorio.</li>
            <li>* Intercambia tus puntos por descuentos.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Comercios y negocios</h3>
          <ul>
            <li>* Fideliza fácilmente con tus clientes.</li>
            <li>* Muestra tus productos o servicios.</li>
            <li>* Realiza el seguimiento de tus clientes y ventas.</li>
          </ul>
        </div>
      </div>

      {/* Recommend me something button section */}
      <RecommendBtn/>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">
          Te recomendamos visitar:
        </h3>
        {/* <p>{recommendedBusiness?.name}</p>
          <p>{recommendedBusiness.description}</p> */}
      </div>

    </main>
  );
}
