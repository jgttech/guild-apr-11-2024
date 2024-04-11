/// <reference path="./SharedProps.d.ts" />
/// <reference path="./Ref.d.ts" />

/**
 * A standard implemtation of types for HTML elements. There are several
 * ways to use built-in HTML element types, however, it turns out that some
 * of the types follow the React design and some do not. To create a standard
 * implementation for each HTML element type, I have decided to create a specific
 * tag element type here. All these HTML element tag types should be
 */
declare namespace Html {
  type Button = SharedProps & React.ButtonHTMLAttributes<Ref.Button>;
  type Div = SharedProps & React.HTMLAttributes<Ref.Div>;
  type UnorderedList = SharedProps & React.HTMLAttributes<Ref.UnorderedList>;
  type OrderedList = SharedProps & React.HTMLAttributes<Ref.OrderedList>;
  type ListItem = SharedProps & React.LiHTMLAttributes<Ref.ListItem>;
  type Anchor = SharedProps & React.AnchorHTMLAttributes<Ref.Anchor>;
  type Paragraph = SharedProps & React.HTMLAttributes<Ref.Paragraph>;
  type Input = SharedProps & React.InputHTMLAttributes<Ref.Input>;
  type Checkbox = SharedProps & React.InputHTMLAttributes<Ref.Input>;
  type Span = SharedProps & React.HTMLAttributes<Ref.Span>;
  type Label = SharedProps & React.HTMLAttributes<Ref.Label>;
  type Image = SharedProps & React.HTMLAttributes<Ref.Image>;
  type Fieldset = SharedProps & React.HTMLAttributes<Ref.Fieldset>;
  type Svg = SharedProps & React.SVGAttributes<Ref.Svg>;
  type Textarea = SharedProps & React.TextareaHTMLAttributes<Ref.Textarea>;
  type Main = SharedProps & React.HTMLAttributes<Ref.Main>;
  type Head = SharedProps & React.HTMLAttributes<Ref.Head>;
  type Header = SharedProps & React.HTMLAttributes<Ref.Header>;
  type Footer = SharedProps & React.HTMLAttributes<Ref.Footer>;
  type Nav = SharedProps & React.HTMLAttributes<Ref.Nav>;
  type Section = SharedProps & React.HTMLAttributes<Ref.Section>;
  type Body = SharedProps & React.HTMLAttributes<Ref.Body>;
  type Select = SharedProps & React.HtmlHTMLAttributes<Ref.Select>;
  type Form = SharedProps & React.HtmlHTMLAttributes<Ref.Form>;
  type Dl = SharedProps & React.HtmlHTMLAttributes<Ref.Dl>;
  type Dt = SharedProps & React.HtmlHTMLAttributes<Ref.Dt>;
  type Dd = SharedProps & React.HtmlHTMLAttributes<Ref.Dd>;
}
