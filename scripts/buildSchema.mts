import fs from "fs";
import { zodToJsonSchema } from "zod-to-json-schema";
import { SchemasClient, UpdateSchemaCommand } from "@aws-sdk/client-schemas";
import { carSchema } from "../producer/carSchema.mjs";

const client = new SchemasClient();
const registryName = "ryan-demo-registry";

const jsonSchema = zodToJsonSchema(carSchema);

fs.writeFileSync("producer/generated/car.json", JSON.stringify(jsonSchema, null, 2));
console.log("Schema written to producer/generated/car.json");

try {
  await client.send(
    new UpdateSchemaCommand({
      RegistryName: registryName,
      SchemaName: "car",
      Content: JSON.stringify(jsonSchema),
      Type: "JSONSchemaDraft4",
    })
  );
  console.log("Schema updated in registry");
} catch (error) {
}

console.log("Schema updated in registry");
