import styled from 'styled-components';

export const StiledSection = styled.footer`
  padding-top: 48px;
  padding-bottom: 30px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 86px;
`;

export const LogoWrapper = styled.div`
  width: 241px;

  margin-right: 148px;

  > p {
    margin-bottom: 24px;

    font-size: var(--fs-md);
    line-height: var(--lh-nm);

    opacity: 0.6;
  }
`;

// export const ListWrapper = styled.div`
//   display: flex;
// `

export const FooterListMenu = styled.ul`
  margin-right: ${({ marginRight }) => (marginRight ? '81px' : 0)};

  font-size: 20px;
  line-height: var(--lh-sm1);

  color: var(--primary-text-color);
  > li {
    transition: all 0.25s ease-out;
    > a {
      cursor: pointer;
    }
  }

  > li:not(:last-child) {
    margin-bottom: 24px;
  }

  > li:not(:first-child) {
    opacity: 0.6;
  }

  > li:hover,
  > li:focus {
    opacity: 1;
  }

  > h3 {
    margin-bottom: 24px;

    font-weight: var(--fw-bold);
    font-size: 20px;
    line-height: var(--lh-sm1);

    color: var(--primary-text-color);
  }
`;

export const BottomCaption = styled.div`
  text-align: center;

  p {
    font-size: var(--fs-md);
    line-height: var(--lh-sm1);

    color: var(--footer-bottom-text-color);
  }
`;

export const StyledSocialList = styled.ul`
  display: flex;

  > li {
    transition: all 0.25s ease-out;
  }

  > li:not(:last-child) {
    margin-right: 32px;
  }

  > li:hover {
    color: var(--white-color);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
