import { setFormDefaults } from "remix-validated-form";

export const setFormDefault = (
  formId: string,
  defaultValues: Partial<unknown>,
): Partial<unknown> => {
  return setFormDefaults(formId, defaultValues);
};
