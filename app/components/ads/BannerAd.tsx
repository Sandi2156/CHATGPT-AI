import {
	BannerAd,
	BannerAdSize,
	TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = TestIds.BANNER;

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
