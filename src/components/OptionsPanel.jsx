import { FilterControls } from './FilterControls';
import { SortControls } from './SortControls';

export const OptionsPanel = () => {
	return (
		<div className='options-panel'>
			<FilterControls />
			<SortControls />
			{/* Page */}
		</div>
	);
};
