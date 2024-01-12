"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WalletConnectButton(): JSX.Element {
  const { openConnectModal } = useConnectModal();

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
        <ConnectButton />
      </div>
    </>
  );
}
