import { CheckCircle2, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/views/shared/RichTextEditor";
import { useLeadFormController } from "@/controllers/useLeadFormController";

interface LeadFormDialogViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source: string;
}

const LeadFormDialogView = ({ open, onOpenChange, source }: LeadFormDialogViewProps) => {
  const { status, form, onSubmit, handleOpenChange } = useLeadFormController({ open, onOpenChange });

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl max-h-[90vh] overflow-y-auto">
        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              Listo, {form.getValues("nombre").split(" ")[0]}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Recibimos tus datos. Te contactaremos a la brevedad por teléfono o correo para agendar tu
              diagnóstico.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="items-center text-center sm:text-center">
              <img src={logo} alt="Independencia Digital" className="h-12 w-12 mb-1" />
              <DialogTitle className="font-heading text-xl">Quiero mi diagnóstico</DialogTitle>
              <DialogDescription>
                Déjanos tus datos y te contactamos para agendar tu diagnóstico gratuito.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <input type="hidden" value={source} readOnly />
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@correo.cl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+56 9 1234 5678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cuéntanos tu caso</FormLabel>
                      <FormControl>
                        <RichTextEditor
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Cuéntanos un poco de tu negocio y qué es lo que necesitas resolver"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 gradient-brand text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Enviando…
                    </>
                  ) : (
                    "Quiero mi diagnóstico"
                  )}
                </button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialogView;
