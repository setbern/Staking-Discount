

const STX_API = "https://stacks-node-api.mainnet.stacks.co/";

const fetchWalletHolding = async (wallet, offset) => {
  if (wallet === null) {
    throw new Error('No wallet address provided');
  }
  try {
    const asset_identifiers =
      'asset_identifiers=SP27F9EJH20K3GT6GHZG0RD08REZKY2TDMD6D9M2Z.btc-badgers-v2::btc-badgers-nft-v2&asset_identifiers=SP27F9EJH20K3GT6GHZG0RD08REZKY2TDMD6D9M2Z.baby-badgers::baby-badgers';

    const fetchURL = `${STX_API}extended/v1/tokens/nft/holdings?principal=${wallet}&${asset_identifiers}&offset=${offset}`;

    const initalWalletFetchHolding = await fetch(fetchURL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        return data;
      });

    return initalWalletFetchHolding;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
export const fetchWalletHoldingV2 = async principal => {
  try {
    const initalWalletFetchHolding = await fetchWalletHolding(principal, 0);

    let totalFetchedAssets = [...initalWalletFetchHolding.results];
    const totalAssetsInWallet = initalWalletFetchHolding.total;

    if (totalAssetsInWallet >= 50) {
      while (totalAssetsInWallet > totalFetchedAssets.length) {
        const nextWalletFetchHolding = await fetchWalletHolding(
          principal,
          totalFetchedAssets.length
        );

        totalFetchedAssets = [...totalFetchedAssets, ...nextWalletFetchHolding.results];
      }
    }
    // loop through totalFetchedAssets returning fetchassetmeta

    const holdingWithMeta = await Promise.all(
      totalFetchedAssets.map(async holding => {
        const contractId = holding.asset_identifier.split('::')[0];
        const assetId = holding.value.repr.replace('u', '');

        const assetMeta = await fetchAssetMeta(contractId, assetId);

        return assetMeta;
      })
    );

    // save holdingWithMeta to localstorage as key walletAssetHolding
    const cleanHoldings = holdingWithMeta
      .filter((d, i) => {
        if (d.result === true) {
          return true;
        } else {
          return false;
        }
      })
      .map((d, i) => {
        return d.data;
      });

    return cleanHoldings;
  } catch (err) {
    console.log('we ran into an err with fetchWalletHoldingV2', err);
  }
};

export const fetchAssetMeta = async (contractId, assetId) => {
    try {
      const assetmeta = await fetch(`https://gamma.io/api/v1/collections/${contractId}/${assetId}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(data => {
          return data;
        })
        .catch(err => {
          throw new Error(err);
        });
  
      return assetmeta;
    } catch (error) {
        console.error(error);
        return null;
        }
    };
  