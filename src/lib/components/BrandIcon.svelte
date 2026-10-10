<script>
	let { icon, size = 20 } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="currentColor"
	role="img"
	aria-hidden="true"
>
	<path d={icon.path}></path>
</svg>
