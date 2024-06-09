import React, { SVGProps } from 'react';

const SvgSelectedFile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.857 1h6.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0118 6.529v12.554c0 1.79-.02 1.917-1.857 1.917H4.857C3.02 21 3 20.874 3 19.083V2.917C3 1.127 3.02 1 4.857 1zM8 12a1 1 0 000 2h7a1 1 0 000-2H8zm0 4a1 1 0 000 2h3a1 1 0 000-2H8z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M6.857 3h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0121 8.529v12.554c0 1.79-.02 1.917-1.857 1.917H6.857C5.02 23 5 22.874 5 21.083V4.917C5 3.127 5.02 3 6.857 3zM8 12a1 1 0 000 2h7a1 1 0 000-2H8zm0 4a1 1 0 000 2h3a1 1 0 000-2H8z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSelectedFile;
