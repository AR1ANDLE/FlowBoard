import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function TaskModal({ isOpen, onClose }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold">Ajouter une tâche</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between w-full">
                <label>
                  <p>Titre</p>
                <input
                  type="text"
                  required
                  placeholder="Nom de la tâche..."
                  />
                </label>
                <label>
                    <p>Status</p>    
                    <select>
                        <option value="Todo">Todo</option>
                        <option value="Done">Done</option>
                        <option value="Doing">Doing</option>
                    </select>
                </label>
              </div>

              <div>
                <label>
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Détails de la tâche..."
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <label>
                  <p>Assign to</p>
                <input
                  type="text"
                  required
                  placeholder="Assigne to..."
                  />
                </label>
                <label className="w-full">
                    <p>Priorite</p>    
                    <select>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
              </div>

            <div className="flex items-center justify-between w-full">
                <label>
                  <p>Due Data</p>
                <input
                  type="date"
                  required
                  />
                </label>
                <label className="w-full">
                    <p>Tags</p>
                    <input type="text" placeholder="Seperate tags with spaces..."/>
                </label>
              </div>
              <div className="mt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default TaskModal;