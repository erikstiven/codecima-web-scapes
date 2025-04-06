
import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'GEX', },
    { name: 'Samadhi', },
    { name: 'Trans Dexlibert', },
    { name: 'SLM', },
    { name: 'JCL', },
    { name: 'Beton Xeal', },
    { name: 'Cargo Sierra', },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-white mb-10">
          Empresas que <span className="text-codecima-blue">confían en nosotros</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center py-4 px-6">
              <div className="text-white font-semibold company-logo">{company.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
