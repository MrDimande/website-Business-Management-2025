import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from './use-toast'
import { useEffect } from 'react'

export default function Toaster() {
  const { toasts, removeToast } = useToast()

  useEffect(() => {
    // Auto dismiss dos toasts após 3s
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 3000)
    )

    return () => timers.forEach((t) => clearTimeout(t))
  }, [toasts, removeToast])

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-lg shadow-xl text-white cursor-pointer ${
              toast.type === 'success'
                ? 'bg-green-500'
                : toast.type === 'error'
                ? 'bg-red-500'
                : 'bg-blue-500'
            }`}
            onClick={() => removeToast(toast.id)} // também fecha ao clicar
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
