import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { Routes } from "src/constants/routes";
import { useResponsive } from "./useResponsive";

import type { Dispatch, SetStateAction } from "react";

type LayoutRenderConditions = {
  isFooterHidden: boolean;

  sidebarDesktopVariant?: "permanent" | "persistent" | "temporary";
  isSidebarHidden: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  toggleIsSidebarOpen: () => void;
};

type LayoutRenderConditionsOptions = {
  defaultFooterHidden?: boolean;
  defaultSidebarHidden?: boolean;
  sidebarDesktopVariant?: "permanent" | "persistent" | "temporary";
};

export const useLayoutRenderConditions = (
  options: LayoutRenderConditionsOptions = {},
): LayoutRenderConditions => {
  const {
    defaultFooterHidden = false,
    defaultSidebarHidden = false,
    sidebarDesktopVariant = "permanent",
  } = options;

  const router = useRouter();
  const { isMobile } = useResponsive();

  // Footers
  const isFooterHidden = useMemo(() => {
    if (!router.pathname) {
      return defaultFooterHidden;
    }
    return Routes.FOOTER_HIDDEN.some((route) =>
      route instanceof RegExp ? route.test(router.pathname) : route === router.pathname,
    );
  }, [router.pathname, defaultFooterHidden]);

  // Sidebars
  const [_isSidebarOpen, _setIsSidebarOpen] = useState(false);
  const isSidebarOpen = useMemo(() => {
    if (!isMobile && sidebarDesktopVariant === "permanent") {
      return true;
    }
    return _isSidebarOpen;
  }, [_isSidebarOpen, sidebarDesktopVariant, isMobile]);

  const setIsSidebarOpen = useCallback<typeof _setIsSidebarOpen>(
    (value) => {
      if (!isMobile && sidebarDesktopVariant === "permanent") {
        return; // Do nothing, always open
      }
      _setIsSidebarOpen(value);
    },
    [_setIsSidebarOpen, isMobile, sidebarDesktopVariant],
  );

  const toggleIsSidebarOpen = useCallback(() => {
    setIsSidebarOpen((isOpen) => !isOpen);
  }, [setIsSidebarOpen]);

  const isSidebarHidden = useMemo(() => {
    if (!router.pathname) {
      return defaultSidebarHidden;
    }
    return Routes.SIDEBAR_HIDDEN.some((route) =>
      route instanceof RegExp ? route.test(router.pathname) : route === router.pathname,
    );
  }, [router.pathname, defaultSidebarHidden]);

  return {
    // footers
    isFooterHidden,
    // sidebars
    sidebarDesktopVariant,
    isSidebarHidden,
    isSidebarOpen,
    setIsSidebarOpen,
    toggleIsSidebarOpen,
  };
};
