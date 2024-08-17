import { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";

import { BiLike, BiDislike } from "react-icons/bi";

import { RiMenuAddFill } from "react-icons/ri";

import Navbar from "../common/Navbar";
import { MainContainer } from "../common/CommonStyles";
import SideBar from "../common/SideBar";
import {
  VideoDetailContainer,
  VideoDescription,
  VideoActionContainer,
  VideoBottomDescription,
  ChannelImg,
  Span,
} from "./VideoItemDetails";
import LoaderComp from "../Loader";
import FailureView from "../common/FailureView";
import savedVideosContext from "../../context/nxtWatchContext";

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    isLoading: true,
    err: false,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  };

  componentDidMount() {
    this.getVideoDetails();
  }

  getVideoDetails = async () => {
    const { match } = this.props;
    const { id } = match.params;

    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      method: "GET",
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      this.setState({
        isLoading: false,
        err: false,
        videoDetails: data.video_details,
      });
    } else {
      this.setState({ isLoading: false, err: true, videoDetails: {} });
    }
  };

  getDate = (val) => {
    const date = new Date(val);
    return formatDistanceToNow(date);
  };

  handleLike = () => {
    this.setState((prev) => ({ isLiked: !prev.isLiked, isDisliked: false }));
  };

  handleDislike = () => {
    this.setState((prev) => ({ isLiked: false, isDisliked: !prev.isDisliked }));
  };

  handleSave = (id, updateSavedVideos) => {
    const { videoDetails } = this.state;

    this.setState(
      (prev) => ({ isSaved: !prev.isSaved }),
      () => {
        updateSavedVideos(videoDetails);
      }
    );
  };

  renderSaved = (isSaved, id) => (
    <savedVideosContext.Consumer>
      {(value) => {
        const { updateSavedVideos } = value;

        return (
          <Span
            active={isSaved}
            onClick={() => this.handleSave(id, updateSavedVideos)}
          >
            <RiMenuAddFill /> <p>{isSaved ? "Saved" : "Save"}</p>
          </Span>
        );
      }}
    </savedVideosContext.Consumer>
  );

  render() {
    const { videoDetails, isLoading, err, isLiked, isDisliked, isSaved } =
      this.state;
    console.log(videoDetails);
    return (
      <div>
        <Navbar />
        <MainContainer>
          <SideBar />

          <VideoDetailContainer data-testid="videoItemDetails">
            {!err && isLoading ? (
              <LoaderComp />
            ) : (
              <div className="responsive-container">
                <ReactPlayer url={videoDetails.video_url} controls />

                <p>{videoDetails.title}</p>
                <VideoDescription>
                  <div>
                    <Span>
                      {videoDetails.view_count} views •
                      <p>{this.getDate(videoDetails.published_at)} ago</p>
                    </Span>
                  </div>

                  <VideoActionContainer>
                    <Span
                      active={isLiked}
                      onClick={() => this.handleLike(videoDetails.id)}
                    >
                      <BiLike /> <p>Like</p>
                    </Span>

                    <Span
                      active={isDisliked}
                      onClick={() => this.handleDislike(videoDetails.id)}
                    >
                      <BiDislike />
                      <p>Dislike</p>
                    </Span>

                    {this.renderSaved(isSaved, videoDetails.id)}
                  </VideoActionContainer>
                </VideoDescription>
                <hr />

                <VideoBottomDescription>
                  <ChannelImg
                    src={videoDetails.channel.profile_image_url}
                    alt="channel logo"
                  />
                  <div>
                    <p>{videoDetails.channel.name}</p>
                    <p>{videoDetails.channel.subscriber_count} Subscribers</p>
                    <p>{videoDetails.description}</p>
                  </div>
                </VideoBottomDescription>
              </div>
            )}
          </VideoDetailContainer>

          {err && <FailureView />}
        </MainContainer>
      </div>
    );
  }
}

export default withRouter(VideoItemDetails);
