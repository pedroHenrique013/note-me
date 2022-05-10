import styled from "styled-components";

export const GreetingContent = styled.div`

  
  h1 {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: var(--gray-300);
    margin-top: 12px;
  }
`;
