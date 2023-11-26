"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  let [toasts, setToasts] = useState<string[]>([]);

  return (
    <div className="text-center mx-auto mt-20">
      <button
        onClick={() => setToasts([...toasts, window.crypto.randomUUID()])}
        className="bg-blue-500 text-white font-semibold text-sm px-3 py-2 rounded"
      >
        Add item
      </button>

      <div className="flex">
        <div className="mt-20 max-w-sm mx-auto">
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <motion.button
                key={toast}
                layout
                exit={{ opacity: 0 }}
                onClick={() =>
                  setToasts((toasts) => toasts.filter((t) => t !== toast))
                }
                className="block w-full p-4 bg-gray-100 rounded hover:bg-gray-200 whitespace-nowrap"
              >
                {toast}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
