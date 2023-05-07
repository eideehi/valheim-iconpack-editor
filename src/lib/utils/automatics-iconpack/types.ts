export interface AutomaticsIconPackV1 {
  target: {
    name: string;
    metadata?: {
      level: number;
    };
  };
  sprite: {
    file: string;
    width: number;
    height: number;
  };
  options?: {
    hideNameTag?: boolean;
    iconScaleLargeMap?: number;
    iconScaleSmallMap?: number;
  };
}

export type AutomaticsJsonEntry = AutomaticsIconPackV1;
export type AutomaticsIconPackJson = AutomaticsJsonEntry[];
