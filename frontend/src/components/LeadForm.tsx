import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, User, Mail, DollarSign, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { leadService } from '../services/leadService';
import { LeadCreateFormData } from '../types/lead';

const leadSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address (e.g. user@company.com)' }),
  budget: z
    .string({ required_error: 'Please select a budget range' })
    .min(1, { message: 'Please select a valid budget range' }),
  message: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters long' })
    .max(2000, { message: 'Message cannot exceed 2000 characters' }),
});

export const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadCreateFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      budget: '$1000–5000',
      message: '',
    },
  });

  const onSubmit = async (data: LeadCreateFormData) => {
    setIsSubmitting(true);
    try {
      await leadService.createLead(data);
      toast.success('Lead submitted successfully! Our team will reach out shortly.');
      setIsSubmittedSuccess(true);
      reset();
      setTimeout(() => setIsSubmittedSuccess(false), 5000);
    } catch (error: any) {
      const serverMsg =
        error.response?.data?.message || 'Failed to submit lead request. Please try again.';
      toast.error(serverMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-24 relative bg-[#F8F5EF]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F3B2C] mb-3 block">
            Inquire & Initiate
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A241E] tracking-tight mb-4">
            Lead Capture Intake
          </h2>
          <p className="text-[#5C5449] text-sm max-w-lg mx-auto font-light">
            Fill out the form below to submit your project requirements directly into the LeadDesk pipeline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DFD8C8] shadow-card relative overflow-hidden"
        >
          {isSubmittedSuccess && (
            <div className="mb-8 p-4 rounded-2xl bg-[#EBF4EE] border border-[#C8E2D2] text-[#1F3B2C] text-sm flex items-center gap-3 font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#1F3B2C]" />
              <span>Thank you! Your lead entry has been created with status set to <strong>NEW</strong>.</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                  Full Name <span className="text-[#1F3B2C]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    {...register('name')}
                    className={`w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border ${
                      errors.name ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                    } rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.name.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                  Email Address <span className="text-[#1F3B2C]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    {...register('email')}
                    className={`w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border ${
                      errors.email ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                    } rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Budget Range Selection */}
            <div>
              <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                Estimated Project Budget <span className="text-[#1F3B2C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
                  <DollarSign className="w-4 h-4" />
                </div>
                <select
                  id="budget"
                  {...register('budget')}
                  className={`w-full pl-11 pr-10 py-3.5 bg-[#F8F5EF] border ${
                    errors.budget ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                  } rounded-2xl text-[#1A241E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all appearance-none cursor-pointer`}
                >
                  <option value="< $1000">&lt; $1000</option>
                  <option value="$1000–5000">$1000–5000</option>
                  <option value="$5000–10000">$5000–10000</option>
                  <option value="> $10000">&gt; $10000</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#5C5449] text-xs">
                  ▼
                </div>
              </div>
              {errors.budget && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.budget.message}</p>
              )}
            </div>

            {/* Project Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                Project Requirements & Message <span className="text-[#1F3B2C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none text-[#8C8275]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Outline your project scope, timeline, and key requirements..."
                  {...register('message')}
                  className={`w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border ${
                    errors.message ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                  } rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all resize-none`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 sm:py-6 px-10 rounded-2xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-sm uppercase tracking-wider shadow-card hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Submitting Intake...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Lead Request
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
