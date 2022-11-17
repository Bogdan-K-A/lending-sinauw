import styled from 'styled-components';

export const StiledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 80px;

  padding-left: 120px;
  padding-right: 120px;
  margin: 0 auto;
  background: ${({ scroll }) =>
    scroll >= 80
      ? 'var(--section-with-stutud-in-section-hero-bg-color)'
      : null};

  z-index: 99;

  > a {
    margin-right: 150px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const LenguageSwichWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-right: 30px;

  cursor: pointer;
`;

export const LenguageSwichText = styled.p`
  margin-right: 4px;
`;

export const LengDropMenu = styled.ul`
  position: absolute;
  top: 25px;
  right: 13px;

  width: 22px;

  z-index: 999;

  > li {
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover,
    :focus {
      font-weight: var(--fw-bold);
    }
  }
`;
