import React, { SVGProps } from 'react';

const SvgCookingBook = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='svg-icon'
			{...props}>
			<defs>
				<path
					d='M20 18H8a1 1 0 000 2h12v1c0 .627-.358 1-1 1H7c-1.746 0-3-1.306-3-3V5c0-1.694 1.254-3 3-3h12c.642 0 1 .373 1 1v15z'
					id='cooking-book_svg__a'
				/>
			</defs>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<mask id='cooking-book_svg__b' fill='#fff'>
					<use xlinkHref='#cooking-book_svg__a' />
				</mask>
				<use fill='currentColor' opacity={0.3} xlinkHref='#cooking-book_svg__a' />
				<path
					d='M9.35 11.588C8.574 11.378 8 10.642 8 9.765c0-1.04.806-1.883 1.8-1.883.051 0 .102.003.151.007C10.321 6.789 11.322 6 12.5 6s2.18.789 2.549 1.889c.05-.004.1-.007.151-.007.994 0 1.8.843 1.8 1.883 0 .877-.574 1.614-1.35 1.823v1.941a.46.46 0 01-.45.471H9.8a.46.46 0 01-.45-.47v-1.942z'
					fill='currentColor'
					opacity={0.3}
					mask='url(#cooking-book_svg__b)'
				/>
			</g>
		</svg>
	);
};

export default SvgCookingBook;
