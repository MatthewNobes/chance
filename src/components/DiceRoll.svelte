<script>
	import '../app.css';
	import { generateRandomNumber } from '../utils';

	let diceValue = generateRandomNumber(1, 7);
	const rollDice = () => {
		diceValue = generateRandomNumber(1, 7);
	};
</script>

<div class="flex flex-col items-center gap-4">
	<p class="text-8xl">{diceValue}</p>
	<button
		on:click={() => rollDice()}
		class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white font-medium px-6 py-4 shadow-sm text-4xl"
		>Roll Dice</button
	>
</div>
