/* eslint-disable react/prop-types */
import { useState } from "react";

import "./index.scss";

import ContentWrapper from "../../../components/content-wrapper";
import { PlayIcon } from "../../../components/play-btn";
import Img from "../../../components/lazy-load";
import VideoModal from "../../../components/video-modal";

const VideosSection = ({ data, loading }) => {
	const [show, setShow] = useState(false);
	const [videoId, setVideoId] = useState(null);

	const loadingSkeleton = () => {
		return (
			<div className="skItem">
				<div className="thumb skeleton"></div>
				<div className="row skeleton"></div>
				<div className="row2 skeleton"></div>
			</div>
		);
	};

	return (
		<div className="videosSection">
			<ContentWrapper>
				{data?.results?.length > 0 && (
					<div className="sectionHeading">Official Videos</div>
				)}
				{!loading ? (
					<div className="videos">
						{data?.results?.map((item) => (
							<div
								key={item.id}
								className="videoItem"
								onClick={() => {
									setShow(true);
									setVideoId(item.key);
								}}
							>
								<div className="videoThumbnail">
									<Img
										src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
									/>
									<PlayIcon />
								</div>
								<div className="videoTitle">{item.name}</div>
							</div>
						))}
					</div>
				) : (
					<div className="videoSkeleton">
						{loadingSkeleton()}
						{loadingSkeleton()}
						{loadingSkeleton()}
						{loadingSkeleton()}
					</div>
				)}
			</ContentWrapper>
			<VideoModal
				show={show}
				setShow={setShow}
				videoId={videoId}
				setVideoId={setVideoId}
			/>
		</div>
	);
};

export default VideosSection;
