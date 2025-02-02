"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CodeRenderer } from "../code-renderer";

export function ComponentSource({
  className,
  code,
  expandButtonTitle = "Expand",
  highlightedCode,
  maxHeight = "550px",
  ...props
}: {
  code: string;
  highlightedCode: string;
  className?: string;
  expandButtonTitle?: string;
  maxHeight?: string;
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className="not-prose"
    >
      <div
        className={cn(
          "group/item relative my-4 overflow-hidden rounded-lg border bg-card text-card-foreground",
          className
        )}
        {...props}
      >
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-32")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto"
            )}
            style={{
              maxHeight: isOpened ? maxHeight : "none",
              overflow: "auto",
            }}
          >
            <CodeRenderer code={code} highlightedCode={highlightedCode} />
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            "absolute flex items-center justify-center bg-linear-to-b from-background/30 to-background/90 p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" size="sm" className="h-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
