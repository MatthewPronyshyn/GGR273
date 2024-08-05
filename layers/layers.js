ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-1061498.085219, 5296360.478462, 1169531.352030, 6933902.171817]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlbertaBoundary_1 = new ol.format.GeoJSON();
var features_AlbertaBoundary_1 = format_AlbertaBoundary_1.readFeatures(json_AlbertaBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_1.addFeatures(features_AlbertaBoundary_1);
var lyr_AlbertaBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_1, 
                style: style_AlbertaBoundary_1,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_1.png" /> Alberta Boundary'
            });
var format_AlbertaLakes_2 = new ol.format.GeoJSON();
var features_AlbertaLakes_2 = format_AlbertaLakes_2.readFeatures(json_AlbertaLakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaLakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaLakes_2.addFeatures(features_AlbertaLakes_2);
var lyr_AlbertaLakes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaLakes_2, 
                style: style_AlbertaLakes_2,
                popuplayertitle: "Alberta Lakes",
                interactive: true,
                title: '<img src="styles/legend/AlbertaLakes_2.png" /> Alberta Lakes'
            });
var format_FishStock_3 = new ol.format.GeoJSON();
var features_FishStock_3 = format_FishStock_3.readFeatures(json_FishStock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStock_3.addFeatures(features_FishStock_3);
var lyr_FishStock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStock_3, 
                style: style_FishStock_3,
                popuplayertitle: "Fish Stock",
                interactive: true,
    title: 'Fish Stock<br />\
    <img src="styles/legend/FishStock_3_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStock_3_1.png" /> 2551 - 8120<br />\
    <img src="styles/legend/FishStock_3_2.png" /> 8121 - 20000<br />\
    <img src="styles/legend/FishStock_3_3.png" /> 20001 - 60000<br />\
    <img src="styles/legend/FishStock_3_4.png" /> 60001 - 110000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_AlbertaBoundary_1.setVisible(true);lyr_AlbertaLakes_2.setVisible(true);lyr_FishStock_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AlbertaBoundary_1,lyr_AlbertaLakes_2,lyr_FishStock_3];
lyr_AlbertaBoundary_1.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaLakes_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStock_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'STOCK': 'STOCK', 'MAP AUTHOR': 'MAP AUTHOR', });
lyr_AlbertaBoundary_1.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaLakes_2.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStock_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'STOCK': 'TextEdit', 'MAP AUTHOR': 'TextEdit', });
lyr_AlbertaBoundary_1.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaLakes_2.set('fieldLabels', {'HYDROUID': 'hidden field', 'NAME': 'inline label - visible with data', 'RANK': 'hidden field', 'PRUID': 'hidden field', });
lyr_FishStock_3.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'hidden field', 'STOCK': 'inline label - always visible', 'MAP AUTHOR': 'header label - always visible', });
lyr_FishStock_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});