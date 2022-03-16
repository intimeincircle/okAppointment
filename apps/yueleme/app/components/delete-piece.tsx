import type { FunctionComponent } from "react";
import { Form } from "@remix-run/react";

export const DeletePiece: FunctionComponent<{ data: { id: number } }> = ({
  data,
}) => {
  return (
    <Form
      method="post"
      action="/actions/piece/delete"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <div>
        <label>
          Name: <input name="id" type="text" value={data.id} />
        </label>
      </div>
      <button type="submit">delete id {data.id}</button>
    </Form>
  );
};
