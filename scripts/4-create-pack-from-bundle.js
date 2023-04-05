import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  const bundleModuleAddress = '0x55D34B91714866BCb1c05a5AE2C15D6e20Fb9084'; // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = '0x0Ec13279EFC97a6A0c73c9b10F40c2e28145333f'; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle...');
  const nftsInBundle = await bundleModule.getAll();

  console.log('NFTs in bundle:');
  console.log(nftsInBundle);

  console.log('Creating a pack containing the NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Korean Ape Yacht Club Mooncrate Pack!',
      image: readFileSync('assets/KAYC_pack.png'),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log('Pack created!')
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}