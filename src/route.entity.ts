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

  updateTitle(title: string) {
    this.title = title;
  }

  updatePosition(startPosition: TPosition, endPosition: TPosition) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }
  
  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: TPosition) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: TPosition) {
    this.props.endPosition = value;
  }
}
