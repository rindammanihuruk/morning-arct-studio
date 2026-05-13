import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "lead_form_submitted_v2";

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
  const [stage, setStage] = useState<"hidden" | "welcome" | "form" | "done">("hidden");
  const [form, setForm] = useState<LeadForm>({ name: "", phone: "", email: "", area: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) {
      setStage("done");
      return;
    }
    setStage("welcome");
  }, []);

  useEffect(() => {
    const locked = stage === "welcome" || stage === "form";
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...result.data, ts: Date.now() }));
    toast.success("Terima kasih! Selamat menjelajah.");
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setStage("done");
  };

  const update = (k: keyof LeadForm, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const visible = stage === "welcome" || stage === "form";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Ambient backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, hsla(18 55% 48% / 0.18), transparent 45%), radial-gradient(circle at 85% 80%, hsla(70 18% 38% / 0.15), transparent 50%)",
            }}
          />

          <div className="relative min-h-full flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              {stage === "welcome" && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative max-w-xl w-full text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 text-minimal text-clay mb-8"
                  >
                    <Sparkles size={14} />
                    SELAMAT DATANG
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="font-display text-5xl md:text-7xl font-light text-architectural text-foreground"
                  >
                    Morning
                    <br />
                    <span className="italic text-clay">Arct Studio</span>
                  </motion.h1>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-px w-24 bg-clay mx-auto my-8 origin-center"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="text-muted-foreground max-w-md mx-auto leading-relaxed"
                  >
                    Sebelum melanjutkan, mohon lengkapi data diri Anda agar kami dapat
                    memberikan pengalaman konsultasi yang lebih personal.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    onClick={() => setStage("form")}
                    className="mt-10 inline-flex items-center gap-3 bg-clay text-accent-foreground px-8 py-4 text-minimal shadow-warm hover:-translate-y-0.5 transition-all"
                  >
                    LANJUTKAN
                    <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              )}

              {stage === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full max-w-md bg-background border border-border shadow-warm rounded-sm overflow-hidden"
                >
                  <div className="bg-gradient-warm p-6 pb-5 border-b border-border">
                    <div className="inline-flex items-center gap-2 text-minimal text-clay mb-3">
                      <MessageCircle size={14} />
                      DATA DIRI
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-light text-architectural">
                      Mulai <span className="italic text-clay">perjalanan Anda</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      Lengkapi data berikut untuk melanjutkan menjelajah website kami.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <Field label="Nama Lengkap" value={form.name} onChange={(v) => update("name", v)} error={errors.name} autoComplete="name" maxLength={100} />
                    <Field label="No. HP / WhatsApp" value={form.phone} onChange={(v) => update("phone", v)} error={errors.phone} type="tel" autoComplete="tel" maxLength={20} placeholder="08xxxxxxxxxx" />
                    <Field label="Email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} type="email" autoComplete="email" maxLength={255} />
                    <Field label="Daerah Rencana Pembangunan" value={form.area} onChange={(v) => update("area", v)} error={errors.area} placeholder="Contoh: Pekanbaru" maxLength={120} />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-clay text-accent-foreground px-6 py-3 text-minimal hover:bg-clay/90 transition-all shadow-warm hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      <Send size={14} />
                      KIRIM & LANJUTKAN
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
