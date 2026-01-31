import type { Components } from "react-markdown";
import { Heading1, Heading2, Heading3 } from "./Heading";
import { Paragraph } from "./Paragraph";
import { ListItem, OrderedList, UnorderedList } from "./List";
import { Code } from "./Code";
import { PreformattedText } from "./PreformattedText";
import { Blockquote } from "./Blockquote";
import { Anchor } from "./Anchor";
import { Image } from "./Image";
import {
  MarkdownTable,
  MarkdownTbody,
  MarkdownTd,
  MarkdownTh,
  MarkdownThead,
  MarkdownTr,
} from "./Table";

export const ComponentConfig: Components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  code: Code,
  pre: PreformattedText,
  blockquote: Blockquote,
  a: Anchor,
  img: Image,
  table: MarkdownTable,
  thead: MarkdownThead,
  tbody: MarkdownTbody,
  tr: MarkdownTr,
  th: MarkdownTh,
  td: MarkdownTd,
};
