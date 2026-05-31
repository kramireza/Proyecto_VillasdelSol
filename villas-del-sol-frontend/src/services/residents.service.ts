import api from "./api";

import type { Resident } from "../types/resident";

export async function getResidents(): Promise<
  Resident[]
> {
  const response = await api.get("/residents");

  return response.data;
}