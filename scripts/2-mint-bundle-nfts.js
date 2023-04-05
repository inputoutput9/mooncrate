import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0x55D34B91714866BCb1c05a5AE2C15D6e20Fb9084';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Korean Ape Yacht Club',
        description: 'A pretty rare KAYC!',
        image: readFileSync('assets/bayc_1.png'),
        properties: {
          rarity: 'rare',
          korean: 4,
        }
      },
      supply: 600,
    },
    {
      metadata: {
        name: 'Korean Ape Yacht Club',
        description: 'A pretty unique KAYC!',
        image: readFileSync('assets/bayc_2.png'),
        properties: {
          rarity: 'unique',
          korean: 7,
        }
      },
      supply: 300,
    },
    {
      metadata: {
        name: 'Korean Ape Yacht Club',
        description: 'A FU*KING LEGENDARY KAYC!',
        image: readFileSync('assets/bayc_3.png'),
        properties: {
          rarity: 'legendary',
          korean: 10,
        }
      },
      supply: 100,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}