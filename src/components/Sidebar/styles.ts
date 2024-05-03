import styled from 'styled-components';

type SidebarContainerProps = {
  isOpen: boolean;
};

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  width: 486px;
  height: 100vh;
  background: var(--blue);
  transition: right 0.3s ease-in-out;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
`;

export const SidebarItemsContainer = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 22px;
`;

export const SidebarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  width: 100%;

  span {
    max-width: 180px;
    margin-left: 47px;
    p {
      font-size: 27px;
      font-weight: 700;
      line-height: 32.91px;
      text-align: left;
      color: white;
    }
  }

  button {
    margin-right: 22px;
    width: 38px;
    height: 38px;
    background: black;
    border: none;
    border-radius: 100%;
    color: white;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.3);
    }
  }
`;

export const FinishButton = styled.button`
  width: 100%;
  height: 97px;
  background: black;
  color: white;

  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  border: none;

  cursor: pointer;

  &:hover {
    filter: brightness(0.3);
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  p {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
    color: white;
  }
`;
