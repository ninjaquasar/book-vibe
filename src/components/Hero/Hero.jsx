const Hero = () => {
	return (
		<section className="px-30 py-20 rounded-3xl bg-zinc-400/20 flex justify-between items-center gap-20">
			<div className="space-y-12">
				<h1 className="text-[3.5rem] font-bold">
					Books To{" "}
					<span className="bg-gradient-to-r bg-clip-text from-green-700 to-green-800 text-transparent">
						Freshen Up
					</span>{" "}
					Your Bookshelf
				</h1>
				<button
					type="button"
					className="px-7 py-5 rounded-xl bg-primary text-base font-bold text-xl hover:bg-green-600 active:scale-95 transition-transform duration-100"
				>
					View The List
				</button>
			</div>
			<div>
				<img
					src="https://i.ibb.co.com/fVNnvcnF/refactoring-ui.png"
					alt="Hero Image"
					className="w-4/5 aspect-[7_/_10]"
				/>
			</div>
		</section>
	);
};

export default Hero;
