import { useEffect, useState } from 'react';
import { Screenshots } from './modalComponents/Screenshots';
import { TriangleArrow } from '../svgs/TriangleArrow';

export const Modal = ({ data, closeModal }) => {
	const arr = data.description.split('\r\n\r\n');

	const scrollToTop = (behavior) => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: behavior,
		});
	};

	useEffect(() => {
		scrollToTop('smooth');
	}, []);

	return (
		<div className='modal'>
			<button className='close-button' onClick={closeModal}>
				<TriangleArrow styles='modal-close-button' />
				BACK
			</button>
			<div className='modal-game-card'>
				<img
					src={data.thumbnail}
					alt={`${data.title} cover`}
					samesite='Strict'
				/>
				<div className='modal-game-card-bottom'>
					<h1>{data.title}</h1>
					<ul>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#screenshots'>Images</a>
						</li>
						<li>
							<a href='#specs'>Specs</a>
						</li>
					</ul>
				</div>
			</div>

			<div id='screenshots' className='screenshot-section-wrapper'>
				<h3>Screenshots</h3>
				<Screenshots imgData={data.screenshots} />
			</div>
			<div id='about' className='about-wrapper'>
				<div className='hr-container'>
					<hr />
					<h2>About</h2>
				</div>
				<span className='vertical-text'>Full Description</span>
				{arr.map((pText, index) => {
					return (
						<p key={index} className='description'>
							{pText}
						</p>
					);
				})}
			</div>
			<div id='specs' className='specs-wrapper'>
				<div className='hr-container'>
					<hr />
					<h2>Specs</h2>
				</div>
				<div className='specs-container'>
					<h4>Game details</h4>
					<ul>
						<li>
							<span className='li-key'>Platform: </span>
							<span>{data.platform}</span>
						</li>
						<li>
							<span className='li-key'>Platform: </span>
							<span>{data.genre}</span>
						</li>
						<li>
							<span className='li-key'>Release date: </span>
							<span>{data.release_date}</span>
						</li>
						<li>
							<span className='li-key'>Developer: </span>
							<span>{data.developer}</span>
						</li>
						<li>
							<span className='li-key'>Developer: </span>
							<span>{data.publisher}</span>
						</li>
					</ul>
				</div>
				{data.minimum_system_requirements && (
					<div className='specs-container'>
						<h4>Requirements</h4>
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

			<a className='play-now-button' target='_blank' href={data.game_url}>
				PLAY NOW!
			</a>
		</div>
	);
};
