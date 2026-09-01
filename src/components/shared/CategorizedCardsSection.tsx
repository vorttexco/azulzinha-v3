"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import CategorizedLayout from "@/components/shared/CategorizedLayout";
import { asset } from "@/lib/assets";

function appLogo(filename: string) {
  return asset(`/images/azulzinha-smart/logo/${filename}`);
}

export const APP_CATEGORIES = [
  "Atacado",
  "Auto Elétricas, Auto Peças e Mecânicas",
  "Bar",
  "Comércio",
  "Delivery",
  "Direito",
  "Distribuidora de Gás de Cozinha",
  "Distribuidores de Produtos",
  "Estacionamentos",
  "Eventos, Feiras e Shows",
  "Ferragem",
  "Fidelidade e Convênios",
  "Food Service e Food Truck",
  "Gestão de Pedidos",
  "Gestão Empresarial",
  "Hotéis",
  "Indústrias",
  "Ingressos",
  "Lanchonetes e Restaurantes",
  "Lojas de Confecção, Calçados e Vestuário",
  "Lojas de Conveniência",
  "Materiais de Construção",
  "Padarias",
  "Pedágio",
  "Postos de Combustível",
  "Religioso",
  "Salão de Beleza",
  "Saúde",
  "Serviços",
  "Sorveterias",
  "Supermercados",
  "Transporte",
  "Varejo em Geral",
  "Venda de Seguros",
] as const;

export type AppCategory = (typeof APP_CATEGORIES)[number];

const ALL_CATEGORY_LABEL = "Todos os apps";

const SIDEBAR_CATEGORIES = [
  { label: ALL_CATEGORY_LABEL },
  ...APP_CATEGORIES.map((label) => ({ label })),
];

export interface CardItem {
  logo?: string;
  title: string;
  description: string;
  link?: string;
  category: AppCategory[];
}

interface CategorizedCardsSectionProps {
  data: CardItem[];
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
}

function AppCard({ item }: { item: CardItem }) {
  const [expanded, setExpanded] = useState(false);

  const parseDescription = (desc: string) => {
    const lines = desc.split("\n");
    const mainLines: string[] = [];
    const contactInfo: { type: "telefone" | "email"; label: string; values: string[] }[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("Telefone:")) {
        const value = trimmed.replace("Telefone:", "").trim();
        if (value) {
          const existing = contactInfo.find((c) => c.type === "telefone");
          if (existing) {
            existing.values.push(value);
          } else {
            contactInfo.push({ type: "telefone", label: "Telefone:", values: [value] });
          }
        }
      } else if (trimmed.startsWith("Email:")) {
        const value = trimmed.replace("Email:", "").trim();
        if (value) {
          const existing = contactInfo.find((c) => c.type === "email");
          if (existing) {
            existing.values.push(value);
          } else {
            contactInfo.push({ type: "email", label: "Email:", values: [value] });
          }
        }
      } else if (trimmed && !trimmed.startsWith("*")) {
        mainLines.push(trimmed);
      }
    }

    return { main: mainLines.join("\n"), contactInfo };
  };

  const { main, contactInfo } = parseDescription(item.description);

  return (
    <div className="relative rounded-xl border border-[#F1F1F1] shadow-[0px_4px_10px_0px_#00000014] bg-white p-6 flex flex-col">
      <button
        onClick={() => setExpanded(!expanded)}
        className="absolute top-4 right-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-azul hover:bg-azul/90 transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          {expanded ? (
            <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
          ) : (
            <>
              <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
              <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
            </>
          )}
        </svg>
      </button>
      {item.logo && (
        <div className="h-16 flex items-center mb-4">
          <Image
            src={appLogo(item.logo)}
            alt={item.title}
            width={120}
            height={64}
            className="object-contain max-h-16"
          />
        </div>
      )}
      <h4 className="text-gray-800 text-[18px] font-normal leading-[140%] mb-2">{item.title}</h4>
      <p
        className={`text-gray-600 text-[14px] font-normal leading-[140%] whitespace-pre-line ${expanded ? "" : "line-clamp-5"}`}
      >
        {main}
      </p>

      {expanded && contactInfo.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#F1F1F1] space-y-3">
          {contactInfo.map((info, idx) => (
            <div key={idx}>
              <p className="text-gray-600 text-[13px] font-normal mb-1">{info.label}</p>
              {info.type === "telefone" ? (
                <div className="space-y-1">
                  {info.values.map((tel, tidx) => (
                    <a
                      key={tidx}
                      href={`tel:${tel.replace(/\D/g, "")}`}
                      className="text-laranja text-[14px] font-normal hover:underline block"
                    >
                      {tel}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="space-y-1">
                  {info.values.map((email, eidx) => (
                    <a
                      key={eidx}
                      href={`mailto:${email}`}
                      className="text-laranja text-[14px] font-normal hover:underline block"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CardGrid({ items }: { items: CardItem[] }) {
  if (items.length === 0) {
    return <p className="text-gray-500 text-[14px]">Nenhum app encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <AppCard key={i} item={item} />
      ))}
    </div>
  );
}

export default function CategorizedCardsSection({
  data,
  title = "",
  subtitle,
  searchPlaceholder,
}: CategorizedCardsSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const isSearching = search.trim().length > 0;
  const selectedCategory = activeCategory === 0 ? null : APP_CATEGORIES[activeCategory - 1];

  const filteredItems = useMemo(() => {
    const term = search.trim().toLowerCase();

    const items = data.filter((item) => {
      if (selectedCategory && !item.category.includes(selectedCategory)) return false;
      if (!term) return true;
      return (
        item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term)
      );
    });

    return [...items].sort((a, b) =>
      sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  }, [data, selectedCategory, search, sortOrder]);

  const heading = isSearching
    ? `Resultados para "${search}"`
    : SIDEBAR_CATEGORIES[activeCategory].label;

  return (
    <CategorizedLayout
      title={title}
      subtitle={subtitle}
      searchPlaceholder={searchPlaceholder}
      search={search}
      onSearchChange={setSearch}
      categories={SIDEBAR_CATEGORIES}
      activeIndex={activeCategory}
      onSelectCategory={setActiveCategory}
      heading={heading}
      headingAction={
        <div className="flex items-center gap-2 text-gray-500 text-[14px]">
          <span>Ordenar por:</span>
          <button
            onClick={() => setSortOrder("asc")}
            className={`font-semibold ${sortOrder === "asc" ? "text-azul" : "text-gray-400"}`}
          >
            A↑Z
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`font-semibold ${sortOrder === "desc" ? "text-azul" : "text-gray-400"}`}
          >
            Z↓A
          </button>
        </div>
      }
    >
      {isSearching && filteredItems.length === 0 ? (
        <p className="text-gray-500 text-[14px]">Nenhum resultado encontrado.</p>
      ) : (
        <CardGrid items={filteredItems} />
      )}
    </CategorizedLayout>
  );
}
