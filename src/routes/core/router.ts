
import { Express } from "express";
import { HTTP_METHODS } from "./methods";
import { Route } from "./route";

// Routes
import { COURSE_ROUTES } from "../course";
import { USER_ROUTES } from "../user";

export class Router {

    public static ROUTES: Route[][] = [
        USER_ROUTES,
        COURSE_ROUTES,
    ];

    public static registerRoutes(app: Express) {
        this.ROUTES.forEach((routes) => {
            routes.forEach((route) => {
                const method = this.resolveMethod(route.method);

                if (route.middlewares.length > 0) {
                    route.middlewares.forEach((middleware) => {
                        app.use(route.url, middleware.canActivate);
                    });
                }

                app[method](route.url, route.controller);
            });
        });
    }

    private static resolveMethod(enumMethod) {
        let out;

        switch (enumMethod) {
            case HTTP_METHODS.GET:
                out = "get";
                break;
            case HTTP_METHODS.POST:
                out = "post";
                break;
            case HTTP_METHODS.UPDATE:
                out = "put";
                break;
            case HTTP_METHODS.DELETE:
                out = "delete";
                break;
            default:
                out = "get";
                break;
        }

        return out;
    }
}
