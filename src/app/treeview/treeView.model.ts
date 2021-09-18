export class TreeModel {
  type: 'folder' | 'file' | 'unset' | null;
  name?: string;
  children?: TreeModel[];
  id: string;
}
