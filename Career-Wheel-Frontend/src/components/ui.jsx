export function ScreenCard({ title, subtitle, children, footer }) {
  return (
    <section className="screen-card">
      <header className="screen-card__header">
        <div>
          <p className="screen-card__eyebrow">Screen</p>
          <h2 className="screen-card__title">{title}</h2>
          {subtitle ? <p className="screen-card__subtitle">{subtitle}</p> : null}
        </div>
      </header>
      <div className="screen-card__content">{children}</div>
      {footer ? <div className="screen-card__footer">{footer}</div> : null}
    </section>
  );
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary", size = "md", ...rest }) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...rest}>
      {children}
    </button>
  );
}

export function Chip({ label, isActive = false }) {
  return <span className={`chip ${isActive ? "chip--active" : ""}`}>{label}</span>;
}

export function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

export function Input({ label, placeholder, type = "text" }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input className="field__input" type={type} placeholder={placeholder} />
    </label>
  );
}

export function Textarea({ label, placeholder }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <textarea className="field__input field__textarea" placeholder={placeholder} />
    </label>
  );
}

export function Toggle({ label, checked = false }) {
  return (
    <div className="toggle">
      <span className="toggle__label">{label}</span>
      <button className={`toggle__button ${checked ? "toggle__button--on" : ""}`} type="button" role="switch" aria-checked={checked}>
        <span className="toggle__thumb" />
      </button>
    </div>
  );
}

export function BottomNav() {
  const items = [
    { label: "Jobs", active: true },
    { label: "Saved" },
    { label: "Profile" },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button key={item.label} className={`bottom-nav__item ${item.active ? "bottom-nav__item--active" : ""}`} type="button">
          <span className="bottom-nav__dot" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export function IconBookmark({ filled = false }) {
  return (
    <svg
      className={`icon ${filled ? "icon--filled" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7 3h10a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}
