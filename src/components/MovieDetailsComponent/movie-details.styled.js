import styled from 'styled-components';

const InfoSection = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 0 30px 0;
`;

const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

const AdditionalList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0 0 15px 0;
`;

export { InfoSection, MovieDescription, GenresList, AdditionalList };
