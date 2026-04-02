import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProgramsSection = () => {
  const updates = [
    { 
      id: 1, 
      img: '/chefsmall1.png', 
      title: 'Bakepreneur Program', 
      description: 'Bakeprenuer Nigeria is a youth empowerment and skills development initiative focused on the baking and food industry. It seeks to equip young Nigerians with practical skills to enable them to start small-scale businesses, create job opportunities.' 
    },
    { 
      id: 2, 
      img: '/student1.png', 
      title: 'Youth Migration Awareness', 
      description: 'The Youth Migration Awareness & Management Programme seeks to address irregular migration challenges by educating young people on safe migration pathways, risks of irregular migration, and opportunities for empowerment within Nigeria.' 
    },
    { 
      id: 3, 
      img: '/corper1.png', 
      title: 'National Youth Policy', 
      description: 'The National Youth Policy Validation Workshop provides a platform for stakeholders to review and validate the revised National Youth Policy. It ensures inclusivity, stakeholder input, and alignment of the policy with current realities facing Nigerian youths.'
    },
  ];

  const activePrograms = [
    "LOCAL YOUTH EXCHANGE PROGRAMME",
    "TRAINING AND EMPOWERMENT OF YOUTH ON WASTE TO WEALTH MANAGEMENT, RECYCLING AND REUSE IN EACH OF THE 6 GEO-POLITICAL ZONES",
    "YOUTH MENTAL HEALTH AND PSYCHOSOCIAL SUPPORT (MHPS) PROGRAMME NATION-WIDE",
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center px-8 bg-white">
      <h3 className="text-center text-xl text-[#277B12] font-semibold my-7 tracking-widest ">UPDATES</h3>
      
      <div className="w-full bg-white mb-14 border-b-[1px] border-green-500 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {updates.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="overflow-hidden h-52 relative">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-5 flex flex-col items-center text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  href="#" 
                  className="bg-[#277B12] text-white text-xs font-semibold px-8 py-2.5 rounded-full hover:bg-emerald-700 transition-colors mt-auto"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Programs - No changes made here to maintain your style */}
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

      {/* Upcoming Programs */}
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center text-xl text-[#277B12] font-semibold my-7">Upcoming Programs</h3>
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
      </div>
    </section>
  );
};

export default ProgramsSection;
