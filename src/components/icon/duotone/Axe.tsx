import React, { SVGProps } from 'react';

const SvgAxe = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15.243 15.828l6.364-6.364 1.414 1.415-6.364 6.364-1.414-1.415zm-13.435.708l9.9-9.9a1 1 0 011.413 0l1.415 1.414a1 1 0 010 1.414l-9.9 9.9a1 1 0 01-1.414 0L1.808 17.95a1 1 0 010-1.414zM15.95 3.808l1.414 1.414a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L13.828 5.93a1 1 0 010-1.414l.708-.707a1 1 0 011.414 0z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20.9 8.757c-2.593-.707-4.243-1.414-4.95-2.121l-4.243-4.243L8.172 5.93l4.242 4.243c.943.942 1.65 2.592 2.122 4.95l6.363-6.365z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAxe;
