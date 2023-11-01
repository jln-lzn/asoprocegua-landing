import Image from 'next/image';

const ProyectoRem = () => {
	const img11 = '/images/img11.jpg';
	const img12 = '/images/img12.jpg';
	const img13 = '/images/img13.jpg';
	const img5 = '/images/img5.png';
	const img6 = '/images/img6.png';

	return (
		<section className="bg-[#fdfdfd] flex items-center flex-col justify-center font-sans md:mb-24 lg:mb-48 px-5">
			<div className="relative flex flex-col items-center justify-center w-full gap-5 px-4 py-8 mt-4 rounded-lg md:mt-16 lg:mt-4 lg:py-16 md:px-8 md:max-w-6xl">
				<div className="flex flex-col md:flex-row">
					<div className="">
						<h3 className="mb-4 text-4xl font-bold uppercase md:mr-12">Proyecto REM+ VA</h3>
						<div className="flex justify-start w-full mb-4">
							<hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
						</div>
						{/* <p className="mb-4 text-xl font-medium leading-8 text-left">
              Monto del proyecto: 3’255,727,086
            </p> */}
					</div>
					<p className="mb-5 text-lg leading-8 text-left lg:w-1/2 text-disabled-text">
						Por medio de este proyecto hemos beneficiado a más de 170 familias campesinas con un servicio de extensión agropecuaria y apoyándolos en sus proyectos productivos. Además
						obtuvimos financiación para la consolidación y construcción  de nuestra planta de procesamiento de fruta de Asai, Seje, y Moriche
					</p>
				</div>
				<div className="flex flex-wrap items-center justify-center w-full gap-3">
					<Image className="w-[145px] md:w-[190px] h-[170px] md:h-[213px] lg:h-[413px] lg:w-[353px] object-cover rounded-xl" src={img13} width={1000} height={1000} alt="img1" />
					<Image className="w-[230px] md:w-[260px] md:h-[200px] lg:h-[413px] lg:w-[560px] object-cover rounded-xl" src={img12} width={1000} height={1000} alt="img2" />
					<Image className="w-[150px] md:w-[240px] lg:h-[252px] lg:w-[363px] object-cover rounded-xl" src={img11} width={1000} height={1000} alt="img3" />
					<Image className="w-[150px] md:w-[240px] lg:w-[340px] object-cover" src={img5} width={353} height={413} alt="img4" />
					<Image className="w-[150px] md:w-[240px] lg:w-[340px] object-cover" src={img6} width={340} height={413} alt="img5" />
				</div>
				<div className="flex justify-start w-full mt-20 md:justify-center">
					<hr className="w-full border-t-2 border-[#E8E7E8] border-l-0 border-r-0" />
				</div>
			</div>
		</section>
	);
};

export default ProyectoRem;
