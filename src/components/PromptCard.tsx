import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PromptCardProps {
  id: string;
  imageUrl: string;
  promptText: string;
  category: string;
  createdAt: string;
}

export const PromptCard = ({ imageUrl, promptText, category, createdAt }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Prompt text copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="group overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt="AI generated prompt preview"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-primary text-primary-foreground font-medium px-2 py-1"
        >
          {category}
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <p className="text-sm text-foreground line-clamp-3 leading-relaxed">
          {promptText}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">
            {new Date(createdAt).toLocaleDateString()}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyPrompt}
            className="h-8 px-3 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 mr-1" />
                Copy Prompt
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};