export default function slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }
