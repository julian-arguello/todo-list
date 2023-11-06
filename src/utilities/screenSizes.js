
export const getDesktopBreakpoint = () => {
    return getComputedStyle(document.documentElement).getPropertyValue('--desktop-breakpoint').trim();
  };