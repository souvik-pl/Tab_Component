export type TabListProps = {
  onChange: (index: number) => void;
  children: JSX.Element[];
  width?: string;
  height?: string;
};

export type TabProps = {
  value: any;
  label: string;
  icon?: JSX.Element;
};

export type TabContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
  focusedTab: number;
  setFocusedTab: (index: number) => void;
  selectionHandler: (index: number) => void;
};
