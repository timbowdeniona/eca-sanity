// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonToFormData(jsonObject: Record<string, any>): FormData {
  const formData = new FormData();

  Object.keys(jsonObject).forEach(key => {
    formData.append(key, jsonObject[key]);
  });

  return formData;
}
