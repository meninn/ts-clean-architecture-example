import { Route, TRouteProps } from "./route.entity";

describe("Route Tests", () => {
  test("constructor", () => {
    let routeProps: TRouteProps = {
      title: "route 1",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    let route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: "route 1",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [
        {
          lat: 10,
          lng: 14,
        },
      ],
    };

    route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 14 }],
    });
  });
});
