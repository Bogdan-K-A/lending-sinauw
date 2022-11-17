import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 45px;
  }

  > a {
    position: relative;
    transition: all 0.25s ease-out;
    &:hover,
    &:focus {
      color: white;
    }
  }

  .active {
    color: white;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -1px;
      left: 0;

      border-radius: 2px;

      background-color: var(--primary-text-color);
    }
  }
`;

export const NavLinck = styled(Link)`
  padding-top: 32px;
  padding-bottom: 32px;

  cursor: pointer;
`;
