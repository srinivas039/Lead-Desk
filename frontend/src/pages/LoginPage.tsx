import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Layers, Lock, Mail, Loader2, ArrowLeft, KeyRound } from 'lucide-react';
import { LoginFormData } from '../types/auth';

const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username or email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      await login(data);
      navigate('/admin', { replace: true });
    } catch {
      // Toast error handled inside AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1F3B2C]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10"
      >
        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
          <div className="w-12 h-12 rounded-2xl bg-[#1F3B2C] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <span className="font-serif text-3xl font-bold text-[#1F3B2C] tracking-tight">LeadDesk</span>
        </Link>
        <h2 className="font-serif text-3xl font-bold text-[#1A241E] tracking-tight">Admin Portal</h2>
        <p className="mt-2 text-sm text-[#5C5449] font-light">
          Sign in with your administrative credentials to access the lead console
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4"
      >
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#DFD8C8] shadow-card">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Username/Email */}
            <div>
              <label htmlFor="username" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                Admin Username / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="admin@digitalheroes.com"
                  {...register('username')}
                  className={`w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border ${
                    errors.username ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                  } rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all`}
                />
              </div>
              {errors.username && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.username.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-[#1A241E] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C8275]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  {...register('password')}
                  className={`w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border ${
                    errors.password ? 'border-red-500' : 'border-[#DFD8C8] focus:border-[#1F3B2C]'
                  } rounded-2xl text-[#1A241E] placeholder-[#8C8275] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3B2C]/20 transition-all`}
                />
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.password.message}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 px-8 rounded-2xl bg-[#1F3B2C] hover:bg-[#2B4E3C] text-white font-bold text-sm uppercase tracking-wider shadow-card hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Authenticating...
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-[#E9E3D5]">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5C5449] hover:text-[#1F3B2C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Public Landing Page
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
