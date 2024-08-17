import Styled from 'styled-components'

export const HomeMainContent = Styled.div`
flex:3;
`

// Banner Start
export const Banner = Styled.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
background-size:cover;
height:240px;
padding:10px;
display:flex;
justify-content:space-between;
`

export const BannerImg = Styled.img`
width:150px;
padding-top:30px;`

export const ButtonGet = Styled.button`
background-color:transparent;
border-style:none;
border: 2px solid black;
border-radius:3px;
padding:10px;
`

export const Close = Styled.button`
background-color:transparent;
border-style:none;
`
// Banner End

// Search Start
export const SearchContainer = Styled.div`
display:flex;
margin:1% 0%;
`
export const SearchInput = Styled.input`
width:40%;
height:35px;
`
export const SearchBtn = Styled.button`
width:6%;
`
// Search End

// Video Start
export const VideoContainer = Styled.ul`
display:grid;
grid-template-columns:repeat(3, 1fr);
`

export const VideoLi = Styled.li`
list-style-type:none;
`

export const VideoTitleContainer = Styled.div`
display:flex;
align-items:flex-start;
color:#606060;
gap:10px;

`

export const ChannelLogo = Styled.div`
`

export const ThumbnailImg = Styled.img`
width:276px;
`
export const ChannelImg = Styled.img`
margin-top:12px;
width:40px;
`

export const VideoTitle = Styled.div`
display:flex;
flex-direction:column;
`

export const SpanTitle = Styled.span`
display:flex;
align-items:center;
gap:5px;
`

export const P = Styled.p`
margin-bottom:-10px;
`

// Video End

// no videos Start

export const NoVideosContent = Styled.div`
flex:3;
`

export const Img = Styled.img`
height:300px;`

export const Button = Styled.button`
background-color:#3b82f6;
border-style:none;
border: 2px solid #3b82f6;
color:white;
border-radius:3px;
padding:10px;`

// End
