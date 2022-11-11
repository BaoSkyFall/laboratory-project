import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';

export async function exportJson(
  filename: string,
  jsonToExport: string,
  fileNameEnding = '.zip'
): Promise<string> {
  const jsonFile = new Blob([jsonToExport], {
    type: 'application/json',
  });

  if (!jsonFile) return Promise.reject('Error converting file to JSON');

  const zipper = new JSZip();
  zipper.file(`${filename}.json`, jsonFile);
  const zippedFile = await zipper.generateAsync({ type: 'blob' });

  const exportFilename = `${filename}${fileNameEnding}`;
  saveAs(zippedFile, exportFilename);
  return Promise.resolve(exportFilename);
}
