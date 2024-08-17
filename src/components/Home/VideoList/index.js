import {formatDistanceToNow} from 'date-fns'
import {useHistory} from 'react-router-dom'
import {
  VideoContainer,
  VideoLi,
  VideoTitleContainer,
  VideoTitle,
  ChannelImg,
  ThumbnailImg,
  ChannelLogo,
  SpanTitle,
  P,
  NoVideosContent,
  Img,
  Button,
} from '../HomeStyles'

const VideoList = ({videos}) => {
  const history = useHistory()

  const getDate = val => {
    const date = new Date(val)
    return formatDistanceToNow(date)
  }

  const handleVideoClick = id => {
    history.push(`/videos/${id}`)
  }

  return (
    <VideoContainer>
      {videos.length > 0 &&
        videos.map(video => {
          const {
            id,
            title,
            thumbnail_url: thumbnailUrl,
            channel: {name, profile_image_url: profileImageUrl},
            view_count: viewCount,
            published_at: publishedAt,
          } = video

          return (
            <VideoLi key={id} onClick={() => handleVideoClick(id)}>
              <div>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              </div>

              <VideoTitleContainer>
                <ChannelLogo>
                  <ChannelImg src={profileImageUrl} alt="channel logo" />
                </ChannelLogo>

                <VideoTitle>
                  <P>{title}</P>
                  <P>{name}</P>
                  <SpanTitle>
                    {viewCount} Views • <p>{getDate(publishedAt)} ago</p>
                  </SpanTitle>
                </VideoTitle>
              </VideoTitleContainer>
            </VideoLi>
          )
        })}

      {videos.length === 0 && (
        <NoVideosContent>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />

          <h1>No Search results found</h1>
          <p>Try different keywords or remove search filter</p>
          <Button>Retry</Button>
        </NoVideosContent>
      )}
    </VideoContainer>
  )
}

export default VideoList
