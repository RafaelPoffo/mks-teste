import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  background: var(--white);
  width: 218px;
  height: 285px;
  border-radius: 10px;
  position: relative;

  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 31px;
  max-width: 938px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 20px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 15px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-left: 14px;
  margin-right: 11.56px;
`;

export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductName = styled.span`
  width: 124px;
  p {
    color: black;
    font-weight: 400;
    line-height: 19px;
  }
`;

export const ProductLegend = styled.span`
  width: 100%;
  p {
    color: var(--second-gray);
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    text-align: left;
  }
`;

export const ProductsPrice = styled.div`
  min-width: 64px;
  height: 26px;
  background: var(--gray);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  p {
    color: var(--white);
    font-size: 15px;
    line-height: 15px;
    font-weight: 700;
  }
`;

export const CardFooter = styled.button`
  width: 100%;
  height: 31.91px;
  background: var(--blue);
  border: none;
  position: absolute;
  bottom: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.4);
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
    color: var(--white);
    text-transform: uppercase;
  }
`;
