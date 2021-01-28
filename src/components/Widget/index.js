import styled from 'styled-components';

const Widget = styled.div`
  margin: 2.4rem 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1.6rem;
    linbe-height: 1;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 400;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 1.5rem;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
