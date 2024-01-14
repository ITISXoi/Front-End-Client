export const convertToFormData = (data: Record<string, any>) => {
  const bodyFormData = new FormData();
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      // bodyFormData.append(key, value || '')
      /**
       * If value is file list
       */
      if (value instanceof Array && value[0] && value[0] instanceof Blob) {
        value.forEach((v) => {
          bodyFormData.append(key, v);
        });
      } else {
        bodyFormData.append(key, value || "");
      }
    }
  }
  return bodyFormData;
};

export const DataURIToBlob = (dataURI: string) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1]?.split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};
