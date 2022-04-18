import { useEffect, useState } from 'react';

export const Image = ({ data, styles }) => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 400);
	// const handleImage = () => {
	// 	setIsLoading(false);
	// };
	return (
		<div className='image-wrapper'>
			<div
				className='img-placeholder'
				style={isLoading ? { display: 'block' } : { display: 'none' }}
			></div>

			<img
				style={
					isLoading
						? { visibility: 'hidden' }
						: { visibility: 'visible' }
				}
				className={styles}
				height='206'
				width='365'
				src={data.thumbnail}
				alt={`${data.title} cover`}
				// onLoad={handleImage}
				sameSite='Strict'
			></img>
		</div>
	);
};
