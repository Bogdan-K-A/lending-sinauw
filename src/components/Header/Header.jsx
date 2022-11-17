import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '../../hooks/useToggle';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

//StyledComponent
import {
  BtnWrapper,
  StiledHeader,
  LenguageSwichWrapper,
  LenguageSwichText,
  LengDropMenu,
} from './Header.styled';

//images
import { TbWorld } from 'react-icons/tb';
import { RiArrowDropDownFill } from 'react-icons/ri';

const lenguage = ['EN', 'UA', 'RU'];

export const Header = () => {
  const [currentLeng, setCurrentLeng] = useState('EN');
  const { t, i18n } = useTranslation();
  const { isOpen, isOpenModal, handeleShow, handeleClose } = useToggle();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (currentLeng) {
      i18n.changeLanguage(currentLeng);
    }
  }, [currentLeng, i18n]);

  const onChangeLeng = leng => {
    i18n.changeLanguage(leng);
    setCurrentLeng(leng);
    handeleClose();
  };

  return (
    <StiledHeader scroll={window.scrollY}>
      <Logo to="home" spy={true} smooth={true} offset={-80} duration={500} />
      <NavBar />
      <BtnWrapper>
        <LenguageSwichWrapper>
          <LenguageSwichText>{currentLeng}</LenguageSwichText>
          {/* условие замены кнопки */}
          {!isOpen ? (
            <TbWorld
              style={{ width: '24px', height: '24px' }}
              onClick={handeleShow}
            />
          ) : (
            <TbWorld
              style={{ width: '24px', height: '24px' }}
              onClick={handeleClose}
            />
          )}
          {/* условие отрисовки меню */}
          {isOpen && (
            <LengDropMenu>
              {lenguage.map(el => (
                <li key={el} onClick={() => onChangeLeng(el)}>
                  {el}
                </li>
              ))}
            </LengDropMenu>
          )}

          <RiArrowDropDownFill />
        </LenguageSwichWrapper>
        <Button primary onClick={handeleShow}>
          {t('header.login')}
        </Button>

        {isOpenModal && <Modal onClick={handeleClose} />}
      </BtnWrapper>
    </StiledHeader>
  );
};
