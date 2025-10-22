// App.tsx
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
