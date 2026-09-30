/* Simulasi percakapan chatbot */
export default function PhoneChat({ messages }) {
  return (
    <div className="phone" aria-label="Contoh percakapan dengan chatbot">
      <div className="phone-bar">Contoh percakapan (ilustrasi)</div>
      <div className="phone-body">
        {messages.map((m, i) => (
          <p key={i} className={`bubble ${m.from}`} style={{ animationDelay: `${0.4 + i * 0.9}s` }}>
            {m.text}
          </p>
        ))}
      </div>
    </div>
  );
}