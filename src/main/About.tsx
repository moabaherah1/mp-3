// Mohammed Abaherah
// About.tsx
// October 20, 2025

import { styled } from "styled-components";

const Intro = styled.div`
    margin-bottom: 15px;
    text-align: left;

    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`;

export default function About() {
    return (
        <>
            <title>About | Mohammed's Resume</title>
            <h3>About Me: Suguru Geto</h3>
            <Intro>
                <p>
                    My name is Suguru Geto. Once, I was known as a special grade jujutsu sorcerer and a proud student of
                    Tokyo
                    Jujutsu High. I fought alongside Satoru Gojo, my closest friend, and together we were considered
                    unstoppable.
                    Back then, I believed in protecting people from curses… until I realized the truth.
                    <br/><br/>
                    Why should we sorcerers sacrifice everything for those who cannot even perceive the curses that
                    consume them?
                    Why should we bleed and die to protect the weak? To me, non-sorcerers are nothing more than
                    monkeys—creatures
                    who drag down those with true power.
                    <br/><br/>
                    That is why I abandoned Jujutsu High and the so-called "justice" it preaches. I chose my own path,
                    one where
                    only sorcerers will inherit the future. I gathered followers who understood my vision and led them
                    in pursuit
                    of a world rid of monkeys. You might call it a cult, but to me, it was liberation.
                    <br/><br/>
                    My technique, Cursed Spirit Manipulation, allows me to absorb and command curses. With it, I can
                    wield an army
                    born from humanity’s darkest fears. Combined with my own cursed energy, it makes me one of the
                    strongest to
                    ever walk this earth.
                    <br/><br/>
                    Even so, I am not without bonds. Gojo… even after everything, he remained my friend in his own way.
                    It was he
                    who ultimately ended my life, and perhaps that was fitting.
                    <br/><br/>
                    I am Suguru Geto. Sorcerer, outcast, and visionary. The world I dream of—a world for sorcerers
                    alone—will come
                    to pass, one way or another.
                </p>
            </Intro>
        </>
    );
}



