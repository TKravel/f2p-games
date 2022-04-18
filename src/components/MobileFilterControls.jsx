import { useSelector } from 'react-redux';
export const MobileFilterControls = () => {
	const filters = useSelector((state) => state.filters);
	console.log(filters);
	return <div></div>;
};
