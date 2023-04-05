import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x0Ec13279EFC97a6A0c73c9b10F40c2e28145333f';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}