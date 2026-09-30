import { render } from "@testing-library/react";
import { Progress } from "../../src/components/Progress/Progress";

describe('Progress', () => {
    it('renders linear progress correctly', () => {
        const { getByRole } = render(
        <Progress value={50} variant="linear" />
        );
        const progressBar = getByRole('progressbar');
        expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    });
    
    it('renders circular progress correctly', () => {
        const { getByRole } = render(
        <Progress value={75} variant="circular" />
        );
        const progressBar = getByRole('progressbar');
        expect(progressBar).toHaveAttribute('aria-valuenow', '75');
    });
    
    it('renders text progress correctly', () => {
        const { getByText } = render(
        <Progress value={30} variant="text" />
        );
        expect(getByText('30%')).toBeInTheDocument();
    });
})