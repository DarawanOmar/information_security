import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/Header";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonLabel2?: string;
  backButtonHref?: string;
}

function CardWrapper({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  backButtonLabel2,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-xl max-md:m-4">
      <CardContent>
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
