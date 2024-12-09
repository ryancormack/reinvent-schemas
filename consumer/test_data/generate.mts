import { generateMock } from "@anatine/zod-mock";
import { carSchema } from "../../producer/carSchema.mjs";
import { faker } from "@faker-js/faker";
import fs from "fs";

const mockData = generateMock(carSchema, {
  stringMap: {
    manufacturer: () => faker.vehicle.manufacturer(),
    model: () => faker.vehicle.model(),
    vin: () => faker.vehicle.vin(),
    vrm: () => faker.vehicle.vrm(),
  },
});

const ebWrapper = {
  detail: mockData,
  "version": "0",
  "id": "17793124-05d4-b198-2fde-7ededc63b103",
  "resources": [
  ],
  "source": "demo-app",
  "account": "111122223333",
  "time": "2021-11-12T00:00:00Z",
  "region": "eu-west-1",
  "detail-type": "car",
};

fs.writeFileSync(
  "consumer/test_data/carMockData.json",
  JSON.stringify(ebWrapper, null, 2)
);

console.log("Mock data written to consumer/test_data/carMockData.json");
