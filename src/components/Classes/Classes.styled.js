import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

  padding-top: 65px;
  padding-bottom: 65px;

  text-align: center;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 617px;

  text-align: center;

  > h2 {
    margin-bottom: 20px;

    font-weight: var(--fw-semiBold);
    font-size: var(--fs-lg);
  }

  > p {
    margin-bottom: 84px;

    font-size: var(--fs-nm);

    color: var(--secondary-text-color);
  }
`;

export const ClassesList = styled.ul`
  position: absolute;
  top: 27%;
  left: 115px;
  width: 87vw;

  display: flex;
  justify-content: space-between;
`;

export const Article = styled.article`
  position: relative;

  width: 280px;

  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;

  background: var(--card-bg-color);
  border-radius: var(--br-card);
  border: 3px solid var(--card-separator-line-color);

  &:hover {
    border-bottom: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Thumb = styled.div`
  position: relative;
  margin-bottom: 24px;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(30, 32, 67, 0.3);
  }

  img {
    width: 252px;
    height: 169px;
    border-radius: var(--br-img-in-card);
  }
`;

export const LinckAtVideo = styled.div`
  position: absolute;
  bottom: 6%;
  left: 5%;

  background: var(--card-frame-color);
  border-radius: var(--br-md);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;

  a {
    font-size: 12px;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategoryName = styled.p`
  font-weight: var(--fw-medium);
  font-size: 12px;

  margin-bottom: 10px;

  color: var(--card-text-category-color);
`;

export const CardTitle = styled.h3`
  font-weight: var(--fw-semiBold);
  font-size: var(--fs-nm);

  margin-bottom: 12px;

  color: var(--primary-text-color);
`;

export const CardText = styled.p`
  margin-bottom: 20px;

  text-align: left;

  color: var(--secondary-text-color);
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--card-separator-line-color);

  margin-bottom: 20px;
`;

export const MentorNameWrapper = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const NameMentor = styled.p`
  font-weight: var(--fw-medium);
  margin-bottom: 3px;
`;

export const PlaceMentor = styled.p`
  font-size: 12px;

  color: var(--secondary-text-color);
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: -3px;

  width: 280px;

  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;

  background: var(--card-bg-btn-color);
  border-bottom-right-radius: var(--br-card);
  border-bottom-left-radius: var(--br-card);

  border-bottom: 3px solid var(--card-separator-line-color);
  border-right: 3px solid var(--card-separator-line-color);
  border-left: 3px solid var(--card-separator-line-color);

  opacity: 0;

  transform: translateY(0);
  transition: all 0.25s ease-out;
  z-index: -5;

  ${Article}:hover & {
    opacity: 1;
    transform: translateY(100%);
    transition: all 0.25s ease-out;
  }
`;
