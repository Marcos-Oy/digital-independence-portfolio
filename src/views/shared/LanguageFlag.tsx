import cl from "@/assets/language-flags/cl.png.asset.json";
import us from "@/assets/language-flags/us.png.asset.json";
import br from "@/assets/language-flags/br.png.asset.json";
import fr from "@/assets/language-flags/fr.png.asset.json";
import de from "@/assets/language-flags/de.png.asset.json";
import it from "@/assets/language-flags/it.png.asset.json";
import cn from "@/assets/language-flags/cn.png.asset.json";
import jp from "@/assets/language-flags/jp.png.asset.json";
import kr from "@/assets/language-flags/kr.png.asset.json";
import sa from "@/assets/language-flags/sa.png.asset.json";
import ru from "@/assets/language-flags/ru.png.asset.json";
import india from "@/assets/language-flags/in.png.asset.json";
import nl from "@/assets/language-flags/nl.png.asset.json";
import pl from "@/assets/language-flags/pl.png.asset.json";
import sv from "@/assets/language-flags/se.png.asset.json";
import tr from "@/assets/language-flags/tr.png.asset.json";
import uk from "@/assets/language-flags/ua.png.asset.json";
import he from "@/assets/language-flags/il.png.asset.json";
import el from "@/assets/language-flags/gr.png.asset.json";
import id from "@/assets/language-flags/id.png.asset.json";
import vi from "@/assets/language-flags/vn.png.asset.json";
import th from "@/assets/language-flags/th.png.asset.json";
import bn from "@/assets/language-flags/bd.png.asset.json";
import ro from "@/assets/language-flags/ro.png.asset.json";
import cs from "@/assets/language-flags/cz.png.asset.json";
import type { LanguageCode } from "@/lib/languages";

const flags: Record<LanguageCode, { url: string }> = { es: cl, en: us, pt: br, fr, de, it, zh: cn, ja: jp, ko: kr, ar: sa, ru, hi: india, nl, pl, sv, tr, uk, he, el, id, vi, th, bn, ro, cs };

const LanguageFlag = ({ language }: { language: LanguageCode }) => (
  <img src={new URL(flags[language].url, "https://independencia-digital.lovable.app").href} alt="" aria-hidden="true" width={24} height={18} className="h-[18px] w-6 shrink-0 rounded-sm object-cover" />
);

export default LanguageFlag;