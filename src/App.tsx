// App.tsx
// I researched a bit and found createGlobalStyle - even tho not covered in class
// explanation:
// We use createGlobalStyle to define global CSS rules (like fonts, colors, and body styling)
// that apply to the entire app, not just individual components.
// This keeps our styling consistent across all pages and avoids having to repeat base styles
// inside each styled component. This could be done by linking a css file as well- this just
//uses styled-components in a neater way in my opinion
import { createGlobalStyle } from "styled-components";
import Div from "./components/div";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Lato:wght@400&display=swap');

  * { margin: 0; box-sizing: border-box; }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #D2D4C8;
    font-size: calc(9px + 0.5vw);
  }

  h1, h2, h3, h4 { font-family: 'Cinzel', serif; }
  h1 { font-size: calc(16px + 1vw); }
`;

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Div />
        </>
    );
}
