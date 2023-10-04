import { Request, Response } from "express";

class IndexController {
  public static index = (req: Request, res: Response, next: any) => {
    res.render("index", { title: "InfoDev" });
  };
}

export default IndexController;
