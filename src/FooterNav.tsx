import React, { useEffect, useState } from "react";

interface FooterNavProps {
  links: { label: string; id: string }[];
}

const FooterNav: React.FC<FooterNavProps> = ({ links }) => {
  const [visible, setVisible] = useState(false);
  const [animation, setAnimation] = useState('');
  const hideTimeout = React.useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }
        setVisible(true);
        setAnimation('animate-slideUp');
      } else {
        setAnimation('animate-slideOut');
        hideTimeout.current = setTimeout(() => {
          setVisible(false);
        }, 300); // match animation duration
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <footer
      className={`fixed left-0 w-full flex justify-center z-50 pointer-events-none bottom-4 ${visible ? animation : 'opacity-0 -bottom-20'}`}
      style={{ willChange: 'transform', display: visible ? undefined : 'none' }}
    >
      <nav className="flex justify-center items-stretch gap-0 bg-[#545454] rounded-xl px-6 shadow-lg pointer-events-auto">
        {links.map(({ label, id }, idx) => (
          <React.Fragment key={id}>
            <a
              href={`#${id}`}
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="text-white font-medium text-[16px] px-4 py-2 h-full flex items-center rounded transition-colors duration-200 hover:text-[#c2c1c1e6]"
              style={{ textDecoration: 'none' }}
            >
              {label}
            </a>
            {idx < links.length - 1 && (
              <span className="h-full w-1 bg-white mx-2" aria-hidden="true"></span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </footer>
  );
};

export default FooterNav;
