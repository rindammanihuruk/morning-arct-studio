import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const STORAGE_KEY = "lead_form_shown_v1";
const WHATSAPP_NUMBER = "6281271172937";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  phone: z
    .string()
    .trim()
    .min(8, "No HP minimal 8 digit")
    .max(20, "No HP terlalu panjang")
    .regex(/^[0-9+\-\s()]+$/, "No HP hanya boleh berisi angka"),
  email: z.string().trim().email("Format email tidak valid").max(255),
  area: z.string().trim().min(2, "Daerah minimal 2 karakter").max(120, "Daerah terlalu panjang"),
});

type LeadForm = z.infer<typeof leadSchema>;

const LeadCaptureModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadForm>({ name: "", phone: "", email: "", area: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 30_000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof LeadForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const { name, phone, email, area } = result.data;
    const text = `Halo Morning Arct Studio, saya ingin konsultasi:%0A%0ANama: ${encodeURIComponent(
      name,
    )}%0ANo HP: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(
      email,
    )}%0ADaerah pembangunan: ${encodeURIComponent(area)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    localStorage.setItem(STORAGE_KEY, "1");
    toast.success("Terima kasih! Anda akan diarahkan ke WhatsApp.");
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setOpen(false);
  };

  const update = (k: keyof LeadForm, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-background shadow-warm rounded-sm overflow-hidden"
          >
            <button
              onClick={close}
              aria-label="Tutup"
              className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X size={18} />
            </button>
            <div className="bg-gradient-warm p-6 pb-5 border-b border-border">
              <div className="inline-flex items-center gap-2 text-minimal text-clay mb-3">
                <MessageCircle size={14} />
                KONSULTASI GRATIS
              </div>
              <h2 id="lead-title" className="font-display text-2xl md:text-3xl font-light text-architectural">
                Mulai <span className="italic text-clay">proyek Anda</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Isi data berikut, tim kami akan menghubungi Anda via WhatsApp.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <Field
                label="Nama Lengkap"
                value={form.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                autoComplete="name"
                maxLength={100}
              />
              <Field
                label="No. HP / WhatsApp"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
                type="tel"
                autoComplete="tel"
                maxLength={20}
                placeholder="08xxxxxxxxxx"
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                type="email"
                autoComplete="email"
                maxLength={255}
              />
              <Field
                label="Daerah Rencana Pembangunan"
                value={form.area}
                onChange={(v) => update("area", v)}
                error={errors.area}
                placeholder="Contoh: Pekanbaru"
                maxLength={120}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-clay text-accent-foreground px-6 py-3 text-minimal hover:bg-clay/90 transition-all shadow-warm hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send size={14} />
                KIRIM & KONSULTASI
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Nanti saja
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  placeholder?: string;
}

const Field = ({ label, value, onChange, error, type = "text", autoComplete, maxLength, placeholder }: FieldProps) => (
  <label className="block">
    <span className="text-minimal text-muted-foreground block mb-1.5">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
      maxLength={maxLength}
      placeholder={placeholder}
      required
      className={`w-full bg-transparent border-b ${
        error ? "border-destructive" : "border-border focus:border-clay"
      } py-2 px-0 text-sm focus:outline-none transition-colors`}
    />
    {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
  </label>
);

export default LeadCaptureModal;
