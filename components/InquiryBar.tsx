export default function InquiryBar() {
  return (
    <section className="container-page -mt-8 relative z-10 sm:mt-0 py-8">
      <form className="bg-ink text-white rounded-sm p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <input
          type="text"
          placeholder="Name"
          className="lg:col-span-1 bg-white/10 placeholder-white/60 rounded-sm px-4 py-3 text-sm outline-none focus:bg-white/15"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="lg:col-span-1 bg-white/10 placeholder-white/60 rounded-sm px-4 py-3 text-sm outline-none focus:bg-white/15"
        />
        <input
          type="date"
          aria-label="Event date"
          className="lg:col-span-1 bg-white/10 placeholder-white/60 rounded-sm px-4 py-3 text-sm outline-none focus:bg-white/15"
        />
        <select
          aria-label="Number of guests"
          className="lg:col-span-1 bg-white/10 rounded-sm px-4 py-3 text-sm outline-none focus:bg-white/15"
          defaultValue=""
        >
          <option value="" disabled className="text-ink">Guests</option>
          <option className="text-ink">Under 50</option>
          <option className="text-ink">50–100</option>
          <option className="text-ink">100–200</option>
          <option className="text-ink">200+</option>
        </select>
        <input
          type="text"
          placeholder="Event type"
          className="lg:col-span-1 bg-white/10 placeholder-white/60 rounded-sm px-4 py-3 text-sm outline-none focus:bg-white/15"
        />
        <button type="submit" className="btn-gold lg:col-span-1 justify-center">
          Book
        </button>
      </form>
    </section>
  );
}
