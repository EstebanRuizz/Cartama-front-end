export interface Publication {
  id: number;
  title: string;
  hasForm: boolean;
  idTypeOfPublication: number | null;
  description: string;
  imageRoute: string;
  createdDate: string;
}
