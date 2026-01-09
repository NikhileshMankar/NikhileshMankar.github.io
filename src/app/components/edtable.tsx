import React, { useEffect, useRef, useState } from 'react';

const plans = ['Institution', 'Year', 'Score'];

const educationRecords = [
  {
    degree: 'PhD (AI & DS)',
    institution: 'DMIHER (DU), Wardha',
    year: 'Ongoing',
    score: '--',
  },
  {
    degree: 'M.E. in Software Engineering',
    institution: 'Dr. Babasaheb Ambedkar Technological University',
    year: '2022',
    score: '9.25 CGPA',
  },
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'D.Y. Patil Institute of Engineering, Pune University',
    year: '2014',
    score: '61.2%',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'D.Y. Patil Polytechnic Ambi, Pune, MSBTE',
    year: '2011',
    score: '70.0%',
  },
  {
    degree: 'SSC',
    institution: 'Maharashtra State Board',
    year: '2005',
    score: '67.7%',
  }
];

const EducationTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation has triggered
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the table is visible
        rootMargin: '50px'
      }
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={tableRef} className="overflow-x-auto bg-[#07080a] text-white py-10 px-4">
      <table className="mx-auto w-[55vw] justify-center text-center">
        <thead>
          <tr>
            <th className={`w-64 ${isVisible ? 'border-animate border-b' : ''} text-left py-4 px-4 ${isVisible ? 'animate-border-1' : ''}`}></th>
            {plans.map((plan, index) => (
              <th key={plan} className={`px-8 py-4 text-lg font-semibold text-white ${isVisible ? 'border-animate border-b' : ''} ${index === 1 ? 'border-l' : ''} ${isVisible ? (index === 0 ? 'animate-border-1' : index === 1 ? 'animate-border-2' : 'animate-border-3') : ''}`}>
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {educationRecords.map((record, i) => (
            <tr key={i} className={isVisible ? 'border-animate border-t' : ''}>
              <td className={`py-6 px-4 align-top text-sm font-semibold text-white ${isVisible ? 'border-animate border-t' : ''} text-left ${isVisible ? 'animate-border-1' : ''}`}>
                {record.degree}
              </td>
              <td className={`px-8 py-6 text-sm text-white ${isVisible ? 'border-animate border-t' : ''} ${isVisible ? 'animate-border-1' : ''}`}>
                {record.institution}
              </td>
              <td className={`px-8 py-6 text-sm text-white ${isVisible ? 'border-animate border-t' : ''} border-l ${isVisible ? 'animate-border-2' : ''}`}>
                {record.year}
              </td>
              <td className={`px-8 py-6 text-sm text-white ${isVisible ? 'border-animate border-t' : ''} !border-r-0 ${isVisible ? 'animate-border-3' : ''}`}>
                {record.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
