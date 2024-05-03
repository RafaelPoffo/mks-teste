import styled from 'styled-components';

export const SidebarItemContainer = styled.div`
  width: 379px;
  min-height: 95px;
  border-radius: 8px;
  background: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: -2px 2px 10px 0px #0000000d;
  position: relative;
`;

export const ProductName = styled.div`
  width: 113px;

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #2c2c2c;
  }
`;

export const ProductPrice = styled.div`
  min-width: 62px;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: left;
    color: black;
  }
`;

export const Separator = styled.div`
  border: 0.2px solid #bfbfbf;
  height: 11.5px;
`;

export const ProductLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 5px;
    font-weight: 400;
    line-height: 6.1px;
    text-align: left;
    color: black;
  }
`;

export const ProductQuantity = styled.div`
  width: 50px;
  height: 19px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-size: 8px;
  font-weight: 400;
  line-height: 9.75px;
  text-align: left;
  color: black;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
    text-align: left;

    color: black;
  }
`;

export const CloseButton = styled.button`
  width: 18px;
  height: 18px;
  background: black;
  border: none;
  border-radius: 100%;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  position: absolute;

  cursor: pointer;

  top: -10px;
  left: 367px;

  &:hover {
    filter: brightness(0.3);
  }
`;
