import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const titleVariants = cva('font-medium tracking-tight', {
  variants: {
    variant: {
      h1: 'text-title2 font-bold',
      h2: 'text-title2 font-normal tracking-tight',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
});

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    children?: React.ReactNode;
    element?: React.ElementType;
  };

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, className, element: Element = 'h1', variant } = props;

  return (
    <Element ref={ref} className={titleVariants({ variant, className })}>
      {children}
    </Element>
  );
});

export { Title, type TitleProps };
