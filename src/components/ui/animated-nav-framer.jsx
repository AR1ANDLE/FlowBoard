import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Menu } from "lucide-react";

export function AnimatedNavFramer() {
  const { scrollY } = useScroll();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80 && !isCollapsed) {
      setIsCollapsed(true);
    } else if (latest <= 80 && isCollapsed) {
      setIsCollapsed(false);
    }
  });

  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#", icon: User },
    { name: "Projects", href: "#", icon: Briefcase },
    { name: "Contact", href: "#", icon: Mail },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        onClick={() => isCollapsed && setIsCollapsed(false)}
        className={`pointer-events-auto flex items-center bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white shadow-2xl transition-colors ${
          isCollapsed
            ? "rounded-full p-3 cursor-pointer hover:bg-slate-800 hover:border-slate-700"
            : "rounded-full px-6 py-3"
        }`}
      >
        <AnimatePresence mode="wait">
          {isCollapsed ? (
            <motion.div
              key="collapsed-icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center text-blue-400"
              title="Click to expand"
            >
              <Menu className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.ul
              key="expanded-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-6 text-sm font-medium"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default AnimatedNavFramer;