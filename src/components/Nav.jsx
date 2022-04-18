import { useEffect, useState } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { MobileFilterMenu } from './MobileFilterMenu';

export const Nav = () => {
	return (
		<nav>
			<span className='main-logo'>{'F\u2161P'}</span>

			<MobileFilterMenu />
		</nav>
	);
};
