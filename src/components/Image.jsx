import { useEffect, useState } from 'react';

export const Image = ({ data, styles }) => {
	const [isLoading, setIsLoading] = useState(true);

	const handleImage = () => {
		setIsLoading(false);
	};
	return (
		<>
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
				src={data.thumbnail}
				alt={`${data.title} cover image`}
				onLoad={handleImage}
				sameSite='Strict'
			></img>
		</>
	);
};
