import { HamburgerMenu } from './HamburgerMenu';
import { MobileFilterControls } from './MobileFilterControls';

export const Nav = () => {
	return (
		<nav>
			<span>{'F\u2161P'}</span>
			<div>
				<HamburgerMenu />
			</div>
			<div>
				<MobileFilterControls />
			</div>
		</nav>
	);
};
