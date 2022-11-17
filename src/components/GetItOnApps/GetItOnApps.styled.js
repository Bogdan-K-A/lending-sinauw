import styled from 'styled-components'

export const StiledSection = styled.section`
  padding-top: 60px;
  padding-bottom: 100px;
`

export const AppsWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 435px;
  padding-top: 40px;
  padding-left: 103px;
  padding-right: 103px;

  margin: 0 auto;

  background: var(--box-in-section-get_it_on_apps-bg-color);
  border-radius: var(--br-big);
`

export const ContentWrapper = styled.div`
  padding-top: 45px;
  margin-right: 140px;
`

export const Title = styled.h2`
  margin-bottom: 12px;

  font-weight: var(--fw-semiBold);
  font-size: 47px;
  line-height: 1.6;

  color: var(--white-color);

  opacity: 0.7;
`

export const Text = styled.p`
  width: 406px;
  margin-bottom: 32px;

  font-size: var(--fs-nm);
  line-height: 1.8;

  color: var(--primary-text-color);
`

export const LinkWrapper = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 25px;
  }

  img {
    border-radius: var(--br-md);
  }
`
