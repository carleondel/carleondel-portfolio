"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CopyEmailProps {
  labels: { emailMe: string; copy: string; copied: string };
}

export function CopyEmail({ labels }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const { email } = siteConfig.social;

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a href={`mailto:${email}`} className="btn-primary">
        <Mail size={15} />
        {labels.emailMe}
      </a>
      <button onClick={copy} className="btn-secondary">
        {copied ? <Check size={15} /> : <Copy size={15} />}
        {copied ? labels.copied : `${labels.copy} ${email}`}
      </button>
    </div>
  );
}
