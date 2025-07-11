
import * as React from 'react';
import { IconProps } from "./Icon";
import { ViewProps, FlexProps, IconProps, TextProps, ButtonProps } from '@aws-amplify/ui-react';

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

export declare type LogInScreenOverridesProps = {
  'Union'?: IconProps;
  'Welcome!'?: PrimitiveOverrideProps<TextProps>;
  'label38921934'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38921938'?: PrimitiveOverrideProps<TextProps>;
  'Input38921937'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38921936'?: PrimitiveOverrideProps<FlexProps>;
  'TextField'?: PrimitiveOverrideProps<FlexProps>;
  'label38921941'?: PrimitiveOverrideProps<TextProps>;
  'placeholder38921945'?: PrimitiveOverrideProps<TextProps>;
  'Button38921946'?: PrimitiveOverrideProps<ButtonProps>;
  'Input38921944'?: PrimitiveOverrideProps<FlexProps>;
  'InputGroup38921943'?: PrimitiveOverrideProps<FlexProps>;
  'PasswordField'?: PrimitiveOverrideProps<FlexProps>;
  'Fill'?: PrimitiveOverrideProps<ViewProps>;
  '🔒Icon'?: PrimitiveOverrideProps<🔒IconProps>;
  'CheckBox'?: PrimitiveOverrideProps<FlexProps>;
  'label38921970'?: PrimitiveOverrideProps<TextProps>;
  'CheckboxField'?: PrimitiveOverrideProps<FlexProps>;
  'label38921962'?: PrimitiveOverrideProps<TextProps>;
  'Button38921960'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 4372'?: PrimitiveOverrideProps<FlexProps>;
  'label38921954'?: PrimitiveOverrideProps<TextProps>;
  'Button38921952'?: PrimitiveOverrideProps<FlexProps>;
  'Don't have an account?'?: PrimitiveOverrideProps<TextProps>;
  'label38921958'?: PrimitiveOverrideProps<TextProps>;
  'Button38921956'?: PrimitiveOverrideProps<FlexProps>;
  'sign up'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 1'?: PrimitiveOverrideProps<FlexProps>;
  'We’ve been using Amplify UI and it changed our lives!'?: PrimitiveOverrideProps<TextProps>;
  'banana'?: IconProps;
  'Frame 4381'?: PrimitiveOverrideProps<FlexProps>;
  'name'?: PrimitiveOverrideProps<TextProps>;
  'title'?: PrimitiveOverrideProps<TextProps>;
  'Frame 4380'?: PrimitiveOverrideProps<FlexProps>;
  'image'?: PrimitiveOverrideProps<ViewProps>;
  'Frame 4378'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 3'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type LogInScreenProps = React.PropsWithChildren<Partial<ViewProps> & {

  overrides?: LogInScreenOverridesProps | undefined | null;
}>;

export default function LogInScreen(props: LogInScreenProps): React.ReactElement;
  