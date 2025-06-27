export type Bubble = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  alpha: number;
};

export type MetricProps = {
  value: number;
  label: string;
};

export type SocialMediaButtonProps = {
  href: string;
  variant: "whatsapp" | "instagram";
  children?: React.ReactNode;
};

export type ButtonProps = {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  target?: "_blank";
};
