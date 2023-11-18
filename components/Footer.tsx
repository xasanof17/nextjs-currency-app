import Link from "next/link";
import { FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/xasanof17",
    Icon: FaGithub,
  },
  {
    href: "https://instagram.com/1henotorious_",
    Icon: FaInstagram,
  },
  {
    href: "https://t.me/xxvlw",
    Icon: FaTelegramPlane,
  },
];

const Footer = () => {
  return (
    <div className="fixed bottom-5 right-0 left-0 lg:left-auto lg:right-4 z-10">
      <ul className="flex flex-row items-center justify-center space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
        {socials.map(({ href, Icon }, i) => (
          <li key={i}>
            <Link
              target="_blank"
              href={href}
              className="flex items-center justify-center rounded-full border bg-background p-3"
            >
              <Icon className="text-foreground" size={25} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
