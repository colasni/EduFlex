import { Router } from "express";
import {
    getAllCourses,
    addCourses,
    getCoursesById,
}   from "../controllers/courseController";

const router = Router();


router.get("/", getAllCourses);
router.post("/", addCourses);
router.get("/:id", getCoursesById);

export default router;