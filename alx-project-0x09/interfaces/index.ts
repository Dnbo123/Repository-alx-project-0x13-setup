import * as React from "react";

export interface ReactComponentProps { 
    children: React.ReactNode 
}


export interface GeneratedImageProps {
    imageUrl: string
    prompt: string
    width: string
    height: string
    action: (imagePath: string) => void
}

<<<<<<< HEAD
export type RequestProps = {
    prompt: string;
  }

=======
>>>>>>> c19b82e461ca22c41684063fff989be34d6f5a6d
export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">