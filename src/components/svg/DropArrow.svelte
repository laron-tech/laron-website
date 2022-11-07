<svg viewBox="0 0 100 100" id="drop-arrow">
	<defs>
		<linearGradient id="gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#fff" stop-opacity="0" />
			<stop offset="100%" stop-color="#ff0000" stop-opacity="1" />
		</linearGradient>
		<linearGradient id="gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#0000ff" stop-opacity="1" />
			<stop offset="100%" stop-color="#fff" stop-opacity="0" />
		</linearGradient></defs
	>
	<g id="arrow">
		<path
			d="M 0 50 L 50 100 L 100 50"
			fill="none"
			style="stroke: url(#gradient-1);"
			stroke-width="3px"
		/>
		<path
			d="M 0 20 L 50 70 L 100 20"
			fill="none"
			style="stroke: url(#gradient-2);"
			stroke-width="3px"
		/>
	</g>
</svg>

<style lang="scss">
	svg {
		width: 30px;
		height: 30px;
		position: absolute;
		z-index: 1;
		bottom: 50px;
		left: 50%;
		transform: translateX(-50%);
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	#arrow {
		animation: bounce 1s infinite;
	}
</style>
