import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/harvs05" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/harvey-varela/" },
  { icon: <FaTwitter />, path: "https://www.x.com/@harveey_varela" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/hackerteam50" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
