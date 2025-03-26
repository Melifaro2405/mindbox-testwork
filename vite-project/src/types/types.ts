export type TTodo = {
  id: string;
  value: string;
  editable: boolean;
  checked: boolean;
};

export type TFilterType = "All" | "Active" | "Completed";
