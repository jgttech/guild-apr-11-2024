import { forwardRef } from "react";

export const Box = forwardRef<Ref.Div, Html.Div>((props, ref) => {
  return <div {...props} ref={ref} />;
});
