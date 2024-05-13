import { Route } from "./core/route";

// Controllers
import { UserController } from "../controllers/user";

// Middlewares
import { HTTP_METHODS } from "./core/methods";

export const USER_ROUTES: any[]  = [
    new Route({
        controller: UserController.get,
        method: HTTP_METHODS.GET,
        middlewares: [],
        url: "/users",
    }),
    new Route({
        controller: UserController.create,
        method: HTTP_METHODS.POST,
        middlewares: [],
        url: "/users",
    }),
    new Route({
        controller: UserController.getUser,
        method: HTTP_METHODS.GET,
        middlewares: [],
        url: "/users/:id",
    }),
    new Route({
        controller: UserController.update,
        method: HTTP_METHODS.UPDATE,
        middlewares: [],
        url: "/users",
    }),
    new Route({
        controller: UserController.delete,
        method: HTTP_METHODS.DELETE,
        middlewares: [],
        url: "/users/:id",
    }),
];
