import useFetch from "../../hooks/useFetch";
import Cast from "./cast-section";
import DetailsBanner from "./details-banner";
import "./index.scss";
import { useParams } from "react-router-dom";
import VideosSection from "./videos-section";

const DetailsPage = () => {
	const { mediaType, id } = useParams();
	const { data, loading } = useFetch(`/${mediaType}/${id}}/videos`);
	const { data: credits, loading: creditsLoading } = useFetch(
		`/${mediaType}/${id}}/credits`
	);

	return (
		<div className="details-page">
			{/* here, data.results[0] only because we want only trailer video and not other videos */}
			<DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
			<Cast data={credits?.cast} loading={creditsLoading} />
			<VideosSection data={data} loading={loading} />

			{/* To Do: */}
			{/* <SimilarMovies /> */}
			{/* <Recommendation /> */}
		</div>
	);
};

export default DetailsPage;
