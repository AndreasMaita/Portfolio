import { certifications } from '@/data/certifications';
import SectionTitle from '../shared/SectionTitle';
import { FiBriefcase } from 'react-icons/fi';

const bgClasses = [
  'bg-grey-300 text-indigo-100'
];

const getBackgroundClass = (index: number) => {
  return bgClasses[index % bgClasses.length];
};
// TODO:
const CertificateSection = () => {
  return (
    <>
      <SectionTitle>Certifications</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2">@
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol>
              {certifications.map((certificate, index) => (
                <li key={index}>
                  <span>
                    <FiBriefcase className='h-5' />
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateSection;