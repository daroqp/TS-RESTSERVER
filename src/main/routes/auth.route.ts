import { Router } from "express";

export default (router: Router): void => {
    router.get("/auth", (req, res) => res.send("hola"));
};
