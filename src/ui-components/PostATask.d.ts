
import * as React from 'react';

import { ViewProps, IconProps, FlexProps, TextProps } from '@aws-amplify/ui-react';

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

export declare type PostATaskOverridesProps = {
  'Union'?: PrimitiveOverrideProps<IconProps>;
  'label38992968'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38992972'?: PrimitiveOverrideProps<TextProps>;
  'Input38992971'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38992970'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38992967'?: PrimitiveOverrideProps<FlexProps>;
  'label38992975'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38992979'?: PrimitiveOverrideProps<TextProps>;
  'Input38992978'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38992977'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38992974'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 42838992911'?: PrimitiveOverrideProps<FlexProps>;
  'label38992982'?: PrimitiveOverrideProps<TextProps>;
  'Input38992985'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38992984'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38992981'?: PrimitiveOverrideProps<FlexProps>;
  'label38992989'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38992993'?: PrimitiveOverrideProps<TextProps>;
  'Input38992992'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38992991'?: PrimitiveOverrideProps<FlexProps>;
  'label38993036'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38993040'?: PrimitiveOverrideProps<TextProps>;
  'Input38993039'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38993038'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38993035'?: PrimitiveOverrideProps<FlexProps>;
  'label38993043'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38993047'?: PrimitiveOverrideProps<TextProps>;
  'Input38993046'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38993045'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38993042'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 42838993034'?: PrimitiveOverrideProps<FlexProps>;
  'TextAreaField'?: PrimitiveOverrideProps<FlexProps>;
  'label38993051'?: PrimitiveOverrideProps<TextProps>;
  'Input38993054'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38993053'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38993050'?: PrimitiveOverrideProps<FlexProps>;
  'label38993018'?: PrimitiveOverrideProps<TextProps>;
  'Button'?: PrimitiveOverrideProps<FlexProps>;
  '*We will not send promotional emails or texts'?: PrimitiveOverrideProps<TextProps>;
  'ContactUs'?: PrimitiveOverrideProps<FlexProps>;
  'TaskMatch'?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;

export declare type PostATaskProps = React.PropsWithChildren<Partial<ViewProps> & {

  overrides?: PostATaskOverridesProps | undefined | null;
}>;

export default function PostATask(props: PostATaskProps): React.ReactElement;
  