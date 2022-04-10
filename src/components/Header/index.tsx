import type { NextPage } from 'next'
import { BiMenuAltLeft as LeftMenuIcon } from 'react-icons/bi'

import * as S from '../../styles/componentStyles/Header';
import Logo from '../../assets/identidadeVisual.png';
import Image from 'next/image';

const HeaderComponent:NextPage = () => {
    return (
        <S.Header>
            <LeftMenuIcon size="36" color='#6495ED' />
            <Image src={Logo} alt="Logo" width={200} height={40}/>
            <S.Profile>
               <S.Nickname>GO</S.Nickname>
            </S.Profile>
        </S.Header>
    )
}

export default HeaderComponent;