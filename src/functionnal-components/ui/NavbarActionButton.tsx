import { type FC, useState } from 'react';

import styles from './NavbarActionButton.module.scss';

type Props = {
	label: 'Motion' | 'Language';
	button1: 'Auto' | 'Ja';
	button2: 'Pause' | 'En';
};

const NavbarActionButton: FC<Props> = ({ label, button1, button2 }) => {
	const [isPressed, setIsPressed] = useState<boolean>(true);

	const toggleIsPressed = () => {
		setIsPressed(prevState => !prevState);
	};

	const content = (
		<div className={styles.navbar__action}>
			<p className={styles.navbar__action_label} role="heading">
				{label}
			</p>
			<p className={styles.navbar__action_buttons}>
				<button
					onClick={() => toggleIsPressed()}
					role="heading"
					aria-label={`${button1}`}
					aria-selected={isPressed}
					disabled={isPressed}
				>
					{button1}
				</button>
				<span> /&nbsp;</span>
				<button
					onClick={() => toggleIsPressed()}
					role="heading"
					aria-label={`${button2}`}
					aria-selected={!isPressed}
					disabled={!isPressed}
				>
					{button2}
				</button>
			</p>
		</div>
	);

	return content;
};

export default NavbarActionButton;
