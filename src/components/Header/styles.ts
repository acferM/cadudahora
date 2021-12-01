import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 9.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;

  img {
    width: 75px;
    height: 48px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 3.125rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.subtitle};
      ${props => props.theme.fonts.nav};

      &.active {
        color: ${props => props.theme.colors.purple};
      }
    }
  }
`;
