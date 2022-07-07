import { render } from 'preact';
import { Hello } from './components';

export const widget = (node: HTMLElement) => render(<Hello name="test"/>, node);
