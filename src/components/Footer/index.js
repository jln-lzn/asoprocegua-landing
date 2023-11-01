import Image from 'next/image';
import Modal from '../Modal';
import { useState } from 'react';

const Footer = () => {
	const phone = '/images/phone.svg';
	const mail = '/images/mail.svg';
	const fb = '/images/fb.svg';
	const ig = '/images/ig.svg';
	const footer_mb = '/images/footer-mb.svg';
	const footer_desk = '/images/footer-desk.svg';
	const map_marker = '/images/map-marker-filled.svg';
	const [modalState, setModalState] = useState(false);

	return (
		<div className="bg-[#fdfdfd] font-sans">
			<div className="flex items-center justify-center px-5 mb-24">
				<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-6">
					<p className="text-lg leading-10 text-left md:text-center md:text-2xl text-disabled-text mt-14 lg:mt-0">
						Te invitamos a que contribuyas con el desarrollo sostenible del Guaviare, uno de los departamentos con mayor riesgo de deforestación. Las comunidades campesinas estamos listas
						para defender nuestra Amazonía si nos apoyas en este camino. Contáctanos para conocer más
					</p>
					<div className="flex w-full md:w-1/2">
						<button onClick={() => setModalState(!modalState)} className="bg-green-text-2 w-full h-[59px] text-lg">
							Contáctanos
						</button>
						<Modal modalState={modalState} setModalState={setModalState} />
					</div>
				</div>
			</div>
			<div className="relative w-full">
				<img className="w-full sf:h-[650px] md:hidden" src={footer_mb} />
				<img className="hidden w-full md:block" src={footer_desk} />
				<div className="flex justify-start absolute text-[14px] bottom-[10%] px-14 md:justify-around w-full gap-5 flex-col md:flex-row items-start md:items-center md:gap-8 lg:gap-5 text-white">
					<div className="flex items-center gap-1 z-[51]">
						<Image src={phone} width={21} height={21} alt="phone" />
						<div className="flex flex-col">
							<span>+57 302 7908298</span>
							<span>+57 312 3711057</span>
						</div>
					</div>
					<div className="flex flex-col gap-2"></div>
					<div className="flex items-center gap-1 z-[51]">
						<Image src={mail} width={21} height={21} alt="mail" />
						<p>asociacionasoprocegua@gmail.com</p>
					</div>
					<div className="flex items-center gap-1 z-[51]">
						<Image src={fb} width={21} height={21} alt="fb" />
						<p>asoproceguaguaviare</p>
					</div>
					<div className="flex gap-1 z-[51]">
						<Image src={ig} width={18} height={18} alt="ig" />
						<p>asoproceguaguaviare</p>
					</div>
					<div className="z-[51]">
						<div className="flex flex-col gap-1">
							<div className="flex items-center gap-1">
								<Image src={map_marker} width={21} height={21} alt="phone" />
								<span>
									Calle 7#23-95,
									<br />
									San José del Guaviare
								</span>
							</div>
							<div className="flex items-center gap-1">
								<Image src={map_marker} width={21} height={21} alt="phone" />
								<span>
									Km 8 Vía Nacional destino Municipio Retorno,
									<br />
									vereda Agua Bonita, San José
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
