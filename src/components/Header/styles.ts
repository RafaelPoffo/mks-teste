import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--blue);
  height: 101px;
`;

export const HeaderContent = styled.div`
  margin: 0 65px 0 88px;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
    color: var(--white);
  }

  span {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
  }
`;

export const HeaderButton = styled.button`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90px;
    height: 45px;
  }

  font-size: 1rem;
  color: black;
  background: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;
    color: black;
  }
`;
