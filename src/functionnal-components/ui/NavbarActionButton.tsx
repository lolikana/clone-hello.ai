import { type FC, useState } from 'react';

import styles from './NavbarActionButton.module.scss';

type Props = {
	label: 'Motion' | 'Language';
	button1: 'Auto' | 'Ja';
	button2: 'Pause' | 'En';
};

const NavbarActionButton: FC<Props> = ({ label, button1, button2 }) => {
	const [isSelected, setIsSelected] = useState<boolean>(true);

	const toggleIsPressed = () => {
		setIsSelected(prevState => !prevState);
	};

	const content = (
		<div className={styles.navbar__action}>
			<p className={styles.navbar__action_label} role="heading">
				{label}
			</p>
			<p className={styles.navbar__action_buttons}>
				<button
					onClick={() => toggleIsPressed()}
					aria-label={`${button1}`}
					disabled={isSelected}
				>
					{button1}
				</button>
				<span> /&nbsp;</span>
				<button
					onClick={() => toggleIsPressed()}
					aria-label={`${button2}`}
					disabled={!isSelected}
				>
					{button2}
				</button>
			</p>
		</div>
	);

	return content;
};

export default NavbarActionButton;
