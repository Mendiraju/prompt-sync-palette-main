import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Lock, Plus, Edit, Trash2 } from "lucide-react";

// This is a demo admin panel - in production you'd need proper authentication
const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo authentication - in production use proper auth
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={loginForm.username}
                onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Demo: admin / admin
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        {/* Add New Prompt Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Image URL" />
            <Textarea placeholder="Prompt text" rows={3} />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Couple">Couple</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
                <SelectItem value="Animals">Animals</SelectItem>
                <SelectItem value="Nature">Nature</SelectItem>
                <SelectItem value="Art">Art</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Prompt
            </Button>
          </CardContent>
        </Card>

        {/* Existing Prompts Management */}
        <Card>
          <CardHeader>
            <CardTitle>Manage Prompts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Demo prompt entries */}
              {[1, 2, 3].map((id) => (
                <div key={id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://picsum.photos/60/60?random=${id}`}
                      alt="Prompt preview"
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <p className="font-medium">Sample Prompt {id}</p>
                      <Badge variant="secondary">Category</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend Requirements Notice */}
        <Card className="mt-8 bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">⚠️ Backend Integration Required</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is a demo admin panel. For full functionality you need:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Database connection (PostgreSQL/SQLite)</li>
              <li>• Authentication system</li>
              <li>• API endpoints for CRUD operations</li>
              <li>• Real-time updates (WebSockets/SSE)</li>
              <li>• File upload for images</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Consider using <strong>Supabase</strong> for instant backend capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
