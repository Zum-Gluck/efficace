<template>
	<div>
		<Swiper></Swiper>
		<SwiperItem></SwiperItem>
	</div>
</template>

<script>
import Swiper from "./package/Swiper/Swiper";
import SwiperItem from "./package/SwiperItem/SwiperItem";

export default {
	name: "App",
	components: {
		Swiper,
		SwiperItem,
	},
};
</script>
