
import * as React from 'react';

import { ViewProps, TextProps, FlexProps } from '@aws-amplify/ui-react';

export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;

export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;

export declare type ViewTasksOverridesProps = {
  'Rectangle 1164'?: PrimitiveOverrideProps<ViewProps>;
  'Jay Yetman'?: PrimitiveOverrideProps<TextProps>;
  'yetmanjay@gmail.com'?: PrimitiveOverrideProps<TextProps>;
  'Come do some mowing for me and make sre to bring your own mower and gloves.'?: PrimitiveOverrideProps<TextProps>;
  '90 Merritt Ave'?: PrimitiveOverrideProps<TextProps>;
  '200'?: PrimitiveOverrideProps<TextProps>;
  '2-3 hours'?: PrimitiveOverrideProps<TextProps>;
  'Monday - Friday 3pm-8pm'?: PrimitiveOverrideProps<TextProps>;
  'Frame 4383'?: PrimitiveOverrideProps<FlexProps>;
  '$'?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;

export declare type ViewTasksProps = React.PropsWithChildren<Partial<ViewProps> & {

  overrides?: ViewTasksOverridesProps | undefined | null;
}>;

export default function ViewTasks(props: ViewTasksProps): React.ReactElement;
  