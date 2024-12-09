import type { LambdaInterface } from "@aws-lambda-powertools/commons/types";
import { parser } from "@aws-lambda-powertools/parser";
import type { Context } from "aws-lambda";
import { car } from "./generated/carSchema.mjs";
import { EventBridgeSchema } from "@aws-lambda-powertools/parser/schemas";
import { z } from "zod";
import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger();

const carEventSchema = EventBridgeSchema.extend({
  detail: car,
});

type CarEvent = z.infer<typeof carEventSchema>;

class Lambda implements LambdaInterface {
  @parser({ schema: carEventSchema })
  public async handler(_event: CarEvent, _context: Context): Promise<void> {
    debugger;
    if(_event.detail.data.vehicle.engine === "electric") {
      //Check battery health
      logger.info("Process EV");
    }
    console.log("processing")
  }
}

const myFunction = new Lambda();
export const handler = myFunction.handler.bind(myFunction);
