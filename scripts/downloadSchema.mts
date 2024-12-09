import { DescribeSchemaCommand, SchemasClient } from "@aws-sdk/client-schemas";
import { jsonSchemaToZod } from "json-schema-to-zod";
import fs from "fs";

const registry = "ryan-demo-registry";

const client = new SchemasClient();

const res = await client.send(
  new DescribeSchemaCommand({
    RegistryName: registry,
    SchemaName: "car",
  })
);

const moduleWithType = jsonSchemaToZod(JSON.parse(res.Content!), {
  name: "car",
  module: "esm",
});

fs.writeFileSync("consumer/generated/carSchema.mts", moduleWithType);
console.log("Schema downloaded and saved to consumer/generated/carSchema.mts");
