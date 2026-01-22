import { Link } from "react-router-dom";
import { contacts } from "../utils/Constant";
import {
  FillCallIcon,
  FillLocationIcon,
  FillMailIcon,
  FillFacebookIcon,
  FillTwitterIcon,
  FillLinkedInIcon,
  FillInstagramIcon,
  LoginIcon,
} from "../utils/ContactIcons";

const NewFooter = () => {
  const links = [
    {
      title: "Offices",
      listOfLinks: contacts.addresses.map((addr) => ({
        name: addr.address_1,
        href: addr.link || "#",
        icon: <FillLocationIcon />,
      })),
    },
    {
      title: "Company",
      listOfLinks: [
        {
          name: "About Us",
          href: "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
        },
        { name: "Careers", href: "https://app.eazotel.com/career" },
        { name: "Blog", href: "https://fielmente.com/blogs/" },
        { name: "Cases Studies", href: "https://fielmente.com/case-study/" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "Quick Links",
      listOfLinks: [
        { name: "Our Work", href: "/our-work" },
        {
          name: "Services",
          href: "https://fielmente.com/hospitality-marketing-services/",
        },
        { name: "OTA Management", href: "https://ota.eazotel.com/" },
      ],
    },
    {
      title: "Contact",
      listOfLinks: [
        {
          name: contacts.phone[0],
          href: `tel:${contacts.phone[0]}`,
          icon: <FillCallIcon />,
        },
        ...contacts.email.map((email) => ({
          name: email,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },

    {
      title: "Follow Us",
      listOfLinks: [
        {
          name: "Facebook",
          href: contacts.socialMedia.facebook,
          icon: <FillFacebookIcon />,
        },
        {
          name: "Twitter",
          href: contacts.socialMedia.twitter,
          icon: <FillTwitterIcon />,
        },
        {
          name: "Linkedin",
          href: contacts.socialMedia.linkedin,
          icon: <FillLinkedInIcon />,
        },
        {
          name: "Instagram",
          href: contacts.socialMedia.instagram,
          icon: <FillInstagramIcon />,
        },
      ],
    },

    {
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Data Deletion", href: "/data-deletion" },
        { name: "Cookie Policy", href: "" },
      ],
    },
  ];
  return (
    <footer className="max-w-[1600px] w-full mx-auto bg-tertiary md:pt-16 pt-12">
      <div className="max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 md:pb-16 pb-12">
          {/* contact */}
          <div className="space-y-6">
            <Link to="/" className="relative aspect-[4/.8] w-full block">
              <img
                src="/logo-1.png"
                alt="logo"
                className="object-cover w-full h-full absolute inset-0 z-10"
              />
            </Link>
            <div className="">
              <h2 className="text-2xl font-bold text-primary">
                {links[0].title}
              </h2>
              <ul className="space-y-3">
                {links[0].listOfLinks.map((link, index) => (
                  <li key={index} className="flex gap-2 my-2">
                    <span>{link.icon}</span>
                    <Link
                      to={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={contacts.logoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary border border-primary transition hover:scale-x-105 active:scale-95"
              >
                <span>
                  <LoginIcon />
                </span>
                Login
              </Link>
            </div>
          </div>
          {/* other links */}
          {links.slice(1, 4).map((link, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{link.title}</h2>
              <ul className="space-y-2">
                {link.listOfLinks.map((link, subIndex) => (
                  <li key={subIndex} className="my-2">
                    <Link
                      to={link.href}
                      target={
                        link.href?.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="text-primary flex gap-2"
                    >
                      {link.icon && <span className="">{link.icon}</span>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {index === 2 && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-primary">
                    {links[4].title}
                  </h2>
                  <ul className="flex items-center gap-4 mt-2">
                    {links[4].listOfLinks?.map((socialLink, socialIndex) =>
                      socialLink.href ? (
                        <li key={socialIndex} className="">
                          <Link
                            to={socialLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 rounded-md border border-secondary aspect-square flex items-center justify-center bg-primary text-white hover:shadow-xl shadow-secondary transition hover:scale-105 active:scale-95"
                          >
                            {socialLink.icon}
                          </Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-primary py-4">
        <div className="max-width">
          <div className="flex items-center justify-between">
            <p className="text-white">
              © {new Date().getFullYear()} Eazotel. All rights reserved.
            </p>
            <ul className="flex items-center">
              {links[5].links.map((link, index) => (
                <li key={index} className="">
                  {link.href ? (
                    <Link to={link.href} className="text-white">
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-white">{link.name}</span>
                  )}
                  {index !== links[5].links.length - 1 && (
                    <span className="text-white pr-2 pl-1"> | </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
