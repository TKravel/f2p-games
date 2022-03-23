import { useState } from 'react';

export const Modal = ({ data, closeModal }) => {
	const [isFullDescription, setIsFullDescription] = useState(false);
	return (
		<div className='modal'>
			<button className='styled-button close-button' onClick={closeModal}>
				Close
			</button>
			<div className='description-wrapper'>
				<h2>{data.title}</h2>
				<p className='description'>
					{isFullDescription
						? data.description
						: data.short_description}
				</p>
				<button
					onClick={() => {
						setIsFullDescription(!isFullDescription);
					}}
					className='styled-button expand-button'
				>
					{isFullDescription ? 'Close' : 'Read full description'}
				</button>
			</div>
			<div className='screenshot-wrapper'>
				{data.screenshots.map((image) => {
					return (
						<img
							key={image.id}
							src={image.image}
							samesite='Lax'
						></img>
					);
				})}
			</div>
			<div className='specs-wrapper'>
				<div className='specs-container'>
					<h4>Game details</h4>
					<ul>
						<li>
							<span className='li-key'>Platform: </span>
							<span>{data.platform}</span>
						</li>
						<li>
							<span className='li-key'>Release date: </span>
							<span>{data.release_date}</span>
						</li>
						<li>
							<span className='li-key'>Developer: </span>
							<span>{data.developer}</span>
						</li>
					</ul>
				</div>
				{data.minimum_system_requirements && (
					<div className='specs-container'>
						<h4>Minimum System Requirements</h4>
						<ul>
							<li>
								<span className='li-key'>OS: </span>
								<span>
									{data.minimum_system_requirements.os}
								</span>
							</li>
							<li>
								<span className='li-key'>Processor: </span>
								<span>
									{data.minimum_system_requirements.processor}
								</span>
							</li>
							<li>
								<span className='li-key'>Memory: </span>
								<span>
									{data.minimum_system_requirements.memory}
								</span>
							</li>
							<li>
								<span className='li-key'>Graphics: </span>
								<span>
									{data.minimum_system_requirements.graphics}
								</span>
							</li>
							<li>
								<span className='li-key'>Storage: </span>
								<span>
									{data.minimum_system_requirements.storage}
								</span>
							</li>
						</ul>
					</div>
				)}
			</div>

			<a target='_blank' href={data.game_url}>
				PLAY NOW!
			</a>
		</div>
	);
};
