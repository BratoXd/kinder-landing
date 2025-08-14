import React, { useState } from "react";

export default function KinderLanding() {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", nivel: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes agregar lógica para guardar en tu BD o Google Sheets
    alert("¡Gracias! Nos pondremos en contacto contigo.");
  };

  return (
    <div className="font-sans">
      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/kinder.jpg')" }} // Cambia por tu imagen
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <h1 className="text-9xl font-bold relative z-10">Colegio Elena Garro</h1>
         <h1 className="text-5xl font-bold relative z-10">Inscripciones Abiertas</h1>
        <p className="text-lg mt-2 relative z-10">¡Últimos lugares para este ciclo escolar!</p>
        <div className="flex gap-4 mt-6 relative z-10">
          <a
            href="https://wa.me/5528835918"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-lg"
          >
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg text-lg"
          >
            Agendar visita
          </a>
        </div>
      </section>

      {/* Costos */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Costos y Niveles</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { fase: "Maternal", inscripcion: 1000, mantenimiento: 600, seguro: 600, colegiatura: 1200 },
            { fase: "Preescolar", inscripcion: 1000, sep: 600, mantenimiento: 600, seguro: 600, colegiatura: 1200 },
            { fase: "Primaria", inscripcion: 1000, sep: 600, mantenimiento: 600, seguro: 600, colegiatura: 1200 },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4">{item.fase}</h3>
              <ul className="space-y-2">
                <li>📌 Inscripción: ${item.inscripcion}</li>
                {item.sep && <li>📌 SEP: ${item.sep}</li>}
                <li>📌 Mantenimiento: ${item.mantenimiento}</li>
                <li>📌 Seguro: ${item.seguro}</li>
                <li>📌 Colegiatura: ${item.colegiatura}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Beca Rita Cetina */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/RitaCetina.jpeg" alt="Beca Rita Cetina" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Beca Rita Cetina</h2>
            <p className="text-lg mb-4">
              Pregunta por la Beca Universal Rita Cetina para educación básica. ¡Podría cubrir gran parte de los gastos de tu hijo!
            </p>
            <a
              href="#contacto"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg text-lg"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="contacto" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Contáctanos</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <select
            name="nivel"
            value={formData.nivel}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Nivel de interés</option>
            <option>Maternal</option>
            <option>Preescolar</option>
            <option>Primaria</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg w-full"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5528835918"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}
