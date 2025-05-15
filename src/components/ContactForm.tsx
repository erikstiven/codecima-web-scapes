import React, { useState } from "react";
import GlowButton from "@/components/ui/GlowButton";
import {
  User,
  Phone,
  Mail,
  Building,
  Send,
  Globe,
  MessageCircle,
} from "lucide-react";

const ContactForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [ruc, setRuc] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div
      className="relative max-w-xl mx-auto my-16 p-[2px] rounded-2xl overflow-hidden group"
      aria-labelledby="contact-form-heading"
    >
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-50" />
      <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500" />

      <div className="relative z-10 bg-[#0b0b23] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        <form className="space-y-4" aria-describedby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">Formulario de contacto</h2>

          {/* Nombre */}
          <label htmlFor="nombre" className="sr-only">Nombre completo</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <User size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre completo"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          {/* Teléfono */}
          <label htmlFor="telefono" className="sr-only">Número de WhatsApp</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <Phone size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="telefono"
              type="tel"
              placeholder="Número de WhatsApp (09...)"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          {/* Correo */}
          <label htmlFor="correo" className="sr-only">Correo electrónico</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <Mail size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="correo"
              type="email"
              placeholder="Correo electrónico"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          {/* RUC */}
          <label htmlFor="ruc" className="sr-only">RUC</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <Building size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="ruc"
              type="text"
              placeholder="RUC (13 dígitos)"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={ruc}
              onChange={(e) => setRuc(e.target.value)}
            />
          </div>

          {/* País */}
          <label htmlFor="pais" className="sr-only">País</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <Globe size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="pais"
              type="text"
              placeholder="País de residencia"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>

          {/* Asunto / Mensaje */}
          <label htmlFor="mensaje" className="sr-only">Mensaje principal</label>
          <div className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center">
            <MessageCircle size={20} className="text-codecima-lightblue mr-2" aria-hidden="true" />
            <input
              id="mensaje"
              type="text"
              placeholder="Motivo o mensaje principal"
              className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>

          {/* Botón enviar */}
          <div className="pt-2">
            <a
              href={`https://wa.me/593999406026?text=${encodeURIComponent(
                `Hola CodeCima, me gustaría solicitar una cotización.\n\n` +
                `Nombre: ${nombre}\n` +
                `WhatsApp: ${telefono}\n` +
                `Correo: ${correo}\n` +
                `RUC: ${ruc}\n` +
                `País: ${pais}\n` +
                `Mensaje: ${mensaje}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensaje por WhatsApp"
            >
              <GlowButton className="w-full justify-center">
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>Enviar mensaje por WhatsApp</span>
              </GlowButton>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
