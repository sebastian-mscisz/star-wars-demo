import { BrowserRouter } from 'react-router-dom';
import { PaginationButtons } from './PaginationButtons';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

describe('Pagination buttons', () => {
    let leftButton: HTMLElement;
    let rightButton: HTMLElement;

    const getButtons = () => {
        leftButton = screen.getByTestId('left-pagination-button');
        rightButton = screen.getByTestId('right-pagination-button');
    };

    it('should render', () => {
        const { asFragment } = render(<PaginationButtons leftPath="/left" rightPath="/right" />, {
            wrapper: BrowserRouter,
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it('with hidden left button', () => {
        render(<PaginationButtons leftPath="/left" rightPath="/right" hideLeft />, { wrapper: BrowserRouter });
        getButtons();
        expect(leftButton.classList.contains('sw-pagination-button--hidden')).toBe(true);
        expect(rightButton.classList.contains('sw-pagination-button--hidden')).toBe(false);
    });

    it('with hidden right button', () => {
        render(<PaginationButtons leftPath="/left" rightPath="/right" hideRight />, { wrapper: BrowserRouter });
        getButtons();
        expect(leftButton.classList.contains('sw-pagination-button--hidden')).toBe(false);
        expect(rightButton.classList.contains('sw-pagination-button--hidden')).toBe(true);
    });

    it('with hidden both buttons', () => {
        render(<PaginationButtons leftPath="/left" rightPath="/right" hideLeft hideRight />, {
            wrapper: BrowserRouter,
        });
        getButtons();
        expect(leftButton.classList.contains('sw-pagination-button--hidden')).toBe(true);
        expect(rightButton.classList.contains('sw-pagination-button--hidden')).toBe(true);
    });

    it('with centered buttons', () => {
        render(<PaginationButtons leftPath="/left" rightPath="/right" center />, { wrapper: BrowserRouter });
        const paginationSection = screen.getByTestId('pagination-section');
        expect(paginationSection.classList.contains('sw-pagination-section--center')).toBe(true);
    });
});
