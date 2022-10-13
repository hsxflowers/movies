import styled from 'styled-components'

export const Container = styled.div`
    h1 {
       margin-top: 50px;
       margin-left: 45px;
       font-size: 1.5em
    }

    .nav {
      width: 100%;
      height: 90px;
      background-color: #131462;
      border-radius: 1.5em;
      margin-top: -20px;
      display: flex;
      justify-content: space-between;
    }

    .abaixar {
      padding-top: 44px
    }

    .direita {
      margin-right: 50px;
    }

    .esquerda {
      padding: 40px;
      font-size: 40px;
      margin-top: 20px;
      padding-top: 5px
    }

    .botao {
      margin-right: 10px;
      padding: 5px 20px;
      background-color: #131462;
      border-radius: 2rem;
      border: none;
      cursor: pointer;
    }

    .botao:hover {
      border: 1px solid white;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1.2em;
    }

    .login {
      border: 1px solid white;
    }

    .avengers {
      border-radius: 1rem;
      transition: all 0.3s;
      margin-top: 10px;
      margin-left: 45px
    }

    .avengers:hover {
      transform: scale(1.02);
    }

    .opcao {
      margin-right: 10px;
      padding: 10px 40px;
      border-radius: 1rem;
      background-color: black;
      border: 1.5px solid white;
      margin-top: 30px;
      cursor: pointer;
    }

    .lista {
      margin-left: 320px;
    }

    #listaTit {
      margin-left: 570px;
    }
`

export const MovieList = styled.ul`
  padding: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
