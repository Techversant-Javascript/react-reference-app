import { fireEvent, render, screen } from "@testing-library/react";
import { Dialog } from "../../src/components/Dialog/Dialog";

describe('Dialog', () => {
    it('renders title and content', () => {
        render(
            <Dialog
                open={true}
                title="Test Dialog"
                onClose={() => {}}
            >
                Dialog content
            </Dialog>
        );

        expect(screen.getByText('Test Dialog')).toBeInTheDocument();
        expect(screen.getByText('Dialog content')).toBeInTheDocument();
    });
});
it('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn();

    render(
        <Dialog
            open={true}
            title="Test Dialog"
            onClose={onClose}
        >
            Dialog content
        </Dialog>
    );

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalled();
});