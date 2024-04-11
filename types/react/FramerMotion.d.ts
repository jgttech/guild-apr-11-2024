import type { MotionProps } from "framer-motion";

declare global {
  export namespace FramerMotion {
    export type Duration = number;

    export type AnimationProps = {
      duration?: FramerMotion.Duration;
      animation?: MotionProps | UI.Animations;
    };

    export type AnimationArgs = {
      duration?: number;
    };

    /**
     * Used for creating animation callback functions.
     */
    export type AnimationFunction = (
      config: FramerMotion.AnimationArgs
    ) => MotionProps;

    export type Props<T> = Omit<T, keyof FramerMotion.AnimationProps> &
      FramerMotion.AnimationProps;

    export type Element<T> = FramerMotion.Props<Omit<T, "style"> & MotionProps>;

    /**
     * HTML Element + Framer Motion + React
     *
     * These wrapper types bind the animation configuration to
     * the components in a transparent way that gives all the generic
     * HTML elements support for Framer Motion animations.
     */
    export type Div = FramerMotion.Element<Html.Div>;
    export type Nav = FramerMotion.Element<Html.Nav>;
    export type Head = FramerMotion.Element<Html.Head>;
    export type Button = FramerMotion.Element<Html.Button>;
    export type Span = FramerMotion.Element<Html.Span>;
    export type Image = FramerMotion.Element<Html.Image>;
    export type Input = FramerMotion.Element<Html.Input>;
    export type Anchor = FramerMotion.Element<Html.Anchor>;
    export type Header = FramerMotion.Element<Html.Header>;
    export type Footer = FramerMotion.Element<Html.Footer>;
    export type Section = FramerMotion.Element<Html.Section>;
  }
}
