import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

/**
 * NOTE: This is a temporary component and should be replaced with a Panel component when it's ready.
 * Avoid using this component as much as possible.
 */
export function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="space-y-3 bg-grey p-4">
      {icon}
      <h3 className="text-purple">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
