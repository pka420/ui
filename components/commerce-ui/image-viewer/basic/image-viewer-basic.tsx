"use client";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ImageViewerProps {
  className?: string;
  classNameImageViewer?: string;
  classNameThumbnailViewer?: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

const ImageViewer_Basic = ({
  className,
  classNameImageViewer,
  classNameThumbnailViewer,
  imageUrl,
  thumbnailUrl,
}: ImageViewerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer ${className || ""}`}>
          <img
            src={thumbnailUrl || imageUrl}
            alt="Preview"
            width={300}
            height={300}
            className={cn(
              "rounded-lg object-cover transition-opacity hover:opacity-90",
              classNameThumbnailViewer
            )}
          />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/80" />
        <DialogContent className="bg-background fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 p-0 sm:w-auto">
          <DialogTitle className="sr-only">Image</DialogTitle>
          <div className="relative flex min-h-[300px] items-center justify-center">
            {/* You can swap this with your preferred image optization technique, like using  next/image */}
            <img
              src={imageUrl}
              alt="Full size"
              width={1920}
              height={1080}
              className={cn(
                "h-auto max-h-[calc(100vh-4rem)] w-full object-contain",
                classNameImageViewer
              )}
            />
            <DialogClose asChild>
              <button
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <X className="size-6" />
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ImageViewer_Basic;
