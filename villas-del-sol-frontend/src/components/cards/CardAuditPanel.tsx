export default function CardAuditPanel() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Auditoría
      </h3>

      <div className="space-y-4">

        <AuditItem
          label="Creado Por"
          value="Administrador"
        />

        <AuditItem
          label="Fecha Emisión"
          value="05/01/2026"
        />

        <AuditItem
          label="Última Modificación"
          value="15/05/2026"
        />

        <AuditItem
          label="Última Impresión"
          value="20/05/2026"
        />

      </div>

    </div>
  );
}

function AuditItem({
  label,
  value,
}: {
  label: string;

  value: string;
}) {
  return (
    <div>
      <p className="text-slate-400 text-sm">
        {label}
      </p>

      <p className="text-white font-semibold mt-1">
        {value}
      </p>
    </div>
  );
}