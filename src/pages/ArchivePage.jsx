import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeItem } from 'services/localStorService';
import { ArchiveTable } from 'components/Archive/ArchiveTable';
import {
  ArchiveContainer,
  Subtitle,
  Title,
} from 'components/Archive/Archive.styled';
import {
  BtnContainer,
  ButtonLogOut,
  ButtonToArhiveList,
} from 'components/ActiveListItems/ActiveListItems.styled';

const ArchivePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <ArchiveContainer>
      <BtnContainer>
        <Link style={{ textDecoration: 'none' }} to="/checklist">
          <ButtonToArhiveList
            type="button"
            aria-label="Перейти к списку архива чек-листов"
          >
            Активные чек-листы
          </ButtonToArhiveList>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <ButtonLogOut
            type="button"
            aria-label="Выход"
            onClick={() => removeItem('authorization_id')}
          >
            Выход
          </ButtonLogOut>
        </Link>
      </BtnContainer>
      <Title>Архив чек-листов</Title>
      <Subtitle>Фильтры и поиск</Subtitle>
      <ArchiveTable />
    </ArchiveContainer>
  );
};

export default ArchivePage;
