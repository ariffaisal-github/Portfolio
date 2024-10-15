import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import { KeyTextField, LinkField, asLink } from "@prismicio/client";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  const linkUrl = asLink(linkField); // Convert linkField to actual URL

  // Check if the link is a mailto link
  const isMailTo = linkUrl?.startsWith("mailto:");

  return isMailTo ? (
    <a
      href={linkUrl || undefined}
      target="_blank" // Open mailto in a new tab
      rel="noopener noreferrer" // Security enhancement for external links
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-800 transition-transform ease-out hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </a>
  ) : (
    <PrismicNextLink
      field={linkField}
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </PrismicNextLink>
  );
}
