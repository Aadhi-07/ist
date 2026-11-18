export const Num = ({ dark, className = '', children }) => (
  <div
    className={`reveal font-semibold leading-none tracking-tight text-[clamp(54px,9vw,160px)] font-mono ${
      dark ? 'text-[#88b3b9]/50' : 'text-[#397493]/35'
    } ${className}`}
  >
    {children}
  </div>
);

export const Title = ({ big, d = 'd1', className = '', children }) => (
  <h2
    className={`reveal ${d} font-semibold leading-[1.14] tracking-[-0.025em] text-ink ${
      big ? 'text-[clamp(28px,3.2vw,50px)]' : 'text-[clamp(26px,2.8vw,44px)]'
    } ${className}`}
  >
    {children}
  </h2>
);

export const Copy = ({ dark, wide, d = 'd2', className = '', children }) => (
  <p
    className={`reveal ${d} mt-4 text-[clamp(13.5px,1.05vw,16px)] leading-[1.65] font-normal ${
      wide ? 'max-w-[480px]' : 'max-w-[440px]'
    } ${dark ? 'text-white' : 'text-ink'} ${className}`}
  >
    {children}
  </p>
);

export const Chips = ({ items, solid, className = '' }) => (
  <div className={`reveal d3 flex flex-wrap gap-1.5 ${className}`}>
    {items.map((t) => (
      <span
        key={t}
        className={`text-[12px] font-medium px-3 py-1 rounded-md border ${
          solid
            ? 'bg-ink text-white border-ink'
            : 'bg-white/80 border-[#022731]/20 text-ink'
        }`}
      >
        {t}
      </span>
    ))}
  </div>
);
