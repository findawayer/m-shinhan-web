import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { cn } from '../utilities/classnames';

const buttonVariants = cva(
  [
    'select-none appearance-none touch-manipulation',
    'box-border inline-flex shrink-0 items-center justify-center align-middle transition-colors duration-shortest',
    'active:text-[#c4c4c4] disabled:bg-[#e9e9e9] disabled:text-[#c4c4c4]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'rounded-lg px-4 h-[54px] bg-primary text-white text-title2 font-bold',
        ],
        sedcondary: [
          'rounded-lg px-4 h-[54px] bg-white text-text text-title2 font-bold',
        ],
        tertiary: [],
        text: [
          'underline underline-offset-4 border-b-current leading-tight',
          'disabled:text-gray-dd',
        ],
      },
    },
  }
);

type ButtonProps = AriaButtonProps & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      children,
      className,
      type = 'button',
      variant,
      ...otherProps
    } = props;

    return (
      <AriaButton
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={cn(buttonVariants({ className, variant }))}
        type={type}
        {...otherProps}
      >
        {children}
      </AriaButton>
    );
  }
);

export { Button, buttonVariants, type ButtonProps };
