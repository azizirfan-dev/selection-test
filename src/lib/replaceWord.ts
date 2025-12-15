type ReplaceParams = {
  text: string;
  from: string;
  to: string;
};

export function replaceWordExact({
  text,
  from,
  to,
}: ReplaceParams): string {
  // hilangin spasi depan belakang
  if (!from.trim()) return text;

  // escape karakter regex
  const escapedFrom = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escapedFrom}\\b`, "g");

  const replacedText = text.replace(regex, to);

  
  return replacedText
  //ubah spasi typo jadi satu spasi -> rapi
    .replace(/\s+/g, " ")
    .trim();
}
