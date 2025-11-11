import React from 'react';

export default function Logo({ size = 24, checkmarkColor = '#14B8A6' }: { size?: number; checkmarkColor?: string }) {
  const squareSize = size * 0.85;
  const protrusionSize = size * 0.12;
  const spacing = size * 0.05;
  
  return (
    <div 
      className="relative inline-block flex items-center"
      style={{ width: size * 1.4, height: size }}
    >
      {/* Contenedor principal - cuadrado redondeado */}
      <div 
        className="relative rounded-lg"
        style={{ 
          width: squareSize,
          height: squareSize,
          backgroundColor: '#14B8A6', // teal-500
          borderRadius: '6px'
        }}
      >
        {/* Protuberancias superiores */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: protrusionSize, 
            height: protrusionSize,
            backgroundColor: '#14B8A6',
            left: '50%',
            top: -protrusionSize / 2,
            transform: 'translateX(calc(-50% - ' + spacing + 'px))'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{ 
            width: protrusionSize, 
            height: protrusionSize,
            backgroundColor: '#14B8A6',
            left: '50%',
            top: -protrusionSize / 2,
            transform: 'translateX(calc(-50% + ' + spacing + 'px))'
          }}
        />
        
        {/* Círculo grande izquierda */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: squareSize * 0.4, 
            height: squareSize * 0.4,
            backgroundColor: '#0D9488', // teal-600 más oscuro
            left: squareSize * 0.15,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Dos círculos pequeños derecha */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: squareSize * 0.25, 
            height: squareSize * 0.25,
            backgroundColor: '#0D9488',
            right: squareSize * 0.2,
            top: squareSize * 0.2
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{ 
            width: squareSize * 0.25, 
            height: squareSize * 0.25,
            backgroundColor: '#0D9488',
            right: squareSize * 0.2,
            bottom: squareSize * 0.2
          }}
        />
      </div>
      
      {/* Forma curva/checkmark a la derecha */}
      <div 
        className="absolute"
        style={{ 
          width: size * 0.35, 
          height: size * 0.35,
          left: squareSize + size * 0.08,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          style={{ width: '100%', height: '100%' }}
        >
          <path 
            d="M 2 12 Q 6 8 10 12 Q 14 16 18 12" 
            stroke={checkmarkColor} 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

