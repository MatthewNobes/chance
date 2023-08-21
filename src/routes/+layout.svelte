<script>
	import '../app.css';
</script>

<div class="h-full">
	<div class="flex flex-row">
		<div class="flex flex-row py-2 max-h-[64px] text-4xl w-full bg-slate-700">
			<a class="px-2 py-2" href="/"><h1 class="text-white">Chance</h1></a>
		</div>
	</div>
	<div class="py-2 px-1">
		<slot />
	</div>
</div>
