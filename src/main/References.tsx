// Mohammed Abaherah
// References.tsx
// October 20, 2025

import { styled } from "styled-components";

const Table = styled.table`
    width: 50%;
    border-collapse: collapse;
    margin: 20px auto;

    th, td {
        border: 1px solid #000;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #E0E2DB;
    }

    caption {
        font-weight: bold;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export default function References() {
    return (
        <>
            <title>References | Mohammed's Resume</title>
            <h3>References</h3>

            <Table>
                <caption>Professional</caption>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Taymaz Davoodi</td><td>Instructor</td><td>tdavoodi@bu.edu</td></tr>
                <tr><td>Aaron Stevens</td><td>Instructor</td><td>azs@bu.edu</td></tr>
                <tr><td>David Sullivan</td><td>Instructor</td><td>dgs@bu.edu</td></tr>
                </tbody>
            </Table>

            <Table>
                <caption>Personal</caption>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Taymaz Davoodi</td><td>Amo</td><td>tdavoodi@bu.edu</td></tr>
                <tr><td>Aaron Stevens</td><td>Amo</td><td>azs@bu.edu</td></tr>
                <tr><td>David Sullivan</td><td>Seydo</td><td>dgs@bu.edu</td></tr>
                </tbody>
            </Table>
        </>
    );
}