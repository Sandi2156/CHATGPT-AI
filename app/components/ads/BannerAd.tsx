import {
	BannerAd,
	BannerAdSize,
	TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
	? TestIds.BANNER
	: "ca-app-pub-6209939265474141/1947264963";

export default function AppBannerAd() {
	return (
		<BannerAd
			unitId={adUnitId}
			size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
			requestOptions={{
				requestNonPersonalizedAdsOnly: true,
			}}
		/>
	);
}
