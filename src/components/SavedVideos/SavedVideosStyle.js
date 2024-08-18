import Styled from 'styled-components'

export const SavedContainer = Styled.div`
flex:3;
`

export const SavedVideosContainer = Styled.ul`
display:flex;
flex-direction:column;
`

export const SavedVideoLi = Styled.li`
list-style-type:none;
display:flex;
padding:10px;

@media (max-width:870px){
    flex-direction:column;
    padding:1px;
    margin-left:15%;

}

`

export const SavedVideoImg = Styled.img`
width:276px;
height:153px;
`

export const SavedVideoContent = Styled.ul`
display:flex;
flex-direction:column;
`

export const SpanTitle = Styled.span`
display:flex;
align-items:center;
`

export const P = Styled.p`
margin-bottom:-10px;
`
export const NoSavedContent = Styled.div`
flex:3;
`

export const Img = Styled.img`
height:300px;`

export const IconBtn = Styled.button`
background-color:#cbd5e1;
padding:20px;
border-radius:50%;
border-style:none;
margin-left:20px;
`
