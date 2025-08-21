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
import { Logo } from '@/components/ui/logo';

const createSlides = (isDarkMode: boolean) => [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    icon: Home,
    content: (
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex justify-center mb-6 md:mb-8">
              <Logo 
                isDarkMode={isDarkMode} 
                width={120} 
                height={40} 
                className="md:w-32"
              />
            </div>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
              PaceMedic
            </h1>
            <p className="text-base md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              A comprehensive telehealth platform.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                className="text-sm md:text-xl px-6 md:px-12 py-3 md:py-6 font-semibold"
                onClick={() => window.open('https://pacemedic.com/grow-well', '_blank')}
              >
                <Globe className="h-4 w-4 md:h-6 md:w-6 mr-2" />
                Explore Live Platform
              </Button>
            </div>
          </div>
          
          {/* Mobile: Simple icon-based layout */}
          <div className="md:hidden space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-accent rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-sm">Complete Telehealth Ecosystem</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>HD Video Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Customizable Patient Journey</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Customizable Online Presence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Easy Staff Onboarding</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-accent rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-sm">Platform Benefits</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Eliminate Patient Travel Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Monetize Follow-up Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Flexible Service Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Dedicated Organization Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop: Full card layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            <Card className="md:h-80">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  Complete Telehealth Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-base md:text-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>HD Video Consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Customizable Patient Journey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Customizable Online Presence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Easy Staff Onboarding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:h-80">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  Platform Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-base md:text-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Eliminate Patient Travel Time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Monetize Follow-up Consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Flexible Service Delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span>Dedicated Organization Portal</span>
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
    id: 'why-choose-pacemedic',
    title: 'Why Choose PaceMedic',
    icon: Award,
    content: (
      <div className="flex flex-col">
        <div className="flex flex-col justify-start pt-2 md:pt-4 space-y-4 md:space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-5xl font-bold mb-3 md:mb-6">Why Choose PaceMedic</h2>
            <p className="text-sm md:text-2xl text-muted-foreground">Three compelling reasons to transform your healthcare delivery</p>
          </div>
          
          {/* Mobile: Simple list, Desktop: 3-column grid */}
          <div className="md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
            <div className="md:hidden space-y-3">
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Complete Healthcare Ecosystem</div>
                  <div className="text-xs text-muted-foreground">Video, appointments, prescriptions, records</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <UserCheck className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Institution Management</div>
                  <div className="text-xs text-muted-foreground">Staff, forms, scheduling, analytics</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Regulatory Compliance</div>
                  <div className="text-xs text-muted-foreground">MHA compliant, secure, audited</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Card className="text-center md:h-80">
                <CardHeader className="pb-1 md:pb-6">
                  <div className="mx-auto w-6 h-6 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-1 md:mb-4">
                    <Users className="h-3 w-3 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xs md:text-lg">Complete Healthcare Ecosystem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 md:space-y-3">
                  <div className="space-y-0.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Video Consultations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Appointment Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Electronic Prescriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Patient Records</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="hidden md:block">
              <Card className="text-center md:h-80">
                <CardHeader className="pb-1 md:pb-6">
                  <div className="mx-auto w-6 h-6 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-1 md:mb-4">
                    <UserCheck className="h-3 w-3 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xs md:text-lg">Institution Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 md:space-y-2">
                  <div className="space-y-1 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Staff Onboarding & Permissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Custom Pre-appointment Forms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Flexible Appointment Scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Platform Analytics Dashboard</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="hidden md:block">
              <Card className="text-center md:h-80">
                <CardHeader className="pb-1 md:pb-6">
                  <div className="mx-auto w-6 h-6 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-1 md:mb-4">
                    <Shield className="h-3 w-3 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xs md:text-lg">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 md:space-y-2">
                  <div className="space-y-1 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>MHA Regulations Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Identity Validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardList className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Audit Trails</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PaymentIcon className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Secure Payments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'key-features',
    title: 'Key Features & Benefits',
    icon: Zap,
    content: (
      <div className="flex flex-col justify-start pt-2 md:pt-4 space-y-3 md:space-y-5">
        <div className="text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Key Features & Benefits</h2>
          <p className="text-sm md:text-xl text-muted-foreground">Comprehensive tools for modern healthcare delivery</p>
        </div>
        
        {/* Mobile: Simple list, Desktop: 2x2 grid */}
        <div className="md:grid md:grid-cols-2 md:gap-6 max-w-6xl mx-auto">
          <div className="md:hidden space-y-3">
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold text-sm">Smart Scheduling</div>
                <div className="text-xs text-muted-foreground">Real-time updates, 24/7 booking</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <Video className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold text-sm">HD Video</div>
                <div className="text-xs text-muted-foreground">HD quality, screen sharing</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold text-sm">Medical Workflows</div>
                <div className="text-xs text-muted-foreground">Digital prescriptions, custom forms</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <CreditCard className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold text-sm">Payments</div>
                <div className="text-xs text-muted-foreground">Razorpay integration, credit system</div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block space-y-6">
            <Card className="md:h-64">
              <CardHeader className="pb-2 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Smart Appointment Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-3">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Real-time availability updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Automated booking 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Intelligent patient matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:h-64">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <Video className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Professional Video Consultations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-3">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">HD quality video and audio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Screen sharing capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Mobile optimized experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="hidden md:block space-y-6">
            <Card className="md:h-64">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <FileText className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Integrated Medical Workflows
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-3">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Digital prescriptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Custom form builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Secure document management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:h-64">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <CreditCard className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Payment & Billing Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-3">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Integrated Razorpay payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Credit system management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    <span className="text-xs md:text-sm">Automated billing</span>
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
      <div className="flex flex-col">
        <div className="flex flex-col justify-start pt-2 md:pt-4 space-y-4 md:space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-5xl font-bold mb-3 md:mb-6">Business Impact for Institutions</h2>
            <p className="text-sm md:text-2xl text-muted-foreground">Transform your healthcare delivery with measurable results</p>
          </div>
          
          {/* Mobile: Simple timeline, Desktop: 2-column grid */}
          <div className="md:grid md:grid-cols-2 md:gap-4 max-w-6xl mx-auto">
            <div className="md:hidden space-y-3">
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">1-3</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Immediate Benefits</div>
                  <div className="text-xs text-muted-foreground">Patient follow-ups, reduced admin work</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">6-12</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Long-term Advantages</div>
                  <div className="text-xs text-muted-foreground">Geographic expansion, rural access</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Card className="border-accent bg-accent/50 md:h-64">
                <CardHeader className="pb-1 md:pb-4">
                  <CardTitle className="text-xs md:text-lg text-primary">Immediate Benefits (Month 1-3)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0.5 md:space-y-2">
                  <div className="space-y-0.5 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Reliable patient follow-ups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Reduction in administrative workload</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Quick platform onboarding</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="hidden md:block">
              <Card className="border-accent bg-accent/50 md:h-64">
                <CardHeader className="pb-1 md:pb-4">
                  <CardTitle className="text-xs md:text-lg text-primary">Long-term Advantages (6-12 months)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0.5 md:space-y-2">
                  <div className="space-y-0.5 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Geographic expansion without physical locations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Specialist access for rural areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span>Competitive advantage in digital healthcare</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Mobile: Compact efficiency metrics, Desktop: Full card */}
          <div className="md:block">
            <div className="md:hidden">
              <div className="text-center mb-3">
                <h3 className="font-semibold text-sm">Operational Efficiency</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-accent rounded-lg">
                  <Bot className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xs font-semibold">Auto Scheduling</div>
                  <div className="text-xs text-muted-foreground">No errors</div>
                </div>
                <div className="text-center p-2 bg-accent rounded-lg">
                  <Smartphone className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xs font-semibold">Digital Records</div>
                  <div className="text-xs text-muted-foreground">Paperless</div>
                </div>
                <div className="text-center p-2 bg-accent rounded-lg">
                  <BarChart3 className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xs font-semibold">Analytics</div>
                  <div className="text-xs text-muted-foreground">Insights</div>
                </div>
              </div>
            </div>
            
            <Card className="hidden md:block">
              <CardHeader className="pb-1 md:pb-4">
                <CardTitle className="text-xs md:text-lg">Operational Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 md:space-y-2">
                <div className="md:grid md:grid-cols-3 md:gap-4">
                  <div className="text-center p-1 md:p-4 bg-accent rounded-lg">
                    <div className="flex justify-center mb-1 md:mb-2">
                      <Bot className="h-4 w-4 md:h-8 md:w-8 text-primary" />
                    </div>
                    <div className="text-xs md:text-sm font-semibold">Automated Scheduling</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Reduces booking errors</div>
                  </div>
                  <div className="text-center p-1 md:p-4 bg-accent rounded-lg">
                    <div className="flex justify-center mb-1 md:mb-2">
                      <Smartphone className="h-4 w-4 md:h-8 md:w-8 text-primary" />
                    </div>
                    <div className="text-xs md:text-sm font-semibold">Digital Records</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Eliminates paper-based systems</div>
                  </div>
                  <div className="text-center p-1 md:p-4 bg-accent rounded-lg">
                    <div className="flex justify-center mb-1 md:mb-2">
                      <BarChart3 className="h-4 w-4 md:h-8 md:w-8 text-primary" />
                    </div>
                    <div className="text-xs md:text-sm font-semibold">Analytics Dashboard</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Data-driven insights</div>
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
    id: 'call-to-action',
    title: 'Call to Action',
    icon: Phone,
    content: (
      <div className="flex flex-col justify-start pt-2 md:pt-4 space-y-3 md:space-y-6 text-center">
        <div>
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Ready to Transform Your Healthcare Delivery?</h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the future of healthcare with PaceMedic's comprehensive telehealth platform
          </p>
        </div>
        
        {/* Mobile: Simple buttons, Desktop: 3-column grid */}
        <div className="md:grid md:grid-cols-3 md:gap-4 max-w-6xl mx-auto">
          <div className="md:hidden space-y-3">
            <Button className="w-full" size="lg">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Users className="h-4 w-4 mr-2" />
              Start Pilot
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
          
          <div className="hidden md:block">
            <Card className="text-center md:h-80">
              <CardHeader className="pb-3 md:pb-6">
                <div className="mx-auto w-10 h-10 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Globe className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                </div>
                <CardTitle className="text-base md:text-lg">Schedule Demo</CardTitle>
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
          </div>
          
          <div className="hidden md:block">
            <Card className="text-center md:h-80">
              <CardHeader>
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
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
          </div>
          
          <div className="hidden md:block">
            <Card className="text-center md:h-80">
              <CardHeader>
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary" />
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
        </div>
        
        {/* Mobile: Compact benefits, Desktop: Full gradient section */}
        <div className="md:block">
          <div className="md:hidden bg-accent p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-3">Why Choose PaceMedic Now?</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 text-primary" />
                <span>Immediate Impact - Benefits within first month</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-3 w-3 text-primary" />
                <span>Risk-Free Trial - Test with pilot program</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-3 w-3 text-primary" />
                <span>Expert Support - Dedicated implementation team</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg">
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
        </div>
        
        {/* Contact info - same for both */}
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-lg md:text-2xl font-bold">Contact Information</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-8">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">https://pacemedic.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">contact@pacemedic.com</span>
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const slides = createSlides(isDarkMode);

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

    // Disable mouse wheel scrolling - only allow keyboard and touch navigation
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent default scroll behavior
      // No slide navigation via mouse wheel
    };

    // Touch scroll handling for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent default touch scroll
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      
      if (isScrolling) return;
      
      const minSwipeDistance = 50; // Minimum distance for swipe
      const swipeDistance = touchStartY - touchEndY;
      
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        setIsScrolling(true);
        
        if (swipeDistance > 0) {
          // Swipe up - go to next slide
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          }
        } else {
          // Swipe down - go to previous slide
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
        }
        
        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, isScrolling]);

  return (
    <div className="min-h-screen bg-background presentation-container">


      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="w-10 h-10 md:w-12 md:h-12"
        >
          {isDarkMode ? <Moon className="h-4 w-4 md:h-5 md:w-5" /> : <Sun className="h-4 w-4 md:h-5 md:w-5" />}
        </Button>
      </div>

      {/* Navigation Dots - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center space-y-3">
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

      {/* Mobile Navigation Dots - Removed for mobile to prevent text obstruction */}

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center space-y-4">
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

      {/* Video Button - Only show on Executive Summary slide */}
      {currentSlide === 0 && (
        <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <Button 
            variant="outline"
            className="text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 font-semibold bg-background/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(true)}
          >
            <Video className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Watch Presentation
          </Button>
        </div>
      )}



      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`min-h-screen overflow-y-auto pt-4 pb-16 px-3 md:px-8 md:pt-4 md:pb-8 ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              y: index === currentSlide ? 0 : 50
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-6xl w-full mx-auto">
              {slide.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">Close</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">×</span>
                  </div>
                </div>
              </button>

              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src="/assets/0819.mov" type="video/quicktime" />
                  <source src="/assets/0819.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
