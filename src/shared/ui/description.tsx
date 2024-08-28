import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const descriptionVariants = cva('text-muted-foreground', {
  variants: {
    variant: {
      h1: 'text-md',
      h2: 'text-body text-muted font-medium tracking-tight',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
});

type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof descriptionVariants> & {
    children?: React.ReactNode;
    element?: React.ElementType;
  };

const Description = forwardRef<HTMLHeadingElement, DescriptionProps>(
  (props, ref) => {
    const { children, className, element: Element = 'p', variant } = props;

    return (
      <Element
        ref={ref}
        className={descriptionVariants({ variant, className })}
      >
        {children}
      </Element>
    );
  }
);

export { Description, type DescriptionProps };
