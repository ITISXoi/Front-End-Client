"use client";

import { useMetaMask } from "metamask-react";

export default function WalletConnectButton(): JSX.Element {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const nftStatus = () => {
    switch (status) {
      case "initializing":
        return "Initializing MetaMask...";
      case "unavailable":
        return "MetaMask not available";
      case "notConnected":
        return (
          <button
            onClick={connect}
            className="sc-button header-slider style style-1 wallet fl-button pri-1"
          >
            <span>Wallet Connect</span>
          </button>
        );
      case "connecting":
        return "Connecting...";
      case "connected":
        return shortenHexString(account, 8, 8);
      default:
        break;
    }
  };

  function shortenHexString(
    hexString: string,
    startLength: number,
    endLength: number
  ) {
    const prefix = hexString.slice(0, startLength);
    const suffix = hexString.slice(-endLength);
    return prefix + "...." + suffix;
  }

  return (
    <>
      <div className="sc-btn-top mg-r-12" id="site-header">
        {status === "notConnected" ? (
          nftStatus()
        ) : (
          <button className="sc-button header-slider style style-1 wallet fl-button pri-1">
            <span>{nftStatus()}</span>
          </button>
        )}
      </div>
    </>
  );
}
