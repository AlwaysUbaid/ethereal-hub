import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate registration process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Account created",
        description: "Welcome to Elysium!"
      });
      navigate('/dashboard');
    }, 1500);
  };

  const handlePhoneSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOtpInput) {
      setIsSubmitting(true);
      // Simulate sending OTP
      setTimeout(() => {
        setIsSubmitting(false);
        setShowOtpInput(true);
        toast({
          title: "OTP Sent",
          description: `Verification code sent to ${phoneNumber}`
        });
      }, 1000);
    } else {
      setIsSubmitting(true);
      // Simulate OTP verification
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Account created",
          description: "Welcome to Elysium!"
        });
        navigate('/dashboard');
      }, 1500);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    setIsSubmitting(true);

    // Simulate social authentication
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Account created",
        description: `Signed up with ${provider}`
      });
      navigate('/dashboard');
    }, 1500);
  };

  return <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10 relative">
            <Link to="/" className="absolute -left-2 -top-12 p-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Elysium</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-foreground">Create your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/sign-in" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full py-5" onClick={() => handleSocialSignUp('Google')} disabled={isSubmitting}>
                <FcGoogle className="h-5 w-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="w-full py-5" onClick={() => handleSocialSignUp('Apple')} disabled={isSubmitting}>
                <FaApple className="h-5 w-5 mr-2" />
                Apple
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="email" className="flex items-center">
                  <MdEmail className="mr-2" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center">
                  <MdPhone className="mr-2" />
                  Phone
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
                    <p className="text-xs text-muted-foreground mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="phone">
                <form onSubmit={handlePhoneSignUp} className="space-y-4">
                  {!showOtpInput ? <div className="space-y-1">
                      <Label htmlFor="signup-phone">Phone Number</Label>
                      <Input id="signup-phone" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="+1 (555) 000-0000" required />
                    </div> : <div className="space-y-1">
                      <Label htmlFor="signup-otp">Enter verification code</Label>
                      <Input id="signup-otp" type="text" value={phoneOtp} onChange={e => setPhoneOtp(e.target.value)} placeholder="000000" maxLength={6} required />
                      <p className="text-xs text-muted-foreground mt-2">
                        We sent a code to {phoneNumber}.{' '}
                        <button type="button" onClick={() => setShowOtpInput(false)} className="text-primary hover:text-primary/80">
                          Change number
                        </button>
                      </p>
                    </div>}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? showOtpInput ? 'Verifying...' : 'Sending code...' : showOtpInput ? 'Verify code' : 'Send verification code'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-accent/20 to-primary/20 bg-transparent">
          <div className="absolute inset-0 backdrop-blur-[0px] bg-transparent"></div>
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl font-bold text-foreground">Join Elysium</h2>
              <p className="mt-4 text-xl text-foreground font-medium">
                Get access to professional trading tools for executing complex strategies on Hyperliquid exchange.
              </p>
              <ul className="mt-6 space-y-2 text-foreground/90">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  Powerful trading algorithms
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  Customizable trading bots
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  Risk management tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default SignUp;
