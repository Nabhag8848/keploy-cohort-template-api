import { NextFunction, Request, Response } from "express";
import { createBarber } from "../../lib/createBarber";
import { getUserByUsername } from "../../lib/getUserbyUsername";
import {
  deleteBarberByUsername,
  getBarberByJustUsername,
} from "../../lib/getBarberByUsername";

export class BarberController {
  static newBarber = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let { username, password, email } = req.body;
    const user = await createBarber(username, email, password);
    res.status(201).type("json").send(user);
  };

  static uniqueBarber = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username } = req.params;
    const user = await getBarberByJustUsername(username);
    if (user) {
      res.status(200).type("json").send(user);
    }

    res.status(404).type("json").send({ message: "No Such User" });
  };

  static deleteBarberByUsername = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username } = req.params;
    const acknowledged = await deleteBarberByUsername(username);
    res
      .status(200)
      .type("json")
      .send({ message: `deleted - ${acknowledged}` });
  };

  static test = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).type("json").send({ message: "test" });
  };
}
