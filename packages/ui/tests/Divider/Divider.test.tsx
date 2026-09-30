import { render } from "@testing-library/react";
import { Divider } from "../../src/components/Divider/Divider";

describe('Divider', () => { 
    it('renders horizontal divider', () => {
        const { getByRole } = render(<Divider orientation="horizontal" />);
    
        const divider = getByRole('separator');
        expect(divider).toBeInTheDocument();
        expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });
    
    it('renders divider with text', () => {
        const text = 'Divider Text';
        const { getByRole } = render(<Divider text={text} />);
    
        const divider = getByRole('separator', { name: text });
        expect(divider).toBeInTheDocument();
    });
    });