import express from "express";
import getPartnerswithIn from "../controllers/partnersController";

const router = express.Router();
router.route("/:distance").get(getPartnerswithIn);

export default router;
