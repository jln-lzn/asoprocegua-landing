import Modal from '@/components/Modal';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
	const [modalState, setModalState] = useState(false);
	const arrow = '/images/arrow.svg';
	const right_plant = '/images/right plant.svg';
	const left_plant = '/images/left plant.svg';
	const lianas = '/images/lianas.svg';
	const bird = '/images/bird1.svg';
	const big_bush = '/images/big bush.svg';
	const small_bush = '/images/small bush.svg';
	const animal = '/images/animal.svg';
	const bg_tree1 = '/images/bg tree1.svg';
	const bg_tree2 = '/images/bg tree2.svg';
	const bg_tree3 = '/images/bg tree3.svg';
	const bg_plant = '/images/bg plant.svg';

	return (
		<div className="bg-[#F8F8F8]">
			<section className="relative flex items-center justify-center font-sans md:h-screen">
				<div className="flex flex-col items-center justify-center w-full max-w-2xl gap-5 p-4 md:max-w-3xl lg:max-w-4xl 2xl:max-w-6xl">
					<h2 className="text-left text-4xl leading-[38.73px] md:leading-[62.93px] font-medium md:text-center md:text-[55px] z-30">
						Nuestra misión es representar a los pequeños y medianos productores del Guaviare, consolidar cadenas productivas de los producto forestal no maderable del bosque (PFNMB) y los
						frutales amazónicos con valor agregado.
					</h2>
					<div className="z-10 flex w-full justify-left md:justify-center">
						<hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
					</div>
					<p className="text-left text-lg leading-[21.84px] md:leading-[34.1px] md:mx-16 lg:mx-0 text-disabled-text md:text-xl md:text-center z-30">
						Desarrollar proyectos sostenibles con la conservación de los bosques y el medio ambiente, agropecuarios, frutales amazónicos, maderables y no maderables del bosque y de
						liderazgo comunitario, social, turístico y ambiental.
					</p>
					<button onClick={() => setModalState(!modalState)} className="w-full z-10 mb-40 md:mb-0 h-[59px] bg-green-text-2 text-[18px] md:hidden">
						Contáctanos
					</button>
					<div className="border border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block z-[33]">
						<Image src={arrow} width={24.05} height={24.05} />
					</div>
					{/* <img
            src={left_plant}
            alt="left-plant"
            className="absolute hidden transition-all duration-75 ease-out md:block top-[-50px] left-0 z-10"
          />
          <img
            src={right_plant}
            alt="right-plant"
            className="absolute hidden transition-all duration-75 ease-out md:block top-[-50px] right-0 z-10"
          /> */}
					<img src={lianas} alt="lianas" className="absolute hidden transition-all duration-75 ease-out md:block top-[-80px] right-[100px]" />
					<img src={bird} alt="bird" className="absolute hidden transition-all duration-75 ease-out md:block top-0 right-[250px] z-10" />
					{/* <img
						src={big_bush}
						alt="big_bush"
						className="absolute w-[169.58px] transition-all duration-75 ease-out md:w-auto left-[-30px] lg:left-[-70px] bottom-[-43px] lg:bottom-[-43px] z-10"
					/> */}
					{/* <img
						src={small_bush}
						alt="small_bush"
						className="absolute w-[107.69px] transition-all duration-75 ease-out md:w-auto left-24 lg:left-[200px] bottom-[-43px] lg:bottom-[-43px] z-20"
					/> */}
					{/* <img src={big_bush} alt="big_bush" className="absolute w-[169.58px] transition-all duration-75 ease-out md:w-auto right-0 bottom-[-43px] z-10" /> */}
					{/* <img src={small_bush} alt="small_bush" className="absolute w-[107.69px] transition-all duration-75 ease-out md:w-auto right-24 lg:right-[280px] bottom-[-40px] z-10" /> */}
					<img src={animal} alt="animal" className="absolute w-[119.68px] transition-all duration-75 ease-out md:w-auto left-24 lg:left-[280px] bottom-[-40px] z-10" />
					{/* <img src={bg_tree1} alt="tree1" className="absolute w-[206px] transition-all duration-75 ease-out md:w-auto left-0 bottom-[-10px]" />
					<img src={bg_tree1} alt="tree1" className="absolute w-[206px] transition-all duration-75 ease-out md:w-auto right-0 bottom-0" />
					<img src={bg_tree2} alt="tree2" className="absolute hidden md:block transition-all duration-75 ease-out right-[250px] bottom-0" />
					<img src={bg_plant} alt="plant" className="absolute w-[264.97px] md:w-auto transition-all duration-75 ease-out left-0 bottom-0" />
					<img src={bg_plant} alt="plant" className="absolute w-[264.97px] md:w-auto transition-all duration-75 ease-out right-[100px] bottom-0" />
					<img src={bg_tree3} alt="tree3" className="absolute w-[129.08px] md:w-auto transition-all duration-75 ease-out left-0 bottom-0" />
					<img src={bg_tree3} alt="tree3" className="absolute w-[129.08px] md:w-auto transition-all duration-75 ease-out scale-x-[-1] right-0 bottom-[-90px]" /> */}
				</div>
			</section>
			<Modal modalState={modalState} setModalState={setModalState} />
			<div className="w-full h-[131px] mt-9 bg-[#3D7D40]"></div>
		</div>
	);
};

export default Hero;
