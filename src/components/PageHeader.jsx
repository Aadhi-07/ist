import Breadcrumbs from './Breadcrumbs.jsx';

export default function PageHeader({ badge, title, subtitle, breadcrumbs, children }) {
  return (
    <div className='bg-[#022731] text-white border-b border-white/10 pt-24 pb-12 sm:pt-28 sm:pb-14'>
      <div className='max-w-7xl mx-auto px-pad'>
        {breadcrumbs && (
          <div className='mb-3'>
            <Breadcrumbs items={breadcrumbs} dark={true} />
          </div>
        )}

        {badge && (
          <div className='inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase text-accent-lt bg-white/5 border border-white/10 mb-3'>
            {badge}
          </div>
        )}

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-[1.18] max-w-3xl'>
          {title}
        </h1>

        {subtitle && (
          <p className='mt-3 text-sm sm:text-base text-white/75 max-w-2xl font-normal leading-relaxed'>
            {subtitle}
          </p>
        )}

        {children && <div className='mt-6'>{children}</div>}
      </div>
    </div>
  );
}
