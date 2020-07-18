import React, { FormEvent } from 'react';
import { Container, OpacityController, Header, Content, Footer } from './styles';
import logo from '../../assets/logo.png';
import facebook from '../../assets/vectors/facebook.svg';
import globe from '../../assets/vectors/globe.svg';
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { push } = useHistory();

  const handleNavigateToUserList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    push('/browse');
  }

  return (
    <Container>
      <OpacityController>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <Content>
          <div>
            <h1>Entrar</h1>

            <form onSubmit={handleNavigateToUserList}>
              <input type="text" placeholder="Email ou número de telefone" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Entrar</button>
              <div>
                <label htmlFor="remember-login">
                  <input
                    type="checkbox"
                    defaultChecked
                    name="remember"
                    id="remember-login"
                  />
                  <span>Lembre-se de mim</span>
                </label>
                <a href="http://localhost:3000">Precisa de ajuda?</a>
              </div>
            </form>
            <button>
              <img src={facebook} alt="facebook" /> Conectar com o facebook
            </button>
            <h6>
              Novo por aqui? <span>Assine agora</span>
            </h6>
            <span>
              Esta página é protegida pelo Google reCAPTCHA
              <br />
              para garantir que você não é um robô. <a href="">Saiba mais.</a>
            </span>
          </div>
        </Content>
        <Footer>
          <p>
            Dúvidas? Ligue <a>0800-761-4631</a>
          </p>

          <ul>
            <li>Termos dos Cartões pré-pagos</li>
            <li>Termos de uso</li>
            <li>Declaração de privacidade</li>
          </ul>

          <div>
            <img src={globe} alt="globo" />
            <select name="select" id="select">
              <option value="a">Português</option>
              <option value="b">Inglês</option>
            </select>
          </div>
        </Footer>
      </OpacityController>
    </Container>
  );
}

export default LoginPage;