import React, { SVGProps } from 'react';

const SvgPixels = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={4} y={16} width={4} height={4} rx={1} />
				<rect fill='currentColor' x={4} y={10} width={4} height={4} rx={1} />
				<rect fill='currentColor' x={10} y={16} width={4} height={4} rx={1} />
				<rect fill='currentColor' opacity={0.3} x={10} y={10} width={4} height={4} rx={1} />
				<rect fill='currentColor' x={4} y={4} width={4} height={4} rx={1} />
				<rect fill='currentColor' x={16} y={16} width={4} height={4} rx={1} />
			</g>
		</svg>
	);
};

export default SvgPixels;
