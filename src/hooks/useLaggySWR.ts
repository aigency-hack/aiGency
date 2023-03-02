import { useRef, useEffect, useCallback } from "react";
import useSWR from "swr";

import type { Fetcher, Key, SWRConfiguration, Middleware, SWRResponse } from "swr";

// This is a SWR middleware for keeping the data even if key changes.
export const laggy: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    // Use a ref to store previous returned data.
    const laggyDataRef = useRef<any>();

    // Actual SWR hook.
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      // Update ref if data is not undefined.
      if (swr.data !== undefined) {
        laggyDataRef.current = swr.data;
      }
    }, [swr.data]);

    // Expose a method to clear the laggy data, if any.
    const resetLaggy = useCallback(() => {
      laggyDataRef.current = undefined;
    }, []);

    // Fallback to previous data if the current data is undefined.
    const dataOrLaggyData = swr.data === undefined ? laggyDataRef.current : swr.data;

    // Is it showing previous data?
    const isLagging = swr.data === undefined && laggyDataRef.current !== undefined;

    // Also add a `isLagging` field to SWR.
    return Object.assign({}, swr, {
      data: dataOrLaggyData,
      isLagging,
      resetLaggy,
    });
  };
};

export const useLaggySWR = <Data = any, Error = any, SWRKey extends Key = null>(
  key: SWRKey,
  fetcher: Fetcher<Data, SWRKey> | null,
  config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined = {},
): SWRResponse<Data, Error> & { isLagging: boolean; resetLaggy: () => void } =>
  useSWR(key, fetcher, { ...config, use: [laggy, ...(config?.use ?? [])] }) as any;
