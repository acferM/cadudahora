import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background_primary: string;
      background_secondary: string;
      subtitle: string;
      text: string;
      text_detail: string;
      shape: string;
      shape_border: string;
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
