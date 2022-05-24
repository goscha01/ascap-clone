import { render, screen, cleanup } from '@testing-library/react'

import Accordion from '../Accordion';
import Card from '../Card';
import Content from '../Content';
import Footer from '../Footer';
import Form from '../Form';
import Navbar from '../Navbar';

test('render elements', () => {
  render(<Accordion />);
  render(<Card />);
  render(<Content />);
  render(<Footer />);
  render(<Form />);
  render(<Navbar />);
//   const linkElement = screen.getByText(/Publisher Company Type/);
//   expect(linkElement).toBeInTheDocument();
});