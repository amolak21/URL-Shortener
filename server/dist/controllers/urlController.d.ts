import { Request, Response } from "express";
export declare const shortenUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const redirectUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const listUrls: (req: Request, res: Response) => Promise<void>;
export declare const deleteUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=urlController.d.ts.map