// src/components/UnderDevelopment.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Calendar } from "lucide-react";

interface UnderDevelopmentProps {
  sectionName: string;
}

export function UnderDevelopment({ sectionName }: UnderDevelopmentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
          </h1>
          <p className="text-muted-foreground">This section is currently under development</p>
        </div>
        <Button variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>
      </div>

      <Card className="shadow-soft">
        <CardContent className="p-12 text-center">
          <Construction className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            The <strong>{sectionName}</strong> section is currently being developed. 
            Our team is working hard to bring you this feature as soon as possible.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Expected: Q2 2024</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button variant="educational" className="mr-3">
              Request Feature
            </Button>
            <Button variant="outline">
              Get Notified
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}