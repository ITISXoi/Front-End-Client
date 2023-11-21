import { useState } from 'react';
import toast from 'react-hot-toast';

type CopyFn = (text: string) => void; // Return success

export function useCopy(): [boolean, CopyFn] {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      return toast('Clipboard not supported');
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied !');
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.warn('Copy failed', error);
      setCopied(false);
    }
  };

  return [copied, copy];
}
