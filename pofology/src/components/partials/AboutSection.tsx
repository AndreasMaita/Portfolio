import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FaFileAlt } from 'react-icons/fa';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';
import styles from '@/styles/modules/AboutSection.module.scss';
import Link from 'next/link';

const handleScroll = () => {
  window.scrollTo({ top: 2200, behavior: 'smooth' });
};


const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className={styles.yourClassName}>
        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
          {/* Bio */}
          <div className="">
            <p className="text-justify">
              Hi, I am Andreas Maita, I am a Software Engineer. I work from Stuttgart, Germany. I have rich
              experience in building, designing & customizing websites, web apps, mobile apps and microservice backend systems.
            </p>
            <Button 
              href="/Lebenslauf-2025.pdf"
              className="mt-5"
              download
            >
              Download CV
            </Button>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Backend</h6>
                <p>100%</p>
              </div>
              <ProgressBar color="blue" progress={100} />
            </div>
            <div className="">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Frontend</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="amber" progress={90} />
            </div>

            <div className="">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Mobile App</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="rose" progress={90} />
            </div>
            <div className="">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">DevOps</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="green" progress={90} />
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex pt-2">
            <div className="p-2 mr-5 text-gray-300">
              <HiOutlineFire size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">5+</h2>
              <p className="mt-1">Projects Completed</p>
            </div>
          </div>

          <div onClick={handleScroll} className="flex pt-2 rounded-lg cursor-pointer hover:bg-gray-500 transition-colors duration-300">
            <div className="mr-5 p-2 text-gray-300">
              <FaFileAlt size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">3+</h2>
              <p className="mt-1">Certificates</p>
            </div>
          </div>

          <div className="pt-2 flex">
            <div className="p-2 mr-5 text-gray-300">
              <HiOutlineUsers size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">4+</h2>
              <p className="mt-1">Satisfied clients</p>
            </div>
          </div>

          <div className="pt-2 flex">
            <div className="p-2 mr-5 text-gray-300">
              <HiOutlineChartBar size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">5+</h2>
              <p className="mt-1">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
