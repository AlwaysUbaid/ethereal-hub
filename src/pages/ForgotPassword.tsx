
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "Check your email for the password reset link",
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 md:space-y-8">
        <div className="relative">
          <Link to="/sign-in" className="absolute -left-2 -top-10 md:-top-12 p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link to="/" className="flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">Elysium</span>
          </Link>
          <h2 className="mt-4 md:mt-6 text-2xl md:text-3xl font-extrabold text-center text-foreground">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link to="/sign-in" className="font-medium text-primary hover:text-primary/80">
              Sign in
            </Link>
          </p>
        </div>
        
        {!isSubmitted ? (
          <form className="mt-6 md:mt-8 space-y-5 md:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="reset-email" className="text-sm">Email address</Label>
              <Input
                id="reset-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-10"
              />
            </div>
            <div>
              <Button 
                type="submit" 
                className="w-full h-10" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending reset link...' : 'Send password reset link'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-6 md:mt-8 bg-muted/30 p-5 md:p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium text-foreground">Check your email</h3>
            <p className="mt-2 text-muted-foreground">
              We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or{' '}
              <button 
                type="button"
                onClick={() => setIsSubmitted(false)} 
                className="font-medium text-primary hover:text-primary/80"
              >
                try again
              </button>
            </p>
            <div className="mt-5 md:mt-6">
              <Link to="/sign-in">
                <Button variant="outline" className="w-full h-10">
                  Back to sign in
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
