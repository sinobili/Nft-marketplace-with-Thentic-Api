import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccounts } from "../Store/slicers/accounts";

export const useSetAccount = () => {
  const dispatch = useDispatch();
  const connectAccount = async () => {
    if (!window.ethereum) {
      throw Error("You have to use Metamask");
    } else {
      let accounts = await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .catch((err) => {
          console.error(err);
        });

      dispatch(setAccounts(accounts[0]));

      if (window.ethereum.chainId === "97") {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .catch((err) => {
            console.log(err.code);
          });
      } else {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '97' }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '97',
                    chainName: 'Binance Smart Chain - Testnet',
                    nativeCurrency: {
                      name: "BNB",
                      symbol: "tBNB", // 2-6 characters long
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://testnet.bscscan.com"],
                    rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545'] /* ... */,
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }
      }
    }
  }
  return {
    connectAccount
  }
}