import Styled from 'styled-components'

export const GamingContainer = Styled.div`
flex:3;

`

export const GamingVideos = Styled.ul`
display:grid;
grid-template-columns:repeat(3,1fr);
@media (max-width:870px){
    grid-template-columns:repeat(2,1fr);

}

@media (max-width:720px){
    grid-template-columns:repeat(1,1fr);
    margin-left:15%

}
`

export const GamingVideoLi = Styled.li`
list-style-type:none;
display:flex;
flex-direction:column;
padding:10px;

`

export const GamingVideoImg = Styled.img`
width:250px;
`

export const GamingVideoContent = Styled.ul`
display:flex;
flex-direction:column;

`

export const P = Styled.p`
margin-top:-10px;

`

export const IconBtn = Styled.button`
background-color:#cbd5e1;
padding:20px;
border-radius:50%;
border-style:none;
margin-left:20px;
`
