import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pattern 1: Linear Single-Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + links */}
          <div className="flex items-center gap-8 flex-wrap justify-center md:justify-start">
            <AppLogo
              size={22}
              text="Screen"
              iconName="CpuChipIcon"
              className="text-ui-muted"
            />
            <div className="flex items-center gap-6">
              {[
                { label: 'Product', href: '#parsing' },
                { label: 'Integrations', href: '#integrations' },
                { label: 'Compliance', href: '#bias-guard' },
                { label: 'Docs', href: '#integrations' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-ui-muted hover:text-ui-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: social + legal */}
          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { label: 'LinkedIn', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )},
                { label: 'Twitter/X', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )},
                { label: 'GitHub', href: 'https://github.com/ShubhamTasknera/Tasknera-ATS-Application', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href !== '#' ? '_blank' : undefined}
                  rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="text-ui-faint hover:text-cyan-DEFAULT transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <span className="text-[13px] text-ui-faint">
              © 2026 Screen · <a href="#" className="hover:text-ui-muted transition-colors">Privacy</a> · <a href="#" className="hover:text-ui-muted transition-colors">Terms</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;