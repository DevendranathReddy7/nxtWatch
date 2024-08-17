import Styled from 'styled-components'

export const VideoDetailContainer = Styled.div`
flex:3;
`

export const VideoDescription = Styled.div`
display:flex;
justify-content:space-between;
`

export const VideoActionContainer = Styled.div`
display:flex;
`

export const Span = Styled.button`
display:flex;
align-items:center;
gap:8px;
margin-right:15px;
background-color:transparent;
border:none;
color : ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const VideoBottomDescription = Styled.div`
display:flex;
align-items:start;
gap:8px;

`
export const ChannelImg = Styled.img`
margin-top:12px;
width:50px;
`
