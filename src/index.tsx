import { render } from 'preact';
import { Hello } from './components';

const widget = (node: HTMLElement) => render(<Hello name="test"/>, node);

export {widget, Hello}