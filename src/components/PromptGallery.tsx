import { useState, useMemo } from "react";
import { PromptCard } from "./PromptCard";
import { CategoryFilter } from "./CategoryFilter";
import { GalleryHeader } from "./GalleryHeader";
import { samplePrompts, categories, type Prompt } from "@/data/samplePrompts";
import { Badge } from "@/components/ui/badge";

export const PromptGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Prompts");
  const [prompts] = useState<Prompt[]>(samplePrompts);

  const filteredPrompts = useMemo(() => {
    if (activeCategory === "All Prompts") {
      return prompts;
    }
    return prompts.filter(prompt => prompt.category === activeCategory);
  }, [prompts, activeCategory]);

  const categoryStats = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      count: cat.name === "All Prompts" 
        ? prompts.length 
        : prompts.filter(p => p.category === cat.name).length
    }));
  }, [prompts]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <GalleryHeader totalPrompts={prompts.length} />
        
        <CategoryFilter
          categories={categoryStats}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredPrompts.length}</span> prompts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              id={prompt.id}
              imageUrl={prompt.imageUrl}
              promptText={prompt.promptText}
              category={prompt.category}
              createdAt={prompt.createdAt}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to manage and browse AI prompts efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">One-Click Copy</h3>
              <p className="text-sm text-muted-foreground">Instantly copy any AI prompt to your clipboard with a single click</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Filtering</h3>
              <p className="text-sm text-muted-foreground">Browse prompts by categories: Men, Women, Couple, Kids</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">Gallery updates instantly when new prompts are added</p>
            </div>
          </div>

          {/* Backend Notice */}
          <div className="bg-muted/50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Need Backend Functionality?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For real-time database updates, file storage, and persistent data, connect your project 
              to Supabase for full backend capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="bg-background">Supabase</Badge>
              <Badge variant="outline" className="bg-background">Scalable</Badge>
              <Badge variant="outline" className="bg-background">Real-time</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};