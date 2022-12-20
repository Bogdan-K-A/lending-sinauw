import styled from 'styled-components';
import heroImg from '../../assets/img/hero-img.png';

export const StyledHero = styled.section`
  position: relative;
  display: flex;
  padding-top: 50px;
  padding-bottom: 103px;
`;

export const BgImg = styled.span`
  width: 773px;
  height: 800px;
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-position: 0% 0px;
  background-size: cover;

  z-index: 1;
`;

export const ContentWrapper = styled.div`
  width: 820px;
  /* width: 652px; */
  height: 601px;
  padding-right: 120px;

  margin-left: auto;
  margin-top: 80px;

  > h1 {
    /* width: 484px; */

    font-weight: var(--fw-semiBold);
    font-size: var(--fs-hg);
    line-height: var(--lh-sm2);

    color: var(--primary-text-color);
    margin-bottom: 24px;
  }

  > p,
  > h2 {
    margin-bottom: 56px;

    font-weight: var(--fw-regular);
    font-size: var(--fs-nm);
    line-height: var(--lh-md);

    color: var(--secondary-text-color);
  }

  > h2 {
    margin-bottom: 34px;
  }
`;

export const Form = styled.form`
  margin-bottom: 48px;
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 506px;
  height: 68px;

  padding-top: 22px;
  padding-right: 60px;
  padding-bottom: 22px;
  padding-left: 32px;

  background: var(--form-input-color);
  border-radius: var(--br-sirch-form);
  border: none;
  outline: none;
  color: var(--white-color);

  &::placeholder {
    font-weight: var(--fw-regular);
    font-size: var(--fs-md);
    line-height: var(--lh-md);

    color: var(--secondary-text-color);
  }
`;

export const FormBtn = styled.span`
  position: absolute;
  right: 13px;
  bottom: -14px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  background: var(--card-separator-line-color);
  border-radius: var(--br-sm);

  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const SuggestionsList = styled.ul`
  display: flex;

  width: 503px;
  height: 100px;
`;

export const SuggestionsItem = styled.li`
  display: inline-block;

  padding-top: 8px;
  padding-right: 18px;
  padding-bottom: 8px;
  padding-left: 18px;

  margin-right: 24px;
  margin-bottom: 24px;

  border: 1px solid var(--hero-text-color);
  border-radius: var(--br-md);

  color: var(--hero-text-color);
`;

export const HeroStudentWrapper = styled.div`
  position: absolute;
  left: 27%;
  bottom: 20%;

  display: flex;

  z-index: 1;
`;

export const HeroImgList = styled.ul`
  display: flex;
  padding: 20px;

  background: var(--section-with-stutud-in-section-hero-bg-color);
  border-radius: var(--br-card);
`;

export const HeroImgItem = styled.li`
  margin-right: -16px;

  img {
    border-radius: var(--br-circle);
  }
`;

export const HeroStudentBtnPlus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  background: #8087b8;
  border: 1px solid #6668aa;
  border-radius: var(--br-circle);

  cursor: pointer;

  svg {
    fill: var(--primary-bg-color);
    width: 24px;
    height: 24px;
  }
`;

export const StudentText = styled.div`
  width: 111px;
  height: 44px;

  margin-left: 16px;

  font-weight: var(--fw-medium);
  line-height: var(--lh-nm);

  color: #bbbbc4;

  span {
    color: var(--primary-btn-color);
  }
`;
