export interface TopBarInterface {
  activePage: string;
}

export interface BaseButtonInterface {
  className?: string;
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
