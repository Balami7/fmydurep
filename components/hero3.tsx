import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProgramsSection = () => {
  const updates = [
    { id: 1, img: '/chef_small.png', title: 'Bakepreneur Program' },
    { id: 2, img: '/chef_small.png', title: 'Culinary Arts' },
    { id: 3, img: '/chef_small.png', title: 'Youth Excellence' },
  ];

  const activePrograms = [
    "LOCAL YOUTH EXCHANGE PROGRAMME",
    "TRAINING AND EMPOWERMENT OF YOUTH ON WASTE TO WEALTH MANAGEMENT, RECYCLING AND REUSE IN EACH OF THE 6 GEO-POLITICAL ZONES",
    "YOUTH MENTAL HEALTH AND PSYCHOSOCIAL SUPPORT (MHPS) PROGRAMME NATION-WIDE",
    "REVIEW AND IMPLEMENTATION OF NIGERIA YOUTH EMPLOYMENT ACTION PLAN (NIYEAP)",
    "ESTABLISHMENT OF TECH/SOCIAL HUBS IN THE NATIONAL YOUTH DEVELOPMENT CENTRES IN TWO ZONES SOUTH AND NORTH",
    "CREATIVE ARTS AND CULTURAL HERITAGE PRESERVATION INITIATIVE"
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center px-8 bg-white">
      {/* UPDATES SECTION */}
      <h3 className="text-center text-xl text-[#277B12] font-semibold my-7 tracking-widest">UPDATES</h3>
      <div className="w-full bg-white overflow-hidden mb-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {updates.map((item) => (
            <div key={item.id} className="group relative flex flex-col items-center">
              <div className="overflow-hidden rounded-lg border border-gray-100 shadow-md">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  height={400} 
                  width={300} 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <Link 
                href="#" 
                className="mt-4 bg-[#277B12] text-white text-xs px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE PROGRAMS SECTION */}
      <h3 className="text-center text-xl text-[#277B12] font-semibold my-7">Active Programs</h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {activePrograms.map((program, index) => (
          <div key={index} className="h-[250px] px-6 py-4 flex flex-col justify-between items-center shadow-lg border border-gray-50 rounded-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <p className="text-center text-sm font-bold text-gray-800 uppercase leading-relaxed mt-4">
              {program}
            </p>
            <Link href="#" className="mb-4">
              <div className="flex items-center justify-center rounded-lg bg-[#277B12] py-2 px-6 hover:bg-emerald-700 transition-colors">
                <p className="text-white text-xs font-semibold">Read More</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* UPCOMING PROGRAMS SECTION */}
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center text-xl text-[#277B12] font-semibold my-7">Upcoming Programs</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Reusing the same data mapping for upcoming programs as per your snippet */}
          {activePrograms.map((program, index) => (
            <div key={index} className="h-[250px] px-6 py-4 flex flex-col justify-between items-center shadow-lg border border-gray-50 rounded-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
              <p className="text-center text-sm font-bold text-gray-800 uppercase leading-relaxed mt-4">
                {program}
              </p>
              <Link href="#" className="mb-4">
                <div className="flex items-center justify-center rounded-lg bg-[#277B12] py-2 px-6 hover:bg-emerald-700 transition-colors">
                  <p className="text-white text-xs font-semibold">Read More</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
