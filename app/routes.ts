import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/splash.tsx"),
    route("/signin", "routes/signin.tsx"),
    ...prefix("forgot-password", [
        index("routes/forgot-password.tsx"),
        route("/enter-otp", "routes/otp.tsx"),
        route("/new-password", "routes/reset-password.tsx")
    ]),
] satisfies RouteConfig;
