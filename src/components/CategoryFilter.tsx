import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: { name: string; count: number }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={activeCategory === category.name ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.name)}
          className={`relative h-9 px-4 rounded-full font-medium transition-all duration-200 ${
            activeCategory === category.name
              ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
              : "bg-background text-foreground border-border hover:bg-muted hover:text-foreground"
          }`}
        >
          {category.name}
          {category.count > 0 && (
            <Badge
              variant="secondary"
              className={`ml-2 h-5 px-1.5 text-xs font-semibold ${
                activeCategory === category.name
                  ? "bg-primary-foreground text-primary"
                  : "bg-muted-foreground/20 text-muted-foreground"
              }`}
            >
              {category.count}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
};