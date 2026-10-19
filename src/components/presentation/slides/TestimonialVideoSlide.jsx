const DEFAULT_TESTIMONIAL_VIDEO_URL = 'https://fpnx5ympyqj8uon0.public.blob.vercel-storage.com/depoimento.mp4';
const testimonialVideoUrl = import.meta.env.VITE_TESTIMONIAL_VIDEO_URL || DEFAULT_TESTIMONIAL_VIDEO_URL;

export const TestimonialVideoSlide = () => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#1c2d7f] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(213.59deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute left-1/2 top-[10.2%] z-10 w-[78%] -translate-x-1/2 text-center text-[3.33cqw] font-[400] leading-[4.2cqw] tracking-[0] text-[#1c2d7f]">
      Depoimento <span className="font-[700]">HomeCash</span>
    </h1>

    <section className="absolute left-1/2 top-[25%] z-10 w-[62%] -translate-x-1/2 overflow-hidden rounded-[0.78cqw] bg-[#dfe3f1] shadow-[0_1.45cqw_3.5cqw_rgba(15,27,81,0.16)]">
      {testimonialVideoUrl ? (
        <video
          className="aspect-video w-full bg-black object-contain"
          src={testimonialVideoUrl}
          controls
          playsInline
          preload="metadata"
          controlsList="nodownload"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center px-[4cqw] text-center text-[1.65cqw] leading-[1.35] text-[#1c2d7f]/70">
          Video indisponivel
        </div>
      )}
    </section>
  </div>
);
