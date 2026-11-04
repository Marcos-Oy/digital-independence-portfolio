import { useState } from "react";
import { Check, Globe2, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/controllers/LanguageProvider";
import { LANGUAGES, searchLanguages } from "@/lib/languages";
import LanguageFlag from "@/views/shared/LanguageFlag";

const LanguageSelector = () => {
  const { language, selectLanguage, translating, error } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const current = LANGUAGES.find(item => item.code === language) ?? LANGUAGES[0];
  const names = new Intl.DisplayNames([language], { type: "language" });
  return <Popover open={open} onOpenChange={value => { setOpen(value); setQuery(""); }}>
    <PopoverTrigger asChild>
      <Button variant="ghost" size="icon" data-no-translate title="Idioma / Language" aria-label="Idioma / Language" className="shrink-0 text-muted-foreground">
        {translating ? <Loader2 className="animate-spin" /> : <LanguageFlag language={current.code} />}
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end" data-no-translate className="z-[150] w-72 max-w-[calc(100vw-2rem)] p-2" dir="ltr">
      <div className="flex items-center gap-2 px-2 py-2 text-sm font-semibold"><Globe2 className="h-4 w-4 text-secondary" /> Idioma / Language</div>
      <div className="relative mb-2"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input autoFocus aria-label="Buscar idioma / Search language" value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar / Search…" className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-base text-foreground outline-none focus:ring-2 focus:ring-ring" /></div>
      <div className="max-h-72 overflow-y-auto">
        {searchLanguages(query).map(item => <Button key={item.code} variant="ghost" onClick={() => { selectLanguage(item.code); setOpen(false); }} className="h-auto min-h-11 w-full justify-start whitespace-normal px-2 py-2 text-left" aria-pressed={language === item.code}>
          <LanguageFlag language={item.code} /><span className="min-w-0 flex-1"><span className="block">{item.native}</span><span className="block text-xs text-muted-foreground">{names.of(item.code)}</span></span>{language === item.code && <Check className="text-secondary" />}
        </Button>)}
        {!searchLanguages(query).length && <p className="p-3 text-sm text-muted-foreground">Sin resultados / No results</p>}
      </div>
      {error && <p role="alert" className="border-t border-border p-2 text-xs text-destructive">{error}</p>}
    </PopoverContent>
  </Popover>;
};
export default LanguageSelector;