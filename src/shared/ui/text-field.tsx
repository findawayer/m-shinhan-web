import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components';
import { cn } from '../utilities/classnames';

type TextFieldProps = AriaTextFieldProps;

function TextField(props: TextFieldProps) {
  const { className, validationBehavior = 'aria', ...otherProps } = props;

  return (
    <AriaTextField
      className={cn('space-y-1', className)}
      validationBehavior={validationBehavior}
      {...otherProps}
    />
  );
}

export { TextField, type TextFieldProps };
