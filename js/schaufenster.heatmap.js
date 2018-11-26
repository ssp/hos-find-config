var url = 'http://openscience.hamburg.de/?eID=tile&provider=stamen&type=toner-lite&tile={z}/{x}/{y}{r}';

const attribution = 'Map tiles by <a title="Design by Stamen Design" href="https://stamen.com/maps/">Stamen Design</a>, CC BY 3.0';
var OSM_Tiles = L.tileLayer(url, {attribution: attribution});
var Esri_WorldImagery =  L.tileLayer(url, {attribution: attribution});

var myHeatMap = function(props) {
        var heatmapdata = Object.keys(props.facetData).map(function(latlng) {
                   return {
                        lat : latlng.split(",")[0],
                        lng : latlng.split(',')[1],
                        count : Math.sqrt(props.facetData[latlng]),
                        dist : 0
                  };
        });
        var useragent = navigator.userAgent;
        var container = $(props.container);
        var tileLayer = props.layer || Esri_WorldImagery;
        container.css("width", props.width);
        container.css("height", props.height || 200);
        var heatmapLayer = new HeatmapOverlay({
                "radius" : 0.004,
                "maxOpacity" : .7,
                "scaleRadius" : true,
                "useLocalExtrema" : false,
                latField : 'lat',
                lngField : 'lng',
                valueField : 'count'
        });

        var map = new L.Map(props.container, {
              layers : [tileLayer,heatmapLayer],
              maxZoom :12,
              minZoom :7,
              bounceAtZoomLimits: true,
              zoom :7,
              center :[53.53,10],
              dragging : false,
              touchZoom : false,
              zoomControl : props.zoomControl
        });
        setTimeout(function(){
        map.flyToBounds(L.latLngBounds(heatmapdata.map(function(p){
            return new L.latLng(p.lat,p.lng);
        })),{
              duration:2          
        });},500);
        if (props.circle) {
                map.on('click',function(e)  {
                        // looking for nearest point:
                        heatmapdata.forEach(function(item){
                            item.dist = map.distance({lat:item.lat,lng:item.lng},e.latlng);
                        });
                        heatmapdata.sort(function(a,b){return a.dist>b.dist});
                        var  nearestPoint = {
                          lat:heatmapdata[0].lat,
                          lng: heatmapdata[0].lng
                        };
                        var marker = L.marker(nearestPoint);
                        marker.addTo(map);
                        marker.bindTooltip("my tooltip text").openTooltip();
                        map.setView(nearestPoint,15);
                        var link ="/index.php?id=1&tx_find_find%5Bfacet%5D%5BGeolocation%5D%5B###NEEDLE###%5D=1&tx_find_find%5Bcontroller%5D=Search#tx_find";
                        link=link.replace('###NEEDLE###',encodeURI(nearestPoint.lat+','+nearestPoint.lng));
                        top.location=link;

                   //                   $.toast({message:"Suche im Umkreis " + nearestPoint.lat+','+nearestPoint.lng});
                });

        } else {
  //
        }
        heatmapLayer.setData({
                max : 4,
                data : heatmapdata
        });
        return map;
};

var tx_schaufenster_facetHeatmap = {
        initHeatmap : function(props) {
                var bigmap;
                        var minimapView = myHeatMap(props);
                        minimapView.on('click', function(e) {
                                var height = $(window).height()*0.85;
                                var width = $(window).width()*0.85
                                $.fancybox.open({
                                        src : '#largeheatmapcontainer',
                                        type : 'inline',
                                        touch: false,
                                        opts : {
                                                touch:false,
                                                width: width,
                                                height: height,
                                                overlayColor : '#200',
                                                showCloseButton : true,
                                                afterShow : function() {
                                                        props.container = $(".largeheatmap")[0];
                                                        props.height = height;
                                                        props.zoom = 12;
                                                        props.circle=true;
                                                        props.layer = OSM_Tiles;
                                                        props.zoomControl = true;
                                                        bigmap = myHeatMap(props);

                                            }
                                        }
                                });
                                $(".fancybox-content").css("padding",0);
                                   $.toast({message:"Klick auf Farbfläche startet Suche."});
                        });

                       function onClick(e) {
                               var latlng  = L.latLng(e.latlng);
                               var circle = L.circle(latlng, {
                                       color: 'blue',
                                       fillColor: '#30f',
                                       fillOpacity: 0.3,
                                       radius: 500
                               }).addTo(bigmap);
                               bigmap.setView(e.latlng,13);
                       }
                }
};


