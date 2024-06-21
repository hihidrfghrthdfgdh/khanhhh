var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NHAMAY_1 = new ol.format.GeoJSON();
var features_NHAMAY_1 = format_NHAMAY_1.readFeatures(json_NHAMAY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHAMAY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHAMAY_1.addFeatures(features_NHAMAY_1);
var lyr_NHAMAY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHAMAY_1, 
                style: style_NHAMAY_1,
                popuplayertitle: "NHAMAY",
                interactive: true,
                title: '<img src="styles/legend/NHAMAY_1.png" /> NHAMAY'
            });
var format_MATNUOC_2 = new ol.format.GeoJSON();
var features_MATNUOC_2 = format_MATNUOC_2.readFeatures(json_MATNUOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MATNUOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MATNUOC_2.addFeatures(features_MATNUOC_2);
var lyr_MATNUOC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MATNUOC_2, 
                style: style_MATNUOC_2,
                popuplayertitle: "MATNUOC",
                interactive: true,
                title: '<img src="styles/legend/MATNUOC_2.png" /> MATNUOC'
            });
var format_CHUNGCU_3 = new ol.format.GeoJSON();
var features_CHUNGCU_3 = format_CHUNGCU_3.readFeatures(json_CHUNGCU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHUNGCU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHUNGCU_3.addFeatures(features_CHUNGCU_3);
var lyr_CHUNGCU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHUNGCU_3, 
                style: style_CHUNGCU_3,
                popuplayertitle: "CHUNGCU",
                interactive: true,
                title: '<img src="styles/legend/CHUNGCU_3.png" /> CHUNGCU'
            });
var format_HANHCHINH_4 = new ol.format.GeoJSON();
var features_HANHCHINH_4 = format_HANHCHINH_4.readFeatures(json_HANHCHINH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HANHCHINH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HANHCHINH_4.addFeatures(features_HANHCHINH_4);
var lyr_HANHCHINH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HANHCHINH_4, 
                style: style_HANHCHINH_4,
                popuplayertitle: "HANHCHINH",
                interactive: true,
                title: '<img src="styles/legend/HANHCHINH_4.png" /> HANHCHINH'
            });
var format_TTVH_5 = new ol.format.GeoJSON();
var features_TTVH_5 = format_TTVH_5.readFeatures(json_TTVH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTVH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTVH_5.addFeatures(features_TTVH_5);
var lyr_TTVH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTVH_5, 
                style: style_TTVH_5,
                popuplayertitle: "TTVH",
                interactive: true,
                title: '<img src="styles/legend/TTVH_5.png" /> TTVH'
            });
var format_CHO_6 = new ol.format.GeoJSON();
var features_CHO_6 = format_CHO_6.readFeatures(json_CHO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHO_6.addFeatures(features_CHO_6);
var lyr_CHO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHO_6, 
                style: style_CHO_6,
                popuplayertitle: "CHO",
                interactive: true,
                title: '<img src="styles/legend/CHO_6.png" /> CHO'
            });
var format_CAYXANG_7 = new ol.format.GeoJSON();
var features_CAYXANG_7 = format_CAYXANG_7.readFeatures(json_CAYXANG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANG_7.addFeatures(features_CAYXANG_7);
var lyr_CAYXANG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANG_7, 
                style: style_CAYXANG_7,
                popuplayertitle: "CAYXANG",
                interactive: true,
                title: '<img src="styles/legend/CAYXANG_7.png" /> CAYXANG'
            });
var format_BIETTHU_8 = new ol.format.GeoJSON();
var features_BIETTHU_8 = format_BIETTHU_8.readFeatures(json_BIETTHU_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIETTHU_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIETTHU_8.addFeatures(features_BIETTHU_8);
var lyr_BIETTHU_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIETTHU_8, 
                style: style_BIETTHU_8,
                popuplayertitle: "BIETTHU",
                interactive: true,
                title: '<img src="styles/legend/BIETTHU_8.png" /> BIETTHU'
            });
