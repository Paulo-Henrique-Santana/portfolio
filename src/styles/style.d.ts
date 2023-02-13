import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      background1: string;
      background2: string;
      text1: string;
      text2: string;
    };
  }
}
