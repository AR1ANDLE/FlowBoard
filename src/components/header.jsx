import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, PlusCircle, Search, Edit, Trash } from "lucide-react";

export function Header({ onAdd, onEdit, onDelete, onSearch }) {
  const { scrollY } = useScroll();
  const [isCollapsed, setIsCollapsed] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  });

  const navItems = [
    { name: "Ajouter", onClick: onAdd, icon: PlusCircle },
    { name: "Modifier", onClick: onEdit, icon: Edit },
    { name: "Supprimer", onClick: onDelete, icon: Trash },
    { name: "Rechercher", onClick: onSearch, icon: Search },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        onClick={() => isCollapsed && setIsCollapsed(false)}
        className={`pointer-events-auto flex items-center bg-[#f6f8ff]/90 backdrop-blur-md border border-[#192a7a] text-slate-900 shadow-2xl transition-colors ${
          isCollapsed
            ? "rounded-full p-3 cursor-pointer hover:bg-[#192a7a] group"
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
              className="flex items-center justify-center text-[#192a7a] group-hover:text-white"
              title="Agrandir le menu"
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
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onClick?.();
                      }}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
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

export default Header;