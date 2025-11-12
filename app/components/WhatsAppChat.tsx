'use client';

import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

interface Message {
  id: number;
  text: string;
  sender: 'assistant' | 'user';
  delay: number; // Tiempo antes de mostrar este mensaje (en ms)
}

const messages: Message[] = [
  {
    id: 1,
    text: 'Hola, soy Emilia la asistente del Dr. Ramirez. ¿En qué puedo ayudarte?',
    sender: 'assistant',
    delay: 800
  },
  {
    id: 2,
    text: 'Hola Emilia, necesito agendar una cita para mi chequeo anual',
    sender: 'user',
    delay: 2500
  },
  {
    id: 3,
    text: 'Por supuesto. ¿Qué día te viene mejor?',
    sender: 'assistant',
    delay: 3800
  },
  {
    id: 4,
    text: 'Prefiero esta semana si es posible',
    sender: 'user',
    delay: 5000
  },
  {
    id: 5,
    text: 'Claro, ¿qué tal el viernes a las diez de la mañana?',
    sender: 'assistant',
    delay: 6200
  },
  {
    id: 6,
    text: 'Perfecto, el viernes a las 10 AM me viene bien',
    sender: 'user',
    delay: 7800
  },
  {
    id: 7,
    text: 'Excelente. ¿Necesitas algún estudio previo o traer algo en particular?',
    sender: 'assistant',
    delay: 9200
  },
  {
    id: 8,
    text: 'No, creo que no. Solo el chequeo de rutina',
    sender: 'user',
    delay: 10800
  },
  {
    id: 9,
    text: 'Perfecto. Cita confirmada para el viernes 15 de marzo a las 10:00 AM. Te enviaré un recordatorio el día anterior',
    sender: 'assistant',
    delay: 12200
  },
  {
    id: 10,
    text: 'Gracias Emilia, nos vemos el viernes',
    sender: 'user',
    delay: 13800
  },
  {
    id: 11,
    text: 'De nada. Cualquier duda, no dudes en escribirme. ¡Que tengas un buen día!',
    sender: 'assistant',
    delay: 15000
  }
];

