import type { FunctionComponent } from "react";

export const LinkButton: FunctionComponent<{
  content: string;
  url: string;
}> = ({ url, content }) => {
  return (
    <a href={url} target="blank">
      {content}
    </a>
  );
};