var format_TRUONGHOC_9 = new ol.format.GeoJSON();
var features_TRUONGHOC_9 = format_TRUONGHOC_9.readFeatures(json_TRUONGHOC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRUONGHOC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRUONGHOC_9.addFeatures(features_TRUONGHOC_9);
var lyr_TRUONGHOC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRUONGHOC_9, 
                style: style_TRUONGHOC_9,
                popuplayertitle: "TRUONGHOC",
                interactive: true,
                title: '<img src="styles/legend/TRUONGHOC_9.png" /> TRUONGHOC'
            });
var format_LIENKE_10 = new ol.format.GeoJSON();
var features_LIENKE_10 = format_LIENKE_10.readFeatures(json_LIENKE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIENKE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIENKE_10.addFeatures(features_LIENKE_10);
var lyr_LIENKE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIENKE_10, 
                style: style_LIENKE_10,
                popuplayertitle: "LIENKE",
                interactive: true,
                title: '<img src="styles/legend/LIENKE_10.png" /> LIENKE'
            });
var format_DUONG_11 = new ol.format.GeoJSON();
var features_DUONG_11 = format_DUONG_11.readFeatures(json_DUONG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUONG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUONG_11.addFeatures(features_DUONG_11);
var lyr_DUONG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUONG_11, 
                style: style_DUONG_11,
                popuplayertitle: "DUONG",
                interactive: true,
                title: '<img src="styles/legend/DUONG_11.png" /> DUONG'
            });
var format_CAYXANH_12 = new ol.format.GeoJSON();
var features_CAYXANH_12 = format_CAYXANH_12.readFeatures(json_CAYXANH_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANH_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANH_12.addFeatures(features_CAYXANH_12);
var lyr_CAYXANH_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANH_12, 
                style: style_CAYXANH_12,
                popuplayertitle: "CAYXANH",
                interactive: true,
                title: '<img src="styles/legend/CAYXANH_12.png" /> CAYXANH'
            });
var format_HLDIEN_13 = new ol.format.GeoJSON();
var features_HLDIEN_13 = format_HLDIEN_13.readFeatures(json_HLDIEN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLDIEN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLDIEN_13.addFeatures(features_HLDIEN_13);
var lyr_HLDIEN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HLDIEN_13, 
                style: style_HLDIEN_13,
                popuplayertitle: "HLDIEN",
                interactive: true,
                title: '<img src="styles/legend/HLDIEN_13.png" /> HLDIEN'
            });
var format_CONG_14 = new ol.format.GeoJSON();
var features_CONG_14 = format_CONG_14.readFeatures(json_CONG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONG_14.addFeatures(features_CONG_14);
var lyr_CONG_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONG_14, 
                style: style_CONG_14,
                popuplayertitle: "CONG",
                interactive: true,
                title: '<img src="styles/legend/CONG_14.png" /> CONG'
            });
var format_LUUVUC_15 = new ol.format.GeoJSON();
var features_LUUVUC_15 = format_LUUVUC_15.readFeatures(json_LUUVUC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUUVUC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUUVUC_15.addFeatures(features_LUUVUC_15);
var lyr_LUUVUC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUUVUC_15, 
                style: style_LUUVUC_15,
                popuplayertitle: "LUUVUC",
                interactive: true,
                title: '<img src="styles/legend/LUUVUC_15.png" /> LUUVUC'
            });
