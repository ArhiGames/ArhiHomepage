import en from "../../public/lang/en_us.json"
import de from "../../public/lang/de_de.json"

type Join<K, P> = K extends string | number ?
    P extends string | number ? `${K}${"" extends P ? "" : "."}${P}` : never : never;

type NestedPaths<T> = T extends object ?
    { [K in keyof T]-?: Join<K, NestedPaths<T[K]>> }[keyof T] : "";

export type TranslationKey = NestedPaths<typeof en>

let current_language: typeof en = en;

type LanguageType = "de_de" | "en_us";
export function updateLanguage(language: LanguageType) {
    switch (language) {
        case "de_de": current_language = de; break;
        case "en_us": current_language = en; break;
    }
}

export function getTranslated(key: TranslationKey): string {
    const keys: string[] = key.split(".");
    let result: unknown = current_language;

    for (const k of keys) {
        if (result && typeof result === "object") {
            result = (result as Record<string, unknown>)[k];
        } else {
            return key;
        }
    }

    return typeof result === "string" ? result : key;
}