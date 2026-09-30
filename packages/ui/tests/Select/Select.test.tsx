import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from '../../src/components/Select/Select';


const options = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
];

describe('Select', () => {

    it('renders placeholder', () => {
        render(<Select options={options} placeholder="Select option" />);
        expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('opens dropdown on click', async () => {
        const user = userEvent.setup();

        render(<Select options={options} />);

        await user.click(screen.getByRole('combobox'));

        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('selects an option', async () => {
        const user = userEvent.setup();

        render(<Select options={options} />);

        await user.click(screen.getByRole('combobox'));
        await user.click(screen.getByText('React'));

        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('selects multiple options', async () => {
        const user = userEvent.setup();

        render(<Select options={options} isMulti />);

        await user.click(screen.getByRole('combobox'));
        await user.click(screen.getByText('React'));
        await user.click(screen.getByText('Vue'));

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Vue')).toBeInTheDocument();
    });

    it('removes selected option in multi-select', async () => {
        const user = userEvent.setup();

        render(<Select options={options} isMulti defaultValue={['react']} />);


        const chip = screen.getByText((content) => content.includes('React'));


        const removeBtn = screen.getByText((c) => c.includes('✕'));
        await user.click(removeBtn);

        expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
        const user = userEvent.setup();

        render(<Select options={options} />);

        const trigger = screen.getByRole('combobox');

        trigger.focus();

        await user.click(trigger);
        await user.keyboard('{Enter}{ArrowDown}');


        expect(
            screen.getByText((content) => content.includes('React'))
        ).toBeInTheDocument();

    });

    it('does not open when disabled', async () => {
        const user = userEvent.setup();

        render(<Select options={options} disabled />);

        await user.click(screen.getByRole('combobox'));

        expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

})