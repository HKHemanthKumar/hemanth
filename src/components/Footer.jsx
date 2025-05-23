import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className='rounded-2xl bg-black-100'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px] flex justify-between items-center flex-wrap gap-5`}>
        <div>
          <p className='text-white font-bold text-[24px]'>Hemanth Kumar HK</p>
          <p className='mt-1 text-secondary'>AWS & DevOps Engineer</p>
          <p className='mt-1 text-secondary'>Email - hkhemanthkumar1806@gmail.com</p>
          <p className='mt-1 text-secondary'>Contact - +91 9741143143</p>
        </div>
        
        <div className='flex gap-5'>
          <a
            href="https://github.com/HKHemanthKumar"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hk-hemanth-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            LinkedIn
          </a>
          <a
            href="mailto:hkhemanthkumar1806@gmail.com"
            className='transition-colors text-secondary hover:text-white'
          >
            Email
          </a>
        </div>
      </div>
      
      <div className='flex justify-center items-center py-5 w-full'>
        <p className='text-secondary text-[14px]'>
          © {new Date().getFullYear()} Hemanth Kumar HK. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
