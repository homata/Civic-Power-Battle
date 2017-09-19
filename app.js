var viewer = new Cesium.Viewer('cesiumContainer', {
    animation : false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    navigationHelpButton: false,
    infoBox: false,
    timeline: false,
    sceneMode : Cesium.SceneMode.COLUMBUS_VIEW
});

var terrainProvider = new Cesium.CesiumTerrainProvider({
    url : '//assets.agi.com/stk-terrain/world'
});
viewer.terrainProvider = terrainProvider;

load_geojson(viewer, "./geojson/kawasaki.geojson", Cesium.Color.ORANGE.withAlpha(0.5));
load_geojson(viewer, "./geojson/yokohama.geojson", Cesium.Color.MEDIUMBLUE.withAlpha(0.5));
load_geojson(viewer, "./geojson/chiba.geojson", Cesium.Color.YELLOW.withAlpha(0.5));
load_geojson(viewer, "./geojson/nagareyama.geojson", Cesium.Color.LIME.withAlpha(0.5));
load_geojson(viewer, "./geojson/saitama.geojson", Cesium.Color.RED.withAlpha(0.5));

var longitude = 139.803;
var latitude  = 35.330889;
var range     = 120000.0;
set_view(viewer, latitude, longitude, range);

function set_view(viewer, latitude, longitude, range) {

    viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(longitude, latitude, range),
        orientation: {
            heading: 0,
            pitch: -1.3,
            roll: 0
        }
    });
}

function load_geojson(_viewer, _geojson, color) {
    _viewer.dataSources.add(Cesium.GeoJsonDataSource.load(_geojson, {
        stroke: Cesium.Color.BLACK,
        fill: color,
        strokeWidth: 2
    }));
}

