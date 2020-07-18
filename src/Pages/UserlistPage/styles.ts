import styled from 'styled-components';
interface UserStylesProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #141414;
`;

export const Header = styled.header`
  padding: 22px 60px;
  width: 100%;
  background: linear-gradient(#000, #141414);
  > img {
    width: 92px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 17vh 20vw;
  align-items: center;

  > h1 {
    color: #FFF;
    font-weight: 500;
    font-size: 3.5vw;
    margin-bottom: 32px;

    @media(max-width: 780px){
      font-size: 30px;
    }

    @media(max-width: 425px){
      font-size: 32px;
    }
  }

  > button {
    background-color: transparent;
    text-transform: uppercase;
    color: #808080;
    border: 1px solid #808080;
    border-radius: 0;
    font-size: 1.1vw;
    letter-spacing: 2px;
    padding: 0.55vw 1.65vw;
    cursor: pointer;

    &:hover {
      color: #FFF;
      border-color: #FFF;
    }

    @media(max-width: 780px){
      width: 180px;
      height: 28px;
      font-size: 12px;
    }

    @media(max-width: 425px){
      width: 100%;
      height: 50px;
      padding: 16px 32px;
      font-size: 18px;
    } 
  }

  @media(max-width: 425px){
      padding: 32px;
    }
`;

export const UsersListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 72px;
  
  @media(max-width: 425px){
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  } 
`;

export const User = styled.li<UserStylesProps>`
  margin-right: 32px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  > div {
      background-color: ${props => props.color};
      width: 10vw;
      border: 0.3vw solid #1A1A1A;
      display: flex;
      padding: 10px;
      margin-bottom: 16px;
      min-width: 84px;
    > img {
      width: 100%;
    }

    @media(max-width: 425px){
     width: 100%;
    }
  }

  > span {
    color: #808080;
    font-size: 1.2vw;
    @media(max-width: 780px){
      font-size: 12px;
    }
    @media(max-width: 425px){
      font-size: 32px;
    }
  }

  &:hover {
    > div {
      border: 0.3vw solid #FFF;
    }

    > span {
      color: #FFF;
    }
  }

  @media(max-width: 425px){
    margin-right: 0;
    margin-bottom: 24px;
  } 
`;