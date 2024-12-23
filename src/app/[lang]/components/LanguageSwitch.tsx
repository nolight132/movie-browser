'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select';
import { LanguagesIcon } from 'lucide-react';
import { type getDictionary } from '@/get-dictionary';

const getLocale = (): string => {
  const currentPath = window.location.pathname;
  const match = currentPath.match(/^\/([a-z]{2})(?:-[A-Z]{2})?/);
  return match ? match[1] : 'en';
};

const LanguageSwitcher = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['nav'];
}) => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('');

  useEffect(() => {
    setSelectedLang(getLocale());
  }, []);

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);

    const currentPath = window.location.pathname;
    const searchParams = window.location.search;

    const newPath = currentPath.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, '');
    router.push(`/${lang}${newPath}${searchParams}`);
  };

  return (
    <Select value={selectedLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="border-none shadow-none">
        <LanguagesIcon className="size-4" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{dictionary.language.title}</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
          <SelectItem value="pl">Polski</SelectItem>
          <SelectItem value="de">Deutsch</SelectItem>
          {/* Add more languages as needed */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
