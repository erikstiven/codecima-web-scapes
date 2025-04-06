
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Phone, Mail, Building, ChevronDown, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [selectedSoftware, setSelectedSoftware] = useState('');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  
  const toggleCountryDropdown = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
  };

  return (
    <div className="bg-codecima-navy/90 rounded-lg p-6 backdrop-blur-md shadow-lg border border-codecima-blue/10">
      <div className="space-y-4">
        <div className="flex items-center bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3">
          <User className="text-codecima-lightblue mr-2" size={20} />
          <input
            type="text"
            placeholder="Escribe tu nombre"
            className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>
        
        <div className="flex items-center bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3">
          <Phone className="text-codecima-lightblue mr-2" size={20} />
          <input
            type="tel"
            placeholder="Escribe tu WhatsApp"
            className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>
        
        <div className="flex items-center bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3">
          <Mail className="text-codecima-lightblue mr-2" size={20} />
          <input
            type="email"
            placeholder="Escribe tu correo"
            className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>
        
        <div className="flex items-center bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3">
          <Building className="text-codecima-lightblue mr-2" size={20} />
          <input
            type="text"
            placeholder="Escribe tu RUC o NIT"
            className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="flex-1 relative bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3">
            <div className="flex justify-between items-center w-full">
              <select
                className="bg-transparent w-full text-gray-300 focus:outline-none appearance-none"
                value={selectedSoftware}
                onChange={(e) => setSelectedSoftware(e.target.value)}
              >
                <option value="" disabled selected className="text-gray-500">Elije un software</option>
                <option value="carga-pesada" className="bg-codecima-darkblue text-white">Carga Pesada</option>
                <option value="paqueteria" className="bg-codecima-darkblue text-white">Paquetería</option>
                <option value="personalizado" className="bg-codecima-darkblue text-white">Personalizado</option>
              </select>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="flex items-center justify-between bg-codecima-darkblue/80 border border-codecima-blue/20 rounded-md px-4 py-3 cursor-pointer min-w-[120px]"
              onClick={toggleCountryDropdown}
            >
              <span className="text-gray-300">Perú</span>
              <ChevronDown size={16} className="text-gray-400 ml-2" />
            </div>
            
            {countryDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-codecima-darkblue shadow-lg border border-codecima-blue/20">
                <div className="py-1">
                  <button 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                    onClick={() => {
                      setCountryDropdownOpen(false);
                    }}
                  >
                    Perú
                  </button>
                  <button 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                    onClick={() => {
                      setCountryDropdownOpen(false);
                    }}
                  >
                    Colombia
                  </button>
                  <button 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                    onClick={() => {
                      setCountryDropdownOpen(false);
                    }}
                  >
                    México
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md flex items-center justify-center">
          <Send className="mr-2 h-4 w-4" />
          <span>SOLICITAR AHORA</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
