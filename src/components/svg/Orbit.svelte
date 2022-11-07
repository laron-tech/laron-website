<svg id="laron-orbits" viewBox="0 0 400 400">
	<defs>
		<linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#FF0000" />
			<stop offset="100%" stop-color="#00FF00" />
		</linearGradient>
		<linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#00FF00" />
			<stop offset="100%" stop-color="#0000FF" />
		</linearGradient>
		<linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#0000FF" />
			<stop offset="100%" stop-color="#FF0000" />
		</linearGradient>
		<linearGradient id="gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#FF0000" />
			<stop offset="100%" stop-color="#0000FF" />
		</linearGradient>
	</defs>
	<g class="orbits" transform="translate(200, 200)">
		<g>
			<circle class="orbit" style="stroke: url(#gradient-1);" r="50" />
			<circle class="sattelite" r="10" cx="34" cy="36" style="stroke: url(#gradient-1);" />
		</g>
		<g>
			<circle class="orbit" style="stroke: url(#gradient-2);" r="100" />
			<circle
				class="sattelite"
				r="10"
				cx="-94"
				cy="-34"
				style="stroke: url(#gradient-2); animation-delay: 0.4;"
			/>
		</g>
		<g>
			<circle class="orbit" style="stroke: url(#gradient-3);" r="150" />
			<circle
				class="sattelite"
				r="10"
				cx="60"
				cy="-136"
				style="stroke: url(#gradient-3); animation-delay: 0.7;"
			/>
		</g>
		<g>
			<circle class="orbit" style="stroke: url(#gradient-4);" r="200" />
			<circle
				class="sattelite"
				r="10"
				cx="-190"
				cy="60"
				style="stroke: url(#gradient-4); animation-delay: 0.9;"
			/>
		</g>
	</g>
	<g id="ethereum-logo" transform="translate(100, 92)">
		<path d="M 100 90 L 90 110 L 100 115 Z" fill="#FF0000" />
		<path d="M 100 90 L 100 115 L 110 110 Z" fill="#00FF00" />
		<path d="M 100 105 L 90 110 L 100 115 Z" fill="#0000FF" />
		<path d="M 100 105 L 100 115 L 110 110 Z" fill="#0000AE" />
		<path d="M 90 112 L 100 127 L 100 117 Z" fill="#FF0000" />
		<path d="M 100 117 L 100 127 L 110 112 Z" fill="#00FF00" />
	</g>
</svg>

<style lang="scss">
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}

	.orbits > g {
		animation: spin 60s linear both infinite;
	}

	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: visible;
		z-index: 1;
	}

	.orbit {
		fill: none;
		stroke-width: 1.165;
		animation: grow 5s linear both infinite;
	}
</style>
