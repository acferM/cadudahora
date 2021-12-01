import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white_50: string;
      white_100: string;
      gray_25: string;
      gray_50: string;
      gray_75: string;
      gray_85: string;
      gray_100: string;
      purple: string;
    };

    fonts: {
      title: string;
      subtitle: string;
      default: string;
      button_primary: string;
      button_secondary: string;
      form_title: string;
      input: {
        title: string;
        subtitle: string;
        value: string;
      };
    };
  }
}
