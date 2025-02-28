export type Theme = "dark" | "light";

export type Params<T = string> = {
  [key: string]: T;
};

export type PageProps<T = Params<string | string[]>> = {
  props: {
    params: T;
    searchParams: Params;
  };
};

declare global {
  interface Window {
    OnetrustActiveGroups?: string;
    OneTrust?: {
      initializeCookiePolicyHtml: () => void;
      LoadBanner: () => void;
      Init: () => void;
      ToggleInfoDisplay: () => void;
      UpdateConsent: (...params: string[]) => void;
    };
  }
}
