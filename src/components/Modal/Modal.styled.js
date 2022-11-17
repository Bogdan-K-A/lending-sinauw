import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  padding: 36px;
  width: 372px;

  background: var(--card-bg-color);
  border-radius: var(--br-card);
  border: 3px solid var(--card-separator-line-color);
`;

export const StyledInput = styled.input`
  width: 295px;
  height: 35px;

  padding: 10px;

  background: var(--form-input-color);
  border-radius: var(--br-sirch-form);
  border: none;
  outline: none;
  color: var(--white-color);

  &::placeholder {
    letter-spacing: 1px;
    font-size: var(--fs-md);
    line-height: var(--lh-md);

    color: var(--secondary-text-color);
  }
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    margin-bottom: 15px;
  }

  svg {
    position: absolute;
    top: -25px;
    right: -25px;

    width: 30px;
    height: 30px;

    transition: all 0.25s ease-out;

    &:hover {
      fill: var(--white-color);
    }
  }
`;

export const WrapperError = styled.div`
  display: flex;
  height: 28px;

  margin-left: 10px;

  color: red;
`;
