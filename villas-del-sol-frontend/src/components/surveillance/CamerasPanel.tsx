import type {
  CameraDevice,
} from "../../types/surveillance";

interface Props {
  cameras: CameraDevice[];
}

export default function CamerasPanel({
  cameras,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Estado de Cámaras
      </h2>

      <div className="space-y-4">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="border border-slate-800 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {camera.name}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {camera.location}
              </p>
            </div>

            <StatusBadge
              status={camera.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({
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