var format_HOGAA_16 = new ol.format.GeoJSON();
var features_HOGAA_16 = format_HOGAA_16.readFeatures(json_HOGAA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOGAA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOGAA_16.addFeatures(features_HOGAA_16);
var lyr_HOGAA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOGAA_16, 
                style: style_HOGAA_16,
                popuplayertitle: "HOGAA",
                interactive: true,
                title: '<img src="styles/legend/HOGAA_16.png" /> HOGAA'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_NHAMAY_1,lyr_MATNUOC_2,lyr_CHUNGCU_3,lyr_HANHCHINH_4,lyr_TTVH_5,lyr_CHO_6,lyr_CAYXANG_7,lyr_BIETTHU_8,lyr_TRUONGHOC_9,lyr_LIENKE_10,lyr_DUONG_11,lyr_CAYXANH_12,lyr_HLDIEN_13,lyr_CONG_14,lyr_LUUVUC_15,lyr_HOGAA_16,],
                                fold: "open",
                                title: "group1"});

lyr_GoogleSatellite_0.setVisible(true);lyr_NHAMAY_1.setVisible(true);lyr_MATNUOC_2.setVisible(true);lyr_CHUNGCU_3.setVisible(true);lyr_HANHCHINH_4.setVisible(true);lyr_TTVH_5.setVisible(true);lyr_CHO_6.setVisible(true);lyr_CAYXANG_7.setVisible(true);lyr_BIETTHU_8.setVisible(true);lyr_TRUONGHOC_9.setVisible(true);lyr_LIENKE_10.setVisible(true);lyr_DUONG_11.setVisible(true);lyr_CAYXANH_12.setVisible(true);lyr_HLDIEN_13.setVisible(true);lyr_CONG_14.setVisible(true);lyr_LUUVUC_15.setVisible(true);lyr_HOGAA_16.setVisible(true);
var layersList = [group_group1];
lyr_NHAMAY_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MATNUOC_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHUNGCU_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOCHUNGCU': 'DANSOCHUNGCU', });
lyr_HANHCHINH_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TTVH_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHO_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANG_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BIETTHU_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOBT': 'DANSOBT', });
lyr_TRUONGHOC_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LIENKE_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSO': 'DANSO', });
lyr_DUONG_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANH_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_HLDIEN_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CONG_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'D': 'D', 'DOC_I': 'DOC_I', 'Q_MUA': 'Q_MUA', 'Q_CONG': 'Q_CONG', 'V': 'V', 'H_D': 'H_D', 'H_D_20': 'H_D_20', });
lyr_LUUVUC_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_HOGAA_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NHAMAY_1.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_MATNUOC_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CHUNGCU_3.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'DANSOCHUNGCU': '', });
lyr_HANHCHINH_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TTVH_5.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CHO_6.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CAYXANG_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BIETTHU_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DANSOBT': 'TextEdit', });
lyr_TRUONGHOC_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LIENKE_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DANSO': 'TextEdit', });
lyr_DUONG_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CAYXANH_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_HLDIEN_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CONG_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'D': 'TextEdit', 'DOC_I': 'TextEdit', 'Q_MUA': 'TextEdit', 'Q_CONG': 'TextEdit', 'V': 'TextEdit', 'H_D': 'Range', 'H_D_20': 'TextEdit', });
lyr_LUUVUC_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_HOGAA_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_NHAMAY_1.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_MATNUOC_2.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CHUNGCU_3.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSOCHUNGCU': 'header label - always visible', });
lyr_HANHCHINH_4.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_TTVH_5.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CHO_6.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CAYXANG_7.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_BIETTHU_8.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSOBT': 'header label - always visible', });
lyr_TRUONGHOC_9.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_LIENKE_10.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSO': 'header label - always visible', });
lyr_DUONG_11.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CAYXANH_12.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_HLDIEN_13.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CONG_14.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'D': 'header label - visible with data', 'DOC_I': 'header label - visible with data', 'Q_MUA': 'header label - always visible', 'Q_CONG': 'header label - always visible', 'V': 'header label - always visible', 'H_D': 'header label - always visible', 'H_D_20': 'header label - always visible', });
lyr_LUUVUC_15.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SHAPE_Length': 'header label - visible with data', });
lyr_HOGAA_16.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - visible with data', });
lyr_HOGAA_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});