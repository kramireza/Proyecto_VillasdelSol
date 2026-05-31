import type {
  DeviceStatus,
} from "../../types/access";

interface Props {
  devices: DeviceStatus[];
}

export default function DevicesPanel({
  devices,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Estado de Dispositivos
        </h2>

        <p className="text-slate-400 mt-2">
          Monitoreo operativo en tiempo
          real.
        </p>
      </div>

      <div className="space-y-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="border border-slate-800 rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">
                {device.name}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {device.type}
              </p>
            </div>

            <DeviceBadge
              status={device.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceBadge({
  status,
}: {
  status:
    | "ONLINE"
    | "OFFLINE"
    | "WARNING";
}) {
  const styles = {
    ONLINE:
      "bg-green-500/20 text-green-400",

    OFFLINE:
      "bg-red-500/20 text-red-400",

    WARNING:
      "bg-yellow-500/20 text-yellow-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}