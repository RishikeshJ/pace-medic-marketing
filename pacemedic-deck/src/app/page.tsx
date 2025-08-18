'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowDown, 
  ArrowUp, 
  Home, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Award, 
  Phone, 
  Mail, 
  Globe,
  Calendar,
  Video,
  FileText,
  CreditCard,
  ExternalLink,
  CheckCircle,
  Lock,
  UserCheck,
  ClipboardList,
  CreditCard as PaymentIcon,
  Rocket,
  Target,
  User,
  CheckSquare,
  BarChart3,
  Smartphone,
  Bot,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const slides = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    icon: Home,
    content: (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            PaceMedic
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive telehealth platform.
          </p>
          <div className="flex justify-center">
            <Button 
              className="text-lg px-8 py-4 text-base font-semibold"
              onClick={() => window.open('https://pacemedic.com/grow-well', '_blank')}
            >
              <Globe className="h-5 w-5 mr-2" />
              Explore Live Platform
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Complete Telehealth Ecosystem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>HD Video Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Customizable Patient Journey</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>White-label Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Platform Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Eliminate Patient Travel Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Monetize Follow-up Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Flexible Service Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Dedicated Organization Portal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 'why-choose-pacemedic',
    title: 'Why Choose PaceMedic',
    icon: Award,
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose PaceMedic</h2>
          <p className="text-xl text-muted-foreground">Three compelling reasons to transform your healthcare delivery</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Complete Healthcare Ecosystem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Video Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Appointment Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Electronic Prescriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Patient Records</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Institution Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Staff Onboarding & Permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Custom Pre-appointment Forms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Flexible Appointment Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Platform Analytics Dashboard</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>MHA Regulations Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-primary" />
                  <span>Identity Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  <span>Audit Trails</span>
                </div>
                <div className="flex items-center gap-2">
                  <PaymentIcon className="h-4 w-4 text-primary" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 'key-features',
    title: 'Key Features & Benefits',
    icon: Zap,
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Key Features & Benefits</h2>
          <p className="text-xl text-muted-foreground">Comprehensive tools for modern healthcare delivery</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Smart Appointment Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Real-time availability updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated booking 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Intelligent patient matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Professional Video Consultations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>HD quality video and audio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Screen sharing capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mobile optimized experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Integrated Medical Workflows
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Digital prescriptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom form builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Secure document management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment & Billing Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Integrated Razorpay payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Credit system management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated billing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'business-impact',
    title: 'Business Impact',
    icon: TrendingUp,
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Business Impact for Institutions</h2>
          <p className="text-xl text-muted-foreground">Transform your healthcare delivery with measurable results</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-accent bg-accent/50">
              <CardHeader>
                <CardTitle className="text-primary">Immediate Benefits (Month 1-3)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Reliable patient follow-ups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Reduction in administrative workload</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Quick platform onboarding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-accent bg-accent/50">
              <CardHeader>
                <CardTitle className="text-primary">Long-term Advantages (6-12 months)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Geographic expansion without physical locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Specialist access for rural areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Competitive advantage in digital healthcare</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Operational Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="flex justify-center mb-2">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold">Automated Scheduling</div>
                <div className="text-sm text-muted-foreground">Reduces booking errors</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="flex justify-center mb-2">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold">Digital Records</div>
                <div className="text-sm text-muted-foreground">Eliminates paper-based systems</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="flex justify-center mb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold">Analytics Dashboard</div>
                <div className="text-sm text-muted-foreground">Data-driven insights</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 'call-to-action',
    title: 'Call to Action',
    icon: Phone,
    content: (
      <div className="space-y-8 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Healthcare Delivery?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the future of healthcare with PaceMedic's comprehensive telehealth platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Schedule Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                See the platform in action at pacemedic.com
              </p>
              <Button className="w-full">
                Visit Website
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Pilot Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Start with a small group of providers
              </p>
              <Button variant="outline" className="w-full">
                Start Pilot
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch for personalized consultation
              </p>
              <Button variant="outline" className="w-full">
                Contact Now
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Why Choose PaceMedic Now?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Immediate Impact - Start seeing benefits within the first month</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>Risk-Free Trial - Test the platform with a pilot program</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Expert Support - Dedicated team for successful implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                <span>Proven Results - Active users experiencing significant improvements</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>https://pacemedic.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contact@pacemedic.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function MarketingDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow keys should work immediately without scroll delay
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 300);
      
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isScrolling]);

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Mode Toggle */}
      <div className="fixed top-8 right-8 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="w-12 h-12"
        >
          {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-muted hover:bg-muted-foreground'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>



      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`min-h-screen flex items-center justify-center p-8 ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              y: index === currentSlide ? 0 : 50
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-6xl w-full">
              {slide.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
