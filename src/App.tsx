import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer, LineLayer } from "@deck.gl/layers";
import { InteractiveMap, StaticMap } from "react-map-gl";
import { ViewStateProps } from "@deck.gl/core/lib/deck";

const INITIAL_VIEW_STATE: ViewStateProps = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 4,
  pitch: 0,
  bearing: 0
};

const lineData = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        "marker-color": "#ff0000",
        "marker-size": "medium",
        "marker-symbol": ""
      },
      geometry: {
        type: "Point",
        coordinates: [-122.44477272033691, 37.79906910652822]
      }
    },
    {
      type: "Feature",
      properties: {
        "marker-color": "#0000ff",
        "marker-size": "large",
        "marker-symbol": ""
      },
      geometry: {
        type: "Point",
        coordinates: [-122.42451667785645, 37.8019175085504]
      }
    },
    {
      type: "Feature",
      properties: { "marker-size": "small" },
      geometry: {
        type: "MultiPoint",
        coordinates: [
          [-122.46923446655273, 37.803273851858656],
          [-122.46957778930665, 37.79934038764369],
          [-122.46434211730958, 37.80313821864869],
          [-122.46451377868652, 37.8001542250124]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        stroke: "#ff0000",
        "stroke-width": 10,
        "stroke-opacity": 1
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-122.40880966186523, 37.783536601521924],
          [-122.43893623352051, 37.779669924659004],
          [-122.43515968322752, 37.7624370109886],
          [-122.42348670959471, 37.77180027337861],
          [-122.4250316619873, 37.778584505321376],
          [-122.42314338684082, 37.778652344496926],
          [-122.42357254028322, 37.77987343901049],
          [-122.41198539733887, 37.78109451335266]
        ]
      }
    },
    {
      type: "Feature",
      properties: { stroke: "#408000", "stroke-width": 2, "stroke-opacity": 1 },
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [-122.39670753479004, 37.7947284731866],
            [-122.44726181030273, 37.788352705583755]
          ],
          [
            [-122.44709014892577, 37.78733524495977],
            [-122.39670753479004, 37.79371110035437]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        stroke: "#800000",
        "stroke-width": 3,
        "stroke-opacity": 0.5,
        fill: "#ffff66",
        "fill-opacity": 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.51129150390625, 37.771461045439764],
            [-122.46588706970215, 37.77342854582093],
            [-122.45464324951172, 37.77471756940714],
            [-122.45284080505371, 37.76644028998291],
            [-122.45747566223145, 37.765761783370465],
            [-122.45902061462401, 37.76644028998291],
            [-122.5100040435791, 37.763997637045456],
            [-122.51026153564452, 37.767254489700846],
            [-122.51129150390625, 37.771461045439764]
          ],
          [
            [-122.50802993774414, 37.770239811973674],
            [-122.45644569396974, 37.77302148107203],
            [-122.45515823364258, 37.76759373693769],
            [-122.45884895324706, 37.76847577247014],
            [-122.50811576843262, 37.765693932366865],
            [-122.50802993774414, 37.770239811973674]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        stroke: "#004080",
        "stroke-width": 2,
        "stroke-opacity": 1,
        fill: "#66ff66",
        "fill-opacity": 0.5
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-122.4717664718628, 37.73094604426975],
              [-122.47253894805908, 37.71706268973759],
              [-122.47116565704346, 37.71275119199666],
              [-122.47017860412596, 37.71275119199666],
              [-122.46803283691405, 37.712411693330296],
              [-122.46524333953857, 37.712445643266925],
              [-122.46339797973633, 37.71146108878938],
              [-122.46026515960692, 37.71037466866717],
              [-122.45494365692137, 37.7111215842122],
              [-122.44975090026854, 37.71533133102705],
              [-122.4481201171875, 37.72123815310796],
              [-122.45236873626708, 37.723037263958275],
              [-122.4605655670166, 37.72480238685191],
              [-122.46584415435791, 37.72670324138648],
              [-122.46803283691405, 37.72863798965106],
              [-122.468204498291, 37.72938472107615],
              [-122.4717664718628, 37.73094604426975]
            ]
          ],
          [
            [
              [-122.435245513916, 37.73155698786267],
              [-122.42983818054199, 37.73237157147889],
              [-122.42563247680664, 37.73155698786267],
              [-122.42048263549805, 37.73182851673044],
              [-122.41559028625487, 37.732100044602525],
              [-122.40846633911133, 37.73488314788311],
              [-122.40752220153807, 37.73732676207096],
              [-122.40769386291502, 37.74173863896063],
              [-122.4052906036377, 37.74920429313147],
              [-122.4085521697998, 37.748322027789115],
              [-122.42511749267578, 37.74777909004261],
              [-122.42374420166016, 37.73977029560411],
              [-122.42683410644533, 37.73603708685575],
              [-122.435245513916, 37.73155698786267]
            ]
          ],
          [
            [
              [-122.49532699584961, 37.75347973770911],
              [-122.493953704834, 37.73379707124429],
              [-122.4752426147461, 37.73488314788311],
              [-122.47644424438477, 37.75429408009598],
              [-122.49532699584961, 37.75347973770911]
            ]
          ]
        ]
      }
    }
  ]
};

export const App = () => {
  const [deckGLRef, setDeckGLRef] = useState<DeckGL | null>(null);
  const [viewportState, setViewportState] = useState<ViewStateProps>(
    INITIAL_VIEW_STATE
  );

  return (
    <DeckGL
      ref={setDeckGLRef}
      height="100%"
      width="100%"
      controller
      viewState={viewportState}
      onViewStateChange={(viewState) => {
        setViewportState(viewState.viewState);
      }}
    >
      <StaticMap
        width="100%"
        height="100%"
        mapboxApiAccessToken="pk.eyJ1IjoidG9tYmFydG9uIiwiYSI6ImNrYmwwcDc4eTE0Y2Iyc281azYzamZreHoifQ.uP1pLLhlt4hGzPGw5xForQ"
        mapOptions={{
          antialias: true
        }}
      />
      <LineLayer id="line-layer" data={lineData} />
      <GeoJsonLayer id="geojson" data={geojson.features} />
    </DeckGL>
  );
};
