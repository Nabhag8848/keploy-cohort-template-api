import { Barber } from "../services/database/schema/barber";
import { IBarber } from "../types/barber";

export const getBarberByUsername = async (
  username: string,
  email: string
): Promise<IBarber | undefined> => {
  const isBarberExist = await Barber.find({ username, email });
  if (isBarberExist.length === 0) return undefined;
  return isBarberExist[0];
};

export const getBarberByJustUsername = async (
  username: string
): Promise<IBarber | undefined> => {
  const isBarberExist = await Barber.find({ username });
  if (isBarberExist.length === 0) return undefined;
  return isBarberExist[0];
};

export const deleteBarberByUsername = async (
  username: string
): Promise<boolean> => {
  const isBarberDeleted = await Barber.deleteOne({
    username,
  });
  return isBarberDeleted.acknowledged;
};
