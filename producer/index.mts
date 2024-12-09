import { Context } from "aws-lambda";
import { z } from "zod";
import { carSchema } from "./carSchema.mjs";

type CarSold = z.infer<typeof carSchema>;

export const handler = async (event: any, context: Context) => {
    const carSale: CarSold = {
        metadata: {
            correlationId: ""
        },
        data: {
            vehicle: {
                engine: "electric",
                manufacturer: "Porsche",
                model: "Taycan",
                salePrice: 70_000,
                vin: "1982837485",
                vrm: "AB12CDE"
            }
        }
    }

    const isValid = carSchema.safeParse(carSale);
    if(!isValid.success) {
        throw "schema is wrong - Consumers won't be happy";
    }
    //publish to bus
}