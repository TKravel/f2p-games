import { useEffect, useState } from 'react';

export const Image = ({ data, styles }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [img, setImg] = useState(null);

	const handleImage = () => {
		setIsLoading(false);
	};
	return (
		<>
			<div
				className='img-placeholder'
				style={isLoading ? { visibility: '1' } : { visibility: '0' }}
			></div>

			<img
				style={isLoading ? { visibility: '0' } : { visibility: '1' }}
				className={styles}
				src={data.thumbnail}
				alt={`${data.title} cover image`}
				onLoad={handleImage}
			></img>
		</>
	);
};
