"use client";

import { useMetaMask } from "metamask-react";

export default function WalletConnectButton(): JSX.Element {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  let nftStatus;

  if (status === "initializing") nftStatus = "Initializing MetaMask...";

  if (status === "unavailable") {
    nftStatus = "MetaMask not available";
  }

  if (status === "notConnected") {
    nftStatus = (
      <button
        onClick={connect}
        className="sc-button header-slider style style-1 wallet fl-button pri-1"
      >
        <span>Wallet Connect</span>
      </button>
    );
  }

  function shortenHexString(
    hexString: string,
    startLength: number,
    endLength: number
  ) {
    const prefix = hexString.slice(0, startLength);
    const suffix = hexString.slice(-endLength);
    return prefix + "...." + suffix;
  }
  if (status === "connecting") {
    nftStatus = "Connecting...";
  }

  if (status === "connected") {
    nftStatus = shortenHexString(account, 8, 8);
  }
  return (
    <>
      <div className="sc-btn-top mg-r-12" id="site-header">
        {status === "notConnected" ? (
          nftStatus
        ) : (
          <button className="sc-button header-slider style style-1 wallet fl-button pri-1">
            <span>{nftStatus}</span>
          </button>
        )}
      </div>
    </>
  );
}
