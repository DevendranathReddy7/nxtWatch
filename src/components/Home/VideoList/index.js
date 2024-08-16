import {formatDistanceToNow} from 'date-fns'

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
} from '../HomeStyles'

const VideoList = ({videos}) => {
  const getDate = val => {
    const date = new Date(val)
    return formatDistanceToNow(date)
  }

  return (
    <VideoContainer>
      {videos.map(video => {
        const {
          id,
          title,
          thumbnail_url: thumbnailUrl,
          channel: {name, profile_image_url: profileImageUrl},
          view_count: viewCount,
          published_at: publishedAt,
        } = video

        return (
          <VideoLi key={id}>
            <div>
              <ThumbnailImg src={thumbnailUrl} alt={title} />
            </div>

            <VideoTitleContainer>
              <ChannelLogo>
                <ChannelImg src={profileImageUrl} alt={name} />
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
    </VideoContainer>
  )
}

export default VideoList
