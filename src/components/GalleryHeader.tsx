import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GalleryHeaderProps {
  totalPrompts: number;
  isLiveUpdates?: boolean;
}

export const GalleryHeader = ({ totalPrompts, isLiveUpdates = true }: GalleryHeaderProps) => {
  return (
    <div className="text-center py-12 max-w-4xl mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
        <Sparkles className="w-8 h-8 text-primary-foreground" />
      </div>
      
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-primary">AI Prompt</span>
        <br />
        <span className="text-foreground">Gallery</span>
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Discover and copy amazing AI prompts for generating stunning images. Browse by 
        category and find inspiration for your next creation with real-time updates.
      </p>
      
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">{totalPrompts}</span>
          <span className="text-muted-foreground">Prompts Available</span>
        </div>
        
        {isLiveUpdates && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Live Updates</span>
          </div>
        )}
      </div>
    </div>
  );
};