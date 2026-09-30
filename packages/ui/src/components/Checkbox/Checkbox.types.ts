export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
}