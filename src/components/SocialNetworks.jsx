import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/rauloliveiratech",
    github: "https://github.com/rauloliveiratech",
    instagram: "https://www.instagram.com/raul.oliveirazx/",
  };

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={socialLinks[network.name]}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
