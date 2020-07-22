import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import boy from '../../assets/vectors/boy.svg';
import woman from '../../assets/vectors/woman.svg';
import { Container, Content, Header, User, UsersListContainer } from './styles';

const users = [
	{ id: 0, name: 'Pedro Lauro', color: '#2574BA', gender: 'm' },
	{ id: 1, name: 'Jonh Esrom', color: '#BA2574', gender: 'f' },
	{ id: 2, name: 'Lucas Weiby', color: '#25BA74', gender: 'm' },
	{ id: 3, name: 'Dart do Icaraí', color: '#7159c1', gender: 'm' },
	{ id: 4, name: 'Antoniel Lima', color: '#BAAB22', gender: 'm' },
];

const UserlistPage: React.FC = () => {
	const { push } = useHistory();

	return (
		<Container>
			<Header>
				<img src={logo} alt="logo" />
			</Header>

			<Content>
				<h1>Quem está assistindo?</h1>
				<UsersListContainer>
					{users.map((user) => (
						<User
							color={user.color}
							key={user.id}
							onClick={() => {
								push('/home');
							}}
						>
							<div>
								<img src={user.gender === 'm' ? boy : woman} alt="happy" />
							</div>
							<span>{user.name}</span>
						</User>
					))}
				</UsersListContainer>
				<button>Gerenciar perfis</button>
			</Content>
		</Container>
	);
};

export default UserlistPage;
