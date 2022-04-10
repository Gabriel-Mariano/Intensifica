import styled from 'styled-components'

export const Header = styled.header`
    width:100vw;
    height:90px;
    background:${props=>props.theme.colors.secondary};

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;
`

export const Profile = styled.div`
    width:50px;
    height:50px;

    background:${props=> props.theme.colors.orange};
    border-radius:50px;

    display:flex;
    justify-content:center;
    align-items:center;
`

export const Nickname = styled.span`
    color:${props=> props.theme.colors.white};
`
