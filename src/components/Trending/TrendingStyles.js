import Styled from 'styled-components'

export const TrendingContainer = Styled.div`
flex:3;
`

export const TrendingVideos = Styled.ul`
display:flex;
flex-direction:column;
`

export const TrendingVideoLi = Styled.li`
list-style-type:none;
display:flex;
padding:10px;

@media (max-width:870px){
    flex-direction:column;
    padding:1px;
    margin-left:15%;

}
`

export const TrendingVideoImg = Styled.img`
width:300px;
`

export const TrendingVideoContent = Styled.ul`
display:flex;
flex-direction:column;
`

export const SpanTitle = Styled.span`
display:flex;
align-items:center;
`

export const P = Styled.p`
margin-bottom:-15px;
`

export const IconBtn = Styled.button`
background-color:#cbd5e1;
padding:20px;
border-radius:50%;
border-style:none;
margin-left:20px;
`
