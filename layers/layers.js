var wms_layers = [];


        var lyr_GoogleSatelliteMap_0 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Black_Sea_coastline_2017_2024_1 = new ol.format.GeoJSON();
var features_Black_Sea_coastline_2017_2024_1 = format_Black_Sea_coastline_2017_2024_1.readFeatures(json_Black_Sea_coastline_2017_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Black_Sea_coastline_2017_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Black_Sea_coastline_2017_2024_1.addFeatures(features_Black_Sea_coastline_2017_2024_1);
var lyr_Black_Sea_coastline_2017_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Black_Sea_coastline_2017_2024_1, 
                style: style_Black_Sea_coastline_2017_2024_1,
                popuplayertitle: 'Black_Sea_coastline_2017_2024',
                interactive: true,
    title: 'Black_Sea_coastline_2017_2024<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_0.png" /> 2017<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_1.png" /> 2018<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_2.png" /> 2019<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_3.png" /> 2020<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_4.png" /> 2021<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_5.png" /> 2022<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_6.png" /> 2023<br />\
    <img src="styles/legend/Black_Sea_coastline_2017_2024_1_7.png" /> 2024<br />' });
var format_Coastline_change_rates_2 = new ol.format.GeoJSON();
var features_Coastline_change_rates_2 = format_Coastline_change_rates_2.readFeatures(json_Coastline_change_rates_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coastline_change_rates_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastline_change_rates_2.addFeatures(features_Coastline_change_rates_2);
var lyr_Coastline_change_rates_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastline_change_rates_2, 
                style: style_Coastline_change_rates_2,
                popuplayertitle: 'Coastline_change_rates',
                interactive: true,
    title: 'Coastline_change_rates<br />\
    <img src="styles/legend/Coastline_change_rates_2_0.png" /> -41 - -3<br />\
    <img src="styles/legend/Coastline_change_rates_2_1.png" /> -3- -1<br />\
    <img src="styles/legend/Coastline_change_rates_2_2.png" /> -1 - 0.5<br />\
    <img src="styles/legend/Coastline_change_rates_2_3.png" /> -0.3 - 0.5<br />\
    <img src="styles/legend/Coastline_change_rates_2_4.png" /> -0.1 - 0.3<br />\
    <img src="styles/legend/Coastline_change_rates_2_5.png" /> -0.1 0.1<br />\
    <img src="styles/legend/Coastline_change_rates_2_6.png" /> 0.1 - 0.3<br />\
    <img src="styles/legend/Coastline_change_rates_2_7.png" /> 0.3 - 0.5<br />\
    <img src="styles/legend/Coastline_change_rates_2_8.png" /> 0.5 - 1<br />\
    <img src="styles/legend/Coastline_change_rates_2_9.png" /> 1 - 3<br />\
    <img src="styles/legend/Coastline_change_rates_2_10.png" /> 3- 125<br />' });

lyr_GoogleSatelliteMap_0.setVisible(true);lyr_Black_Sea_coastline_2017_2024_1.setVisible(true);lyr_Coastline_change_rates_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteMap_0,lyr_Black_Sea_coastline_2017_2024_1,lyr_Coastline_change_rates_2];
lyr_Black_Sea_coastline_2017_2024_1.set('fieldAliases', {'year': 'year', 'name': 'name', });
lyr_Coastline_change_rates_2.set('fieldAliases', {'rate_time': 'rate_time', 'sig_time': 'sig_time', 'se_time': 'se_time', 'outl_time': 'outl_time', 'dist_2019': 'dist_2019', 'dist_2024': 'dist_2024', 'dist_2023': 'dist_2023', 'dist_2018': 'dist_2018', 'dist_2017': 'dist_2017', 'dist_2022': 'dist_2022', 'dist_2021': 'dist_2021', 'dist_2020': 'dist_2020', 'angle_mean': 'angle_mean', 'angle_std': 'angle_std', 'Coastal change': 'Coastal change', });
lyr_Black_Sea_coastline_2017_2024_1.set('fieldImages', {'year': 'Range', 'name': 'TextEdit', });
lyr_Coastline_change_rates_2.set('fieldImages', {'rate_time': 'TextEdit', 'sig_time': 'TextEdit', 'se_time': 'TextEdit', 'outl_time': 'TextEdit', 'dist_2019': 'TextEdit', 'dist_2024': 'TextEdit', 'dist_2023': 'TextEdit', 'dist_2018': 'TextEdit', 'dist_2017': 'TextEdit', 'dist_2022': 'TextEdit', 'dist_2021': 'TextEdit', 'dist_2020': 'TextEdit', 'angle_mean': 'Range', 'angle_std': 'Range', 'Coastal change': 'TextEdit', });
lyr_Black_Sea_coastline_2017_2024_1.set('fieldLabels', {'year': 'inline label - always visible', 'name': 'no label', });
lyr_Coastline_change_rates_2.set('fieldLabels', {'rate_time': 'inline label - always visible', 'sig_time': 'no label', 'se_time': 'no label', 'outl_time': 'no label', 'dist_2019': 'no label', 'dist_2024': 'no label', 'dist_2023': 'no label', 'dist_2018': 'no label', 'dist_2017': 'no label', 'dist_2022': 'no label', 'dist_2021': 'no label', 'dist_2020': 'no label', 'angle_mean': 'no label', 'angle_std': 'no label', 'Coastal change': 'no label', });
lyr_Coastline_change_rates_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});