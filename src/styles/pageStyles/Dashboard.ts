import styled from "styled-components"

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background:${props=> props.theme.colors.background};
`

export const Title = styled.h1`
    color:${props=> props.theme.colors.primary}
`