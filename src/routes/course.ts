import { Route } from "./core/route";

// Controllers
import { CourseController } from "../controllers/course";

// Middlewares
import { HTTP_METHODS } from "./core/methods";

export const COURSE_ROUTES: any[]  = [
    new Route({
        controller: CourseController.get,
        method: HTTP_METHODS.GET,
        middlewares: [],
        url: "/courses",
    }),
    new Route({
        controller: CourseController.create,
        method: HTTP_METHODS.POST,
        middlewares: [],
        url: "/courses",
    }),
    new Route({
        controller: CourseController.getCourse,
        method: HTTP_METHODS.GET,
        middlewares: [],
        url: "/courses/:id",
    }),
    new Route({
        controller: CourseController.update,
        method: HTTP_METHODS.UPDATE,
        middlewares: [],
        url: "/courses",
    }),
    new Route({
        controller: CourseController.delete,
        method: HTTP_METHODS.DELETE,
        middlewares: [],
        url: "/courses/:id",
    }),
];
