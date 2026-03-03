import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import { useActiveSection } from '../../hooks/useActiveSection';
import { lenisInstance } from '../../hooks/useLenis';

export const NavMobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { activeSection } = useActiveSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const lenis = lenisInstance || window.lenis;
    if (href.startsWith('#')) {
      e.preventDefault();
      onClose();
      const scrollFn = () => {
        if (lenis) {
          lenis.scrollTo(href, { offset: 0, duration: 2.0 });
        } else {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      };
      setTimeout(scrollFn, 250); // Small delay to let menu animation start closing
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="mx-auto w-[calc(100%-2rem)] mt-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-2 md:hidden pointer-events-auto"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  relative flex items-center gap-3 px-4 py-3 rounded-xl 
                  font-sans text-[14px] font-black tracking-[0.2em] uppercase transition-all
                  ${isActive ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-pill"
                    className="absolute inset-0 bg-white/[0.15] rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
