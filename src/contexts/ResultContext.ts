import { createContext } from "react";
import { Result } from "../models/Result";

export interface IResultContext {
    result: Result;
}

export const ResultContext = createContext<IResultContext>({
    result: new Result('')
});