import styled from 'styled-components';
import background from '../../assets/login_background.jpg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-color: #fff;
`;

export const OpacityController = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Header = styled.header`
  padding: 24px 2%;
  width: 100%;

  > img {
    width: 167px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 85px;

  > div {
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    padding: 64px;
    min-height: 660px;
    min-width: 440px;

    > h1 {
      color: #FFF;
      margin-bottom: 28px;
    }

    > form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 48px;

      > input {
        font-size: 16px;
        margin-bottom: 16px;
        background-color: var(--dark-gray);
        
        &::placeholder {
          color: var(--text-gray);
        }
      }

      > button {
        background-color: var(--primary);
        color: #FFF;
        font-weight: bold;
        cursor: pointer;
        font-size: 16px;
        margin-top: 16px;
        margin-bottom: 16px;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > label {
          display: flex;
          align-items: center;
        }

        > label > input {
          padding: 2px;
          margin-right: 4px;
        }

        > label > span {
          color: var(--color-gray);
          font-size: 13px;
        }

        > a {
          color: var(--color-gray);
          text-decoration: none;
          font-size: 13px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    > button {
      padding: 0;
      background-color: transparent;
      color: #737373;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 13px;
      margin-bottom: 16px;

      > img {
        height: 20px;
        margin-right: 8px;
      }
    }

    > h6 {
      color:#737373;
      font-size: 16px;
      margin-bottom: 16px;
      font-weight: 400;
      > span {
        color: #FFF;
      }
    }

    > span {
      color: var(--text-gray);
      font-size: 13px;
      > a {
        color: #0071EB;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 32px 20%;
  background-color: rgba(0, 0, 0, 0.75);

  > p {
    color: #757575;
    margin-bottom: 30px;
    > a {
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > ul {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 30px;
      &:last-child{
        margin-right: 0 !important;
      }
      > li {
        color: #757575;
        font-size: 13px;
        margin-right: 128px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    > div {
      position: relative;
      margin-bottom: 30px;

      > img {
        width: 18px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 16px; 
      }

      select {
        background-color: #000;
        padding: 12px 26px 12px 50px;
        border-radius: 4px;
        border: 1px solid #75757599;
        color: #757575;
      }
    }
`;