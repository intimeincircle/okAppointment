import type { FunctionComponent } from "react";
import React from "react";

import { Button, Group } from "@mantine/core";
import { useIsSubmitting } from "remix-validated-form";

export const SubmitButton: FunctionComponent<{
  actionName?: string;
  content?: string;
}> = ({ content, actionName }) => {
  const isSubmitting = useIsSubmitting();
  return (
    <Group position="left" mt="xl">
      <Button
        name="_action"
        value={actionName}
        variant="default"
        disabled={isSubmitting}
        type="submit"
        loading={isSubmitting}
      >
        {content ?? "确认"}
      </Button>
    </Group>
  );
};
