import styled from 'styled-components'

export const StiledSection = styled.section`
  padding-top: 102px;
  padding-bottom: 102px;
`

export const FeaturedList = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`

export const FeaturedListItem = styled.li`
  display: flex;

  img {
    width: 65px;
    height: 65px;
    margin-right: 18px;
  }
`

export const DescriptionWrapper = styled.div`
  width: 311px;

  > h2 {
    padding-top: 17px;
    margin-bottom: 23px;
    //   margin-left: 26px;

    font-weight: var(--fw-semiBold);
    font-size: 20px;
    line-height: var(--lh-md);

    color: var(--primary-text-color);
  }

  > p {
    font-weight: 400;
    font-size: var(--fs-sm);
    line-height: var(--lh-nm);

    color: var(--primary-text-color);
  }
`
