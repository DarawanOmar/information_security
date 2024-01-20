import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonLabel2?: string;
  backButtonHref?: string;
}

function CardWrapper({ children, headerLabel }: CardWrapperProps) {
  return (
    <Card className="shadow-xl ">
      <CardContent>
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardWrapper;
