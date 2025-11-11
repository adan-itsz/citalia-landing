'use client';

import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import WhatsAppChat from './WhatsAppChat';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 pb-40 relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente base */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #E6F2FF 50%, #D1E9FF 100%)'
          }}
        />
        
        {/* Capa de gradiente animada */}
        <div 
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
            animation: 'gradientPulse 15s ease-in-out infinite'
          }}
        />
        
        {/* Formas flotantes sutiles */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, #0D9488 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '5s'
          }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
            animation: 'float 18s ease-in-out infinite',
            animationDelay: '10s'
          }}
        />
        <div 
          className="absolute bottom-20 right-1/3 w-80 h-80 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, #0D9488 0%, transparent 70%)',
            animation: 'float 22s ease-in-out infinite',
            animationDelay: '7s'
          }}
        />
        
        {/* Formas geométricas sutiles */}
        <div 
          className="absolute top-1/3 right-1/4 w-48 h-48 opacity-5"
          style={{
            background: 'linear-gradient(45deg, #14B8A6, transparent)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animation: 'morph 15s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-56 h-56 opacity-5"
          style={{
            background: 'linear-gradient(135deg, #0D9488, transparent)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'morph 18s ease-in-out infinite',
            animationDelay: '8s'
          }}
        />
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sección izquierda - Texto y CTA */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start animate-fade-in-up">
              <Image 
                src="/images/citalia.png" 
                alt="CitaLía Logo" 
                width={993} 
                height={323}
                className="w-48 h-auto sm:w-56 md:w-64 lg:w-72"
                style={{ aspectRatio: '993/323' }}
              />
            </div>

            {/* Headline principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Tu asistente médico inteligente, en el chat que ya usas todos los días.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              CitaLía agenda, confirma y organiza tus citas por WhatsApp. Sin llamadas, sin apps nuevas.
            </p>

            {/* Botón CTA */}
            <div className="flex justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button 
                className="flex items-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: '#14B8A6',
                  boxShadow: '0 4px 14px rgba(20, 184, 166, 0.3)'
                }}
              >
                <Logo size={24} checkmarkColor="#FFFFFF" />
                <span>Quiero usar CitaLía</span>
              </button>
            </div>
          </div>

          {/* Sección derecha - Chat simulado */}
          <div className="flex justify-center lg:justify-end">
            <WhatsAppChat />
          </div>
        </div>
      </div>

    </section>
  );
}

