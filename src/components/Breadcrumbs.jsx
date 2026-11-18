import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items, dark = true }) {
  if (!items || items.length === 0) return null;

  const baseTextColor = dark ? 'text-white/60' : 'text-muted/80';
  const activeTextColor = dark ? 'text-white font-medium' : 'text-ink font-medium';
  const hoverColor = dark ? 'hover:text-white' : 'hover:text-accent';
  const dividerColor = dark ? 'text-white/30' : 'text-muted/40';

  return (
    <nav aria-label='Breadcrumb' className={`flex items-center gap-1.5 text-[12px] ${baseTextColor} mb-4 flex-wrap`}>
      <Link to='/' className={`${hoverColor} transition-colors`}>
        Home
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className='flex items-center gap-1.5'>
            <span className={`${dividerColor} select-none`} aria-hidden='true'>/</span>
            {isLast || !item.path ? (
              <span className={activeTextColor} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className={`${hoverColor} transition-colors`}>
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
