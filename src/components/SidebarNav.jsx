import { NavLink } from 'react-router-dom';
import { Chevron } from './icons.jsx';

export default function SidebarNav({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <aside className='w-full lg:w-64 flex-shrink-0'>
      <div className='bg-white rounded-xl p-5 shadow-sm border border-neutral-200/80 sticky top-20'>
        {title && (
          <h3 className='text-[11px] font-semibold uppercase tracking-wider text-muted/75 pb-2.5 mb-2.5 border-b border-neutral-100'>
            {title}
          </h3>
        )}
        <nav className='space-y-1' aria-label={title || 'Section navigation'}>
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={
                item.path === '/about' ||
                item.path === '/services' ||
                item.path === '/equipment' ||
                item.path === '/industries'
              }
              className={({ isActive }) =>
                `group flex items-center justify-between px-3 py-2 rounded-lg text-[13px] transition-colors ${isActive
                  ? 'bg-ink text-white font-medium'
                  : 'text-muted hover:text-ink hover:bg-mist/50 font-normal'
                }`
              }
            >
              <span className='truncate pr-2'>{item.label}</span>
              <span className='w-4 h-4 grid place-items-center opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0'>
                <Chevron className='w-2.5 h-2.5' />
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Technical Assistance Callout */}
        <div className='mt-6 pt-5 border-t border-neutral-100 bg-[#f7fafb] rounded-lg p-3.5 text-xs text-muted border border-neutral-200/40'>
          <p className='font-medium text-ink mb-1'>Technical Assistance</p>
          <p className='text-[11.5px] leading-relaxed mb-2.5'>
            Speak with our engineering specialists for pump configurations and project scopes.
          </p>
          <a
            href='tel:+6045017073'
            className='inline-flex items-center gap-1 font-medium text-[12px] text-accent hover:text-ink transition-colors'
          >
            <span>+604 - 501 7073</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
