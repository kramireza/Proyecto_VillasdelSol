import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>

          {subtitle && (
            <p className="text-xs text-slate-500 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div className="text-3xl text-amber-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}