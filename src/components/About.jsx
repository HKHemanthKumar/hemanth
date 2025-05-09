import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
Infrastructure, DevOps, & Cloud Engineer with 8+ years of experience specializing in AWS Cloud Integration across banking, healthcare, retail sectors, and the trading domain. 
Proficient in automation and DevOps practices, leveraging AWS services, CI/CD pipelines, Kubernetes, Helm, Docker, Ansible, Terraform, Argo CD and Jenkins to streamline deployments, enhance scalability, and improve operational efficiency.  
Skilled in monitoring and observability tools like Grafana and Prometheus for real-time system performance tracking and proactive issue resolution.  
Strong hands-on experience in scripting, and UNIX/Linux environments, with a focus on optimizing infrastructure performance, troubleshooting issues, and ensuring seamless integrations across distributed systems.  
Well-versed in implementing cloud-native solutions using AWS to enhance reliability and scalability.  
Passionate about driving automation, improving system resilience, and delivering robust integration solutions for modern enterprise environments.  
Proficient in both team leadership and individual contributions..      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Add service cards here if needed */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
