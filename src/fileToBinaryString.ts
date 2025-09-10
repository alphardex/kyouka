/**
 * Convert file to binary string.
 * @param file
 * @returns
 */
const fileToBinaryString = (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
      const binaryString = event.target!.result;
      resolve(binaryString);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export default fileToBinaryString;
