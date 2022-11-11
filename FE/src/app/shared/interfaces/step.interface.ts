export interface ITabStepContainProps {
  steps: string[];
  loading: boolean;
  active: number;
}

export interface ITabStepTitle {
  index: number;
  title: string; // title need to be translated
}