export default function WhatsAppChat() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const isUserScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    const timers: NodeJS.Timeout[] = [];
    const maxDelay = Math.max(...messages.map(m => m.delay));
    const loopTime = maxDelay + 1000; // Tiempo total del loop

    const startAnimation = () => {
      if (!mounted) return;
      
      // Limpiar timers anteriores
      timers.forEach(timer => clearTimeout(timer));
      timers.length = 0;
      
      // Reiniciar estado
      setVisibleMessages([]);
      setIsTyping(false);

      // Timer para controlar la animación de cada mensaje
      messages.forEach((message) => {
        // Si es un mensaje del asistente, mostrar "escribiendo..." antes
        if (message.sender === 'assistant') {
          // Mostrar "escribiendo..." 0.8 segundos antes del mensaje
          const typingStartTime = Math.max(0, message.delay - 800);
          
          const typingTimer = setTimeout(() => {
            if (mounted) {
              setIsTyping(true);
            }
          }, typingStartTime);
          timers.push(typingTimer);

          // Ocultar "escribiendo..." y mostrar el mensaje
          const messageTimer = setTimeout(() => {
            if (mounted) {
              setIsTyping(false);
              setVisibleMessages(prev => [...prev, message.id]);
            }
          }, message.delay);
          timers.push(messageTimer);
        } else {
          // Para mensajes del usuario, ocultar "escribiendo..." si está activo y mostrar el mensaje
          const messageTimer = setTimeout(() => {
            if (mounted) {
              setIsTyping(false);
              setVisibleMessages(prev => [...prev, message.id]);
            }
          }, message.delay);
          timers.push(messageTimer);
        }
      });

      // Reiniciar el loop después de que termine la animación
      const loopTimer = setTimeout(() => {
        if (mounted) {
          startAnimation();
        }
      }, loopTime);
      timers.push(loopTimer);
    };

    // Iniciar la animación
    startAnimation();

    return () => {
      mounted = false;
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Función para verificar si está al final del scroll
  const checkIfAtBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return true;
    
    const threshold = 50; // Margen de error en píxeles
    const isAtBottom = 
      container.scrollHeight - container.scrollTop - container.clientHeight <= threshold;
    return isAtBottom;
  };

  // Scroll inicial al final cuando se monta el componente
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
        setIsAtBottom(true);
      }, 100);
    }
  }, []);

  // Scroll automático cuando se agregan mensajes o cuando está escribiendo
  useEffect(() => {
    if (isAtBottom && messagesContainerRef.current && !isUserScrollingRef.current) {
      const container = messagesContainerRef.current;
      // Pequeño delay para asegurar que el DOM se haya actualizado
      requestAnimationFrame(() => {
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    }
  }, [visibleMessages, isTyping, isAtBottom]);

  // Detectar scroll manual del usuario
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Solo actualizar el estado si el usuario está haciendo scroll manual
      if (isUserScrollingRef.current) {
        const atBottom = checkIfAtBottom();
        setIsAtBottom(atBottom);
        if (atBottom) {
          // Si llegó al final, permitir que el scroll automático vuelva a funcionar
          setTimeout(() => {
            isUserScrollingRef.current = false;
          }, 200);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const container = messagesContainerRef.current;
      if (!container) return;

      const currentScrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const isCurrentlyAtBottom = scrollHeight - currentScrollTop - clientHeight <= 50;

      // Si está al final y el usuario intenta hacer scroll hacia abajo, prevenir
      if (isCurrentlyAtBottom && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // Si el usuario hace scroll hacia arriba, permitirlo y marcar que no está al final
      if (e.deltaY < 0) {
        isUserScrollingRef.current = true;
        setIsAtBottom(false);
      } else if (e.deltaY > 0) {
        // Scroll hacia abajo - marcar que el usuario está haciendo scroll manual
        isUserScrollingRef.current = true;
        // Verificar después de un pequeño delay si llegó al final
        setTimeout(() => {
          const atBottom = checkIfAtBottom();
          setIsAtBottom(atBottom);
          if (atBottom) {
            isUserScrollingRef.current = false;
          }
        }, 150);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      isUserScrollingRef.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const container = messagesContainerRef.current;
      if (!container) return;

      const touch = e.touches[0];
      if (!touch) return;

      const touchY = touch.clientY;
      const deltaY = touchY - touchStartYRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const isCurrentlyAtBottom = scrollHeight - scrollTop - clientHeight <= 50;
      
      // Si está al final y el usuario intenta hacer scroll hacia abajo (arrastrar hacia abajo), prevenir
      if (isCurrentlyAtBottom && deltaY < 0) {
        e.preventDefault();
        return false;
      }
      
      // Si el usuario hace scroll hacia arriba, marcar que no está al final
      if (deltaY > 0) {
        setIsAtBottom(false);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        const atBottom = checkIfAtBottom();
        setIsAtBottom(atBottom);
        if (atBottom) {
          isUserScrollingRef.current = false;
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isAtBottom]);

  return (
    <div className="w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-xs">
      {/* Contenedor del chat */}
      <div 
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
        style={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          width: '100%',
          height: '600px',
          maxHeight: '600px'
        }}
      >
        {/* Header del chat */}
        <div 
          className="flex items-center justify-between px-4 py-3"
          style={{ backgroundColor: '#075E54' }}
        >
          <div className="flex items-center gap-3">
            <Logo size={20} />
            <span className="text-white font-semibold text-sm">CitaLía</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Área de mensajes */}
        <div 
          ref={messagesContainerRef}
          className="px-3 py-4 space-y-3 relative flex-1 overflow-y-auto"
          style={{ 
            backgroundColor: '#ECE5DD',
            flex: '1 1 auto',
            overflowY: 'auto'
          }}
        >
          {messages.map((message) => {
            const isVisible = visibleMessages.includes(message.id);
            
            return (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-200 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div 
                  className="rounded-lg px-3 py-2 max-w-[75%]"
                  style={{ 
                    backgroundColor: message.sender === 'assistant' ? '#DCF8C6' : '#FFFFFF',
                    borderRadius: message.sender === 'assistant' 
                      ? '8px 8px 8px 2px' 
                      : '8px 8px 2px 8px',
                    boxShadow: message.sender === 'user' ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  <p className="text-sm text-gray-800">
                    {message.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Indicador de "escribiendo..." */}
          {isTyping && (
            <div 
              className="flex justify-start animate-fade-in"
              style={{ animation: 'fadeIn 0.3s ease-in' }}
            >
              <div 
                className="rounded-lg px-3 py-2"
                style={{ 
                  backgroundColor: '#DCF8C6',
                  borderRadius: '8px 8px 8px 2px'
                }}
              >
                <div className="flex gap-1 items-center">
                  <div 
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ 
                      animationDelay: '0ms',
                      animationDuration: '1s'
                    }}
                  ></div>
                  <div 
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ 
                      animationDelay: '150ms',
                      animationDuration: '1s'
                    }}
                  ></div>
                  <div 
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ 
                      animationDelay: '300ms',
                      animationDuration: '1s'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input field */}
        <div 
          className="px-3 py-2 flex items-center gap-2"
          style={{ backgroundColor: '#F0F0F0' }}
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-gray-500"
          >
            <path 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" 
              fill="currentColor"
            />
          </svg>
          <input 
            type="text" 
            placeholder="Cita" 
            className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none"
            readOnly
          />
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-gray-500"
          >
            <path 
              d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}


