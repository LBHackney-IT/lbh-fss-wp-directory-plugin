import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

export const SidebarContainer = styled.div`
    background: #fff;
    border-radius: 3px;
    width: 100%;
    ${breakpoint('md')`
        max-width: 375px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
        ${breakpoint('md')`
            overflow: hidden;
            height: calc(100vh - 40px);
        `}
    `}
`;