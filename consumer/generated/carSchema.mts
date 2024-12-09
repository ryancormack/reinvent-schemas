import { z } from "zod"

export const car = z.object({ "metadata": z.object({ "correlationId": z.string().uuid() }).strict(), "data": z.object({ "vehicle": z.object({ "manufacturer": z.string().describe("The manufacturer of the vehicle"), "model": z.string(), "salePrice": z.number().gte(5000).lte(200000).describe("The sale price of the vehicle"), "vrm": z.string(), "vin": z.string(), "engine": z.enum(["petrol","diesel","electric"]) }).strict() }).strict() }).strict()
