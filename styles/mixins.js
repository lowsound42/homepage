import styled, { css } from 'styled-components';

// mixins.js
const flexColumn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const flexRow = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const mixins = { flexColumn, flexRow };
export default mixins;
