import Image from 'next/image';

const Beneficios = () => {
	const fruit1 = '/images/fruit1.png';
	const fruit2 = '/images/fruit2.png';
	const fruit3 = '/images/fruit3.png';

	return (
		<section className="flex items-center flex-wrap bg-[#fdfdfd] justify-center gap-3 px-5 font-sans md:pt-8 md:pb-48">
			<div className="flex flex-col items-center justify-center">
				<Image src={fruit1} width={271} height={181} alt="asaí" />
				<div className="flex justify-start text-lg py-10 flex-col bg-[#F8F8F8] px-8 rounded-xl h-[440px] border border-[#f8f8f8]">
					<h3 className="mb-1">
						Beneficios del <span className="ml-2 text-2xl font-bold">Açaí</span>
					</h3>
					<p className="mb-4 text-sm">(Euterpe oleracea)</p>
					<div className="flex justify-start w-full">
						<hr className="w-1/5 max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
					</div>
					<div className="mt-8 space-y-1">
						<p>• Ayuda a bajar de peso</p>
						<p>• Da sensación de saciedad</p>
						<p>• Antioxidante por excelencia</p>
						<p>• Controla el colesterol</p>
						<p>• Ayuda a controlar la presión arterial</p>
						<p>• 16 aminoácidos y minerales</p>
						<p>• Ayuda a combatir los signos del envejecimiento</p>
						<p>• Contiene grasos Omega 9 y 6</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<Image src={fruit2} width={222} height={176} alt="seje" />
				<div className="flex justify-start text-lg py-10 flex-col bg-[#F8F8F8] px-8 rounded-xl h-[440px] border border-[#f8f8f8]">
					<h3 className="mb-1">
						Beneficios del <span className="ml-2 text-2xl font-bold">Seje</span>
					</h3>
					<p className="mb-4 text-sm">(Oenocarpus bacaba)</p>
					<div className="flex justify-start w-full">
						<hr className="w-1/5 max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
					</div>
					<div className="mt-8 space-y-1">
						<p>• Ayuda a combatir la caída del cabello</p>
						<p>• Controla el colesterol y trigliceridos</p>
						<p>• Reduce el riesgo de enfermedades cardiovasculares</p>
						<p>• Ayuda a tratar afecciones respiratorias</p>
						<p>• Contiene grasos Omega 9</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<Image src={fruit3} width={268} height={182} alt="moriche" />
				<div className="flex justify-start text-lg py-10 flex-col bg-[#F8F8F8] px-8 rounded-xl h-[440px] border border-[#f8f8f8]">
					<h3 className="mb-1">
						Beneficios del <span className="ml-2 text-2xl font-bold">Moriche</span>
					</h3>
					<p className="mb-4 text-sm">(Mauritia flexuosa)</p>
					<div className="flex justify-start w-full">
						<hr className="w-1/5 max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
					</div>
					<div className="mt-8 space-y-1">
						<p>• Regulación hídrica y conservación de la biodiversidad</p>
						<p>• Ayuda a contrarrestar infecciones en la piel</p>
						<p>• Nutre y suaviza la piel y el cabello</p>
						<p>• Rico en Vitaminas A, E y C</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Beneficios;
