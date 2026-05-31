import type {
  Card,
} from "../../types/card";

interface Props {
  cards: Card[];

  onSelectCard: (
    card: Card
  ) => void;
}

export default function CardsTable({
  cards,
  onSelectCard,
}: Props) {
  function getPermissions(
    card: Card
  ) {
    const permissions: string[] =
      [];

    if (
      card.permissions
        .pedestrian
    ) {
      permissions.push(
        "Peatonal"
      );
    }

    if (
      card.permissions
        .vehicle
    ) {
      permissions.push(
        "Vehicular"
      );
    }

    return permissions.join(
      " + "
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr className="text-left">
            <th className="p-5">
              Residente
            </th>

            <th className="p-5">
              Carnet
            </th>

            <th className="p-5">
              RFID
            </th>

            <th className="p-5">
              Permisos
            </th>

            <th className="p-5">
              Estado
            </th>
          </tr>
        </thead>

        <tbody>
          {cards.map(
            (card) => (
              <tr
                key={card.id}
                onClick={() =>
                  onSelectCard(
                    card
                  )
                }
                className="border-t border-slate-700 hover:bg-slate-800 cursor-pointer"
              >
                <td className="p-5 text-white">
                  {
                    card.residentName
                  }
                </td>

                <td className="p-5 text-white">
                  {
                    card.cardNumber
                  }
                </td>

                <td className="p-5 text-white">
                  {
                    card.rfidCode
                  }
                </td>

                <td className="p-5 text-white">
                  {getPermissions(
                    card
                  )}
                </td>

                <td className="p-5">
                  <span
                    className={
                      card.status ===
                      "ACTIVE"
                        ? "text-green-400"
                        : card.status ===
                          "BLOCKED"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }
                  >
                    {
                      card.status
                    }
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}