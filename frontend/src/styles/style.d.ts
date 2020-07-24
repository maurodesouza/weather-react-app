import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string;

    colors: {
      primary: string;
      background: string;
      footer: string;
      text: string;
      error: string;
    };
  }
}
