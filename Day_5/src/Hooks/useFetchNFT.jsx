import React, { useEffect, useState } from 'react'

const useFetchNFT = () => {

    const [NFTArray, setNFTArray] = useState([]);
    useEffect(() => {
      const nftData = Array.from({ length: 8 }).map((_, i) => ({
        status: "SYNCING",
        total: "2000",
        page: `${i + 1}`,
        page_size: "100",
        cursor: "",
        result: {
          token_address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
          token_id: `${15 + i}`,
          contract_type: "ERC721",
          owner_of: `0x057Ec652A4F150f7FF94f089A38008f49a0DF8${i}`,
          block_number: `${88256 + i}`,
          block_number_minted: `${88256 + i}`,
          token_uri: "",
          metadata: "",
          minter_address: "ERC1155 tokens don't have a single minter",
          normalized_metadata: "",
          media: "",
          amount: "1",
          name: "BoredApeYachtClub",
          symbol: "BAYC",
          token_hash: `502cee781b0fb40ea02508b21d319ce${i}`,
          rarity_rank: 782 - i,
          rarity_label: `Top ${8 - i}%`,
          rarity_percentage: 7.82 - i * 0.1,
          last_token_uri_sync: "2021-02-24T00:47:26.647Z",
          last_metadata_sync: "2021-02-24T00:47:26.647Z",
          possible_spam: "false",
          verified_collection: "false",
          collection_logo:
            "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format",
          collection_banner_image:
            "https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=1500&auto=format",
          collection_category: "collectibles",
          project_url: "https://boredapeyachtclub.com",
          wiki_url: "https://boredapeyachtclub.wiki",
          discord_url: "https://discord.gg/bayc",
          telegram_url: "https://t.me/BoredApeYC",
          twitter_username: "BoredApeYC",
          instagram_username: "boredapeyachtclub",
          list_price: {
            listed: true,
            price: 76.5 - i,
            price_currency: "ETH",
            price_usd: 178650.75 - i * 1000,
            marketplace: "OpenSea",
          },
          floor_price: 68.4 - i,
          floor_price_usd: 159724.8 - i * 900,
          floor_price_currency: "ETH",
          last_sale: {
            transaction_hash: `0x19e14f34b8f120c980f7ba05338d64c00${i}`,
            block_timestamp: "2023-04-04T15:59:11.000Z",
            buyer_address: `0xcb1c1fde09f811b294172696404e88e6586599${i}`,
            seller_address: `0x497a7dee2f13db161eb2fec060fa783cb04141${i}`,
            price: `${7300000000000000 + i * 1000000000000}`,
            price_formatted: `${(0.0073 + i * 0.001).toFixed(4)}`,
            usd_price_at_sale: `${13.61 + i}`,
            current_usd_value: `${15.53 + i}`,
            token_id: `${170 + i}`,
            payment_token: {
              token_name: "Ether",
              token_symbol: "ETH",
              token_logo: "https://cdn.moralis.io/eth/0x.png",
              token_decimals: "18",
              token_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            },
          },
        },
      }));
      console.log(nftData);
      setNFTArray(nftData);
    }, []);
  return {
    NFTArray, setNFTArray
  }
}

export default useFetchNFT