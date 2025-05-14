import React, { useEffect, useRef, useState } from "react";
import GlowButton from "@/components/ui/GlowButton";
import {
  User,
  Phone,
  Mail,
  Building,
  ChevronDown,
  Send,
  Laptop,
  Globe,
} from "lucide-react";

const ContactForm: React.FC = () => {
  const [selectedSoftwareLabel, setSelectedSoftwareLabel] = useState("Elije un software");
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Ecuador");
  const [countryList, setCountryList] = useState<string[]>([]);

  const softwareRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .map((c: any) => c.name.common)
          .sort((a: string, b: string) => a.localeCompare(b));
        setCountryList(sorted);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        softwareRef.current && !softwareRef.current.contains(e.target as Node)
      ) setSoftwareDropdownOpen(false);

      if (
        countryRef.current && !countryRef.current.contains(e.target as Node)
      ) setCountryDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputFields = [
    { placeholder: "Tu nombre completo", icon: <User size={20} />, type: "text" },
    { placeholder: "Número de WhatsApp (09...)", icon: <Phone size={20} />, type: "tel" },
    { placeholder: "Correo electrónico", icon: <Mail size={20} />, type: "email" },
    { placeholder: "RUC (13 dígitos)", icon: <Building size={20} />, type: "text" },
  ];

  return (
    <div className="relative max-w-xl mx-auto my-16 p-[2px] rounded-2xl overflow-hidden group">
      {/* Borde giratorio animado */}
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-50" />

      {/* Glow al pasar */}
      <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500" />

      {/* Contenido del formulario */}
      <div className="relative z-10 bg-[#0b0b23] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        <form className="space-y-4">
          {inputFields.map((field, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center"
            >
              <span className="text-codecima-lightblue mr-2">{field.icon}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              />
            </div>
          ))}

           {/* Selector de país */}
           <div
            ref={countryRef}
            onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
            className="relative bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center"
          >
            <div className="flex items-center">
              <Globe size={20} className="text-codecima-lightblue mr-2" />
              <span className="text-gray-300">{selectedCountry}</span>
            </div>
            <ChevronDown size={16} className="text-gray-400 ml-auto" />
            {countryDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 max-h-60 overflow-y-auto w-full rounded-md bg-codecima-navy z-50 border border-codecima-blue/20">
                {countryList.map((country) => (
                  <button
                    key={country}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCountry(country);
                      setCountryDropdownOpen(false);
                    }}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selector de software */}
          <div
            ref={softwareRef}
            onClick={() => setSoftwareDropdownOpen(!softwareDropdownOpen)}
            className="relative bg-[#0c0c25] border border-codecima-blue/20 hover:border-codecima-blue/40 transition rounded-md px-4 py-3 flex items-center"
          >
            <div className="flex items-center">
              <Laptop size={20} className="text-codecima-lightblue mr-2" />
              <span className={`text-gray-300 ${selectedSoftwareLabel === "Elije un software" ? "text-gray-500" : ""}`}>
                {selectedSoftwareLabel}
              </span>
            </div>
            <ChevronDown size={16} className="text-gray-400 ml-auto" />
            {softwareDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full rounded-md bg-codecima-navy z-50 border border-codecima-blue/20">
                {["Carga Pesada", "Paquetería", "Personalizado"].map((option) => (
                  <button
                    key={option}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSoftwareLabel(option);
                      setSoftwareDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

         

          {/* Botón enviar */}
          <div className="pt-2">
            <GlowButton className="w-full justify-center">
              <Send className="mr-2 h-4 w-4" />
              <span>SOLICITAR AHORA</span>
            </GlowButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
