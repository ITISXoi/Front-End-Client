import { BigNumber, BigNumberish } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { useCallback } from 'react';
import { useAccount, useBalance, useProvider } from 'wagmi';

const useTxGas = () => {
  const provider = useProvider();

  const getGasPrice = useCallback(async () => {
    const gasPrice = await provider.getGasPrice();
    return gasPrice.add(gasPrice.div(5))?.toString();
  }, [provider]);

  const { address: account } = useAccount();
  const { data: walletBalance } = useBalance({
    addressOrName: account,
  });

  const estimateGas = useCallback(
    async (
      etGas: () => Promise<BigNumber>
    ): Promise<{
      txOptions: {
        gasPrice: BigNumberish;
        gasLimit: BigNumberish;
      };
      canPay: boolean;
    }> => {
      // eslint-disable-next-line no-useless-catch
      try {
        const gasPrice = await getGasPrice();
        const gasLimit = (await etGas()).add(5000000);

        const gasToPay = formatEther(gasLimit.mul(gasPrice).toString());

        const canPay = !!walletBalance && parseFloat(walletBalance.formatted) - parseFloat(gasToPay) > 0;

        return {
          txOptions: {
            gasPrice,
            gasLimit,
          },
          canPay,
        };
      } catch (error) {
        throw error;
      }
    },
    [getGasPrice, walletBalance]
  );

  return {
    estimateGas,
    account,
    provider,
  };
};

export default useTxGas;
