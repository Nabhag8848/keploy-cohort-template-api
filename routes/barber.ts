import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { BarberController } from "./controller/barber";

const router = Router();

router.post("/signup", [], asyncHandler(BarberController.newBarber));
router.get("/:username", [], asyncHandler(BarberController.uniqueBarber));
router.delete(
  "/:username",
  [],
  asyncHandler(BarberController.deleteBarberByUsername)
);
router.get("/", [], asyncHandler(BarberController.test));

export { router as barberRouter };
