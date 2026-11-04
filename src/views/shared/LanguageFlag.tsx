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
import type { LanguageCode } from "@/lib/languages";

const flags: Record<LanguageCode, { url: string }> = { es: cl, en: us, pt: br, fr, de, it, zh: cn, ja: jp, ko: kr, ar: sa, ru, hi: india };

const LanguageFlag = ({ language }: { language: LanguageCode }) => (
  <img src={flags[language].url} alt="" aria-hidden="true" width={24} height={18} className="h-[18px] w-6 shrink-0 rounded-sm object-cover" />
);

export default LanguageFlag;