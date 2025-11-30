import express from "express";
import ProductController from "../controllers/ProductController.js";
import validate from "../middleware/validate.js";
import { createProductSchema, updateProductSchema } from "../validators/productValidator.js";

const router = express.Router();

router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", validate(createProductSchema), ProductController.store);
router.put("/:id", validate(updateProductSchema), ProductController.update);
router.delete("/:id", ProductController.destroy);

export default router;
