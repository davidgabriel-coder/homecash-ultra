

export const AgendaSlide = () => {
  const items = [
    { id: 1, title: 'Diagnóstico' },
    { id: 2, title: 'Sobre a Rooftop', description: 'Quem Somos' },
    { id: 3, title: 'Mecanismo HomeCash®' },
    { id: 4, title: 'Próximas Etapas' },
    { id: 5, title: 'Plano Personalizado' }
  ];

  return (
    <div
      className="relative h-full overflow-hidden bg-[#1c2d7f] font-excon text-white [container-type:size]"
      style={{
        background:
          'linear-gradient(199.52deg, rgba(0, 84, 240, 0) 0.29419%, rgba(0, 0, 0, 0.53) 99.706%), linear-gradient(90deg, rgb(28, 45, 127) 0%, rgb(28, 45, 127) 100%)'
      }}
    >
      <div className="absolute left-[5.21%] top-[41.57%]">
        <h1 className="text-[6.667cqw] font-[700] leading-[1.2] tracking-[0]">Agenda</h1>
      </div>

      <ol className="absolute left-[50%] top-1/2 flex -translate-y-1/2 list-none flex-col gap-[3.75cqw] pl-0">
        {items.map((item) => (
          <li key={item.id} className="flex items-baseline whitespace-nowrap text-[2.5cqw] leading-[1.2] tracking-[0]">
            <span className="mr-[0.35em] font-[700]">{item.id}.</span>
            <span className="font-[700]">{item.title}</span>
            {item.description ? <span className="font-[400] text-[#f0f0f0]">&nbsp;- {item.description}</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
};
