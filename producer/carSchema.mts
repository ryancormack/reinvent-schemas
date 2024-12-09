import { z } from "zod";

// export const carSchema = z.object({
//     metadata: z.object({
//         correlationId: z.string(),
//     }),
//     data: z.object({
//         vehicle: z.object({
//             manufacturer: z.string(),
//             model: z.string(),
//             salePrice: z.number({
//             }),
//             vrm: z.string(),
//             vin: z.string(),
//             engine: z.enum(["petrol", "diesel", "electric"]),
//         }),
//     }),
//   });







  export const carSchema = z.object({
    metadata: z.object({
        correlationId: z.string().uuid(),
    }),
    data: z.object({
        vehicle: z.object({
            manufacturer: z.string({
                description: "The manufacturer of the vehicle",
            }),
            model: z.string(),
            salePrice: z.number({
                description: "The sale price of the vehicle",
            }).min(5000).max(200_000),
            vrm: z.string(),
            vin: z.string(),
            engine: z.enum(["petrol", "diesel", "electric"]),
        }),
    }),
  });
