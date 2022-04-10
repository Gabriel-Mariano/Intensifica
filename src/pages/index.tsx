import type { NextPage } from 'next'
import * as S from '../styles/pageStyles/Dashboard';
import HeaderComponent from '../components/Header';

const Dashboard: NextPage = () => {
  return (
    <S.Container>
      <HeaderComponent />
      <S.Title></S.Title>
    </S.Container>
  )
}

export default Dashboard
