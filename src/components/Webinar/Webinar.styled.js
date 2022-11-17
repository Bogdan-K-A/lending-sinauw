import styled from 'styled-components'
import movies from '../../assets/img/movies.png'

export const Section = styled.section`
  padding: 109px 0 84px 0;
  text-align: center;
`

export const Title = styled.h2`
  font-size: var(--fs-lg);

  margin-bottom: 20px;
`

export const Text = styled.p`
  margin-bottom: 105px;

  font-size: var(--fs-nm);

  color: var(--secondary-text-color);
`

export const MoviesContainer = styled.div`
  width: 1200px;
  height: 425px;

  background-image: url(${movies});
  margin: 0 auto;
  margin-bottom: 56px;
  background-repeat: no-repeat;
  background-position: 0% 0px;
  background-size: cover;
`

export const Linck = styled.a`
  display: flex;

  font-weight: var(--fw-medium);

  color: #d1d1d7;

  &:hover {
    text-shadow: var(--text-shadow);
  }

  svg {
    width: 24px;
    height: 24px;

    margin-left: 8px;
  }
`

export const LinckWrapper = styled.div`
  width: 201px;

  margin-left: auto;
`
