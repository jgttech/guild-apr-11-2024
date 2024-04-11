import type { MotionProps } from "framer-motion";
import { animations } from "~/utils/animations";

type AvailableAnimations = keyof typeof animations;

declare global {
  export namespace FramerMotion {
    export type Duration = number;

    export type AnimationProps = {
      duration?: FramerMotion.Duration;
      animation?: MotionProps | AvailableAnimations;
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

    export type Props<T = {}> = Omit<T, keyof FramerMotion.AnimationProps> &
      FramerMotion.AnimationProps;

    /**
     * HTML Element + Framer Motion + React
     *
     * These wrapper types bind the animation configuration to
     * the components in a transparent way that gives all the generic
     * HTML elements support for Framer Motion animations.
     */
    export type Button = FramerMotion.Props<Html.Button & MotionProps>;
    export type Div = FramerMotion.Props<Html.Div & MotionProps>;
    export type Nav = FramerMotion.Props<Html.Nav & MotionProps>;
    export type Anchor = FramerMotion.Props<Html.Anchor & MotionProps>;
    export type Span = FramerMotion.Props<Html.Span & MotionProps>;
    export type Header = FramerMotion.Props<Html.Header & MotionProps>;
    export type Footer = FramerMotion.Props<Html.Footer & MotionProps>;
    export type Section = FramerMotion.Props<Html.Section & MotionProps>;
  }
}
