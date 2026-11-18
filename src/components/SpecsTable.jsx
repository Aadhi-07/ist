export default function SpecsTable({ title, rows, note }) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className='my-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm'>
      {title && (
        <div className='bg-[#022731] px-4 sm:px-5 py-3 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1'>
          <h4 className='font-medium text-xs sm:text-sm tracking-normal'>{title}</h4>
          <span className='text-[10.5px] sm:text-[11px] font-normal text-accent-lt opacity-90'>Operating Parameters</span>
        </div>
      )}
      <div className='overflow-x-auto -webkit-overflow-scrolling-touch'>
        <table className='w-full text-left text-xs border-collapse min-w-[580px]'>
          <thead>
            <tr className='bg-neutral-50/80 border-b border-neutral-200 text-ink/80 font-medium text-[11px] tracking-wider uppercase'>
              <th scope='col' className='py-3 px-5 text-right font-semibold'>Pressure (P.S.I.)</th>
              <th scope='col' className='py-3 px-5 text-right font-medium text-muted'>Pressure (BAR)</th>
              <th scope='col' className='py-3 px-5 text-right font-semibold text-accent'>Flow (G.P.M.)</th>
              <th scope='col' className='py-3 px-5 text-right font-medium text-muted'>Flow (L/MIN)</th>
              <th scope='col' className='py-3 px-5 font-medium'>Primary Application</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-100'>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#fafcfc]'}>
                <td className='py-2.5 px-5 font-mono tabular-nums text-right font-semibold text-ink whitespace-nowrap'>
                  {row.psi}
                </td>
                <td className='py-2.5 px-5 font-mono tabular-nums text-right text-muted whitespace-nowrap'>
                  {row.bar}
                </td>
                <td className='py-2.5 px-5 font-mono tabular-nums text-right font-medium text-accent whitespace-nowrap'>
                  {row.gpm}
                </td>
                <td className='py-2.5 px-5 font-mono tabular-nums text-right text-muted whitespace-nowrap'>
                  {row.lpm}
                </td>
                <td className='py-2.5 px-5 text-ink/85 leading-snug'>
                  {row.application}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <div className='bg-neutral-50 px-5 py-2.5 text-[11.5px] text-muted border-t border-neutral-200/70'>
          {note}
        </div>
      )}
    </div>
  );
}
