import type { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

type DrawerProps = {
  open: boolean;
  title: string;
  width?: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Drawer({
  open,
  title,
  width = "max-w-2xl",
  children,
  onClose,
}: DrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div
        className={`relative h-full w-full ${width} bg-slate-900 border-l border-slate-700 overflow-y-auto`}
      >
        <div className="flex items-center justify-between border-b border-slate-700 p-6">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}