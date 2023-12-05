import styled from 'styled-components';

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
`;

const CastListItem = styled.li`
  max-width: calc((100% - 40px) / 6);
`;

export { CastList, CastListItem };
