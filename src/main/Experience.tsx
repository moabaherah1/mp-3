// Mohammed Abaherah
// Experience.tsx
// October 21, 2025

import styled from "styled-components";

const Section = styled.section`
  text-align: left;
  padding-top: 30px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const TopImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 0 0 20px 0;
`;

const Item = styled.div`
    margin-left: 5%;
    border-left: 4px solid #143450;
    margin-bottom: 40px;
    padding-left: 10px;

    h4 {
        font-family: 'Cinzel', serif;
    }

    ul {
        padding-left: 20px;
        line-height: 1.5;
        letter-spacing: 0.5px;
    }

    @media screen and (max-width: 1024px) {
        margin: 40px auto;
        border-left: none;
        border-top: 4px solid #143450;
        padding-top: 20px;
        width: 90%;
        text-align: center;

        ul {
            padding-left: 0;
            text-align: left;
            display: inline-block;
        }
    }
`;

export default function Experience() {
    return (
        <Section>
            <title>Experience | Mohammed's Resume</title>
            <h3>Experience</h3>

            <TopImage src="/images/me.jpg" alt="Mohammed presenting his group's findings" />

            <Item>
                <h4>
                    Undergraduate Data Intern | Boston University, MA |{" "}
                    <i>Sep 2024 - Dec 2024</i>
                </h4>
                <ul>
                    <li>
                        Engineered a Python-based web scraper that automated campaign
                        finance data collection, cutting manual research time by 90%.
                    </li>
                    <li>Created 4 interactive visualizations viewed by over 20,000 readers.</li>
                    <li>
                        Analyzed over $160M in Super PAC spending for the 2024 Montana
                        Senate race in collaboration with MarketWatch, resulting in
                        published findings (Nov 4).
                    </li>
                </ul>
            </Item>

            <Item>
                <h4>
                    Software Dev Intern | SEDCO Amman, Jordan | <i>Jun 2024 - Aug 2024</i>
                </h4>
                <ul>
                    <li>
                        Worked with .NET-based enterprise software powering 30+ banks across
                        the Middle East, gaining hands-on experience in large-scale
                        financial systems.
                    </li>
                    <li>
                        Analyzed deployment of self-service banking kiosks across 10+
                        countries, learning about distributed systems and customer-facing
                        fintech solutions.
                    </li>
                </ul>
            </Item>
        </Section>
    );
}

