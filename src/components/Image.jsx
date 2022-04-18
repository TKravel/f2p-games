export const Image = ({ data, styles }) => {
	return (
		<div className='image-wrapper'>
			<img
				className={styles}
				height='206'
				width='365'
				src={data.thumbnail}
				alt={`${data.title} cover`}
				sameSite='Strict'
			></img>
		</div>
	);
};
