import { Router } from "express";
import {
  getCurrentUser,
  updateUser,
  getApplicationStatus,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-status", [
  authorizePermissions("admin"),
  getApplicationStatus,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
