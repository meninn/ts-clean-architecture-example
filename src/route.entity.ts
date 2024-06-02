export type TPosition = {
  lat: number;
  lng: number;
};

export type TRouteProps = {
  title: string;
  startPosition: TPosition;
  endPosition: TPosition;
  points?: TPosition[];
};

export class Route {
  public props: Required<TRouteProps>;
  constructor(props: TRouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  private set title(value: string) {
    this.props.title = value;
  }
}
